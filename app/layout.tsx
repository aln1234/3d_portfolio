import Navbar from "@/components/Navbar";
import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "@/components/Footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albin Lamichhane",
  description:
    "I’m a Front-End Developer with a strong interest in Data Science. I have background in 3D animation and digital media. With my technical expertise and creative vision, I boost web traffic, user engagement, and conversion rates. I combine data analysis with front-end development to create innovative, data-driven solutions that are both visually appealing and effective. I’m an expert in using data science to build user- friendly solutions that deliver measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900">
      <head>
        <link rel="icon" href="/logo_2.png" sizes="any" />
      </head>
      <body className={clsx(urbanist.className, "relative")}>
        <Navbar />
        {children}
        <div className="background-gradient fixed inset-0 -z-50 h-screen w-screen" />
        <div className="pointer-events-none fixed inset-0 -z-40 h-screen w-screen bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
      </body>
    </html>
  );
}
