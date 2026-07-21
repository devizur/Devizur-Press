import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Analytics } from "./components/Analytics";
import { siteConfig } from "./lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.book.title} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Decision System is a practical field guide for leaders who want to turn scattered, contested data into decisions that create measurable business outcomes. From Devizur Press.",
  keywords: [
    "Decision System",
    "Hafiz Rahman",
    "Devizur Press",
    "data-driven decisions",
    "executive leadership",
    "data trust",
    "business analytics",
  ],
  authors: [{ name: siteConfig.book.author }],
  creator: siteConfig.book.author,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.book.title} | ${siteConfig.name}`,
    description:
      "How companies turn trusted data into decisions that change outcomes. A practical field guide for executives and data leaders.",
    images: [
      {
        url: "/images/book-3d.png",
        width: 1200,
        height: 630,
        alt: "Decision System book by Hafiz Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.book.title} | ${siteConfig.name}`,
    description:
      "How companies turn trusted data into decisions that change outcomes.",
    images: ["/images/book-3d.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
