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
  const customerId = url.searchParams.get('customer_id');
  const sendEmailParam = url.searchParams.get('send_email');
  const sendEmail = sendEmailParam === '1' || sendEmailParam === 'true';

  if (!customerId) {
    return NextResponse.json(
      { error: 'customer_id is required' },
      { status: 400 },
    );
  }

  try {
    const client = await getClient();
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
