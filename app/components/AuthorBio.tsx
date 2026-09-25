import { siteConfig } from "../lib/site";

type AuthorBioProps = {
  className?: string;
};

export function AuthorBio({ className = "" }: AuthorBioProps) {
  return (
    <div className={`space-y-4 text-base leading-relaxed sm:text-[1.05rem] ${className}`}>
      <p>
        Hafiz Rahman is an author, technology executive and entrepreneur with
        28+ years of experience across engineering, data, AI and
        organizational transformation.
      </p>
      <p>
        Based in Melbourne, he has built the trusted systems behind
        high-growth subscription businesses and consumer brands, leading
        engineering and data initiatives across fintech platforms and
        multi-site entertainment businesses.
      </p>
      <p>
        His work has evolved from building technology systems to
        understanding the systems behind organizational and human decisions.
        That thread runs through his books: from{" "}
        <em>{siteConfig.sqlBook.title}</em> ({siteConfig.sqlBook.year}), to{" "}
        <em>{siteConfig.book.title}</em>, to the forthcoming{" "}
        <em>{siteConfig.fullStackLife.title}</em>.
      </p>
      {siteConfig.flags.devizurAnnounced && (
        <p>
          He is also Co-Founder and CEO of Devizur, an AI-first technology
          company building end-to-end solutions for hospitality and
          entertainment businesses and developing AI-ready, data-driven
          decision capabilities.
        </p>
      )}
    </div>
  );
}
