import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: {
    href: string;
    label: string;
  };
  secondaryAction?: {
    href: string;
    label: string;
  };
  size?: "default" | "large";
  visual?: {
    src: string;
    alt: string;
  };
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  size = "default",
  visual,
}: CtaBannerProps) {
  const padding =
    size === "large"
      ? "px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
      : "px-6 py-8 sm:px-10 sm:py-10";

  if (visual) {
    return (
      <section className="page-shell pb-16 sm:pb-20 lg:pb-24">
        <div className={`card-surface overflow-hidden ${padding}`}>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow mb-4">{eyebrow}</p>
              <h2 className="font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
                <span className="text-balance">{title}</span>
              </h2>
              <p className="lede mt-5 max-w-prosewide text-balance">
                {description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={primaryAction.href}>
                  {primaryAction.label}
                </ButtonLink>
                {secondaryAction ? (
                  <ButtonLink href={secondaryAction.href} variant="secondary">
                    {secondaryAction.label}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
            <div className="editorial-frame bg-white/90 p-3">
              <Image
                alt={visual.alt}
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                height={860}
                src={visual.src}
                width={1200}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell pb-16 sm:pb-20 lg:pb-24">
      <div className={`card-surface overflow-hidden ${padding}`}>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
              <span className="text-balance">{title}</span>
            </h2>
            <p className="lede mt-5 max-w-prosewide text-balance">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href={primaryAction.href}>{primaryAction.label}</ButtonLink>
            {secondaryAction ? (
              <ButtonLink href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
