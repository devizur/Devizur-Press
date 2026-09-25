import Image from "next/image";
import { Button } from "./Button";
import { siteConfig } from "../lib/site";

const { author, book, sqlBook, fullStackLife } = siteConfig;

// Every card uses the same frame and cover size so the books line up.
const frame =
  "flex h-64 items-center justify-center rounded-sm bg-subtle p-6";
const cover = "relative h-full aspect-[298/385] overflow-hidden rounded-r-sm";

type BookGridProps = {
  className?: string;
};

export function BookGrid({ className = "" }: BookGridProps) {
  return (
    <div className={`grid gap-6 lg:grid-cols-3 ${className}`}>
      {/* Full Stack Life */}
      <article className="flex flex-col rounded-md border border-border bg-surface p-8">
        <div className={`relative ${frame}`}>
          <span className="absolute right-3 top-3 rounded-sm bg-yellow px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black">
            Coming soon
          </span>
          {/* Placeholder cover until artwork is ready */}
          <div
            className={`${cover} flex flex-col justify-between bg-[#0a0a0a] p-3 text-white shadow-xl`}
            role="img"
            aria-label={`${fullStackLife.title} by ${author.name}`}
          >
            <span className="absolute inset-y-0 left-0 w-1.5 bg-yellow" aria-hidden />
            <span className="ml-1.5 block h-0.5 w-6 bg-yellow" aria-hidden />
            <p className="ml-1.5 text-lg font-extrabold leading-tight tracking-tight">
              Full Stack
              <br />
              Life
            </p>
            <p className="ml-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.15em] text-white/70">
              {author.name}
            </p>
          </div>
        </div>
        <h3 className="mt-8 text-xl font-bold tracking-tight">
          {fullStackLife.title}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted">
          {fullStackLife.subtitle}
        </p>
        <div className="mt-8">
          <Button href="/full-stack-life">Discover Full Stack Life</Button>
        </div>
      </article>

      {/* Decision System */}
      <article className="flex flex-col rounded-md border border-border bg-surface p-8">
        <div className={frame}>
          <div className={`${cover} overflow-visible`}>
            {/* The 3D render has built-in margins, so scale it to match. */}
            <Image
              src="/images/book-3d.png"
              alt={`${book.title} book by ${author.name}`}
              fill
              className="scale-[1.45] object-contain drop-shadow-xl"
              sizes="220px"
            />
          </div>
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
        <div className={frame}>
          <div className={`${cover} shadow-xl`}>
            <Image
              src="/images/sqlbook.jpg"
              alt={`${sqlBook.title} book cover`}
              fill
              className="object-cover"
              sizes="170px"
            />
          </div>
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
