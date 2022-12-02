export const config = {
  baseUri: process.env.NEXT_PUBLIC_BUGSNAG_URI  || '',
  bugsnagApiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY || '',
  BASE_URL: process.env.NEXT_PUBLIC_GATEWAY_URL || 'https://gateway-dev.hightable.africa',
};
