import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//
import Navigation from "@/layout/Navigation";
import Header from "@/layout/Header";
import TopLeftImg from "@/layout/TopLeftImg";
//
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian' website",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white relative`}>
        <TopLeftImg />
        <Navigation />
        <Header />
        {children}
      </body>
    </html>
  );
}
