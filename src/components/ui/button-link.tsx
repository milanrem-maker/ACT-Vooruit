import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-clay-500 text-white shadow-lg shadow-clay-500/20 hover:-translate-y-0.5 hover:bg-clay-700",
  secondary:
    "border border-ink-100 bg-white/80 text-ink-900 hover:-translate-y-0.5 hover:border-sage-300 hover:bg-white",
  ghost:
    "text-ink-900 underline decoration-ink-300 underline-offset-4 hover:text-clay-700",
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const sharedClasses = cx(
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
    variantClasses[variant],
    className,
  );
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        className={sharedClasses}
        href={href}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={href.startsWith("http") ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={sharedClasses} href={href}>
      {children}
    </Link>
  );
}
