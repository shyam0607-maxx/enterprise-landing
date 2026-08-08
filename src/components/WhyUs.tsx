import Section from "@/components/ui/Section";
import { features } from "@/lib/data";

export default function WhyUs() {
  return (
    <Section
      id="why-us"
      eyebrow="Why Accredited"
      title="L&D that has to survive contact with a busy quarter"
      description="Most enterprise training loses attention by week two. Here's what we changed about the format to fix that."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.id} className="flex gap-4 rounded-2xl bg-surface border border-border p-6">
            <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
