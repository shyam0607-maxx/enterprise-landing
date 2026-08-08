import type { Program } from "@/lib/data";
import ProgramImage from "@/components/ProgramImage";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6">
      <ProgramImage icon={program.icon} label={program.name} />
      <span className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
        {program.category}
      </span>
      <h3 className="mt-2 text-xl font-semibold font-display">{program.name}</h3>
      <p className="mt-3 text-sm text-text-muted">{program.description}</p>

      <ul className="mt-5 flex flex-col gap-2">
        {program.outcomes.map((outcome) => (
          <li key={outcome} className="flex items-start gap-2 text-sm">
            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-text-muted font-mono tabular-nums">
        <span>{program.duration}</span>
        <span>{program.format}</span>
      </div>
    </article>
  );
}
