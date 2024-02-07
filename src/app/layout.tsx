import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import ActiveSectionContext from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhsin A Nissar",
  description:
    "Muhsin Abdul Nissar - Full Stack - Mern Stack Developer - Portfolio",
  keywords: [
    "Muhsin",
    "Abdul",
    "Nissar",
    "NextJs",
    "React",
    "MERN",
    "Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 pt-28 text-gray-950 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 size-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 size-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContext>
          <Navbar />
          {children}
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContext>
      </body>
    </html>
  );
}
