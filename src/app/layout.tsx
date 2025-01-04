import type { Metadata } from "next";
import {Inter, Calistoga} from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { twMerge } from "tailwind-merge";

const inter = Inter({subsets:["latin"],variable:"--font-sans"});
const calistoga = Calistoga({subsets:["latin"],variable:"--font-serif",weight:["400"]});
export const metadata: Metadata = {
  title: "Ankit Kumar Nayak | Full-Stack Developer & Web3 Enthusiast",
  description: "A passionate full-stack developer specializing in React.js, MERN stack, and mobile app development with React Native. Exploring the realms of Web3, NFTs, and digital arts. Let’s build the future together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="uNZSE8Lj4QXGOuj8CIvaCnjeR4Rb_9hmWyw-Qkjsrug" />
        <meta name="title" content={String(metadata.title) ?? ""} />
        <meta name="description" content={metadata.description ?? ""} />
      </Head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-950 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
