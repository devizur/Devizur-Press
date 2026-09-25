import type { Metadata } from "next";
import { BookGrid } from "../components/BookGrid";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books by Hafiz Rahman: Full Stack Life (coming soon), Decision System, and Solving Business Problems Using SQL.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="books-heading"
    >
      <div className="pointer-events-none absolute inset-0 hero-gradient" aria-hidden />
      <div className="relative container mx-auto px-4 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Books
          </p>
          <h1
            id="books-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            The books
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Publishing since {siteConfig.sqlBook.year}. From the foundations of
            data, to the systems behind organizational decisions, to the hidden
            systems behind the problems in our lives.
          </p>
        </div>

        <BookGrid className="mt-12" />
      </div>
    </section>
  );
}
