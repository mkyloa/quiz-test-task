import store from '@/store/store';
import { Metadata, NextPage } from 'next';
import { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google'
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

export const metadata: Metadata = {
  title: "Nebula Quiz",
  description: "Test task for OBRIO",
};

const openSans = Open_Sans({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};
