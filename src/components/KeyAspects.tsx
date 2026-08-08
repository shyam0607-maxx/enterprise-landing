import Section from "@/components/ui/Section";
import { strategicAspects } from "@/lib/strategicTraining";

const RADIUS = 320;

export default function KeyAspects() {
  const count = strategicAspects.length;
  const angleStep = 360 / count;

  return (
    <Section
      id="strategic-training"
      tone="muted"
      eyebrow="Approach"
      title="Key aspects of strategic training"
      description="Training programs fail quietly, not loudly — they run to completion and change nothing. These are the parts of the design that keep that from happening."
    >
      <div className="hidden md:block">
        <div
          className="relative mx-auto flex justify-center"
          style={{ perspective: "1600px", height: 360 }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            className="relative hover:[animation-play-state:paused]"
            style={{
              width: 280,
              height: 280,
              transformStyle: "preserve-3d",
              animation: "spin3d 32s linear infinite",
            }}
          >
            {strategicAspects.map((aspect, i) => (
              <div
                key={aspect.id}
                className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xl [backface-visibility:hidden]"
                style={{
                  transform: `rotateY(${i * angleStep}deg) translateZ(${RADIUS}px)`,
                }}
              >
                <span className="font-mono text-xs text-text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                    {aspect.tag}
                  </span>
                  <p className="mt-2 font-semibold">{aspect.title}</p>
                  <p className="mt-1.5 text-sm text-text-muted">{aspect.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-text-muted">
          Hover to pause and read each aspect in full.
        </p>
      </div>

      <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface md:hidden">
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
