import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/content/site-config";

export function SiteHeader() {
  return (
    <header className="page-shell sticky top-4 z-40 pt-4">
      <div className="card-surface grid gap-3 px-4 py-3 sm:px-5 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:py-4">
        <Link className="shrink-0" href="/">
          <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-sage-700">
            ACT Vooruit
          </span>
          <span className="mt-1 block text-sm text-ink-600">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav
          aria-label="Hoofdnavigatie"
          className="-mx-2 flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto px-2 text-sm text-ink-600 lg:mx-0 lg:justify-center lg:overflow-visible lg:px-0"
        >
          {siteConfig.navigation.map((item) => (
            <Link
              className="shrink-0 rounded-full px-3 py-2 hover:bg-white hover:text-ink-900"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <ButtonLink href={siteConfig.ctas.booking}>
            Plan een gratis kennismaking
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
