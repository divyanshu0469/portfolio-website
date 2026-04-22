import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "motion/react";
import Head from "next/head";
import Nav from "@/components/Nav";

const BASE_URL = "https://divyanshu-yadav.vercel.app";

export default function App({ Component, router, pageProps }: AppProps) {
  const currentUrl = `${BASE_URL}${router.asPath}`;

  return (
    <>
      <Head>
        <title>Divyanshu Yadav | Creative Developer</title>
        <meta
          name="description"
          content="Divyanshu Yadav — Creative Developer based in Gurgaon, India. Building web experiences with React, Next.js, and TypeScript."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content="Divyanshu Yadav | Creative Developer" />
        <meta
          property="og:description"
          content="Creative Developer based in Gurgaon, India. Building web experiences with React, Next.js, and TypeScript."
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Divyanshu Yadav" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Divyanshu Yadav | Creative Developer" />
        <meta
          name="twitter:description"
          content="Creative Developer based in Gurgaon, India. Building web experiences with React, Next.js, and TypeScript."
        />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Divyanshu Yadav",
              url: BASE_URL,
              jobTitle: "Creative Developer",
              worksFor: {
                "@type": "Organization",
                name: "Doxper",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gurgaon",
                addressCountry: "IN",
              },
              sameAs: [
                "https://github.com/divyanshu0469",
                "https://linkedin.com/in/divyyanshu31",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Chitkara University",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "Django",
                "React Native",
              ],
            }),
          }}
        />
      </Head>
      <div className="page">
        <AnimatePresence mode="wait">
          <div>
            <Nav />
            <Component key={router.route} {...pageProps} />
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}
