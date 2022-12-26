import { Layout } from '@platform/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to application!</title>
      </Head>
      <main className="container">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
