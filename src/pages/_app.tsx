import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/userInfo.css";
import "@/styles/todoList.css";
import "@/styles/create.css";
import "@/styles/edit.css";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { CircularProgress } from "@mui/material";

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
