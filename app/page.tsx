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
        className="relative overflow-hidden bg-inverse-bg text-inverse-fg"
        aria-labelledby="fsl-heading"
      >
        {/* Subtle grid + glow backdrop */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 70% 50%, black 20%, transparent 75%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-40 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-yellow/10 blur-3xl"
          aria-hidden
        />

        <div className="relative container mx-auto grid items-center gap-12 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-yellow/40 bg-yellow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-yellow">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
              </span>
              Coming Soon
            </p>
            <h2
              id="fsl-heading"
              className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {fullStackLife.title}
            </h2>
            <p className="mt-4 max-w-xl text-lg font-medium leading-snug text-inverse-fg/85 sm:text-xl">
              {fullStackLife.subtitle}
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-inverse-fg/60">
              A five-layer framework for diagnosing the hidden systems behind
              recurring problems—and identifying the layer that actually needs
              attention.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/full-stack-life">Discover Full Stack Life</Button>
              {flags.fullStackLifeFreeTools && fullStackLife.freeToolsUrl && (
                <Button href={fullStackLife.freeToolsUrl} variant="outline-light">
                  Get the Free Tools
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-inverse-fg/10 bg-inverse-fg/[0.04] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="rounded-md border border-inverse-fg/10 px-5 py-4">
              <p className="text-base text-inverse-fg/70 sm:text-lg">
                Most self-improvement starts by asking how to change.
              </p>
            </div>

            <div className="flex h-8 items-center pl-5" aria-hidden>
              <span className="h-full w-px bg-yellow/60" />
            </div>

            <div className="rounded-md border border-yellow/40 bg-yellow/[0.07] px-5 py-5">
              <p className="text-sm font-semibold text-yellow">
                {fullStackLife.title} starts one step earlier:
              </p>
              <p className="mt-2 text-2xl font-bold leading-snug text-inverse-fg sm:text-[1.75rem]">
                What if you&apos;re trying to change the{" "}
                <span className="text-yellow">wrong thing</span>?
              </p>
            </div>

            <a
              href="#framework"
              className="group mt-6 flex items-center justify-between gap-4 border-t border-inverse-fg/10 pt-5"
            >
              <span className="flex flex-col-reverse gap-0.5" aria-hidden>
                {fullStackLife.layers.map((layer, index) => (
                  <span
                    key={layer}
                    className={`h-1 rounded-sm ${index === 0 ? "bg-yellow" : "bg-inverse-fg/25"}`}
                    style={{ width: `${28 - index * 4}px` }}
                  />
                ))}
              </span>
              <span className="flex-1 text-sm font-medium text-inverse-fg/70 transition-colors group-hover:text-inverse-fg">
                The five-layer framework
              </span>
              <span
                className="text-yellow transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 — The Framework */}
      <section
        id="framework"
        className="scroll-mt-16 border-b border-border"
        aria-labelledby="framework-heading"
      >
        <div className="container mx-auto px-4 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              The Full Stack Life Framework
            </p>
            <h2
              id="framework-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Diagnose from the foundation upward
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Problems often appear higher in the stack than where they
              originate. {fullStackLife.title} teaches you to diagnose from the
              foundation upward.
            </p>
          </div>

          <ol
            className="mt-12 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center"
            aria-label={`The five layers: ${fullStackLife.layers.join(", ")}`}
          >
            {fullStackLife.layers.map((layer, index) => {
              const isFoundation = index === 0;
              const isSurface = index === fullStackLife.layers.length - 1;
              return (
                <li key={layer} className="contents">
                  {index > 0 && (
                    <span
                      className="flex justify-center text-lg font-bold text-yellow lg:px-1"
                      aria-hidden
                    >
                      <span className="rotate-90 lg:rotate-0">→</span>
                    </span>
                  )}
                  <div
                    className={`relative flex flex-1 items-center justify-between gap-4 rounded-md border px-5 py-5 lg:flex-col lg:items-start lg:justify-start lg:py-6 ${
                      isFoundation
                        ? "border-yellow bg-yellow text-black shadow-lg"
                        : "border-border bg-subtle text-foreground"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold ${isFoundation ? "text-black/60" : "text-muted"}`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-base font-extrabold uppercase tracking-[0.12em] lg:mt-3 lg:text-lg">
                      {layer}
                    </span>
                    {(isFoundation || isSurface) && (
                      <span
                        className={`text-[0.65rem] font-semibold uppercase tracking-[0.15em] lg:mt-2 ${
                          isFoundation ? "text-black/70" : "text-muted"
                        }`}
                      >
                        {isFoundation ? "Start here" : "Where it shows up"}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 text-center">
            <Button href="/full-stack-life" variant="secondary">
              Explore the Framework
            </Button>
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
