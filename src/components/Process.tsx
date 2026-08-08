import Section from "@/components/ui/Section";
import { processSteps } from "@/lib/process";

export default function Process() {
  return (
    <Section
      id="process"
      tone="muted"
      eyebrow="How It Works"
      title="From discovery call to a graded program in four steps"
    >
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li key={step.id} className="relative rounded-2xl border border-border bg-surface p-6">
            <span className="font-mono text-sm text-accent tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
