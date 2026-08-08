import Section from "@/components/ui/Section";
import { domains } from "@/lib/domains";

export default function DomainExpertise() {
  return (
    <Section
      id="domain-expertise"
      tone="muted"
      eyebrow="Domain Expertise"
      title="We're experts in these domains"
      description="Every track is built and taught by practitioners currently working in the domain — not adapted from a generic curriculum."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain) => (
          <div key={domain.id} className="rounded-2xl border border-border bg-surface p-6">
            <span aria-hidden="true" className="mb-3 block h-2 w-2 rounded-full bg-accent" />
            <h3 className="font-semibold">{domain.name}</h3>
            <p className="mt-2 text-sm text-text-muted">{domain.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
