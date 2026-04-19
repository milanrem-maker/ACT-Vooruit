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
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: CtaBannerProps) {
  return (
    <section className="page-shell pb-16 sm:pb-20 lg:pb-24">
      <div className="card-surface overflow-hidden px-6 py-8 sm:px-10 sm:py-10">
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
