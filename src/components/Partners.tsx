import Section from "@/components/ui/Section";
import { partners } from "@/lib/partners";

export default function Partners() {
  return (
    <Section
      id="partners"
      eyebrow="Our Partners"
      title="Proven with teams who had to see it work"
      description="A sample of results from organizations that have run programs with us — not case studies written after the fact, numbers pulled from the same dashboard your managers would use."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <div key={partner.id} className="rounded-2xl border border-border bg-surface p-6">
            <span className="font-mono text-2xl font-semibold tabular-nums text-accent">
              {partner.stat}
            </span>
            <p className="mt-2 text-sm text-text-muted">{partner.result}</p>
            <p className="mt-4 border-t border-border pt-3 text-sm font-semibold">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
