import { NextResponse } from "next/server";

import { siteConfig } from "@/content/site-config";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  preferredContact?: unknown;
  website?: unknown;
};

function sanitizeText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailtoUrl(payload: {
  name: string;
  email: string;
  topic: string;
  message: string;
  preferredContact: string;
}) {
  const subject = `Aanvraag via website: ${payload.topic || "contact"}`;
  const body = [
    `Naam: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Onderwerp: ${payload.topic}`,
    payload.preferredContact
      ? `Voorkeur voor contact: ${payload.preferredContact}`
      : "",
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json(
      { message: "Het formulier kon niet worden gelezen." },
      { status: 400 },
    );
  }

  const name = sanitizeText(body.name, 80);
  const email = sanitizeText(body.email, 120);
  const topic = sanitizeText(body.topic, 80);
  const message = sanitizeText(body.message, 2000);
  const preferredContact = sanitizeText(body.preferredContact, 120);
  const honeypot = sanitizeText(body.website, 80);

  if (honeypot) {
    return NextResponse.json(
      { message: "Versturen lukt op dit moment niet." },
      { status: 400 },
    );
  }

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      {
        message:
          "Vul je naam, een geldig e-mailadres en een korte omschrijving in.",
      },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  const webhookSecret = process.env.CONTACT_FORM_WEBHOOK_SECRET;

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
        topic,
        message,
        preferredContact,
        source: "act-vooruit-website",
      }),
    }).catch(() => null);

    if (!response?.ok) {
      return NextResponse.json(
        {
          message:
            "Verzenden lukt nog niet via de website. Je kunt ook direct mailen.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        "Je bericht is verstuurd. Je ontvangt zo snel mogelijk een reactie.",
    });
  }

  return NextResponse.json({
    message:
      "Je e-mailapp wordt geopend zodat je bericht direct verstuurd kan worden.",
    mailtoUrl: buildMailtoUrl({
      name,
      email,
      topic: topic || "websitevraag",
      message,
      preferredContact,
    }),
  });
}
