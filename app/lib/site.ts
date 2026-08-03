export const siteConfig = {
  name: "Devizur Press",
  url: "https://devizur.com",
  email: "contact@devizur.com",
  book: {
    title: "Decision System",
    subtitle:
      "How Companies Turn Trusted Data Into Decisions That Change Outcomes",
    author: "Hafiz Rahman",
  },
  amazon: {
    ebook: "https://www.amazon.com.au/dp/B0H9NLJ667",
    paperback: "https://www.amazon.com.au/dp/176482170X",
  },
  sampleChapter:
    "https://www.amazon.com.au/dp/B0H9NLJ667?asin=B0H9NLJ667&revisionId=cecc7ac9&format=3&depth=1",
  linkedIn: "https://www.linkedin.com/in/hafizengineering",
  socialProof: [
    {
      quote:
        "This book perfectly captures and solves many problems I've encountered with data across multiple organizations I've worked in. A clear system that helps cut through the noise and sanity checks the decision making process. Essential reading for any modern executive.",
      name: "Umut Omer",
      title: "Chief Commercial Officer",
      company: "Stakk",
    },
    {
      quote:
        "A light, fast, and engaging read that argues the real challenge in decision-making is not the lack of data, but the design of the decision system itself. Through a practical five-layer framework, it offers valuable insights for both decision-makers and those building decision system. A must-have non-technical read for every data professional and leader.",
      name: "Gopal Das",
      title: "Director (Data Science)",
      company: "CrimsonLogic (PSA Group)",
    },
    {
      quote:
        "You built the platform. Decision System shows you how to earn the business's trust in what comes out of it through explicit definitions, enforceable data contracts, and ownership designed for trust rather than left to hope. An indispensable read for technology leaders who want their platforms to drive confident business decisions.",
      name: "A. Y. M Mostafa",
      title: "CTO",
      company: "Prime Bank PLC",
    },
  ],
  learnItems: [
    {
      title: "Trust",
      description: "Build numbers people confidently use.",
      icon: "trust" as const,
    },
    {
      title: "Coherence",
      description: "Create one shared language across the business.",
      icon: "coherence" as const,
    },
    {
      title: "Access",
      description: "Make trusted information available where decisions happen.",
      icon: "access" as const,
    },
    {
      title: "Ownership",
      description: "Know exactly who owns every important metric.",
      icon: "ownership" as const,
    },
    {
      title: "Value",
      description:
        "Measure success by business outcomes instead of reporting activity.",
      icon: "value" as const,
    },
    {
      title: "Operating the System",
      description: "Turn trusted data into repeatable decision-making.",
      icon: "operating" as const,
    },
  ],
  problems: [
    "Your meetings start by arguing over which number is correct.",
    "Different teams define the same metric differently.",
    "Dashboards exist but confidence doesn't.",
    "Years of investment still haven't improved decision making.",
    "Everyone wants to be data-driven, yet gut feel still wins.",
  ],
  aboutBullets: [
    "Tell a number that can steer the company from one that only describes it",
    "Settle the metric fights that quietly stall your meetings",
    "Make trusted data findable, for your people and for AI",
    "Federate ownership without losing a shared language",
    "Test any data idea against the only thing that matters: the decision it changes",
  ],
} as const;
