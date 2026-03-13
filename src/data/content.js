export const siteConfig = {
  name: "Shaheer",
  role: "AI Engineer & Founder",
  headline: "AI Engineer & Founder building automation that actually ships",
  subheadline:
    "I've been building since I was 15. From e-commerce to AI automation — I turn ideas into systems that work.",
  email: "mailto:shahrs55555@gmail.com",
  socials: {
    github: "https://github.com/shahrs5",
    linkedin: "https://www.linkedin.com/in/shaheer-sshahid/",
    whatsapp: "https://wa.me/17733107917",
  },
};

export const aboutData = {
  present: [
    "I'm an AI Engineer and Founder who builds automated systems that solve real problems. I lead a 5-person agency, and I'm relentlessly curious — always shipping, always learning.",
    "Right now, I'm engineering systems that generate content, personalize outreach, and even run LLMs in impossibly tight constraints. If there's a way to automate it, I've probably already tried.",
  ],
  journey: [
    {
      text: "Started building at 15 with e-commerce. Learned marketing the hard way when international dropshipping failed.",
      highlight: "Age 15",
    },
    {
      text: "That failure pushed me deeper into tech. Built a food delivery service that hit 500+ users.",
      highlight: "500+ users",
    },
    {
      text: "Discovered AI automation and never looked back. Now I'm engineering systems that ship, scale, and solve.",
      highlight: "AI & Automation",
    },
  ],
  threadline:
    "The thread that ties it all together: I've always been someone who sees a problem and builds the solution — whether that's a campus without food delivery or an education system without localized AI.",
};

export const skillsData = [
  {
    category: "AI & Machine Learning",
    skills: [
      "Agentic RAG",
      "LLM Integration",
      "Neural Networks",
      "K-Means Clustering",
      "RNNs",
      "Sentiment Analysis",
      "Computer Vision",
    ],
    color: "bg-neo-accent",
  },
  {
    category: "Automation & Systems",
    skills: [
      "n8n Workflows",
      "API Integrations",
      "Pipeline Design",
      "Email Automation",
    ],
    color: "bg-neo-secondary",
  },
  {
    category: "Web Development",
    skills: ["Flask", "FastAPI", "Django", "Python", "HTML/CSS"],
    color: "bg-neo-muted",
  },
  {
    category: "AI Tools & Platforms",
    skills: ["HeyGen", "Submagic", "FFmpeg", "Google APIs"],
    color: "bg-neo-secondary",
  },
  {
    category: "Soft Skills",
    skills: [
      "Client Communication",
      "Technical ↔ Business",
      "Team Leadership",
      "Sales",
    ],
    color: "bg-neo-accent",
  },
];

export const projectsData = [
  {
    slug: "fbise-rag-chatbot",
    title: "FBISE RAG Chatbot",
    hook: "The first AI education chatbot built for Pakistan's federal board",
    problem:
      "LLMs are trained on generic British/American syllabi — Pakistani students using AI for studying get wrong or irrelevant answers.",
    solution:
      "An agentic RAG chatbot with safety guardrails, trained on FBISE-specific curriculum content.",
    impact:
      "120+ real users. Identified a gap no one was filling and built a product people actually used.",
    tech: ["Agentic RAG", "LLMs", "Safety Guardrails"],
    color: "bg-neo-accent",
  },
  {
    slug: "llm-inference-xv6",
    title: "LLM Inference on xv6",
    hook: "Running an LLM inside a 128MB RAM operating system",
    problem:
      "Can you make LLM inference work under extreme hardware constraints?",
    solution:
      "Integrated LLM inference into the xv6 teaching OS, working within just 128MB of RAM.",
    impact:
      "Deep systems-level engineering. Shows understanding of what's happening under the hood, not just at the API layer.",
    tech: ["xv6", "C", "LLM Inference", "Memory Optimization"],
    color: "bg-neo-secondary",
  },
  {
    slug: "ai-content-pipeline",
    title: "AI Content Pipeline",
    hook: "Fully automated video content creation — from competitor research to final edit",
    problem:
      "Manual content creation doesn't scale. Creators need automated, personality-matched pipelines.",
    solution:
      "Three interconnected systems: Smart Scripting Engine (competitor analysis → viral pattern detection → script generation), AI Video Production (voice + video cloning → AI editing), and Clip Extraction (highlight detection → auto-editing).",
    impact:
      'This isn\'t "I used an AI tool." This is "I built an entire automated production system." Systems thinking, API orchestration, and real-world pipeline architecture.',
    tech: ["n8n", "HeyGen", "Submagic", "FFmpeg", "Google APIs"],
    color: "bg-neo-muted",
    phases: [
      {
        name: "Smart Scripting Engine",
        desc: "Competitor extraction → viral pattern detection → personality-matched script generation",
      },
      {
        name: "AI Video Production",
        desc: "Voice cloning → video cloning → AI editing",
      },
      {
        name: "Clip Extraction & Editing",
        desc: "Clip detection → extraction → AI-powered editing",
      },
    ],
  },
  {
    slug: "cal-ai-clone",
    title: "Cal AI Clone",
    hook: "A calorie estimation app built from scratch using ML",
    problem:
      "Can you replicate a commercial AI product using fundamental ML techniques?",
    solution:
      "A calorie estimation system using K-means clustering and neural networks — a ground-up clone of Cal AI.",
    impact:
      "Shows strong ML fundamentals and the ability to reverse-engineer and rebuild a product.",
    tech: ["K-Means", "Neural Networks", "Python"],
    color: "bg-neo-accent",
  },
  {
    slug: "stock-prediction-rnn",
    title: "Stock Prediction with RNN",
    hook: "Predicting stock prices using recurrent neural networks and live sentiment analysis",
    problem:
      "Stock prediction using only historical price data is limited — market sentiment matters.",
    solution:
      "An RNN-based prediction model that incorporates live sentiment analysis for more informed predictions.",
    impact:
      "Combines deep learning with real-time data integration — systems that respond to the real world.",
    tech: ["RNN", "Sentiment Analysis", "Python"],
    color: "bg-neo-secondary",
  },
  {
    slug: "ai-custom-emails",
    title: "AI Custom Emails",
    hook: "Personalized outreach at scale — fully automated",
    problem: "Generic mass emails get ignored — 0.001% reply rate.",
    solution:
      "An automated system that researches each recipient individually, generates personalized emails, and handles follow-ups — all without manual intervention.",
    impact:
      "Improved reply rate from 0.001% to 3.5% through smarter targeting. Built it, measured it, and made it dramatically better.",
    tech: ["AI Personalization", "Email Automation", "Automated Follow-ups"],
    color: "bg-neo-muted",
    stat: { value: "3.5%", label: "Reply Rate (from 0.001%)" },
  },
];

export const workData = [
  {
    type: "venture",
    title: "Digitalise Agency",
    subtitle: "AI Automation Agency",
    description:
      "An AI automation agency focused on bringing in leads for clients through automating web development and social media.",
    role: "Founder & AI Engineer",
    impact:
      "Learned client communication, translating business problems into technical solutions, and selling. Leading a 5-person team taught delegation and delivery management.",
    color: "bg-neo-accent",
    badge: "Current",
    period: "2024 — Present",
  },
  {
    type: "venture",
    title: "Quickbites",
    subtitle: "Campus Food Delivery",
    description:
      "A food delivery service built for a niche gated community that had no existing delivery options.",
    role: "Co-founder & Technical App Developer",
    impact:
      "Onboarded 500+ users, streamlined expenses, and kept day-to-day operations running.",
    color: "bg-neo-secondary",
    badge: "500+ Users",
    period: "2023 — 2024",
  },
  {
    type: "experience",
    title: "Web Development Intern",
    subtitle: "Professional Experience",
    description:
      "Built websites, developed fluency in Flask, FastAPI, Django, Python, and HTML/CSS. Delivered a company website that reached 200 users/month.",
    role: "Intern",
    impact: "Shipped production code and gained real-world development fluency.",
    color: "bg-neo-muted",
    badge: "200 users/mo",
    period: "2023",
  },
  {
    type: "venture",
    title: "E-Commerce",
    subtitle: "The Origin Story — Age 15",
    description:
      "The spark that started everything. Launched local shipping e-commerce that worked, then pivoted to international dropshipping — which failed.",
    role: "Co-founder",
    impact:
      "The failure taught the importance of marketing and understanding your customer. Building and taking risks before most people have their first job.",
    color: "bg-neo-secondary",
    badge: "Origin",
    period: "2021",
  },
];

export const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
