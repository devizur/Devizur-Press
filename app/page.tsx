import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "./components/Button";
import Reviews from "./components/Reviews";
import { siteConfig } from "./lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.author.name} | Author · Technology Executive · Entrepreneur`,
  },
  description:
    "Hafiz Rahman writes about how better diagnosis leads to better decisions—in organizations and in life. Author of Full Stack Life, Decision System, and Solving Business Problems Using SQL.",
  alternates: { canonical: "/" },
};

const layers = [1, 2, 3, 4, 5];
// Which layer the diagram highlights as "the one that needs attention".
const rootLayer = 4;

export default function HomePage() {
  const { author, fullStackLife, sqlBook, flags } = siteConfig;
  const featuredReviews = siteConfig.socialProof.filter((review) =>
    (siteConfig.featuredEndorsements as readonly string[]).includes(
      review.name,
    ),
  );

  return (
    <>
      {/* 1 — Hafiz Rahman */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 hero-gradient" aria-hidden />
        <div className="relative container mx-auto grid items-center gap-12 px-4 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-20 lg:py-14">
          <div>
            <h1 className="text-5xl font-extrabold uppercase tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {author.name}
            </h1>
            <p className="mt-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted sm:text-base">
              <span className="h-0.5 w-8 shrink-0 bg-yellow" aria-hidden />
              {author.roles.join(" · ")}
            </p>
            <p className="mt-8 max-w-2xl text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Systems thinking for{" "}
              <span className="bg-[linear-gradient(transparent_62%,var(--yellow)_62%)] dark:bg-none dark:text-yellow">
                better decisions
              </span>
              ,{" "}
              <span className="bg-[linear-gradient(transparent_62%,var(--yellow)_62%)] dark:bg-none dark:text-yellow">
                better organizations
              </span>
              , and{" "}
              <span className="bg-[linear-gradient(transparent_62%,var(--yellow)_62%)] dark:bg-none dark:text-yellow">
                better lives
              </span>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/books">Explore the Books</Button>
              <Button href="/about" variant="secondary">
                About Hafiz
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="absolute -inset-8 rounded-full bg-yellow/20 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <span
                className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border-2 border-yellow"
                aria-hidden
              />
              <Image
                src="/images/author.png"
                alt="Hafiz Rahman"
                width={680}
                height={850}
                priority
                className="relative h-auto w-full rounded-sm object-cover object-top shadow-2xl"
                sizes="(max-width: 1024px) 90vw, 440px"
              />

            </div>
          </div>
        </div>
      </section>

      <div id="books" className="scroll-mt-20" />

      {/* 2 — Full Stack Life */}
      <section
        id="full-stack-life"
        className="bg-inverse-bg text-inverse-fg"
        aria-labelledby="fsl-heading"
      >
        <div className="container mx-auto grid items-center gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-block rounded-sm bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
              Coming Soon
            </p>
            <h2
              id="fsl-heading"
              className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              {fullStackLife.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg font-medium leading-snug text-inverse-fg/80 sm:text-xl">
              {fullStackLife.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#framework">Discover Full Stack Life</Button>
              {flags.fullStackLifeFreeTools && fullStackLife.freeToolsUrl && (
                <Button href={fullStackLife.freeToolsUrl} variant="outline-light">
                  Get the Free Tools
                </Button>
              )}
            </div>
          </div>

          <div className="border-t border-inverse-fg/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div className="space-y-1 text-base leading-relaxed text-inverse-fg/70 sm:text-lg">
              <p>Most self-improvement starts by asking how to change.</p>
              <p>{fullStackLife.title} starts one step earlier:</p>
            </div>
            <p className="mt-5 border-l-4 border-yellow pl-5 text-2xl font-bold leading-snug text-yellow sm:text-3xl">
              What if you&apos;re trying to change the wrong thing?
            </p>
          </div>
        </div>
      </section>

      {/* 3 — The Framework */}
      <section
        id="framework"
        className="scroll-mt-16 border-b border-border"
        aria-labelledby="framework-heading"
      >
        <div className="container mx-auto grid items-center gap-14 px-4 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              The Full Stack Life Framework
            </p>
            <h2
              id="framework-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Five layers. One real problem.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
              <p>
                Recurring problems are rarely random. They are produced by
                hidden systems—and the place a problem shows up is often not
                the place it starts.
              </p>
              <p>
                The five-layer framework is a way of diagnosing those hidden
                systems: tracing a recurring problem down through the stack
                and identifying the layer that actually needs attention, before
                you spend effort fixing the wrong one.
              </p>
            </div>
          </div>

          <div
            className="mx-auto w-full max-w-md"
            role="img"
            aria-label="A five-layer stack. The problem shows up at the top layer, but the layer that needs attention is further down."
          >
            <div className="space-y-2.5">
              {layers.map((layer) => {
                const isSymptom = layer === 1;
                const isRoot = layer === rootLayer;
                return (
                  <div
                    key={layer}
                    className={`flex items-center justify-between rounded-md border px-5 py-4 text-sm font-semibold transition-colors ${
                      isRoot
                        ? "border-yellow bg-yellow text-black shadow-lg"
                        : "border-border bg-subtle text-muted"
                    }`}
                    style={{ marginInline: `${(layer - 1) * 4}%` }}
                  >
                    <span>Layer {layer}</span>
                    {isSymptom && (
                      <span className="text-xs font-medium">
                        Where it shows up
                      </span>
                    )}
                    {isRoot && (
                      <span className="text-xs font-bold">
                        What needs attention
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Decision System */}
      <section className="bg-subtle" aria-labelledby="ds-heading">
        <div className="container mx-auto grid items-center gap-12 px-4 pt-20 sm:px-8 sm:pt-24 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[280px] lg:max-w-none">
            <Image
              src="/images/book-3d.png"
              alt="Decision System hardcover book by Hafiz Rahman"
              width={900}
              height={1100}
              className="h-auto w-full drop-shadow-2xl"
              sizes="(max-width: 1024px) 280px, 360px"
            />
          </div>
          <div>
            <h2
              id="ds-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {siteConfig.book.title}
            </h2>
            <p className="mt-3 text-lg font-medium leading-snug text-foreground/80">
              {siteConfig.book.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-[1.05rem]">
              Organizations rarely suffer from a shortage of data. The harder
              problem is knowing which numbers to trust, what they mean, and
              what decision should follow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/decision-system" variant="dark">
                Explore Decision System
              </Button>
              <Button href={siteConfig.amazon.ebook} variant="secondary" external>
                Buy on Amazon
              </Button>
            </div>
          </div>
        </div>
        <div className="pb-20 sm:pb-24">
          <Reviews reviews={featuredReviews} />
        </div>
      </section>

      {/* 5 — Solving Business Problems Using SQL */}
      <section aria-labelledby="sql-heading">
        <div className="container mx-auto px-4 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Where it started
          </p>
          <div className="mt-6 grid gap-8 rounded-md border border-border bg-surface p-6 sm:grid-cols-[220px_1fr] sm:gap-10 sm:p-10 lg:grid-cols-[260px_1fr_minmax(0,320px)]">
            <div className="mx-auto w-48 sm:mx-0 sm:w-full">
              <Image
                src="/images/sqlbook.jpg"
                alt={`${sqlBook.title} book cover by Hafizur Rahman`}
                width={298}
                height={385}
                className="h-auto w-full rounded-r-md rounded-l-sm shadow-2xl"
                sizes="(max-width: 640px) 192px, 260px"
              />
            </div>

            <div>
              <p className="inline-block rounded-sm border border-border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                First book · {sqlBook.year}
              </p>
              <h2
                id="sql-heading"
                className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                {sqlBook.title}
              </h2>
              <p className="mt-2 text-sm font-medium leading-snug text-foreground/70">
                {sqlBook.subtitle}
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Hafiz Rahman&apos;s first book, independently published in{" "}
                {sqlBook.year}, is a practical introduction to SQL and
                relational database design.
              </p>
              <div className="mt-6">
                <Button href={sqlBook.url} variant="secondary" external>
                  Explore the Book
                </Button>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-border lg:pl-10">
              <ul className="space-y-4">
                {sqlBook.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-[0.95rem] leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow"
                      aria-hidden
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-5 text-sm font-medium text-foreground">
                Publishing since {sqlBook.year}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — About Hafiz */}
      <section
        id="about"
        className="scroll-mt-16 border-t border-border bg-subtle"
        aria-labelledby="about-heading"
      >
        <div className="container mx-auto px-4 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              About Hafiz
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Hafiz Rahman is an author, technology executive and
                entrepreneur with 28+ years of experience across engineering,
                data, AI and organizational transformation.
              </p>
              <p>
                His work has evolved from building technology systems to
                understanding the systems behind organizational and human
                decisions.
              </p>
              {flags.devizurAnnounced && (
                <p>
                  He is also Co-Founder and CEO of Devizur, an AI-first
                  technology company building end-to-end solutions for
                  hospitality and entertainment businesses and developing
                  AI-ready, data-driven decision capabilities.
                </p>
              )}
            </div>
            <div className="mt-8">
              <Button href="/about" variant="dark">
                Read Hafiz&apos;s Story →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
