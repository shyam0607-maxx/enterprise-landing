import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { audienceSegments } from "@/lib/audience";

export default function WhoCanJoin() {
  return (
    <Section
      id="who-can-join"
      eyebrow="Who Can Join"
      title="Built for the people who own the training decision — and the people who sit through it"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {audienceSegments.map((segment) => (
          <div key={segment.id} className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-semibold">{segment.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{segment.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <p className="text-sm text-text-muted">Not sure which track fits your team?</p>
        <Button href="#contact" variant="ghost">
          Enquire Now
        </Button>
      </div>
    </Section>
  );
}
