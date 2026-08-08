export type ProgramIcon = "data" | "ai" | "product" | "marketing";

export interface Program {
  id: string;
  name: string;
  category: string;
  duration: string;
  format: string;
  description: string;
  outcomes: string[];
  icon: ProgramIcon;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const programs: Program[] = [
  {
    id: "data-science",
    name: "Applied Data Science",
    category: "Data & Analytics",
    duration: "16 weeks",
    format: "Live + Async",
    description:
      "Statistical modeling, experimentation, and decision science for teams shipping data products.",
    outcomes: ["Build production ML pipelines", "Design A/B tests", "Present findings to leadership"],
    icon: "data",
  },
  {
    id: "ai-ml-eng",
    name: "AI & ML Engineering",
    category: "Artificial Intelligence",
    duration: "20 weeks",
    format: "Live",
    description:
      "From model fine-tuning to deployment — for engineering teams building AI into core products.",
    outcomes: ["Fine-tune and evaluate models", "Deploy with monitoring", "Manage inference cost at scale"],
    icon: "ai",
  },
  {
    id: "product-mgmt",
    name: "Product Management",
    category: "Product & Strategy",
    duration: "12 weeks",
    format: "Live + Async",
    description:
      "Roadmapping, discovery, and cross-functional leadership for new and transitioning PMs.",
    outcomes: ["Run structured discovery", "Prioritize with data", "Lead cross-functional delivery"],
    icon: "product",
  },
  {
    id: "digital-marketing",
    name: "Growth & Digital Marketing",
    category: "Marketing",
    duration: "10 weeks",
    format: "Async-first",
    description:
      "Full-funnel acquisition, lifecycle, and analytics training for marketing teams under growth pressure.",
    outcomes: ["Build attribution models", "Run channel experiments", "Report ROI to the board"],
    icon: "marketing",
  },
];

export const features: Feature[] = [
  {
    id: "structured",
    title: "Structured, not self-paced",
    description:
      "Teams learn together on a fixed schedule, with peer accountability that self-paced courses lose within two weeks.",
  },
  {
    id: "industry",
    title: "Built with practitioners",
    description:
      "Curriculum is co-designed with engineers and operators currently working the roles we train for, refreshed every program cycle.",
  },
  {
    id: "manager",
    title: "Manager visibility",
    description:
      "L&D and people managers get a live dashboard of attendance, project completion, and skill growth per learner.",
  },
  {
    id: "outcomes",
    title: "Outcome-tied, not hours-tied",
    description:
      "Every program ends in a graded capstone tied to a real workflow — not a certificate of attendance.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "We ran the AI & ML Engineering program with 40 engineers. Completion was 91% — higher than any internal training we've tried.",
    name: "Priya Nair",
    role: "VP Engineering",
    company: "Northbridge Systems",
  },
  {
    id: "t2",
    quote:
      "The manager dashboard changed how we think about L&D spend — we can finally see which teams are actually applying what they learned.",
    name: "Daniel Ostrowski",
    role: "Head of People Development",
    company: "Ferro Logistics",
  },
  {
    id: "t3",
    quote:
      "Our PM program shipped a real discovery process by week 6. It wasn't theoretical — they used it on live roadmap work immediately.",
    name: "Meera Krishnan",
    role: "Director of Product",
    company: "Solace Health",
  },
  {
    id: "t4",
    quote:
      "Growth & Digital Marketing was the first training our team finished without a single dropout. The capstone used our actual campaign data, not a case study.",
    name: "Owen Marchetti",
    role: "Head of Growth",
    company: "Ovation Media",
  },
];

export const stats = [
  { id: "s1", value: "128", label: "Enterprise programs delivered" },
  { id: "s2", value: "94%", label: "Average completion rate" },
  { id: "s3", value: "40+", label: "Industry practitioner instructors" },
  { id: "s4", value: "3.2x", label: "Median promotion rate, 12mo post-program" },
];
