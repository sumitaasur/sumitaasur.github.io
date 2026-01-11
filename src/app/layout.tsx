import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Kapil Kumawat - Portfolio",
  description:
    "Welcome to the portfolio of Kapil Kumawat. Explore my work in web design, frontend development, ReactJS, NextJS, and Figma.",
  publisher: "Kapil Kumawat",
  keywords:
    "Kapil Kumawat, portfolio, web design, frontend development, ReactJS, NextJS, Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  2;
  return (
    <html lang="en" className="dark">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
