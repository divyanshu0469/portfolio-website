import "@/styles/globals.css";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "motion/react";
import Nav from "@/components/Nav";

export default function App({ Component, router, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Nav />
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}
