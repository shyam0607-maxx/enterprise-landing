import Section from "@/components/ui/Section";
import { strategicAspects } from "@/lib/strategicTraining";

export default function KeyAspects() {
  return (
    <Section
      id="strategic-training"
      eyebrow="Approach"
      title="Key aspects of strategic training"
      description="Training programs fail quietly, not loudly — they run to completion and change nothing. These are the parts of the design that keep that from happening."
    >
      <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
        {strategicAspects.map((aspect) => (
          <div
            key={aspect.id}
            className="grid gap-2 p-6 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <dt>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                {aspect.tag}
              </span>
            </dt>
            <dd>
              <p className="font-semibold">{aspect.title}</p>
              <p className="mt-1.5 text-sm text-text-muted">{aspect.description}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
