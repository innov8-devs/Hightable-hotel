import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import store, { persistor } from '../redux/store';
import { Provider } from 'react-redux';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import { PersistGate } from 'redux-persist/integration/react';
import { client, config } from '../config';
import React from 'react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';

Bugsnag.start({
  apiKey: config.bugsnagApiKey,
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin('react')!.createErrorBoundary(React);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel=" icon" href="./Subtract.svg" />
        <title>Input App Title Here</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <ApolloProvider client={client}>
              <BaseLayout>
                <Component {...pageProps} />
              </BaseLayout>
            </ApolloProvider>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
