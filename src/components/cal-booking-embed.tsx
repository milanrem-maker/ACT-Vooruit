"use client";

import Link from "next/link";
import { useState } from "react";

type CalBookingEmbedProps = {
  availabilityNote: string;
  calUrl: string;
  duration: string;
  location: string;
  sessionLabel: string;
};

function normalizeCalUrl(calUrl: string) {
  const cleaned = calUrl.trim();

  if (!cleaned) {
    return "";
  }

  try {
    const normalizedUrl = new URL(
      cleaned.startsWith("http")
        ? cleaned
        : `https://cal.com/${cleaned.replace(/^\/+/, "")}`,
    );

    normalizedUrl.hash = "";
    normalizedUrl.search = "";

    return normalizedUrl.toString();
  } catch {
    return `https://cal.com/${cleaned
      .replace(/^https?:\/\/(?:app\.)?cal\.com\/?/i, "")
      .split("?")[0]
      .replace(/^\/+/, "")}`;
  }
}

function buildEmbedUrl(calUrl: string) {
  const normalizedUrl = normalizeCalUrl(calUrl);

  if (!normalizedUrl) {
    return "";
  }

  const embedUrl = new URL(normalizedUrl);
  embedUrl.searchParams.set("embed", "1");
  embedUrl.searchParams.set("layout", "month_view");

  return embedUrl.toString();
}

export function CalBookingEmbed({
  availabilityNote,
  calUrl,
  duration,
  location,
  sessionLabel,
}: CalBookingEmbedProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const directCalUrl = normalizeCalUrl(calUrl);
  const embedUrl = buildEmbedUrl(calUrl);

  return (
    <section className="page-shell pb-16 sm:pb-20" id="boeken">
      <div className="section-panel grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <aside className="section-card">
          <p className="eyebrow mb-4">Plan je kennismaking</p>
          <h2 className="font-display text-4xl leading-tight text-ink-900">
            Kies een moment dat voor jou past.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink-700">
            Kies hieronder een beschikbaar moment. Na het plannen ontvang je
            een bevestiging per e-mail.
          </p>

          <dl className="mt-8 space-y-4">
            <div className="rounded-2xl bg-sand-50 px-4 py-4">
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-sage-700">
                Gesprek
              </dt>
              <dd className="mt-2 text-lg font-semibold text-ink-900">
                {sessionLabel}
              </dd>
            </div>
            <div className="rounded-2xl bg-white/85 px-4 py-4">
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-sage-700">
                Duur
              </dt>
              <dd className="mt-2 text-lg font-semibold text-ink-900">
                {duration}
              </dd>
            </div>
            <div className="rounded-2xl bg-sand-50 px-4 py-4">
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-sage-700">
                Vorm
              </dt>
              <dd className="mt-2 text-lg font-semibold text-ink-900">
                {location}
              </dd>
            </div>
          </dl>

          <p className="mt-6 rounded-2xl bg-white/90 px-4 py-4 text-sm leading-7 text-ink-700">
            {availabilityNote}
          </p>

        </aside>

        <div>
          <div className="card-surface overflow-hidden px-3 py-3 sm:px-4 sm:py-4">
            {embedUrl ? (
              showCalendar ? (
                <div className="relative min-h-[760px] overflow-hidden rounded-[1.5rem] bg-white">
                  <iframe
                    allow="camera; microphone; fullscreen; display-capture"
                    aria-label="Agenda voor een gratis kennismaking"
                    className="absolute inset-0 h-full w-full border-0"
                    src={embedUrl}
                    title="Gratis kennismaking plannen"
                  />
                </div>
              ) : (
                <div className="flex min-h-[34rem] flex-col items-center justify-center rounded-[1.5rem] bg-sand-50 px-6 py-10 text-center">
                  <p className="eyebrow mb-4">Beschikbare momenten</p>
                  <h3 className="max-w-xl font-display text-4xl leading-tight text-ink-900">
                    Bekijk wanneer er plek is voor een kennismaking.
                  </h3>
                  <p className="mt-5 max-w-xl leading-8 text-ink-700">
                    De agenda wordt aangeboden door Cal.com. Pas wanneer je de
                    agenda opent, wordt deze externe inhoud geladen en kunnen
                    technische gegevens met Cal.com worden gedeeld. Lees meer
                    in de{" "}
                    <Link className="text-link" href="/privacy">
                      privacyverklaring
                    </Link>
                    .
                  </p>
                  <button
                    className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-clay-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-clay-500/20 hover:-translate-y-0.5 hover:bg-clay-700"
                    onClick={() => setShowCalendar(true)}
                    type="button"
                  >
                    Bekijk beschikbare momenten
                  </button>
                </div>
              )
            ) : (
              <div className="rounded-[1.5rem] bg-sand-50 px-6 py-8">
                <p className="eyebrow mb-3">Agenda niet beschikbaar</p>
                <h3 className="font-display text-3xl leading-tight text-ink-900">
                  Stuur gerust eerst een bericht.
                </h3>
                <p className="mt-4 leading-8 text-ink-700">
                  De online agenda kan nu niet worden getoond. Via de
                  contactpagina kun je wel een korte vraag stellen.
                </p>
              </div>
            )}
          </div>

          {directCalUrl ? (
            <div className="mt-4 flex flex-col items-start gap-3 rounded-[1.5rem] border border-ink-100/70 bg-white/55 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-ink-700">
                Werkt de agenda hierboven niet goed?
              </p>
              <a
                className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-ink-100 bg-white/85 px-5 py-2.5 text-sm font-semibold text-ink-900 hover:-translate-y-0.5 hover:border-sage-300 hover:bg-white"
                href={directCalUrl}
                rel="noreferrer"
                target="_blank"
              >
                Open Cal.com in een nieuw venster
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
