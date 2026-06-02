"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type BookingDay = {
  date: string;
  isoDate: string;
  slots: ReadonlyArray<{
    id: string;
    label: string;
  }>;
};

type BookingFormProps = {
  availabilityNote: string;
  duration: string;
  location: string;
  sessionLabel: string;
  slots: ReadonlyArray<BookingDay>;
};

type BookingResponse = {
  message?: string;
  mailtoUrl?: string;
};

type BookingState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const inputClassName =
  "mt-2 w-full rounded-2xl border border-ink-100 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-300 focus:border-sage-300 focus:outline-none";

export function BookingForm({
  availabilityNote,
  duration,
  location,
  sessionLabel,
  slots,
}: BookingFormProps) {
  const flattenedSlots = useMemo(
    () =>
      slots.flatMap((day) =>
        day.slots.map((slot) => ({
          id: slot.id,
          label: `${day.date} om ${slot.label}`,
        })),
      ),
    [slots],
  );

  const [selectedSlot, setSelectedSlot] = useState(flattenedSlots[0]?.id ?? "");
  const [state, setState] = useState<BookingState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setState({
      status: "submitting",
      message: "Je aanvraag wordt klaargezet...",
    });

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as BookingResponse;

      if (!response.ok) {
        throw new Error(data.message || "Boeken lukt op dit moment niet.");
      }

      setState({
        status: "success",
        message:
          data.message ||
          "Je aanvraag is verstuurd. Je ontvangt zo snel mogelijk een bevestiging.",
      });

      if (data.mailtoUrl) {
        window.location.href = data.mailtoUrl;
      }
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Boeken lukt op dit moment niet.",
      });
    }
  }

  return (
    <section className="page-shell pb-16 sm:pb-20" id="boeken">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface px-6 py-6 sm:px-8">
          <p className="eyebrow mb-4">Boek een kennismaking</p>
          <h2 className="font-display text-4xl leading-tight text-ink-900">
            Kies een moment dat voor jou werkt.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink-700">
            Je kiest hieronder een voorlopig moment voor een gratis eerste
            gesprek. Daarna stuur je je aanvraag in. Ik bevestig het slot per
            mail of stel iets dicht in de buurt voor.
          </p>

          <div className="mt-8 space-y-5">
            {slots.map((day) => (
              <div className="rounded-[1.8rem] bg-sand-50 px-5 py-5" key={day.isoDate}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-ink-900">{day.date}</p>
                    <p className="mt-1 text-sm text-ink-700">
                      {sessionLabel} · {duration}
                    </p>
                  </div>
                  <span className="pill">{location}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {day.slots.map((slot) => {
                    const isActive = selectedSlot === slot.id;

                    return (
                      <button
                        className={`rounded-full px-4 py-3 text-sm font-semibold ${
                          isActive
                            ? "bg-clay-500 text-white shadow-lg shadow-clay-500/20"
                            : "border border-ink-100 bg-white text-ink-900 hover:border-sage-300"
                        }`}
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot.id)}
                        type="button"
                      >
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl bg-white/80 px-4 py-4 text-sm leading-7 text-ink-700">
            {availabilityNote}
          </p>
        </div>

        <form className="card-surface space-y-5 px-6 py-6 sm:px-8" onSubmit={handleSubmit}>
          <div>
            <p className="eyebrow mb-4">Jouw aanvraag</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Maak je aanvraag compleet.
            </h2>
            <p className="mt-4 text-base leading-8 text-ink-700">
              Je hoeft alleen kort te delen waar je in vastloopt en welk moment
              je voorkeur heeft.
            </p>
          </div>

          <input name="selectedSlot" type="hidden" value={selectedSlot} />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-ink-700">
              Naam
              <input
                className={inputClassName}
                name="name"
                placeholder="Je voornaam en achternaam"
                required
                type="text"
              />
            </label>

            <label className="block text-sm font-medium text-ink-700">
              E-mailadres
              <input
                className={inputClassName}
                name="email"
                placeholder="naam@example.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-ink-700">
            Gekozen moment
            <select
              className={inputClassName}
              name="selectedSlotVisible"
              onChange={(event) => setSelectedSlot(event.target.value)}
              value={selectedSlot}
            >
              {flattenedSlots.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-medium text-ink-700">
            Waar loop je nu vooral in vast?
            <textarea
              className={`${inputClassName} min-h-36 resize-y`}
              name="message"
              placeholder="Een paar zinnen is genoeg. Bijvoorbeeld: veel piekeren, uitstellen of onzekerheid over studie of werk."
              required
            />
          </label>

          <label className="block text-sm font-medium text-ink-700">
            Voorkeur voor contact
            <input
              className={inputClassName}
              name="preferredContact"
              placeholder="Bijvoorbeeld online kennismaken of eerst per mail"
              type="text"
            />
          </label>

          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input autoComplete="off" name="website" tabIndex={-1} type="text" />
            </label>
          </div>

          <div className="rounded-[1.8rem] bg-sand-50 px-5 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage-700">
              Gekozen slot
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-900">
              {flattenedSlots.find((slot) => slot.id === selectedSlot)?.label ??
                "Kies eerst een moment"}
            </p>
            <p className="mt-2 text-sm leading-7 text-ink-700">
              {sessionLabel} · {duration} · {location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-clay-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-clay-500/20 hover:-translate-y-0.5 hover:bg-clay-700 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={state.status === "submitting" || !selectedSlot}
              type="submit"
            >
              {state.status === "submitting"
                ? "Aanvraag wordt verstuurd..."
                : "Plan dit moment"}
            </button>
            <p className="text-sm leading-7 text-ink-700">
              Je aanvraag is pas definitief na bevestiging per mail.
            </p>
          </div>

          {state.message ? (
            <p
              className={`rounded-2xl px-4 py-4 text-sm leading-7 ${
                state.status === "error"
                  ? "bg-clay-100/70 text-clay-700"
                  : "bg-sage-100/70 text-sage-700"
              }`}
            >
              {state.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
