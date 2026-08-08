import Section from "@/components/ui/Section";
import { frameworkSteps } from "@/lib/framework";

export default function Framework() {
  return (
    <Section
      id="framework"
      eyebrow="The 3D Method"
      title="Our approach to learning that actually sticks"
      description="A structured three-step process — run before a single session gets scheduled — that keeps training tied to the gaps it's meant to close."
    >
      <ol className="grid gap-6 sm:grid-cols-3">
        {frameworkSteps.map((step, i) => (
          <li key={step.id} className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-3xl font-semibold tabular-nums text-accent">
                {i + 1}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                {step.step}
              </span>
            </div>
            <h3 className="mt-4 font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
