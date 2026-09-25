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

  const highlight =
    "bg-[linear-gradient(transparent_62%,var(--yellow)_62%)] dark:bg-none dark:text-yellow";
  const positioning = (
    <>
      Systems thinking for <span className={highlight}>better decisions</span>,{" "}
      <span className={highlight}>better organizations</span>, and{" "}
      <span className={highlight}>better lives</span>.
    </>
  );

  return (
    <>
      {/* 1 — Hafiz Rahman */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 hero-gradient" aria-hidden />
                {/* Mobile & tablet */}
        <div className="relative container mx-auto px-4 pb-10 pt-5 sm:px-8 sm:pb-14 sm:pt-10 lg:hidden">
          <div className="sm:mx-auto sm:max-w-xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/author.png"
              alt="Hafiz Rahman"
              width={680}
              height={850}
              priority
              className="aspect-[4/5] w-full object-cover object-top sm:aspect-square sm:object-center"
              sizes="(max-width: 1024px) 100vw, 1px"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/55 to-transparent"
              aria-hidden
            />
            <span className="absolute left-0 top-6 h-10 w-1 bg-yellow" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <h1 className="text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white min-[400px]:text-5xl">
                {author.name}
              </h1>
              <p className="mt-3 flex items-start gap-2.5 text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/80 sm:text-sm">
                <span className="mt-[0.55em] h-0.5 w-6 shrink-0 bg-yellow" aria-hidden />
                {author.roles.join(" · ")}
              </p>
            </div>
          </div>

          <p className="mt-8 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
            {positioning}
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <Button href="/books" className="w-full !px-3 sm:w-auto sm:!px-6">
              Explore the Books
            </Button>
            <Button href="/about" variant="secondary" className="w-full !px-3 sm:w-auto sm:!px-6">
              About Hafiz
            </Button>
          </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="relative container mx-auto hidden items-center gap-12 px-4 py-10 sm:px-8 sm:py-12 lg:grid lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-20 lg:py-14">
          <div>
            <h1 className="text-5xl font-extrabold uppercase tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {author.name}
            </h1>
            <p className="mt-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted sm:text-base">
              <span className="h-0.5 w-8 shrink-0 bg-yellow" aria-hidden />
              {author.roles.join(" · ")}
            </p>
            <p className="mt-8 max-w-2xl text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              {positioning}
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
                sizes="(max-width: 1024px) 1px, 440px"
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
        <div className="container mx-auto grid items-center gap-12 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="h-0.5 w-8 bg-yellow" aria-hidden />
              The Full Stack Life Framework
            </p>
            <h2
              id="framework-heading"
              className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.1]"
            >
              Five layers.
              <br />
              Diagnosed from the{" "}
              <span className="bg-[linear-gradient(transparent_62%,var(--yellow)_62%)] dark:bg-none dark:text-yellow">
                foundation
              </span>{" "}
              up.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Problems often appear higher in the stack than where they
              originate. {fullStackLife.title} teaches you to diagnose from the
              foundation upward.
            </p>
            <div className="mt-10">
              <Button href="/full-stack-life" variant="dark">
                Explore the Framework
              </Button>
            </div>
          </div>

          {/* Visual signature: the stack */}
          <figure
            className="relative overflow-hidden rounded-xl border border-border bg-subtle px-6 py-10 sm:px-12 sm:py-12"
            aria-label={`The Full Stack Life stack, from the top: ${[...fullStackLife.layers].reverse().join(", ")}. Diagnosis starts at the foundation.`}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(var(--border) 1.2px, transparent 1.2px)",
                backgroundSize: "20px 20px",
                maskImage:
                  "radial-gradient(ellipse at center, black 30%, transparent 80%)",
              }}
              aria-hidden
            />

            <div className="relative flex items-stretch gap-5 sm:gap-8">
              <ol className="flex flex-1 flex-col gap-3.5">
                {[...fullStackLife.layers].reverse().map((layer, i, arr) => {
                  const depth = arr.length - 1 - i; // 0 = foundation
                  const isFoundation = depth === 0;
                  return (
                    <li
                      key={layer}
                      className="mx-auto w-full"
                      style={{ maxWidth: `${100 - depth * 10}%` }}
                    >
                      <div
                        className={`relative flex items-center justify-center rounded-lg px-4 py-3.5 text-center sm:py-4 ${
                          isFoundation
                            ? "bg-yellow text-black shadow-[0_6px_0_0_var(--yellow-hover),0_18px_36px_-12px_var(--yellow)]"
                            : "border border-border bg-surface text-foreground shadow-[0_5px_0_0_var(--border)]"
                        }`}
                      >
                        <span
                          className={`absolute left-4 hidden text-[0.65rem] font-bold tabular-nums sm:inline ${
                            isFoundation ? "text-black/50" : "text-muted"
                          }`}
                        >
                          0{depth + 1}
                        </span>
                        <span className="text-xs font-extrabold uppercase tracking-[0.12em] min-[400px]:text-sm sm:text-base sm:tracking-[0.16em]">
                          {layer}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {/* Diagnose-upward rail */}
              <div className="flex w-6 flex-col items-center" aria-hidden>
                <svg viewBox="0 0 12 8" className="h-2.5 w-3 text-yellow" fill="currentColor">
                  <path d="M6 0l6 8H0z" />
                </svg>
                <span className="w-px flex-1 bg-gradient-to-t from-yellow to-yellow/0" />
                <span className="h-3 w-3 rounded-full bg-yellow ring-4 ring-yellow/25" />
              </div>
            </div>

            <figcaption className="relative mt-10 flex items-center justify-center gap-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="hidden h-px w-8 bg-border sm:block" aria-hidden />
              Diagnose from the foundation upward
              <span className="hidden h-px w-8 bg-border sm:block" aria-hidden />
            </figcaption>
          </figure>
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
          <div className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-muted sm:gap-4 sm:text-xs sm:tracking-[0.2em]">
            <span className="whitespace-nowrap">Where it started</span>
            <span className="h-px min-w-4 flex-1 bg-border" aria-hidden />
            <span className="whitespace-nowrap text-foreground">
              Publishing since {sqlBook.year}
            </span>
          </div>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(0,360px)_1fr] lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-16">
            {/* Cover panel */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-border bg-subtle px-8 py-10 lg:py-12">
              <span
                className="pointer-events-none absolute -bottom-6 -right-2 select-none text-[7rem] font-extrabold leading-none tracking-tighter text-foreground/[0.05] sm:text-[9rem]"
                aria-hidden
              >
                {sqlBook.year}
              </span>
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow/20 blur-3xl"
                aria-hidden
              />
              <Image
                src="/images/sqlbook.jpg"
                alt={`${sqlBook.title} book cover by Hafizur Rahman`}
                width={298}
                height={385}
                className="relative h-auto w-56 rounded-r-md rounded-l-sm shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1 sm:w-64 lg:w-72"
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
              />
            </div>

            {/* Details */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow" aria-hidden />
                First book · Independently published {sqlBook.year}
              </p>
              <h2
                id="sql-heading"
                className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                {sqlBook.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm font-medium leading-snug text-foreground/70 sm:text-base">
                {sqlBook.subtitle}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                Hafiz Rahman&apos;s first book, independently published in{" "}
                {sqlBook.year}, is a practical introduction to SQL and
                relational database design.
              </p>

              <ul className="mt-7 max-w-2xl divide-y divide-border border-y border-border">
                {sqlBook.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3.5 py-3.5 text-[0.95rem] leading-relaxed"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow text-black"
                      aria-hidden
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2.5 6.5l2.2 2.2L9.5 3.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href={sqlBook.url} variant="secondary" external>
                  Explore the Book →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — About Hafiz */}
      <section
        id="about"
        className="relative scroll-mt-16 overflow-hidden border-t border-border bg-subtle"
        aria-labelledby="about-heading"
      >
        <span
          className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-yellow"
          aria-hidden
        />
        <div className="container mx-auto grid gap-8 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="h-0.5 w-8 bg-yellow" aria-hidden />
              About
            </p>
            <h2
              id="about-heading"
              className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              About Hafiz
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
              Hafiz Rahman is an author, technology executive and entrepreneur
              with 28+ years of experience across engineering, data, AI and
              organizational transformation.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              His work has evolved from building technology systems to
              understanding the systems behind organizational and human
              decisions.
            </p>
            {flags.devizurAnnounced && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                He is also Co-Founder and CEO of Devizur, an AI-first
                technology company building end-to-end solutions for
                hospitality and entertainment businesses and developing
                AI-ready, data-driven decision capabilities.
              </p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8">
              <Button href="/about" variant="dark">
                Read Hafiz&apos;s Story →
              </Button>
              <a
                href="/contact"
                className="text-sm font-semibold text-foreground underline decoration-yellow decoration-2 underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
