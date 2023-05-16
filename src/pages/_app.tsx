import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/userInfo.css";
import "@/styles/todoList.css";
import "@/styles/create.css";
import "@/styles/edit.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
