import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

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
  title: `${portfolio.name} | Senior Full Stack Engineer & Technical Lead`,
  description: portfolio.metaDescription,
  applicationName: portfolio.name,
  publisher: portfolio.name,
  keywords: [
    "Sumit Pramanik",
    "Senior Full Stack Engineer",
    "Technical Lead",
    "Frontend Architect",
    "React.js",
    "React Native",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Cross-Platform Mobile Architecture",
    "Performance Optimization",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: `${portfolio.name} | Senior Full Stack Engineer & Technical Lead`,
    description: portfolio.metaDescription,
    siteName: portfolio.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolio.name}, Senior Full Stack Engineer & Technical Lead`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | Senior Full Stack Engineer & Technical Lead`,
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
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "Architecture",
      "Mobile Engineering",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syneDisplay.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#080709] text-[#f4f2f4] antialiased selection:bg-[#ff1a53] selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
