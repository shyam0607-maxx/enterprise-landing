export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  {
    id: "program-size",
    question: "What's the minimum program size?",
    answer:
      "We run programs starting at 12 learners. Below that, we'll typically recommend joining the next open program instead of a dedicated one.",
  },
  {
    id: "customization",
    question: "Can the curriculum be customized to our tech stack?",
    answer:
      "Yes — during the discovery call we map capstone projects and examples to the tools and workflows your team already uses.",
  },
  {
    id: "reporting",
    question: "How do we track progress as managers?",
    answer:
      "Every program includes a live dashboard showing attendance, project completion, and capstone grades per learner, updated weekly.",
  },
  {
    id: "remote",
    question: "Is this delivered in person or remote?",
    answer:
      "Programs are live and remote by default, with in-person intensives available for teams of 25+ on request.",
  },
  {
    id: "billing",
    question: "How is billing structured for enterprise programs?",
    answer:
      "Programs are billed per seat with volume pricing above 20 learners. We'll send a proposal after the discovery call.",
  },
];
