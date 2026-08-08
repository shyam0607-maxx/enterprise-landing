export interface FrameworkStep {
  id: string;
  step: string;
  title: string;
  description: string;
}

export const frameworkSteps: FrameworkStep[] = [
  {
    id: "diagnose",
    step: "Diagnose",
    title: "Skill Gap Analysis",
    description:
      "We assess team skill gaps by role and level against real work — not a generic self-assessment quiz.",
  },
  {
    id: "design",
    step: "Design",
    title: "Tailored Training Plan",
    description:
      "A training plan is built around the specific gaps found, with capstone projects matched to your team's actual workflows.",
  },
  {
    id: "deliver",
    step: "Deliver",
    title: "Flexible Program Delivery",
    description:
      "Programs run on the schedule and format that fits how your team already works — live, async-first, or in-person intensives.",
  },
];
