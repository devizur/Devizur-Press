import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Image
            src="/images/logo-yellow.png"
            alt="Devizur Press"
            width={140}
            height={48}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Practical books for executives, technology leaders, and data
            professionals.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <p className="mb-3 font-semibold tracking-wide text-yellow">Book</p>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/#about" className="hover:text-white">
                  {siteConfig.book.title}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.amazon.ebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
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
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl px-5 py-6 text-xs text-white/40 sm:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
