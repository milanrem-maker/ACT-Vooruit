import { NextResponse } from "next/server";

import { siteConfig } from "@/content/site-config";

type BookingPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  preferredContact?: unknown;
  selectedSlot?: unknown;
  selectedSlotVisible?: unknown;
  website?: unknown;
};

function sanitizeText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function resolveSlotLabel(selectedSlot: string) {
  for (const day of siteConfig.booking.slots) {
    for (const slot of day.slots) {
      if (slot.id === selectedSlot) {
        return `${day.date} om ${slot.label}`;
      }
    }
  }

  return "";
}

function buildMailtoUrl(payload: {
  name: string;
  email: string;
  selectedSlot: string;
  message: string;
  preferredContact: string;
}) {
  const slotLabel = resolveSlotLabel(payload.selectedSlot) || payload.selectedSlot;
  const subject = `Boekingsaanvraag ${siteConfig.booking.sessionLabel}: ${slotLabel}`;
  const body = [
    `Naam: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Aangevraagd moment: ${slotLabel}`,
    payload.preferredContact
      ? `Voorkeur voor contact: ${payload.preferredContact}`
      : "",
    "",
    "Waar loopt deze persoon in vast?",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as BookingPayload | null;

  if (!body) {
    return NextResponse.json(
      { message: "De boekingsaanvraag kon niet worden gelezen." },
      { status: 400 },
    );
  }

  const name = sanitizeText(body.name, 80);
  const email = sanitizeText(body.email, 120);
  const message = sanitizeText(body.message, 2000);
  const preferredContact = sanitizeText(body.preferredContact, 120);
  const selectedSlot = sanitizeText(body.selectedSlot, 80);
  const honeypot = sanitizeText(body.website, 80);

  if (honeypot) {
    return NextResponse.json(
      { message: "Boeken lukt op dit moment niet." },
      { status: 400 },
    );
  }

  if (!name || !email || !message || !selectedSlot || !isValidEmail(email)) {
    return NextResponse.json(
      {
        message:
          "Kies een moment en vul je naam, e-mailadres en een korte toelichting in.",
      },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.BOOKING_FORM_WEBHOOK_URL;
  const webhookSecret = process.env.BOOKING_FORM_WEBHOOK_SECRET;
  const slotLabel = resolveSlotLabel(selectedSlot) || selectedSlot;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookSecret
          ? {
              Authorization: `Bearer ${webhookSecret}`,
            }
          : {}),
      },
      body: JSON.stringify({
        name,
        email,
        message,
        preferredContact,
        selectedSlot,
        slotLabel,
        source: "act-vooruit-booking-form",
      }),
    }).catch(() => null);

    if (!response?.ok) {
      return NextResponse.json(
        {
          message:
            "De aanvraag kon niet via de website verstuurd worden. Probeer het later opnieuw of mail direct.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        "Je aanvraag is verstuurd. Je ontvangt zo snel mogelijk een bevestiging per mail.",
    });
  }

  return NextResponse.json({
    message:
      "Je e-mailapp wordt geopend om deze boekingsaanvraag direct te versturen.",
    mailtoUrl: buildMailtoUrl({
      name,
      email,
      selectedSlot,
      message,
      preferredContact,
    }),
  });
}
