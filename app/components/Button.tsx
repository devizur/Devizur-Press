import { siteConfig } from "../lib/site";

type ButtonVariant = "primary" | "secondary" | "dark" | "outline-light";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow text-black hover:bg-yellow-hover focus-visible:outline-yellow",
  secondary:
    "bg-transparent text-foreground border border-foreground/20 hover:border-foreground/40 hover:bg-subtle",
  dark: "bg-foreground text-background hover:bg-foreground/85",
  "outline-light":
    "bg-transparent text-inverse-fg border border-inverse-fg/30 hover:border-inverse-fg/60 hover:bg-inverse-fg/5",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const isExternal =
    external || href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

export function AmazonBuyButtons({
  className = "",
  primaryVariant = "primary" as ButtonVariant,
  secondaryVariant = "secondary" as ButtonVariant,
}: {
  className?: string;
  primaryVariant?: ButtonVariant;
  secondaryVariant?: ButtonVariant;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button href={siteConfig.amazon.ebook} variant={primaryVariant} external>
        Buy Kindle
      </Button>
      <Button
        href={siteConfig.amazon.paperback}
        variant={secondaryVariant}
        external
      >
        Buy Paperback
      </Button>
    </div>
  );
}
