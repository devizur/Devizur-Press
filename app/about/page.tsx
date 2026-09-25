import Image from "next/image";
import type { Metadata } from "next";
import { AuthorBio } from "../components/AuthorBio";
import { BookGrid } from "../components/BookGrid";
import { Button } from "../components/Button";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "About Hafiz Rahman",
  description:
    "Hafiz Rahman is an author, technology executive and entrepreneur with 28+ years of experience across engineering, data, AI and organizational transformation.",
  alternates: { canonical: "/about" },
};

const { author, book, sqlBook, fullStackLife } = siteConfig;

const stats = [
  { value: "28+", label: "Years building and transforming complex systems" },
  { value: "3", label: "Books, from SQL to systems thinking" },
  { value: String(sqlBook.year), label: "Publishing since his first book" },
  { value: "Melbourne", label: "Based in Australia" },
];

const journey = [
  {
    step: "01",
    title: "Building technology systems",
    body: "Nearly three decades in engineering, data and AI—building the trusted systems behind high-growth subscription businesses, consumer brands, fintech platforms and multi-site entertainment businesses.",
  },
  {
    step: "02",
    title: "Teaching the foundations",
    body: `In ${sqlBook.year} he published ${sqlBook.title}, a practical introduction to SQL and relational database design built around real business problems.`,
  },
  {
    step: "03",
    title: "Turning trusted data into decisions",
    body: `${book.title} distils years of work alongside executive leadership teams into a practical system for turning contested data into decisions that change outcomes.`,
  },
  {
    step: "04",
    title: "The systems behind our lives",
    body: `${fullStackLife.title} applies the same diagnostic thinking to people: finding the real problem before trying to fix the wrong one.`,
    upcoming: true,
  },
];

const themes = [
  {
    title: "Diagnosis before action",
    body: "Most effort is wasted fixing the wrong thing. Better outcomes start with finding where a problem actually comes from.",
  },
  {
    title: "Numbers worth trusting",
    body: "Organizations are rarely short of data. What they lack are numbers people trust enough to decide with.",
  },
  {
    title: "Systems, not symptoms",
    body: "Recurring problems are produced by hidden systems—in companies and in lives. Change the system, and the outcome follows.",
  },
];

const engagements = [
  "Consulting",
  "Advisory engagements",
  "Executive coaching",
  "Speaking",
  "Enterprise workshops",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border"
        aria-labelledby="about-heading"
      >
        <div className="pointer-events-none absolute inset-0 hero-gradient" aria-hidden />
        <div className="relative container mx-auto grid items-center gap-12 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-20 lg:py-28">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-6 rounded-full bg-yellow/20 blur-3xl"
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
                sizes="(max-width: 1024px) 90vw, 480px"
              />
            </div>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" aria-hidden />
              {author.location}
            </p>
            <h1
              id="about-heading"
              className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {author.name}
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {author.roles.join(" · ")}
            </p>
            <p className="mt-8 max-w-2xl border-l-4 border-yellow pl-5 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {author.positioning}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Drawing on 28+ years of building and transforming complex
              systems, Hafiz writes about how better diagnosis leads to better
              decisions—in organizations and in life.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/books">Explore the Books</Button>
              <Button href="/contact" variant="secondary">
                Contact Hafiz
              </Button>
              <Button href={siteConfig.linkedIn} variant="secondary" external>
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-inverse-bg text-inverse-fg" aria-label="At a glance">
        <dl className="container mx-auto grid grid-cols-2 gap-px px-4 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="py-10 pr-4 sm:py-12">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-yellow sm:text-4xl">
                {stat.value}
              </dd>
              <dd className="mt-2 max-w-[14rem] text-sm leading-snug text-inverse-fg/70">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Story */}
      <section aria-labelledby="story-heading">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                His story
              </p>
              <h2
                id="story-heading"
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                From building systems to understanding them
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8">
            <AuthorBio className="text-muted sm:text-lg" />

            <ol className="mt-14 space-y-0">
              {journey.map((stage, index) => (
                <li key={stage.step} className="relative flex gap-6 pb-10 last:pb-0">
                  {index < journey.length - 1 && (
                    <span
                      className="absolute left-5 top-12 bottom-0 w-px bg-border"
                      aria-hidden
                    />
                  )}
                  <span
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      stage.upcoming
                        ? "border-2 border-dashed border-yellow text-foreground"
                        : "bg-yellow text-black"
                    }`}
                  >
                    {stage.step}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="flex flex-wrap items-center gap-3 text-lg font-bold tracking-tight">
                      {stage.title}
                      {stage.upcoming && (
                        <span className="rounded-sm bg-yellow px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-black">
                          Coming soon
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{stage.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="bg-subtle" aria-labelledby="themes-heading">
        <div className="container mx-auto px-4 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              What he writes about
            </p>
            <h2
              id="themes-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Better diagnosis. Better decisions.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {themes.map((theme, index) => (
              <div
                key={theme.title}
                className="flex flex-col rounded-md border border-border bg-surface p-8"
              >
                <span className="text-sm font-bold text-muted">
                  0{index + 1}
                </span>
                <span className="mt-4 block h-1 w-10 bg-yellow" aria-hidden />
                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {theme.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{theme.body}</p>
              </div>
            ))}
          </div>
          <ul className="mt-12 flex flex-wrap gap-2" aria-label="Areas of expertise">
            {author.expertise.map((area) => (
              <li
                key={area}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground/80"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Books */}
      <section aria-labelledby="books-heading">
        <div className="container mx-auto px-4 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Books
            </p>
            <h2
              id="books-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              The books
            </h2>
          </div>

          <BookGrid className="mt-12" />
        </div>
      </section>

      {/* Work with Hafiz */}
      <section
        className="bg-inverse-bg text-inverse-fg"
        aria-labelledby="work-heading"
      >
        <div className="container mx-auto grid items-center gap-12 px-4 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-inverse-fg/60">
              Work with Hafiz
            </p>
            <h2
              id="work-heading"
              className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl"
            >
              Let&apos;s talk about the real problem.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-inverse-fg/70">
              Hafiz works with leadership teams and organizations that want to
              turn complexity into clear, confident decisions.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/contact">Contact Hafiz</Button>
              <Button href={siteConfig.linkedIn} variant="outline-light" external>
                Connect on LinkedIn
              </Button>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {engagements.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-md border border-inverse-fg/10 bg-inverse-fg/[0.03] px-5 py-5 font-semibold"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-yellow" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
