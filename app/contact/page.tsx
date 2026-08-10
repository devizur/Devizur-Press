import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hafiz Rahman about consulting, advisory engagements, executive coaching, speaking opportunities, or enterprise workshops related to Decision System.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description:
      "Get in touch about consulting, advisory, coaching, speaking, or workshops.",
    url: "/contact",
  },
};

 
export default function ContactPage() {
  return (
    <section className="  border-border">
      <div className="  grid container mx-auto px-4  gap-14  py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-24">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Contact the Author
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            If you&apos;ve read Decision System and would like to discuss
            consulting, advisory engagements, executive coaching, speaking
            opportunities, or enterprise workshops, I&apos;d love to hear from
            you.
          </p>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-medium text-muted">or email directly</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-lg font-semibold text-foreground underline decoration-yellow decoration-2 underline-offset-4 hover:decoration-foreground"
            >
              {siteConfig.email}
            </a>
            <div className="mt-6">
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                aria-label="Hafiz Rahman on LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.126 0 2.063 2.063 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-subtle/50 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
