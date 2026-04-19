import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/content/site-config";

export function SiteHeader() {
  return (
    <header className="page-shell sticky top-4 z-40 pt-4">
      <div className="card-surface flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link className="shrink-0" href="/">
          <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-sage-700">
            ACT Vooruit
          </span>
          <span className="mt-1 block text-sm text-ink-600">
            Praktische coaching met ACT als basis
          </span>
        </Link>

        <nav
          aria-label="Hoofdnavigatie"
          className="flex flex-1 flex-wrap items-center justify-start gap-1 text-sm text-ink-600 lg:justify-center"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              className="rounded-full px-3 py-2 hover:bg-white hover:text-ink-900"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href={siteConfig.ctas.booking}>
          Plan een gratis kennismaking
        </ButtonLink>
      </div>
    </header>
  );
}
