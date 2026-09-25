import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Analytics } from "./components/Analytics";
import { BackToTop } from "./components/BackToTop";
import { ThemeProvider } from "./components/ThemeProvider";
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
    default: `${siteConfig.author.name} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.author.name}`,
  },
  description:
    "Hafiz Rahman writes about systems thinking for better decisions, better organizations, and better lives. Author of Full Stack Life, Decision System, and Solving Business Problems Using SQL.",
  keywords: [
    "Hafiz Rahman",
    "Full Stack Life",
    "Decision System",
    "systems thinking",
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
    title: `${siteConfig.author.name} | ${siteConfig.name}`,
    description: siteConfig.author.positioning,
    images: [
      {
        url: "/images/author.png",
        width: 680,
        height: 850,
        alt: "Hafiz Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.author.name} | ${siteConfig.name}`,
    description: siteConfig.author.positioning,
    images: ["/images/author.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/logo-yellow-bg.png",
    shortcut: "/images/logo-yellow-bg.png",
    apple: "/images/logo-yellow-bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("devizur-theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col font-sans text-foreground bg-background"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Analytics />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
