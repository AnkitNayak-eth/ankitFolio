import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from "@/sections/Header";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ankit Kumar Nayak | Full-Stack Developer & Web3 Enthusiast",
  description:
    "A passionate full-stack developer specializing in React.js, MERN stack, and mobile app development with React Native. Exploring the realms of Web3, NFTs, and digital arts. Let’s build the future together!",
  openGraph: {
    title: "Ankit Kumar Nayak | Full-Stack Developer",
    description:
      "A full-stack developer specializing in React.js, MERN stack, and mobile app development. Exploring Web3, NFTs, and digital arts.",
    url: "https://ankit-nayak.vercel.app",
    siteName: "Ankit Kumar Nayak Portfolio",
    images: [
      {
        url: "images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Kumar Nayak Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Kumar Nayak | Full-Stack Developer",
    description:
      "A passionate full-stack developer with expertise in React.js, Web3, and mobile app development.",
    images: ["images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ankit-nayak.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ankit Kumar Nayak",
              jobTitle: "Full-Stack Developer",
              url: "https://ankit-nayak.vercel.app/",
              sameAs: [
                "https://linkedin.com/in/ankitnayaketh",
                "https://github.com/AnkitNayak-eth",
              ],
            }),
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-950 text-white antialiased font-sans"
        )}
      >
        <NextTopLoader />
        <Header />
        {children}
      </body>
    </html>
  );
}
