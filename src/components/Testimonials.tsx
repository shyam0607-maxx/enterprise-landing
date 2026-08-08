import Section from "@/components/ui/Section";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      tone="muted"
      eyebrow="Testimonials"
      title="What L&D and engineering leaders actually report back"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
}
