"use client";

import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import ProgramCard from "@/components/ProgramCard";
import type { Program } from "@/lib/data";

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/programs")
      .then((res) => res.json())
      .then((data: { programs: Program[] }) => {
        if (!cancelled) {
          setPrograms(data.programs);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section
      id="programs"
      eyebrow="Programs"
      title="Built for the roles you're already hiring for"
      description="Four tracks, each ending in a graded capstone tied to real team workflows — not a slide deck."
    >
      {status === "loading" && (
        <p className="text-sm text-text-muted">Loading programs…</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Couldn&apos;t load programs right now. Please refresh.
        </p>
      )}
      {status === "ready" && (
        <div className="grid gap-6 sm:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      )}
    </Section>
  );
}
