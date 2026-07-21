import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "../components/Button";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Sample Chapter",
  description:
    "Read a free sample chapter from Decision System by Hafiz Rahman. Coming soon.",
  robots: { index: false },
};

export default function SampleChapterPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Coming soon
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Sample Chapter
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted">
        A free excerpt from{" "}
        <span className="font-medium text-foreground">
          {siteConfig.book.title}
        </span>{" "}
        will be available here shortly. In the meantime, you can get the full
        book on Amazon.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href={siteConfig.amazon.ebook} external>
          Buy on Amazon
        </Button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-subtle"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
