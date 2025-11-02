import { CustomerPortal } from '@dodopayments/nextjs';

const allowedEnvironments = new Set(['test_mode', 'live_mode']);
const requestedEnvironment = process.env.DODO_PAYMENTS_ENVIRONMENT;
const environment = allowedEnvironments.has(requestedEnvironment)
  ? requestedEnvironment
  : 'live_mode';

const bearerToken = process.env.DODO_API_KEY;

if (!bearerToken) {
  throw new Error('DODO_API_KEY is not configured');
}

export const GET = CustomerPortal({
  bearerToken,
  environment,
});
