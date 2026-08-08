export interface SegmentDimension {
  id: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export const segmentDimensions: SegmentDimension[] = [
  {
    id: "skill-level",
    label: "By Skill Level",
    title: "Foundational to advanced",
    description:
      "Every track has three entry points so a team with mixed experience doesn't have to train at the pace of its newest hire.",
    tags: ["Foundational", "Practitioner", "Advanced"],
  },
  {
    id: "function",
    label: "By Function",
    title: "Built around the role, not a generic syllabus",
    description:
      "The same subject looks different for an engineer, a PM, or a marketer — course content is scoped to what each function actually does with it.",
    tags: ["Engineering", "Product", "Data & Analytics", "Marketing & Growth"],
  },
  {
    id: "rollout-size",
    label: "By Rollout Size",
    title: "From one hire to a whole org",
    description:
      "The same curriculum scales from a single new joiner ramping up to a department-wide rollout with shared reporting.",
    tags: ["Individual", "Squad", "Org-wide"],
  },
  {
    id: "format",
    label: "By Format",
    title: "Fit around real schedules",
    description:
      "Teams choose how the material is delivered based on timeline and how much live facilitation they need.",
    tags: ["Self-paced modules", "Instructor-led sessions", "Blended"],
  },
];
