import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-yellow/10 text-foreground dark:bg-subtle">
      <div className="mx-auto flex container mx-auto px-4  flex-col gap-10  py-14 px-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Image
            src="/images/logo-dark.png"
            alt="Devizur Press"
            width={250}
            height={75}
            className="h-24 w-auto dark:hidden"
          />
          <Image
            src="/images/logo-white.png"
            alt="Devizur Press"
            width={250}
            height={75}
            className="hidden h-24 w-auto dark:block"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Practical books for executives, technology leaders, and data
            professionals.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <p className="mb-3 font-semibold tracking-wide text-yellow">Book</p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/#about" className="hover:text-foreground">
                  {siteConfig.book.title}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.amazon.ebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold tracking-wide text-yellow">
              Company
            </p>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="mx-auto flex container mx-auto px-4  px-5 py-6 text-xs text-muted sm:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
