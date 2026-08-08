import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6">
      <blockquote className="text-[1.05rem] leading-relaxed">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <span className="block text-sm font-semibold">{testimonial.name}</span>
        <span className="block text-sm text-text-muted">
          {testimonial.role}, {testimonial.company}
        </span>
      </figcaption>
    </figure>
  );
}
