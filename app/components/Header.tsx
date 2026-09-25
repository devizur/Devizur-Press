"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

type NavLink = {
  href: string;
  label: string;
  // Extra paths that should highlight this link (e.g. anchor links).
  match?: string[];
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books", match: ["/decision-system"] },
  { href: "/about", label: "About" },
  { href: "/ideas", label: "Ideas" },
  { href: "/resources", label: "Resources" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

function isActive(link: NavLink, pathname: string) {
  const base = link.href.split("#")[0] || "/";
  if (link.href.includes("#")) {
    return link.match?.some((p) => pathname.startsWith(p)) ?? false;
  }
  return base === "/" ? pathname === "/" : pathname.startsWith(base);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled
          ? "bg-background/95 shadow-[0_1px_0_0_var(--header-shadow)] backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="  flex h-16 container mx-auto px-4  items-center justify-between  sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Devizur Press home"
        >
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={1504}
            height={1771}
            className="h-12 w-auto rounded-sm dark:hidden"
            priority
          />
          <Image
            src="/images/logo-yellow-bg.png"
            alt=""
            width={1422}
            height={1761}
            className="hidden h-12 w-auto rounded-sm dark:block"
            priority
          />
          <span className="text-sm font-bold tracking-wide text-foreground sm:text-base">
            Devizur Press
          </span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActive(link, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-yellow font-semibold text-black"
                      : "text-foreground/70 hover:bg-subtle hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-5 py-6 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => {
              const active = isActive(link, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-4 py-2.5 text-base font-medium transition-colors ${
                    active
                      ? "bg-yellow font-semibold text-black"
                      : "hover:bg-subtle"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
