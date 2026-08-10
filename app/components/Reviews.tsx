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

function truncateParagraphs(paragraphs: string[], maxWords: number) {
  let remainingWords = maxWords;
  const truncated: string[] = [];

  for (const paragraph of paragraphs) {
    if (remainingWords <= 0) break;

    const words = paragraph.split(/\s+/);
    const visibleWords = words.slice(0, remainingWords);

    truncated.push(visibleWords.join(" "));
    remainingWords -= visibleWords.length;
  }

  if (truncated.length > 0) {
    const lastParagraph = truncated.length - 1;
    truncated[lastParagraph] = `${truncated[lastParagraph]}...`;
  }

  return truncated;
}

export default function Reviews({ reviews }: ReviewsProps) {
  const [expandedReview, setExpandedReview] = useState<string | null>(null);

  return (
    <div className="container mx-auto mt-12 grid gap-6 px-4 md:grid-cols-3">
      {reviews.map((review) => {
        const paragraphs = (review.quote ?? "")
          .trim()
          .split(/\n\s*\n/)
          .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
          .filter(Boolean);
        const count = 90;
        const wordCount = paragraphs.reduce(
          (total, paragraph) => total + paragraph.split(/\s+/).length,
          0,
        );
        const isLong = wordCount > count;
        const isExpanded = expandedReview === review.name;

        const displayedParagraphs =
          isLong && !isExpanded
            ? truncateParagraphs(paragraphs, count)
            : paragraphs;

        return (
          <blockquote
            key={review.name}
            className="flex flex-col border-t-2 border-yellow bg-surface px-6 py-8"
          >
            <div className="flex-1 text-[0.95rem] leading-relaxed text-foreground/80">
              {displayedParagraphs.map((paragraph, index) => {
                const isFirstParagraph = index === 0;
                const isLastParagraph = index === displayedParagraphs.length - 1;

                return (
                  <p key={index} className={isFirstParagraph ? undefined : "mt-4"}>
                    {isFirstParagraph && (
                      <span className="text-3xl font-bold leading-[0] text-yellow">
                        “{" "}
                      </span>
                    )}
                    {paragraph}
                    {isLastParagraph && (
                      <>
                        <span className="relative top-2 text-3xl font-bold leading-[0] text-yellow">
                          ”
                        </span>

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
                      </>
                    )}
                  </p>
                );
              })}
            </div>

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
