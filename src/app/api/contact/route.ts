import { NextResponse } from "next/server";

import { siteConfig } from "@/content/site-config";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  preferredDaypart?: unknown;
  message?: unknown;
  formStartedAt?: unknown;
  website?: unknown;
};

const allowedDayparts = new Set([
  "",
  "ochtend",
  "middag",
  "avond",
  "maakt-niet-uit",
]);

function sanitizeText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, maxLength)
    : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildMailtoUrl(payload: {
  name: string;
  email: string;
  phone: string;
  preferredDaypart: string;
  message: string;
}) {
  const subject = "Vraag via de website van ACT Vooruit";
  const body = [
    `Naam: ${payload.name}`,
    `E-mail: ${payload.email}`,
    payload.phone ? `Telefoonnummer: ${payload.phone}` : "",
    payload.preferredDaypart
      ? `Voorkeur dagdeel: ${payload.preferredDaypart}`
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
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > 12_000) {
    return NextResponse.json(
      { message: "Je bericht is te lang. Houd het bij een paar zinnen." },
      { status: 413 },
    );
  }

  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return NextResponse.json(
      { message: "Het formulier kon niet worden gelezen." },
      { status: 400 },
    );
  }

  const name = sanitizeText(body.name, 80);
  const email = sanitizeText(body.email, 120).toLowerCase();
  const phone = sanitizeText(body.phone, 30);
  const preferredDaypart = sanitizeText(body.preferredDaypart, 30);
  const message = sanitizeText(body.message, 1200);
  const honeypot = sanitizeText(body.website, 80);
  const formStartedAt = Number(body.formStartedAt);
  const submittedTooQuickly =
    Number.isFinite(formStartedAt) && Date.now() - formStartedAt < 1_500;

  if (honeypot || submittedTooQuickly) {
    return NextResponse.json({
      message: "Je bericht is ontvangen.",
    });
  }

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      {
        message:
          "Vul je naam, een geldig e-mailadres en een korte vraag in.",
      },
      { status: 400 },
    );
  }

  if (!allowedDayparts.has(preferredDaypart)) {
    return NextResponse.json(
      { message: "Kies een geldige voorkeur voor het dagdeel." },
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
        phone,
        preferredDaypart,
        message,
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
      "Je e-mailapp wordt geopend zodat je het bericht zelf kunt versturen.",
    mailtoUrl: buildMailtoUrl({
      name,
      email,
      phone,
      preferredDaypart,
      message,
    }),
  });
}
