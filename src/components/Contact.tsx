"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { siteContent } from "@/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { contact, profile } = siteContent;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const formspreeId = contact.formspreeId;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formspreeId) {
      setStatus("error");
      setError(
        "Contact form isn't configured yet. Set NEXT_PUBLIC_FORMSPREE_ID, or email me directly."
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setStatus("error");
        setError(json?.errors?.[0]?.message ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" jp="連絡" title={contact.heading}>
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div>
            <p className="text-lg text-muted">{contact.blurb}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block text-lg font-medium text-accent-2 transition hover:text-foreground"
            >
              {profile.email}
            </a>
            <div className="mt-6 flex gap-5">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {status === "success" ? (
            <div className="flex h-full items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
              <p className="text-lg font-medium">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-background-elevated/60 px-4 py-3 outline-none transition focus:border-accent"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="rounded-xl border border-border bg-background-elevated/60 px-4 py-3 outline-none transition focus:border-accent"
                />
              </div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your message"
                className="w-full resize-none rounded-xl border border-border bg-background-elevated/60 px-4 py-3 outline-none transition focus:border-accent"
              />

              {status === "error" && (
                <p className="text-sm text-accent-3">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
