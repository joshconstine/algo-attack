import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Link from "next/link";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-4">
        <div className="mr-6 flex flex-shrink-0 items-center text-white">
          <span className="text-xl font-semibold tracking-tight">
            Algo Attack
          </span>
        </div>
        <Link href="/">
          <span className="text-white">Home</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
