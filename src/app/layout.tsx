import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
  display: "swap",
});

const caveatFont = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
  weight: ["400", "700"],
});

const syneDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sumit Pramanik | Full Stack Engineer | Node.js, React.js & AI",
  description:
    "Full Stack Engineer with 8+ years of experience building scalable web, mobile and backend applications using Node.js, React.js, React Native and Next.js. Focused on AI/GenAI application development and intelligent software experiences.",
  applicationName: portfolio.name,
  publisher: portfolio.name,
  keywords: [
    "Sumit Pramanik",
    "Full Stack Engineer",
    "Node.js",
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "AI / GenAI Application Development",
    "LLM API Integration",
    "RAG Architecture",
    "MongoDB",
    "RESTful API Design",
    "Cross-Platform Mobile Engineering",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "Sumit Pramanik | Full Stack Engineer | Node.js, React.js & AI",
    description:
      "Full Stack Engineer with 8+ years of experience building scalable web, mobile and backend applications using Node.js, React.js, React Native and Next.js. Focused on AI/GenAI application development.",
    siteName: portfolio.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolio.name}, Full Stack Engineer (Node.js, React.js) | AI / GenAI`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Pramanik | Full Stack Engineer | Node.js, React.js & AI",
    description:
      "Full Stack Engineer with 8+ years of experience building scalable web, mobile and backend applications using Node.js, React.js, React Native and Next.js.",
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: portfolio.education.institution,
    },
    knowsAbout: [
      "Node.js",
      "Express.js",
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "REST APIs",
      "AI / GenAI Application Development",
      "LLM API Integration",
      "RAG Architecture",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolio.name} Portfolio`,
    url: siteUrl,
    description:
      "Full Stack Engineer with 8+ years of experience building scalable web, mobile and backend applications using Node.js, React.js, React Native and Next.js.",
    author: {
      "@type": "Person",
      name: portfolio.name,
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${caveatFont.variable} ${syneDisplay.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#080709] text-[#f4f2f4] antialiased selection:bg-[#ff1a53] selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
