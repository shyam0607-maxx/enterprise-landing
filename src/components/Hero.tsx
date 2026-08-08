import Button from "@/components/ui/Button";
import TutorIllustration from "@/components/TutorIllustration";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="bg-navy-2 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Enterprise Learning &amp; Development
            </p>
            <h1 className="max-w-xl text-4xl md:text-6xl font-medium leading-[1.08]">
              Training that shows up in your roadmap, not just your LMS.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Structured programs in data, AI, and product — co-built with
              practitioners, tracked against real work, and reported straight
              to the managers who need to see the outcome.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="primary">
                Enquire Now
              </Button>
              <Button href="#programs" variant="secondary">
                View Programs
              </Button>
            </div>
          </div>

          <div className="hidden justify-self-center md:flex md:justify-self-end">
            <TutorIllustration />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {stats.map((stat) => (
            <div key={stat.id}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-mono text-2xl md:text-3xl font-semibold tabular-nums">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm text-white/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
