import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="description" content="To-do list app" />
        <title>To-do</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
