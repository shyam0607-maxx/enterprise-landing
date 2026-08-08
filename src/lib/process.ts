export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery call",
    description:
      "We map your team's current skill gaps against the roles you're hiring or promoting into.",
  },
  {
    id: "design",
    title: "Curriculum mapped to your team",
    description:
      "Program content and capstone projects are adapted to your stack, tools, and real workflows.",
  },
  {
    id: "delivery",
    title: "Program runs live",
    description:
      "Your team learns together on a fixed schedule with practitioner instructors and weekly checkpoints.",
  },
  {
    id: "reporting",
    title: "Outcomes reported back",
    description:
      "Managers get completion, capstone grades, and skill growth per learner — not attendance hours.",
  },
];
