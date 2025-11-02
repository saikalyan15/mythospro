import { NextResponse } from 'next/server';

const allowedEnvironments = new Set(['test_mode', 'live_mode']);

function resolveEnvironment() {
  const value = process.env.DODO_PAYMENTS_ENVIRONMENT;
  if (value && allowedEnvironments.has(value)) return value;
  return 'live_mode';
}

async function getClient() {
  const raw = await import('dodopayments');
  const DodoPayments = raw.default ?? raw;
  const bearerToken = process.env.DODO_API_KEY;
  if (!bearerToken) {
    throw new Error('DODO_API_KEY is not configured');
  }
  return new DodoPayments({
    bearerToken,
    environment: resolveEnvironment(),
  });
}

export async function GET(req) {
  const url = new URL(req.url);
  let customerId = url.searchParams.get('customer_id');
  const subscriptionId = url.searchParams.get('subscription_id');
  const sendEmailParam = url.searchParams.get('send_email');
  const sendEmail = sendEmailParam === '1' || sendEmailParam === 'true';

  if (!customerId && !subscriptionId) {
    return NextResponse.json(
      { error: 'customer_id or subscription_id is required' },
      { status: 400 },
    );
  }

  try {
    const client = await getClient();

    if (!customerId && subscriptionId) {
      try {
        const subscription = await client.subscriptions.retrieve(subscriptionId);
        customerId =
          subscription?.customer?.id ||
          subscription?.customer_id ||
          subscription?.customerId ||
          subscription?.customer?.customer_id ||
          subscription?.customer?.customerId ||
          null;
      } catch (err) {
        console.error('failed to fetch subscription for portal', err);
        return NextResponse.json(
          { error: 'subscription_lookup_failed', message: err?.message || String(err) },
          { status: 502 },
        );
      }
    }

    if (!customerId) {
      return NextResponse.json(
        { error: 'customer_not_found' },
        { status: 404 },
      );
    }

    const session = await client.customers.customerPortal.create(customerId, {
      send_email: !!sendEmail,
    });

    const destination = session?.link;
    if (!destination) {
      return NextResponse.json(
        { error: 'portal_link_unavailable' },
        { status: 502 },
      );
    }

    return NextResponse.redirect(destination);
  } catch (error) {
    console.error('customer portal creation failed', error);
    const message =
      error?.message ||
      (typeof error === 'string' ? error : 'Failed to create customer portal session');
    return NextResponse.json(
      { error: 'portal_creation_failed', message },
      { status: 502 },
    );
  }
}
