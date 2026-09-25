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
    ebook: "https://www.amazon.com/dp/B0H9NLJ667/%20keywords=%20data+driven+decision+making&s=books",
    paperback: "https://www.amazon.com/dp/176482170X/%20keywords=%20data+driven+decision+making&s=books",
  },
  sampleChapter:
    "https://www.amazon.com/dp/B0H9NLJ667?asin=B0H9NLJ667&revisionId=cecc7ac9&format=3&depth=1",
  linkedIn: "https://www.linkedin.com/in/hafizengineering",
  // Launch gates — flip only when the thing is actually live.
  flags: {
    // Show "Get the Free Tools" CTA for Full Stack Life once resources exist.
    fullStackLifeFreeTools: false,
    // Show the Devizur statement only after the official public announcement.
    devizurAnnounced: false,
  },
  author: {
    name: "Hafiz Rahman",
    roles: ["Author", "Technology Executive", "Entrepreneur"],
    positioning:
      "Systems thinking for better decisions, better organizations, and better lives.",
    location: "Melbourne, Australia",
    expertise: [
      "Engineering",
      "Data",
      "AI",
      "Organizational Transformation",
      "Systems Thinking",
    ],
  },
  fullStackLife: {
    title: "Full Stack Life",
    subtitle: "How to Find the Real Problem Before You Fix the Wrong One",
    freeToolsUrl: "",
  },
  sqlBook: {
    title: "Solving Business Problems Using SQL",
    subtitle:
      "A Definitive Guide for Beginners Who Want to Be Proficient in Database Design and Writing SQL",
    year: 2019,
    highlights: [
      "Learn SQL by solving real-world business problems, not just memorising syntax",
      "Build a complete relational database from scratch, step by step",
      "Written for beginners, analysts, developers, and anyone working with data",
    ],
    url: "https://www.amazon.com/dp/1795478292",
  },
  // Endorsements featured on the homepage (reviewer names from socialProof).
  featuredEndorsements: ["Umut Omer", "A. Y. M. Mostafa", "Gopal Das"],
  socialProof: [
    {
      quote:
        "This book perfectly captures and solves many problems I've encountered with data across multiple organizations I've worked in. A clear system that helps cut through the noise and provides a sanity check for the decision-making process.\n\n" +
        "Essential reading for any modern executive.",
      name: "Umut Omer",
      title: "Chief Commercial Officer",
      company: "Stakk",
    },
    {
      quote:
        "As a data-minded marketer, CRM leader, and GTM operator, this is one of the rare books that bridges commercial strategy and technical execution without getting lost in theory. Packed with relatable real-world examples, it gives you a front-row seat into the thinking of a commercially minded technical expert and a practical framework you simply won't find elsewhere.\n\n" +
        "More than just a good read, it's a blueprint for making better decisions, driving growth, and setting yourself up for success in any modern business.",
      name: "Tracy Jane Tanti",
      title: "Head of Marketing Operations and Performance Marketing",
      company: "Webjet Group",
    },
    {
      quote:
        "A light, fast, and engaging read that argues the real challenge in decision-making is not the lack of data, but the design of the decision system itself. Through a practical six-layer framework, it offers valuable insights for both decision-makers and those building decision systems.\n\n" +
        "A must-have non-technical read for every data professional and leader.",
      name: "Gopal Das",
      title: "Director (Data Science)",
      company: "CrimsonLogic, a member of the PSA Group",
    },
    {
      quote:
        "Decision System is a timely and insightful contribution that bridges the critical gap between data analytics and effective decision-making. While many resources focus on technical skills such as data preparation and modeling, this book addresses the often-overlooked challenge of transforming trustworthy data into decisions that drive meaningful organizational outcomes. Through practical frameworks, engaging case studies, and clear explanations of concepts such as trust, ownership, data lineage, and value, it equips both students and practitioners with essential decision intelligence skills.\n\n" +
        "This is an invaluable resource for teachers, students, industry professionals, and educators seeking to connect analytical capability with real-world business impact.",
      name: "Rafiqul Islam",
      title: "PhD, Professor in Computing",
      company: "Charles Sturt University; Leader, Data Science and Engineering Research Unit",
    },
    
    {
      quote:
        "You built the platform. Decision System shows you how to earn the business's trust in what comes out of it through explicit definitions, enforceable data contracts, and ownership designed for trust rather than left to hope.\n\n" +
        "An indispensable read for technology leaders who want their platforms to drive confident business decisions.",
      name: "A. Y. M. Mostafa",
      title: "Chief Technology Officer",
      company: "Prime Bank PLC",
    },{
      quote:
        "Despite major investments in modern software systems, artificial intelligence, including AI agents, and trusted data, I often hear the same challenge: organizations still struggle to consistently turn data into better business decisions.\n\n" +
        "Decision System provides a practical framework for addressing this challenge. It shows how organizations can build trust in data, establish shared ownership of critical business metrics, and make trusted information accessible to both people and AI, enabling better decisions and measurable business outcomes.\n\n" +
        "The book also fills an important gap for today's graduates. They know how to build modern software and AI solutions, but many have yet to learn how those solutions translate into improved decisions, stronger financial performance, and sustainable business growth. Decision System bridges that gap by connecting technical innovation with business value.\n\n" +
        "A valuable resource for business leaders, finance leaders, and the next generation of technology professionals.",
      name: "Chanchal K. Roy",
      title: "PhD, Professor, Department of Computer Science",
      company: "University of Saskatchewan; Director, SOAR and Software Research Lab",
    },

    {
      quote:
        "Learn the part of data work that most courses never teach: how a trustworthy number becomes a decision that changes outcomes. Decision System reads like a field guide rather than a textbook, bridging academic analytics with the real-world decisions employers expect graduates to influence.\n\n" +
        "An ideal companion for anyone preparing to turn data skills into business impact.",
      name: "Mohammad Awrangjeb",
      title: "Senior Lecturer",
      company: "Griffith University",
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
