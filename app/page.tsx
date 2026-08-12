import Image from "next/image";
import { Button, AmazonBuyButtons } from "./components/Button";
import { LearnIcon } from "./components/LearnIcon";
import { siteConfig } from "./lib/site";
import Reviews from "./components/Reviews";
 
export default function HomePage() {

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 hero-gradient" aria-hidden />
        <div className="relative mx-auto grid container mx-auto px-4  items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            {/* <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {siteConfig.name}
            </p> */}
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {siteConfig.book.title}
            </h1>
            <p className="mt-4 text-lg font-medium leading-snug text-foreground/80 sm:text-xl">
              {siteConfig.book.subtitle}
            </p>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted sm:text-[1.05rem]">
              <p className="font-medium text-foreground">
                You are not short of data. You are short of numbers you can
                trust to decide with.
              </p>
              <p className="text-justify">
                Decision System is a practical field guide for leaders who want
                to turn scattered, contested data into decisions that create
                measurable business outcomes. Instead of chasing more
                dashboards, it introduces a practical system for building
                trusted numbers that people confidently act on.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={siteConfig.amazon.ebook} external>
                Buy on Amazon
              </Button>
              <Button href={siteConfig.sampleChapter} variant="secondary">
                Read Sample Chapter
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -inset-6 rounded-full bg-yellow/20 blur-3xl lg:-inset-10"
              aria-hidden
            />
            <Image
              src="/images/book-3d.png"
              alt="Decision System hardcover book by Hafiz Rahman"
              width={900}
              height={1100}
              priority
              className="relative mx-auto h-auto w-full drop-shadow-2xl"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </div>
      </section>

      {/* Social Proof
      <section className="bg-subtle" aria-labelledby="reviews-heading">
        <div className="mx-auto container mx-auto px-4  px-5 py-20 sm:px-8 sm:py-24">
          <h2
            id="reviews-heading"
            className="text-center text-2xl font-bold tracking-tight sm:text-3xl"
          >
            What leaders are saying
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteConfig.socialProof.map((review) => (
              <blockquote
                key={review.name}
                className="flex flex-col border-t-2 border-yellow bg-surface px-6 py-8"
              >
                <p className="flex-1 text-[0.95rem] leading-relaxed text-foreground/80">
                  “{review.quote}”
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
            ))}
          </div>
        </div>
      </section> */}

      <Reviews reviews={siteConfig.socialProof} />

      {/* What You'll Learn */}
      <section aria-labelledby="learn-heading">
        <div className="  container mx-auto px-4  px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <h2
              id="learn-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              What you&apos;ll learn
            </h2>
            <p className="mt-3 text-muted">
              Six building blocks for turning trusted data into decisions that
              change outcomes.
            </p>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.learnItems.map((item) => (
              <div key={item.title} className="group">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-yellow text-black">
                  <LearnIcon name={item.icon} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section
        className="bg-subtle text-foreground dark:bg-inverse-bg dark:text-inverse-fg"
        aria-labelledby="problem-heading"
      >
        <div className="mx-auto container  px-4   py-20 sm:px-8 sm:py-24">
          <h2
            id="problem-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Does this sound familiar?
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.problems.map((problem) => (
              <div
                key={problem}
                className="border border-border bg-surface px-5 py-6 dark:border-inverse-fg/10 dark:bg-inverse-fg/[0.03]"
              >
                <span
                  className="mb-3 block h-1 w-8 bg-yellow"
                  aria-hidden
                />
                <p className="text-[0.95rem] leading-relaxed text-muted dark:text-inverse-fg/85">
                  {problem}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12  text-lg font-medium leading-snug text-foreground dark:text-yellow sm:text-xl">
            Decision System explains why and provides a practical framework to
            fix it.
          </p>
        </div>
      </section>

      {/* About the Book */}
      <section id="about" aria-labelledby="about-heading">
        <div className=" container mx-auto px-4    py-20 sm:px-8 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="about-heading"
                className="text-2xl font-bold tracking-tight sm:text-3xl"
              >
                A Field Guide for Data-Driven Leaders
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p className="font-medium text-foreground text-justify">
                  You are not short of data.
                  <br />
                  You are short of numbers you can trust to decide with.
                </p>
                <p className="text-justify">
                  The dashboards are full, the reports arrive on time, and still
                  the decisions that matter come down to whoever argues hardest
                  in the room. The problem was never a shortage of data. It is
                  that almost none of it has earned the right to drive a
                  decision.
                </p>
                <p className="text-justify">
                  Decision System is a practical guide to closing that gap.
                  Across six building blocks—Trust, Coherence, Access,
                  Ownership, Value, and Operating the System—it follows two very
                  different companies as they turn scattered, contested data
                  into decisions that change outcomes. The result is not more
                  numbers. It is a higher bar, and a system that holds as you
                  grow.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted">
                Inside the book you&apos;ll learn
              </h3>
              <ul className="mt-6 space-y-4">
                {siteConfig.aboutBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[0.95rem] leading-relaxed">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Author */}
      <section className="bg-subtle" aria-labelledby="author-heading">
        <div className="mx-auto grid container  px-4  items-center gap-12 py-20 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm overflow-hidden lg:mx-0">
            <Image
              src="/images/author.png"
              alt="Hafiz Rahman, author of Decision System"
              width={680}
              height={850}
              className="h-auto w-full object-cover object-top rounded-sm"
              sizes="(max-width: 1024px) 90vw, 340px"
              loading="lazy"
            />
          </div>
          <div>
            <h2
              id="author-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Meet Hafiz Rahman
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p className="text-justify">
                Hafiz Rahman is a Melbourne-based engineering, data, and AI
                leader with more than 28 years of experience building trusted
                systems behind high-growth subscription businesses and consumer
                brands.
              </p>
              <p className="text-justify">
                Having led engineering and data initiatives across fintech
                platforms and multi-site entertainment businesses, his work
                focuses on one recurring challenge: helping organisations turn
                contested data into decisions that directly improve business
                outcomes.
              </p>
              <p className="text-justify">
                Decision System is the first title from Devizur Press and
                reflects the practical frameworks developed throughout his
                career working alongside executive leadership teams.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact" variant="dark">
                Contact Hafiz
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Devizur Press */}
      <section aria-labelledby="press-heading">
        <div className="mx-auto container   px-4    py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">

            <h2
              id="press-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              About Devizur Press
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p className="text-justify">
                Devizur Press publishes practical books for executives,
                technology leaders, and data professionals.
              </p>
              <p className="font-medium text-foreground text-justify">
                Our mission is simple:
                <br />
                To bridge the gap between technical expertise and better
                business decisions.
              </p>
              <p className="text-justify">
                Every title is designed to be practical, visually polished, and
                immediately applicable inside modern organisations.
              </p>
              <p className="text-justify">
                Upcoming titles will explore topics across data engineering,
                artificial intelligence, analytics, software architecture,
                leadership, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section
        className="bg-subtle text-foreground dark:bg-inverse-bg dark:text-inverse-fg"
        aria-labelledby="buy-heading"
      >
        <div className="  flex container mx-auto px-4  flex-col items-center py-20 text-center sm:px-8 sm:py-28">
          <Image
            src="/images/book-3d.png"
            alt="Decision System book"
            width={480}
            height={580}
            className="mb-10 h-auto w-full max-w-[280px] sm:max-w-[320px]"
            sizes="320px"
            loading="lazy"
          />
          <h2
            id="buy-heading"
            className=" text-2xl font-bold tracking-tight sm:text-4xl"
          >
            Ready to start making better decisions?
          </h2>
          <AmazonBuyButtons
            className="mt-10 justify-center dark:hidden"
            primaryVariant="primary"
            secondaryVariant="secondary"
          />
          <AmazonBuyButtons
            className="mt-10 hidden justify-center dark:flex"
            primaryVariant="primary"
            secondaryVariant="outline-light"
          />
        </div>
      </section>
    </>
  );
}
