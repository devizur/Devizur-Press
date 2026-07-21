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
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-24">
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
            <br />
            
          </div>
        </div>

        <div className="rounded-lg border border-border bg-subtle/50 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
