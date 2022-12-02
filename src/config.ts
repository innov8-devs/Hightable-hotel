import { ApolloClient, InMemoryCache } from '@apollo/client';

export const config = {
  baseUri: process.env.NEXT_PUBLIC_GATEWAY_URI || '',
  bugsnagApiKey: process.env.NEXT_PUBLIC_BUGSNAG_API_KEY || '',
};

export const client = new ApolloClient({
  uri: config.baseUri,
  cache: new InMemoryCache(),
});
