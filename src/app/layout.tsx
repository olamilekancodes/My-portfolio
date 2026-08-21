import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Olamilekan Akanni | Portfolio",
  description: "Software Engineer",
  icons: "/favicon.ico",
  openGraph: {
    title: "Olamilekan Akanni | Portfolio",
    description: "Software Engineer",
    url: "https://olamilekanakanni.vercel.app/",
    siteName: "Olamilekan Akanni's Portfolio",
    images: [
      {
        url: "https://olamilekanakanni.vercel.app/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olamilekan Akanni's photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olamilekan Akanni | Portfolio",
    description: "Software Engineer",
    images: ["https://olamilekanakanni.vercel.app/meta-image.jpg"],
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
        className={`${poppins.variable} antialiased bg-[#fff] min-h-screen flex flex-col`}
      >
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}
