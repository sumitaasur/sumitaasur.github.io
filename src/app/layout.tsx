import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const displayFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const bodyFont = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolio.name} | ${portfolio.title}`,
  description: portfolio.metaDescription,
  applicationName: portfolio.name,
  publisher: portfolio.name,
  keywords: ["Sumit Pramanik", "Senior Frontend Engineer", "Frontend Developer", "Frontend Architecture", "Technical Leadership", "React Developer", "React.js Developer", "React Native Developer", "Next.js Developer", "TypeScript", "JavaScript", "Web Development", "Mobile Development", "Cross-Platform Development"],
  openGraph: {
    type: "website",
    url: "/",
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.metaDescription,
    siteName: portfolio.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${portfolio.name}, ${portfolio.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | ${portfolio.title}`,
    description: portfolio.metaDescription,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.title,
    description: portfolio.summary,
    telephone: portfolio.phone,
    email: portfolio.email,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: portfolio.education.institution,
    },
    knowsAbout: ["JavaScript", "React.js", "React Native", "Next.js"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
