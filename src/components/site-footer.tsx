import Link from "next/link";

import { siteConfig } from "@/content/site-config";

function socialLinks() {
  return Object.entries(siteConfig.socials).filter(([, href]) => Boolean(href));
}

export function SiteFooter() {
  const socials = socialLinks();

  return (
    <footer className="page-shell pb-10 pt-6 sm:pb-14">
      <div className="card-surface grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <p className="eyebrow mb-4">ACT Vooruit</p>
          <h2 className="font-display text-3xl leading-tight text-ink-900">
            Milan Rem.
          </h2>
          <p className="mt-4 max-w-prose text-base leading-8 text-ink-600">
            ACT-based coaching voor studenten en young professionals die
            vastlopen in piekeren, vermijding en prestatiedruk.
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-600">
            Geen therapie of diagnose. Wel praktische begeleiding, met een
            gratis online kennismaking als eerste stap.
          </p>
          <p className="mt-4 rounded-2xl bg-sand-50 px-4 py-3 text-sm leading-7 text-ink-700">
            <strong>{siteConfig.launch.status}:</strong>{" "}
            {siteConfig.launch.description}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigatie</p>
          <ul className="space-y-2 text-sm text-ink-600">
            {[...siteConfig.navigation, ...siteConfig.footerNavigation].map((item) => (
              <li key={item.href}>
                <Link className="hover:text-clay-700" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Praktische info</p>
          <ul className="space-y-2 text-sm leading-7 text-ink-600">
            <li>
              <a className="hover:text-clay-700" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </li>
            <li>Locatie: {siteConfig.region}</li>
            <li>Reactietijd: {siteConfig.contact.responseTime}</li>
          </ul>
          {socials.length ? (
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-ink-600">
              {socials.map(([label, href]) => (
                <a
                  className="pill hover:border-sage-300 hover:text-ink-900"
                  href={href}
                  key={label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
