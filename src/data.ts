export const profile = {
  name: "Muhammad Alif Gunadi",
  role: "Backend Software Engineer",
  tagline:
    "I build the backend behind enterprise and IoT platforms: fast APIs, event-driven services, and real-time monitoring.",
  location: "Jakarta, Indonesia",
  email: "alifgunadi1303@gmail.com",
  resume: "/Muhammad-Alif-Gunadi-CV.pdf",
  github: "https://github.com/alifgunadi",
  linkedin: "https://www.linkedin.com/in/muhammad-alif-gunadi-276154266/",
};

export const about = [
  "I'm a backend engineer at Ravelware Technology Indonesia, where I've spent the last 3+ years building warehouse, supply chain, and industrial monitoring systems in Node.js and TypeScript.",
  "I care most about the parts users never see but always feel: a report that loads in 2 seconds instead of 200, notifications that arrive in real time, and production issues traced down to the layer where they start.",
  "I didn't start in software. I studied Environmental Engineering at Itenas Bandung, switched to web development through a full-stack bootcamp in early 2023, and joined Ravelware that August.",
  "Lately I've been building AI-assisted workflows, including a multi-agent Claude Code setup connected to Jira for ticket intake, planning, and review.",
];

export const stats = [
  { value: "200s → 2s", label: "SCM report endpoint, ~99% faster" },
  { value: "3+ years", label: "Backend for enterprise & IoT platforms" },
  { value: "8 roles", label: "RBAC with approval flows in a WMS" },
];

export type Experience = {
  period: string;
  title: string;
  org: string;
  description: string;
  highlights?: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    period: "Aug 2023 — Present",
    title: "Backend Software Engineer",
    org: "Ravelware Technology Indonesia",
    description:
      "Build and run backend services for warehouse, supply chain, and industrial IoT clients, from requirements to production support.",
    highlights: [
      "Cut a critical SCM report from ~200s to ~2s by removing N+1 queries, moving aggregation into SQL, and adding composite indexes validated with EXPLAIN.",
      "Built a centralized notification service delivering email and in-app notifications in real time across multiple applications.",
      "Moved heavy work into Kafka producer/consumer background workflows to keep APIs responsive.",
      "Built MQTT and WebSocket monitoring for PLC status, RFID events, forklift tracking, and zone alerts.",
      "Set up Jenkins CI/CD on Linux VPS for Node.js and Bun services, with Winston and ELK for logging and monitoring.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Kafka", "MQTT", "WebSocket", "Jenkins", "ELK"],
  },
  {
    period: "Jul — Sep 2024",
    title: "Product Manager (additional role)",
    org: "Ravelware Technology Indonesia",
    description:
      "Led delivery of the Connectivity Management Platform across engineering, design, and operations. Every milestone shipped on or ahead of schedule.",
    tags: ["Delivery", "Jira", "Cross-team coordination"],
  },
  {
    period: "Jan — Apr 2023",
    title: "MERN Full-Stack Bootcamp",
    org: "Eduwork.id",
    description: "Built a full-stack e-commerce app with React, Express, and MongoDB.",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    period: "2015 — 2022",
    title: "B.Eng. Environmental Engineering",
    org: "Institut Teknologi Nasional Bandung",
    description: "",
    tags: [],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  flow: string[];
  note?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "SCM Platform — report performance",
    description:
      "Backend for an enterprise supply chain platform. Rebuilt a reporting endpoint from ~200s to ~2s on hundreds of thousands of rows.",
    tags: ["Node.js", "Sequelize", "PostgreSQL"],
    flow: ["Client API", "Node.js service", "SQL aggregation", "Indexed PostgreSQL"],
    note: "Client project",
  },
  {
    name: "Warehouse Management System",
    description:
      "Inbound, outbound, stock opname, relocation, transfer, packaging, and RFID workflows, with role-based approvals across 8 business roles.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "RFID"],
    flow: ["RFID reader", "Express API + RBAC", "PostgreSQL", "React app"],
    note: "Client project",
  },
  {
    name: "Industrial & Server Monitoring",
    description:
      "Real-time monitoring over MQTT and WebSocket: PLC status, RFID events, forklift movement, and zone alerts.",
    tags: ["Node.js", "MQTT", "InfluxDB", "Socket.IO"],
    flow: ["PLC / RFID", "MQTT", "Node.js", "InfluxDB", "Live dashboard"],
    note: "Client project",
  },
  {
    name: "Personal Finance App",
    description:
      "Full-stack money tracker with a spending dashboard, receipt scanning via Gemini Vision, and bank statement PDF import.",
    tags: ["React", "TypeScript", "TanStack Query", "Prisma", "Zod", "PostgreSQL"],
    flow: ["React", "Express + Zod", "Prisma", "PostgreSQL"],
    links: [{ label: "Live demo", href: "https://financial-mvp-lac.vercel.app/" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Node.js", "Bun", "Express", "Elysia", "Laravel"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "SQL Server", "InfluxDB", "Prisma", "Sequelize", "Drizzle"] },
  { group: "Messaging", items: ["Kafka", "MQTT", "WebSocket", "Socket.IO", "SSE"] },
  { group: "DevOps", items: ["Jenkins", "Docker", "Nginx", "PM2", "ELK Stack"] },
  { group: "Frontend", items: ["React", "TanStack Query", "Tailwind CSS"] },
];

export type ArchiveItem = {
  year: string;
  name: string;
  madeAt: string;
  tags: string[];
  href?: string;
};

export const archive: ArchiveItem[] = [
  { year: "Recent", name: "Personal Finance App", madeAt: "Personal", tags: ["React", "TypeScript", "Prisma", "PostgreSQL"], href: "https://financial-mvp-lac.vercel.app/" },
  { year: "Recent", name: "AI-Assisted Development Workflow", madeAt: "Personal", tags: ["Claude Code", "MCP", "Jira"] },
  { year: "2023 —", name: "Warehouse Management System", madeAt: "Ravelware", tags: ["React", "Node.js", "PostgreSQL", "RFID"] },
  { year: "2023 —", name: "SCM Platform", madeAt: "Ravelware", tags: ["Node.js", "Sequelize", "PostgreSQL"] },
  { year: "2023 —", name: "Server Monitoring System", madeAt: "Ravelware", tags: ["Express", "InfluxDB", "MQTT", "Socket.IO"] },
  { year: "2023 —", name: "Digital Checksheet System", madeAt: "Ravelware", tags: ["Laravel 12", "Blade", "PostgreSQL"] },
  { year: "2023", name: "E-commerce (MERN)", madeAt: "Eduwork bootcamp", tags: ["React", "Express", "MongoDB"], href: "https://github.com/alifgunadi/MERN" },
  { year: "2023", name: "Discord AI chat bot", madeAt: "Personal", tags: ["Node.js", "Discord", "AI"], href: "https://github.com/alifgunadi/v14" },
  { year: "2023", name: "React front-end", madeAt: "Eduwork bootcamp", tags: ["React"], href: "https://github.com/alifgunadi/frontend-react" },
];
