import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-yellow">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-yellow px-6 py-3 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-yellow-hover"
      >
        Back to home
      </Link>
    </section>
  );
}
