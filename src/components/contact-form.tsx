"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

type ContactFormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

type ContactResponse = {
  message?: string;
  mailtoUrl?: string;
};

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-ink-100 bg-white px-4 py-3 text-base text-ink-900 placeholder:text-ink-300 focus:border-sage-300 focus:outline-none";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStartedAt] = useState(() => Date.now());
  const [state, setState] = useState<ContactFormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());

    setState({
      status: "submitting",
      message: "Je bericht wordt klaargezet...",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as ContactResponse;

      if (!response.ok) {
        throw new Error(
          data.message || "Versturen lukt op dit moment niet. Probeer het later opnieuw.",
        );
      }

      formRef.current.reset();
      setState({
        status: "success",
        message:
          data.message ||
          "Je bericht is verstuurd. Je ontvangt zo snel mogelijk een reactie.",
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
            : "Versturen lukt op dit moment niet. Probeer het later opnieuw.",
      });
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} ref={formRef}>
      <input name="formStartedAt" type="hidden" value={formStartedAt} />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink-700">
          Naam
          <input
            autoComplete="name"
            className={fieldClassName}
            maxLength={80}
            name="name"
            placeholder="Je naam"
            required
            type="text"
          />
        </label>

        <label className="block text-sm font-medium text-ink-700">
          E-mailadres
          <input
            autoComplete="email"
            className={fieldClassName}
            maxLength={120}
            name="email"
            placeholder="naam@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink-700">
          Telefoonnummer (optioneel)
          <input
            autoComplete="tel"
            className={fieldClassName}
            maxLength={30}
            name="phone"
            placeholder="Alleen als je liever gebeld wordt"
            type="tel"
          />
        </label>

        <label className="block text-sm font-medium text-ink-700">
          Voorkeur dagdeel (optioneel)
          <select className={fieldClassName} defaultValue="" name="preferredDaypart">
            <option value="">Geen voorkeur</option>
            <option value="ochtend">Ochtend</option>
            <option value="middag">Middag</option>
            <option value="avond">Avond</option>
            <option value="maakt-niet-uit">Maakt niet uit</option>
          </select>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-700" htmlFor="message">
          Wat is je vraag?
        </label>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-ink-600" id="message-help">
          Beschrijf je vraag kort. Deel via dit formulier liever geen diagnoses,
          medische gegevens, informatie over medicatie of een uitgebreid verhaal
          over psychische klachten. Een paar zinnen zijn voldoende.
        </p>
        <textarea
          aria-describedby="message-help"
          className={`${fieldClassName} min-h-32 resize-y`}
          id="message"
          maxLength={1200}
          name="message"
          placeholder="Een paar zinnen over je vraag is genoeg."
          required
        />
      </div>

      <div aria-hidden="true" className="hidden">
        <label>
          Website
          <input autoComplete="off" name="website" tabIndex={-1} type="text" />
        </label>
      </div>

      <p className="text-sm leading-7 text-ink-600">
        Lees hoe ACT Vooruit met je gegevens omgaat in de{" "}
        <Link className="text-link" href="/privacy">
          privacyverklaring
        </Link>
        .
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <button
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-clay-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-clay-500/20 hover:-translate-y-0.5 hover:bg-clay-700 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={state.status === "submitting"}
          type="submit"
        >
          {state.status === "submitting"
            ? "Bericht wordt klaargezet..."
            : "Verstuur bericht"}
        </button>
        <p className="text-sm leading-7 text-ink-600">
          Een kort bericht is genoeg. Je hoeft nog niets te beslissen.
        </p>
      </div>

      {state.message ? (
        <p
          aria-live="polite"
          className={`rounded-2xl px-4 py-4 text-sm leading-7 ${
            state.status === "error"
              ? "bg-clay-100/70 text-clay-700"
              : "bg-sage-100/70 text-sage-700"
          }`}
          role={state.status === "error" ? "alert" : "status"}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
