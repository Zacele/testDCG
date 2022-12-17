import {CacheProvider, EmotionCache} from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import AppContextProvider from "../context";
import {AppProps} from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface TestDCGAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function TestDCGApp(props: TestDCGAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <title>Testing app for DCG</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <CssBaseline/>
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}