import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../lib/site";

type FooterLink = { href: string; label: string; external?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Books",
    links: [
      { href: "/full-stack-life", label: siteConfig.fullStackLife.title },
      { href: "/decision-system", label: siteConfig.book.title },
      { href: siteConfig.sqlBook.url, label: siteConfig.sqlBook.title, external: true },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/books", label: "Books" },
      { href: "/about", label: "About" },
      { href: "/ideas", label: "Ideas" },
      { href: "/resources", label: "Resources" },
      { href: "/media", label: "Media" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      { href: `mailto:${siteConfig.email}`, label: siteConfig.email, external: true },
      { href: siteConfig.linkedIn, label: "LinkedIn", external: true },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-subtle text-foreground">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-12 py-14 md:grid-cols-[auto_1fr] md:gap-20">
          <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-block self-start py-4 sm:p-5">
            <Image
              src="/images/logo-dark.png"
              alt={siteConfig.name}
              width={1504}
              height={1771}
              className="h-28 w-auto sm:h-32 dark:hidden  "  
            />
            <Image
              src="/images/logo-white.png"
              alt={siteConfig.name}
              width={1496}
              height={1797}
              className="hidden h-28 w-auto sm:h-32 dark:block bg-black   p-4 rounded-xl"
            />
          </Link>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div
                key={column.title}
                className={column.title === "Books" ? "col-span-2 sm:col-span-1" : undefined}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {column.title}
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  {column.links.map((link) => {
                    const className =
                      "text-foreground/75 transition-colors hover:text-foreground dark:hover:text-yellow";
                    return (
                      <li key={link.href}>
                        {link.external ? (
                          <a
                            href={link.href}
                            className={className}
                            {...(link.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className={className}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.author.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
