import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Link from "next/link";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeSwitcher } from "../components/ThemeSwitcher";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <nav className="flex flex-wrap items-center  bg-teal-500 p-4">
          <div className="mr-6 flex flex-shrink-0 items-center">
            <span className="text-xl font-semibold tracking-tight">
              Algo Attack
            </span>
          </div>
          <ThemeSwitcher />
          <Link href="/">
            <span>Home</span>
          </Link>
        </nav>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
