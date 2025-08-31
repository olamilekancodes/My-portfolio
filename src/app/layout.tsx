import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Toaster } from "sonner";
import NavBar from "./components/nav";
import FooterModule from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Olamilekan Akanni's Portfolio",
  description: "Welcome to my portfolio",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#fff]`}>
        <Toaster position="top-right" richColors />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <FooterModule />
      </body>
    </html>
  );
}
