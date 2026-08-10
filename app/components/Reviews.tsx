"use client";

import { useState } from "react";

type Review = {
  name: string | null;
  title: string | null;
  company: string | null;
  quote: string | null;
};

type ReviewsProps = {
  reviews: readonly Review[];
};

export default function Reviews({ reviews }: ReviewsProps) {
  const [expandedReview, setExpandedReview] = useState<string | null>(null);

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3 container mx-auto px-4 ">
      {reviews.map((review) => {
        const words = review.quote?.trim().split(/\s+/);
        const count = 80;
        const isLong = words && words.length > count;
        const isExpanded = expandedReview === review.name;

        const displayedQuote =
          isLong && !isExpanded
            ? `${words.slice(0, count).join(" ")}...`
            : review.quote;

        return (
          <blockquote
            key={review.name}
            className="flex flex-col border-t-2 border-yellow bg-surface px-6 py-8"
          >
            <p className="flex-1 text-[0.95rem] leading-relaxed text-foreground/80">
              “{displayedQuote}”

              {isLong && (
                <button
                  type="button"
                  onClick={() =>
                    setExpandedReview(isExpanded ? null : review.name)
                  }
                  className="ml-2 font-semibold text-yellow underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {isExpanded ? "Less" : "More"}
                </button>
              )}
            </p>

            <footer className="mt-8 border-t border-border pt-5">
              <cite className="not-italic">
                <span className="block font-semibold text-foreground">
                  {review.name}
                </span>

                <span className="mt-1 block text-sm text-muted">
                  {review.title}
                  <br />
                  {review.company}
                </span>
              </cite>
            </footer>
          </blockquote>
        );
      })}
    </div>
  );
}