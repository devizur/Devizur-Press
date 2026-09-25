import { Button } from "./Button";

type ComingSoonProps = {
  title: string;
  description: string;
};

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="relative overflow-hidden" aria-labelledby="coming-soon-heading">
      <div className="pointer-events-none absolute inset-0 hero-gradient" aria-hidden />
      <div className="relative container mx-auto flex flex-col items-center px-4 py-24 text-center sm:px-8 sm:py-32">
        <p className="inline-block rounded-sm bg-yellow px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-black">
          Coming Soon
        </p>
        <h1
          id="coming-soon-heading"
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-[1.05rem]">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/books" variant="secondary">
            Explore the Books
          </Button>
        </div>
      </div>
    </section>
  );
}
