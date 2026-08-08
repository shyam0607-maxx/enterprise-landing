export interface AudienceSegment {
  id: string;
  title: string;
  description: string;
}

export const audienceSegments: AudienceSegment[] = [
  {
    id: "ld-leaders",
    title: "L&D and People Development Leaders",
    description:
      "Planning upskilling budgets and need training that reports back in outcomes, not just attendance.",
  },
  {
    id: "eng-managers",
    title: "Engineering & Product Managers",
    description:
      "Ramping a team on a new stack, framework, or discipline ahead of a specific roadmap milestone.",
  },
  {
    id: "individual-contributors",
    title: "Individual Contributors Moving Roles",
    description:
      "Engineers, analysts, and marketers transitioning into a new function — data, AI, product, or growth.",
  },
  {
    id: "hr-ops",
    title: "HR & Operations Teams",
    description:
      "Standardizing training across departments or locations and need a single vendor with consistent reporting.",
  },
];
