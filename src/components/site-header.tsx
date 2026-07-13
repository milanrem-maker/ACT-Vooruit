import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/content/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-[90rem] px-3 sm:px-5 lg:px-6">
      <div className="relative grid gap-3 rounded-b-[2rem] border-x border-b border-ink-100/80 bg-white px-4 py-4 shadow-[0_14px_38px_rgba(35,46,41,0.08)] sm:px-6 xl:grid-cols-[minmax(12rem,1fr)_auto_minmax(12rem,1fr)] xl:items-center xl:gap-6 xl:px-8 xl:py-5">
        <div className="flex items-center justify-between gap-4 xl:justify-start">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-sage-700">
                ACT Vooruit
              </span>
              <span className="mt-1 block text-sm text-ink-600">
                {siteConfig.tagline}
              </span>
            </Link>
            <span className="hidden rounded-full bg-sand-50 px-3 py-1 text-xs font-semibold text-ink-600 sm:inline-flex">
              {siteConfig.launch.status}
            </span>
          </div>

          <details className="group xl:hidden">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-semibold text-ink-900 hover:border-sage-300">
              <span className="group-open:hidden">Menu</span>
              <span className="hidden group-open:inline">Sluiten</span>
              <span aria-hidden="true" className="grid w-4 gap-1">
                <span
                  className="h-0.5 w-4 bg-current group-open:translate-y-1.5 group-open:rotate-45"
                />
                <span className="h-0.5 w-4 bg-current group-open:opacity-0" />
                <span
                  className="h-0.5 w-4 bg-current group-open:-translate-y-1.5 group-open:-rotate-45"
                />
              </span>
            </summary>

            <nav
              aria-label="Mobiele hoofdnavigatie"
              className="absolute inset-x-0 top-[calc(100%-1px)] z-10 rounded-b-[2rem] border-x border-b border-ink-100/80 bg-white px-4 pb-5 pt-3 shadow-[0_18px_38px_rgba(35,46,41,0.1)] sm:px-6"
            >
              <div className="grid gap-1 border-t border-ink-100/80 pt-3">
                {siteConfig.navigation.map((item) => (
                  <Link
                    className="rounded-2xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-sand-50 hover:text-ink-900"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-clay-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-clay-500/20 hover:bg-clay-700"
                href={siteConfig.ctas.booking}
              >
                Plan een gratis kennismaking
              </Link>
            </nav>
          </details>
        </div>

        <nav
          aria-label="Hoofdnavigatie"
          className="hidden items-center justify-center gap-1 text-sm text-ink-600 xl:flex"
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

        <div className="hidden justify-self-end xl:block">
          <ButtonLink href={siteConfig.ctas.booking}>
            Plan een gratis kennismaking
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
