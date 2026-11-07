import type { Metadata } from "next";
import { Bebas_Neue, Caveat, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
  display: "swap",
});

const caveatFont = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

const syneDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumitaasur.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sumit Pramanik | Full Stack Engineer – Node.js, React.js & AI",
    template: "%s | Sumit Pramanik",
  },
  description:
    "Explore the portfolio of Sumit Pramanik, a Full Stack Engineer with 8+ years of experience building scalable web and mobile applications using Node.js, React.js, Next.js, React Native and AI/GenAI technologies.",
  applicationName: "Sumit Pramanik Portfolio",
  publisher: "Sumit Pramanik",
  authors: [{ name: "Sumit Pramanik", url: siteUrl }],
  creator: "Sumit Pramanik",
  keywords: [
    "Sumit Pramanik",
    "Sumit Pramanik Full Stack Engineer",
    "Sumit Pramanik Full Stack Developer",
    "Full Stack Developer India",
    "Node.js Developer India",
    "React.js Developer India",
    "React Native Developer India",
    "Next.js Developer India",
    "AI Application Developer",
    "Generative AI Developer",
    "MERN Stack Developer",
    "Node.js",
    "Express.js",
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "RESTful API Design",
    "AI / GenAI Application Development",
    "RAG Architecture",
    "LLM API Integration",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Sumit Pramanik | Full Stack Engineer – Node.js, React.js & AI",
    description:
      "Explore the portfolio of Sumit Pramanik, a Full Stack Engineer with 8+ years of experience building scalable web and mobile applications using Node.js, React.js, Next.js, React Native and AI/GenAI technologies.",
    siteName: "Sumit Pramanik Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sumit Pramanik | Full Stack Engineer – Node.js, React.js & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Pramanik | Full Stack Engineer – Node.js, React.js & AI",
    description:
      "Explore the portfolio of Sumit Pramanik, a Full Stack Engineer with 8+ years of experience building scalable web and mobile applications using Node.js, React.js, Next.js, React Native and AI/GenAI technologies.",
    images: ["/opengraph-image"],
    creator: "@sumitaasur",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Sumit Pramanik",
    givenName: "Sumit",
    familyName: "Pramanik",
    alternateName: ["Sumit", "sumitaasur"],
    url: siteUrl,
    image: `${siteUrl}/images/sumit-portrait.png`,
    jobTitle: "Full Stack Engineer",
    description:
      "Explore the portfolio of Sumit Pramanik, a Full Stack Engineer with 8+ years of experience building scalable web and mobile applications using Node.js, React.js, Next.js, React Native and AI/GenAI technologies.",
    email: portfolio.email,
    telephone: portfolio.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
    sameAs: [
      portfolio.linkedinUrl,
      portfolio.githubUrl,
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: portfolio.education.institution,
    },
    knowsAbout: [
      "Full Stack Engineering",
      "Node.js",
      "Express.js",
      "React.js",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "MySQL",
      "RESTful API Design",
      "AI / GenAI Application Development",
      "LLM API Integration",
      "RAG Architecture",
      "Prompt Engineering",
      "Three.js WebGL",
      "Cross-Platform Mobile Engineering",
      "Performance Optimization",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Sumit Pramanik Portfolio",
    description:
      "Explore the portfolio of Sumit Pramanik, a Full Stack Engineer with 8+ years of experience building scalable web and mobile applications using Node.js, React.js, Next.js, React Native and AI/GenAI technologies.",
    author: {
      "@id": `${siteUrl}/#person`,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile`,
    url: siteUrl,
    name: "Sumit Pramanik | Full Stack Engineer – Node.js, React.js & AI",
    description:
      "Explore the portfolio of Sumit Pramanik, a Full Stack Engineer with 8+ years of experience building scalable web and mobile applications using Node.js, React.js, Next.js, React Native and AI/GenAI technologies.",
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#080709" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${bebasNeue.variable} ${caveatFont.variable} ${syneDisplay.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#080709] text-[#ffffff] antialiased selection:bg-[#ff174d] selection:text-white`}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
