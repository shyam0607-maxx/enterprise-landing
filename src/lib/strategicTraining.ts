export interface StrategicAspect {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export const strategicAspects: StrategicAspect[] = [
  {
    id: "alignment",
    tag: "Alignment",
    title: "Needs mapped to roles, not a course catalog",
    description:
      "Training starts from a documented list of skill gaps per role, built with the hiring manager — not a generic curriculum picked off a shelf.",
  },
  {
    id: "buy-in",
    tag: "Buy-in",
    title: "Leadership signs off before the program starts",
    description:
      "Managers agree on success criteria and protected time up front, so the program isn't competing with sprint deadlines three weeks in.",
  },
  {
    id: "measurement",
    tag: "Measurement",
    title: "Outcomes are measured, not assumed",
    description:
      "Completion, capstone grade, and on-the-job application are tracked and reported back — not just seat time in a dashboard.",
  },
  {
    id: "reinforcement",
    tag: "Reinforcement",
    title: "Reinforcement continues after the program ends",
    description:
      "Spaced practice and manager check-ins in the following quarter are built into the plan, not left to chance once the certificate is issued.",
  },
  {
    id: "strategy-fit",
    tag: "Strategy Fit",
    title: "Tied to a real business priority",
    description:
      "Each program maps to a stated priority — a migration, a launch, a new function — so the organization has a reason to protect the time spent.",
  },
];
