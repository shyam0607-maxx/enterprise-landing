import Section from "@/components/ui/Section";
import { segmentDimensions } from "@/lib/segmentation";

export default function CourseSegmentation() {
  return (
    <Section
      id="course-segmentation"
      tone="muted"
      eyebrow="Tailored Course Segmentation"
      title="The same program, scoped differently for who's taking it"
      description="Courses aren't one fixed track. They're segmented along a few dimensions so what a team receives actually matches their level, role, and rollout."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {segmentDimensions.map((dimension) => (
          <div key={dimension.id} className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              {dimension.label}
            </p>
            <h3 className="mt-2 font-semibold">{dimension.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{dimension.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dimension.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
