export interface Domain {
  id: string;
  name: string;
  description: string;
}

export const domains: Domain[] = [
  {
    id: "data-analytics",
    name: "Data & Analytics",
    description:
      "Statistical modeling, experimentation design, and decision science taught by practitioners who ship this work weekly.",
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    description:
      "Model fine-tuning, evaluation, and production deployment — covering the full lifecycle, not just notebooks.",
  },
  {
    id: "product",
    name: "Product Management",
    description:
      "Discovery, roadmapping, and cross-functional delivery for teams moving from feature factory to outcome-driven.",
  },
  {
    id: "growth-marketing",
    name: "Digital Marketing & Growth",
    description:
      "Full-funnel acquisition, lifecycle, and attribution — built for teams accountable for ROI, not just reach.",
  },
  {
    id: "cloud-platform",
    name: "Cloud & Platform Engineering",
    description:
      "Infrastructure, deployment pipelines, and cost management for teams scaling beyond a single region.",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Fundamentals",
    description:
      "Threat modeling and secure-by-default practices for engineering teams that aren't security specialists.",
  },
];
