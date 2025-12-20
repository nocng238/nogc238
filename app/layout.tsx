import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Noah - Portfolio',
  description: 'Welcome to Noah\'s portfolio website! Explore my projects, skills, and get in touch.',
  icons: {
    icon: '/logo-short.png',
  },
  openGraph: {
    title: 'Noah - Portfolio',
    description: 'Welcome to Noah Gc\'s portfolio website! Explore my projects, skills, and get in touch.',
    images: [
      {
        url: 'https://nogc238.blog/logo-short.png',
        width: 1200,
        height: 630,
        alt: 'Noah Portfolio Logo',
      },
    ],
    siteName: 'Noah Portfolio',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
