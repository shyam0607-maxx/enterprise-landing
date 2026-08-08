"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { faqs } from "@/lib/faq";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section id="faq" tone="muted" eyebrow="FAQ" title="Common questions from L&D and eng leaders">
      <div className="max-w-2xl divide-y divide-border rounded-2xl border border-border bg-surface">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-sm text-text-muted">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
