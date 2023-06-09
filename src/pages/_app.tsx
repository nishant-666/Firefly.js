import "src/sass/globals.scss";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { AppType } from "next/app";
import { trpc } from "src/utils/trpc";

const App: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
