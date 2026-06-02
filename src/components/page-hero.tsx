import { ButtonLink } from "@/components/ui/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  asideTitle: string;
  asideItems: string[];
  primaryAction?: {
    href: string;
    label: string;
  };
  secondaryAction?: {
    href: string;
    label: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  asideTitle,
  asideItems,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="page-shell pt-8 sm:pt-10">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="card-surface px-6 py-8 sm:px-10 sm:py-12">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-[0.98] text-ink-900 sm:text-5xl lg:text-6xl">
            <span className="text-balance">{title}</span>
          </h1>
          <p className="lede mt-6 max-w-prosewide text-balance">{description}</p>
          {primaryAction || secondaryAction ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryAction ? (
                <ButtonLink href={primaryAction.href}>
                  {primaryAction.label}
                </ButtonLink>
              ) : null}
              {secondaryAction ? (
                <ButtonLink href={secondaryAction.href} variant="secondary">
                  {secondaryAction.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>

        <aside className="card-surface relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="absolute right-0 top-0 h-36 w-36 translate-x-8 -translate-y-8 rounded-full bg-clay-100 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-8 translate-y-8 rounded-full bg-sage-100 blur-2xl" />
          <p className="eyebrow mb-4">In één oogopslag</p>
          <h2 className="font-display text-3xl leading-tight text-ink-900">
            {asideTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {asideItems.map((item) => (
              <li
                className="rounded-2xl border border-white/70 bg-white/70 px-4 py-4 text-sm leading-7 text-ink-600"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
