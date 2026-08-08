import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  tone?: "default" | "muted" | "navy";
  className?: string;
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-bg",
  muted: "bg-surface-2",
  navy: "bg-navy-2 text-white",
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${toneClasses[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.14em] ${
                  tone === "navy" ? "text-accent" : "text-accent"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-medium">{title}</h2>
            )}
            {description && (
              <p
                className={`mt-4 text-base ${
                  tone === "navy" ? "text-white/70" : "text-text-muted"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
