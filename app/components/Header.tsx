"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "../lib/site";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
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
<<<<<<< HEAD
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
=======
      <div className="mx-auto flex h-16 container mx-auto px-4  items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
>>>>>>> main
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

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={siteConfig.amazon.ebook}
              variant="primary"
              className="!px-5 !py-2.5"
              external
            >
              Buy on Amazon
            </Button>
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
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
          className="border-t border-border bg-background px-5 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={siteConfig.amazon.ebook}
              variant="primary"
              className="mt-2 w-full"
              external
            >
              Buy on Amazon
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
