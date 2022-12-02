import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import NextNProgress from 'nextjs-progressbar';
import { config } from '../config';
import Client from '../apolloClient';
import React from 'react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';

// Bugsnag.start({
//   apiKey: config.bugsnagApiKey,
//   plugins: [new BugsnagPluginReact()],
// });

// const ErrorBoundary = Bugsnag.getPlugin('react')!.createErrorBoundary(React);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel=" icon" href="./Subtract.svg" />
        <title>Input App Title Here</title>
      </Head>
      {/* <ErrorBoundary> */}
      <ApolloProvider client={Client}>
        <NextNProgress color="#FF9916" height={5} />
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ApolloProvider>
      {/* </ErrorBoundary> */}
    </>
  );
}

export default MyApp;
