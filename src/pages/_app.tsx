import { CookiesProvider } from "react-cookie";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import Layout from "@/components/Layout";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <main className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </CookiesProvider>
  );
}
