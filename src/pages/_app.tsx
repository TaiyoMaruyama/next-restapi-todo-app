import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/userInfo.css";
import "@/styles/todoList.css";
import "@/styles/create.css";
import "@/styles/edit.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import StartPage from "@/Components/start/start";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
