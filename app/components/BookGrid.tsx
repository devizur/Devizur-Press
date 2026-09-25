import Image from "next/image";
import { Button } from "./Button";
import { siteConfig } from "../lib/site";

const { author, book, sqlBook, fullStackLife } = siteConfig;

type BookGridProps = {
  className?: string;
};

export function BookGrid({ className = "" }: BookGridProps) {
  return (
    <div className={`grid gap-6 lg:grid-cols-3 ${className}`}>
      {/* Full Stack Life */}
      <article className="flex flex-col rounded-md bg-inverse-bg p-8 text-inverse-fg">
        <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-sm border border-inverse-fg/10 px-6 text-center">
          <span className="rounded-sm bg-yellow px-2.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
            Coming soon
          </span>
          <p className="mt-5 text-3xl font-extrabold tracking-tight">
            {fullStackLife.title}
          </p>
        </div>
        <h3 className="mt-8 text-xl font-bold tracking-tight">
          {fullStackLife.title}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-inverse-fg/70">
          {fullStackLife.subtitle}
        </p>
        <div className="mt-8">
          <Button href="/#full-stack-life">Discover Full Stack Life</Button>
        </div>
      </article>

      {/* Decision System */}
      <article className="flex flex-col rounded-md border border-border bg-surface p-8">
        <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-subtle p-4">
          <Image
            src="/images/book-3d.png"
            alt={`${book.title} book by ${author.name}`}
            width={900}
            height={1100}
            className="h-full w-auto drop-shadow-xl"
            sizes="240px"
          />
        </div>
        <h3 className="mt-8 text-xl font-bold tracking-tight">{book.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">{book.subtitle}</p>
        <div className="mt-8">
          <Button href="/decision-system" variant="dark">
            Explore Decision System
          </Button>
        </div>
      </article>

      {/* SQL */}
      <article className="flex flex-col rounded-md border border-border bg-surface p-8">
        <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-subtle p-6">
          <Image
            src="/images/sqlbook.jpg"
            alt={`${sqlBook.title} book cover`}
            width={298}
            height={385}
            className="h-full w-auto rounded-r-sm shadow-xl"
            sizes="200px"
          />
        </div>
        <h3 className="mt-8 flex flex-wrap items-center gap-3 text-xl font-bold tracking-tight">
          {sqlBook.title}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">
          His first book ({sqlBook.year}): a practical introduction to SQL
          and relational database design.
        </p>
        <div className="mt-8">
          <Button href={sqlBook.url} variant="secondary" external>
            Explore the Book
          </Button>
        </div>
      </article>
    </div>
  );
}
