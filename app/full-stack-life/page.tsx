import type { Metadata } from "next";
import { ComingSoon } from "../components/ComingSoon";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: siteConfig.fullStackLife.title,
  description: `${siteConfig.fullStackLife.title}: ${siteConfig.fullStackLife.subtitle}. A new book by ${siteConfig.author.name}, coming soon.`,
  alternates: { canonical: "/full-stack-life" },
};

// Placeholder until the dedicated page (full five-layer explanation) is ready.
export default function FullStackLifePage() {
  return (
    <ComingSoon
      title={siteConfig.fullStackLife.title}
      description={`${siteConfig.fullStackLife.subtitle}. The full guide to the five layers—${siteConfig.fullStackLife.layers.join(", ")}—is coming soon.`}
    />
  );
}
