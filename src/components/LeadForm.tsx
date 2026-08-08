"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <Section id="contact" tone="navy" eyebrow="Talk to Us" title="Thanks — we've got it.">
        <p className="max-w-lg text-white/70">
          A program advisor will reach out within one business day to talk
          through program size, timeline, and which track fits your team.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </Section>
    );
  }

  return (
    <Section
      id="contact"
      tone="navy"
      eyebrow="Talk to Us"
      title="Bring this program to your team"
      description="Tell us a bit about your team and we'll follow up with a proposed program plan."
    >
      <form onSubmit={handleSubmit} className="grid max-w-2xl gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" required />
        <Field label="Team size" name="teamSize" placeholder="e.g. 25–50" />
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm text-white/70">
            What are you hoping to train for?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent"
            placeholder="e.g. Ramping 15 engineers on applied ML within a quarter"
          />
        </div>

        {status === "error" && (
          <p role="alert" className="sm:col-span-2 text-sm text-red-300">
            {errorMessage}
          </p>
        )}

        <div className="sm:col-span-2">
          <Button type="submit" variant="primary" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Enquire Now"}
          </Button>
        </div>
      </form>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-white/70">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent"
      />
    </div>
  );
}
