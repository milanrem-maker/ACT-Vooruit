"use client";

import Link from "next/link";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/content/site-config";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="page-shell sticky top-0 z-50 py-3 sm:top-2 sm:py-4">
      <div className="card-surface grid gap-3 bg-white/75 px-4 py-3 shadow-lg shadow-ink-900/5 backdrop-blur-xl sm:px-5 lg:flex lg:items-center lg:justify-between lg:gap-4 lg:py-4">
        <div className="flex items-center justify-between gap-4 lg:shrink-0 lg:justify-start">
          <div className="flex items-center gap-3">
            <Link href="/" onClick={() => setMenuOpen(false)}>
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

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink-100 bg-white/80 px-4 py-2 text-sm font-semibold text-ink-900 hover:border-sage-300 hover:bg-white lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span>{menuOpen ? "Sluiten" : "Menu"}</span>
            <span aria-hidden="true" className="grid w-4 gap-1">
              <span
                className={`h-0.5 w-4 bg-current transition-transform ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-current transition-transform ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <nav
          aria-label="Hoofdnavigatie"
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 text-sm text-ink-600 lg:flex"
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

        {menuOpen ? (
          <nav
            aria-label="Mobiele hoofdnavigatie"
            className="border-t border-ink-100/80 pt-3 lg:hidden"
            id="mobile-navigation"
          >
            <div className="grid gap-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  className="rounded-2xl px-4 py-3 text-base font-medium text-ink-700 hover:bg-white hover:text-ink-900"
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-clay-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-clay-500/20 hover:bg-clay-700"
              href={siteConfig.ctas.booking}
              onClick={() => setMenuOpen(false)}
            >
              Plan een gratis kennismaking
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
