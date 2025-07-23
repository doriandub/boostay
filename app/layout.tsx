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
  title: 'BOOSTAY — Luxury Hotel Social Media PR Solutions',
  description:
    'The next generation of PR — powered by data, elevated by technology, and brought to life through authentic social storytelling.',
  openGraph: {
    title: 'BOOSTAY — Luxury Hotel Social Media PR Solutions',
    description:
      'The next generation of PR — powered by data, elevated by technology, and brought to life through authentic social storytelling.',
    url: 'https://boostay.com',
    siteName: 'BOOSTAY',
    images: [
      {
        url: '/images/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'BOOSTAY — Luxury Hotel Social Media PR Solutions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOOSTAY — Luxury Hotel Social Media PR Solutions',
    description:
      'The next generation of PR — powered by data, elevated by technology, and brought to life through authentic social storytelling.',
    images: ['/images/og-preview.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

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
