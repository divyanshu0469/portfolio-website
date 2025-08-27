import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "motion/react";
import Nav from "@/components/Nav";

export default function App({ Component, router, pageProps }: AppProps) {
  return (
    <div className="page">
      <AnimatePresence mode="wait">
        <div>
          <Nav />
          <Component key={router.route} {...pageProps} />
        </div>
      </AnimatePresence>
    </div>
  );
}
