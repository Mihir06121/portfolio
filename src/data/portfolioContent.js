import {
  FiActivity,
  FiBox,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import {
  SiAmazonaws,
  SiDocker,
  SiGithubactions,
  SiMongodb,
  SiNestjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";
import condaiLogo from "../assets/condai_logo.png";
import devSembleLogo from "../assets/devSemble_logo.png";
import condaiHomeScreenshot from "../assets/project-screens/condai-home.png";
import devsembleHomeScreenshot from "../assets/project-screens/devsemble-home.png";

export const workFilters = ["All", "SaaS", "Platform", "Data", "Client"];

export const profileStats = [
  { value: "4+", label: "years building production web products" },
  { value: "RBAC", label: "multi-role SaaS access across admin, resident, owner, tenant, and proxy flows" },
  { value: "Judge", label: "queue-backed code evaluation with Dockerized runners and realtime feedback" },
  { value: "3K", label: "peak users handled in attendance windows" },
];

export const focusAreas = [
  "System design",
  "Scoped RBAC",
  "Realtime workflows",
  "Background jobs",
  "Dockerized runners",
  "Production debugging",
];

export const workItems = [
  {
    slug: "condai",
    category: "SaaS",
    eyebrow: "13rinda Inc. / Apr 2026 - Present",
    title: "CondAI",
    role: "Lead Full Stack Software Engineer",
    logo: condaiLogo,
    logoAlt: "CondAI logo",
    summary:
      "A Quebec co-ownership platform for maintenance, records, virtual AGMs, digital voting, role-based access, and compliance workflows.",
    impact: [
      "Building-scoped authorization with subscription and feature boundaries",
      "AGM, quorum, proxy voting, attendance, audit trail, and realtime meeting workflows",
      "Governance records, maintenance logs, repair/project tracking, bulletin workflows, partner offers, and auditability",
    ],
    stack: ["React", "NestJS", "PostgreSQL", "Prisma", "RBAC", "Audit logs"],
    liveUrl: "https://condai.ca/",
    detail: {
      headline: "A governance operating system for Quebec condominium syndicates.",
      intro:
        "CondAI is positioned publicly as a condominium governance platform for Quebec co-ownerships. The live product messaging centers on building maintenance, secure virtual AGMs, digital voting, Bill 16 compliance support, centralized records, and transparent decision management.",
      context:
        "My portfolio should describe CondAI as an operational SaaS platform, not simply a condo website. The interesting engineering work is in scoped access, auditable workflows, structured records, meeting state, proxy workflows, and plan-based feature boundaries.",
      responsibilities: [
        "Build and maintain product modules across React, NestJS, Prisma, and PostgreSQL.",
        "Model role-aware access for platform operators, building admins, residents, owners, tenants, and external AGM proxy users.",
        "Implement AGM workflows covering attendance, quorum, motions, proxy access, vote submission, meeting persistence, and minutes.",
        "Harden operational workflows such as repairs, projects, bulletins, document handling, audit logging, and subscription-gated features.",
      ],
      architecture: [
        "React application surfaces for public marketing, platform admin, building admin, resident, and external proxy flows.",
        "NestJS backend with Prisma/PostgreSQL models for buildings, users, units, subscriptions, AGM records, repairs, projects, bulletins, and audit logs.",
        "Socket.IO and persisted state for live meeting/voting/audit experiences where refresh-only UX would be weak.",
        "AWS-hosted deployment posture with role-based access, encrypted transport, audit logs, and operational monitoring concerns.",
      ],
      productFeatures: [
        "Centralized knowledge hub for building and co-ownership records.",
        "Maintenance and compliance workflows tied to repairs, projects, budget/history, and governance documentation.",
        "End-to-end AGM automation with virtual meetings, proxy authentication, quorum validation, motion execution, voting, and records.",
        "AI-assisted support grounded in condominium documents and Quebec Civil Code references, with administrator oversight.",
        "Role-based permissions and private bulletin/partner-offer workflows for building communities.",
      ],
      outcomes: [
        "Turns fragmented building administration into structured records and traceable workflows.",
        "Supports governance continuity when boards, managers, or administrators change.",
        "Reduces ambiguity around who can access records, submit actions, vote, or represent a unit.",
      ],
      screenshots: [
        {
          src: condaiHomeScreenshot,
          alt: "CondAI public landing page screenshot",
          caption: "Public CondAI landing page captured from condai.ca.",
        },
      ],
    },
  },
  {
    slug: "devsemble",
    category: "Platform",
    eyebrow: "Founder / Jan 2024 - Present",
    title: "devSemble",
    role: "Founder and Lead Full-Stack Engineer",
    logo: devSembleLogo,
    logoAlt: "devSemble logo",
    logoVariant: "wide",
    summary:
      "A community platform where developers learn, compete, build reputation, join hackathons, and show real activity from GitHub and coding challenges.",
    impact: [
      "Multidimensional reputation engine for repos, commits, PRs, issues, attempts, quizzes, and community activity",
      "Online judge for Python, C, C++, Java, and JavaScript using Redis/Bull queues and Docker-isolated runners",
      "Hackathon and competitive-season automation across teams, submissions, judging, leaderboards, and email reminders",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "Socket.IO", "Docker"],
    link: "https://devsemble.com",
    detail: {
      headline: "A developer community platform for learning, events, and reputation.",
      intro:
        "devSemble is a founder-led platform for developer profiles, GitHub-linked activity, hackathons, quizzes, seasons, coding submissions, and community participation.",
      context:
        "The product is broader than a portfolio project. It needs identity, community structure, scoring logic, event workflows, realtime feedback, judge execution, and surfaces that make developer activity legible.",
      responsibilities: [
        "Designed the product model, backend API surface, and frontend workflows from scratch.",
        "Built profile, event, hackathon, quiz, season, community, and reputation surfaces.",
        "Implemented GitHub activity ingestion and scoring across repositories, commits, PRs, issues, and participation.",
        "Built competitive coding flows with submissions, queues, test results, rankings, and language support.",
      ],
      architecture: [
        "React frontend with authenticated and public surfaces.",
        "Node/Express backend with MongoDB models for developer profiles, events, communities, competitions, and score records.",
        "Redis/Bull-style background execution for judge workflows and async processing.",
        "Socket.IO feedback loops for live results and event-state updates.",
        "Docker-isolated runners for Python, C, C++, Java, and JavaScript submissions.",
      ],
      productFeatures: [
        "Developer reputation scorecards tied to real activity.",
        "Hackathon and team workflows with submissions, judging, reminders, and leaderboards.",
        "Competitive seasons with problem selection, attempts, ranking, and reputation linkage.",
        "Meetups, communities, quizzes, tasks, wallet/transactions, and companion CLI direction.",
      ],
      outcomes: [
        "A clearer product story around developer learning, reputation, and community events.",
        "A platform surface that can support multiple campus/community programming workflows.",
        "A technical foundation for reputation, events, coding evaluation, and public developer identity.",
      ],
      screenshots: [
        {
          src: devsembleHomeScreenshot,
          alt: "devSemble public homepage screenshot",
          caption: "Public devSemble homepage captured from devsemble.com.",
        },
      ],
    },
  },
  {
    slug: "chronicle",
    category: "SaaS",
    eyebrow: "Legal operations platform",
    title: "Chronicle",
    role: "Full-stack product system",
    logoLabel: "CH",
    summary:
      "A legal case-management platform that turns scattered matter data into searchable chronological workspaces across events, evidence, participants, documents, AI insight records, and audit history.",
    impact: [
      "Matter-scoped access control and interactive chronology views",
      "Full-text event search, inspection panels, progressive rendering, and evidence uploads",
      "Supports up to 10 files/request and 50MB/file with previews and inline feedback",
    ],
    stack: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    liveUrl: "https://condai.ca/chronicle",
    detail: {
      headline: "A legal chronology workspace for matters, evidence, and AI-assisted review.",
      intro:
        "Chronicle is a legal case-management and chronology system. The live bundle exposes matter workspaces with chronology, evidence, witnesses, issues, damages, documents, AI insights, and reports.",
      context:
        "This project should be described as a structured legal operations platform, not just a timeline UI. The value is turning matter data into a searchable, linked, evidence-backed workspace.",
      responsibilities: [
        "Built full-stack matter and chronology workflows with React, TypeScript, NestJS, Prisma, and PostgreSQL.",
        "Modeled matter-level membership, owner controls, event records, participants, attachments, comments, and audit-safe backend behavior.",
        "Implemented event creation/editing, soft delete, participant sync, linked event relationships, and file attachment flows.",
        "Added UI detail density around evidence, chronology inspection, AI insight surfaces, and document-oriented matter navigation.",
      ],
      architecture: [
        "React/Vite frontend with authenticated matter workspace routes.",
        "NestJS backend with Prisma/PostgreSQL for users, matters, memberships, events, participants, attachments, issues, comments, AI insights, and audit logs.",
        "Multipart upload handling with file limits and stable staged-file progress behavior.",
        "JWT/auth session handling and protected routes for matter access.",
      ],
      productFeatures: [
        "Chronology view for legal events with date, location, status, event type, importance, color, and linked events.",
        "Evidence and attachment handling for PDFs, docs, images, audio, and video file types.",
        "People/witness tracking attached to events and matters.",
        "AI insights dashboard concepts for contradictions, missing facts, missing evidence, reports, and generated documents.",
        "Matter navigation for chronology, evidence, witnesses, issues, damages, documents, AI insights, and reports.",
      ],
      outcomes: [
        "Creates a matter-centered system of record for complex legal facts.",
        "Makes chronology, evidence, and participant relationships easier to inspect.",
        "Sets up a stronger foundation for future AI-assisted legal review while keeping truth boundaries clear.",
      ],
      screenshots: [],
      screenshotNote:
        "The public Chronicle route is app-gated and did not render a usable public screenshot in headless capture, so I am not showing a fake screenshot.",
    },
  },
  {
    slug: "geo-attendance",
    category: "Platform",
    eyebrow: "MSc.IT capstone / Team lead",
    title: "Geo-Attendance and Defaulters System",
    role: "Backend and deployment lead",
    logoLabel: "GA",
    summary:
      "A geo-location attendance platform built and deployed in one month for high-concurrency college attendance windows and automated defaulters calculation.",
    impact: [
      "Handled peak windows of roughly 3,000 active users",
      "Automated defaulters calculation engine",
      "AWS deployment, backend architecture, and database models",
    ],
    stack: ["Node.js", "MongoDB", "AWS EC2", "Nginx", "Team leadership"],
    detail: {
      headline: "A high-concurrency attendance system built under a one-month academic deadline.",
      intro:
        "This MSc.IT capstone focused on geo-location attendance capture and automated defaulters calculation for college attendance workflows.",
      context:
        "The main engineering challenge was not only building screens. It was coordinating a cross-functional team, designing backend models, deploying on AWS, and handling concentrated attendance-window traffic.",
      responsibilities: [
        "Led the capstone team across backend, frontend, mobile UX, and deployment responsibilities.",
        "Designed backend models and attendance/defaulters workflows.",
        "Coordinated production configuration and AWS deployment.",
      ],
      architecture: [
        "Node.js backend with database models for attendance, users, and defaulters logic.",
        "Geo-location validation and attendance-window workflows.",
        "AWS EC2 and Nginx-oriented deployment.",
      ],
      productFeatures: [
        "Geo-attendance capture.",
        "Automated defaulters calculation.",
        "Admin-facing review of attendance status.",
        "Mobile/user flow for attendance submission.",
      ],
      outcomes: [
        "Built and deployed within one month.",
        "Handled peak windows of roughly 3,000 active users.",
        "Provided a concrete leadership and system-design story beyond typical coursework.",
      ],
      screenshots: [],
    },
  },
  {
    slug: "nifty50-intelligence",
    category: "Data",
    eyebrow: "Research and dashboard systems",
    title: "NIFTY50 Intelligence Pipeline",
    role: "Data workflow builder",
    logoLabel: "N50",
    summary:
      "A market-intelligence pipeline combining CSV-based news catalysts, intraday forecast outputs, and a React dashboard for inspection and signal review.",
    impact: [
      "Organized active CSV pipeline and output structure",
      "Scriptable run order for data generation and validation",
      "Dashboard-oriented handoff for financial signal review",
    ],
    stack: ["Python", "CSV pipelines", "React", "Data modeling"],
    detail: {
      headline: "A CSV-first market intelligence pipeline for news catalysts and intraday signal review.",
      intro:
        "This project organizes market news/catalyst data, generated signal CSVs, and a React dashboard for NIFTY50 inspection workflows.",
      context:
        "The important part is the active data pipeline and reproducible output flow, not a flashy dashboard alone.",
      responsibilities: [
        "Organized pipeline scripts and output folders around the active CSV workflow.",
        "Maintained a concrete run/check order for signal generation and validation.",
        "Connected outputs into a React dashboard-oriented review flow.",
      ],
      architecture: [
        "Python scripts for data preparation and signal generation.",
        "CSV outputs as the primary active artifact.",
        "React dashboard for inspection and review.",
      ],
      productFeatures: [
        "News/catalyst CSV processing.",
        "Intraday forecast outputs.",
        "Dashboard-backed review of generated signals.",
      ],
      outcomes: [
        "Made the active data flow easier to run and verify.",
        "Separated source scripts from generated outputs.",
        "Improved handoff clarity for future model/dashboard work.",
      ],
      screenshots: [],
    },
  },
  {
    slug: "freelance-platforms",
    category: "Client",
    eyebrow: "Freelance systems / 2020 - Present",
    title: "Commerce, Exam, and Business Platforms",
    role: "Freelance Full-Stack Developer",
    logoLabel: "FP",
    summary:
      "Client systems across e-commerce, education, and portfolio/business websites including MuskanLabel/Zentury, Exam Portal, and Urban Elements.",
    impact: [
      "Paytm, SendGrid, Cloudinary, and admin workflows",
      "Dual-interface exam flow for admin web and mobile MCQ users",
      "Responsive frontends, email workflows, and AWS-hosted delivery",
    ],
    stack: ["MERN", "Paytm", "SendGrid", "Cloudinary", "AWS EC2"],
    detail: {
      headline: "Client systems across commerce, exams, and business websites.",
      intro:
        "Freelance work gave me repeated practice shipping practical web systems with payments, media, email, admin workflows, and deployment concerns.",
      context:
        "These projects matter because they built delivery discipline: collect requirements, keep scope realistic, ship usable admin surfaces, and deploy the work for real clients.",
      responsibilities: [
        "Built MERN-stack application flows for e-commerce and admin systems.",
        "Integrated Paytm payment flows, SendGrid email workflows, and Cloudinary media handling.",
        "Created responsive frontends and production deployment setups.",
      ],
      architecture: [
        "React/MERN application structures.",
        "Payment, email, and media service integrations.",
        "AWS EC2 deployment for selected client systems.",
      ],
      productFeatures: [
        "E-commerce checkout/admin workflows.",
        "Exam lifecycle management with admin web and mobile MCQ surfaces.",
        "Business/portfolio platforms with responsive navigation and contact flows.",
      ],
      outcomes: [
        "Built practical production habits before larger platform work.",
        "Delivered systems across e-commerce, education, and business domains.",
        "Strengthened API, dashboard, deployment, and third-party integration experience.",
      ],
      screenshots: [],
    },
  },
];

export const capabilityGroups = [
  {
    title: "Backend systems",
    summary: "APIs, auth, permissions, data flows, and reliability work.",
    Icon: FiServer,
    items: ["Node.js", "Express", "NestJS", "REST APIs", "JWT", "OAuth", "RBAC"],
  },
  {
    title: "Frontend product",
    summary: "Interfaces that make complex workflows easier to operate.",
    Icon: FiLayers,
    items: ["React", "TypeScript", "Next.js", "Redux", "Material UI", "Responsive UX"],
  },
  {
    title: "Data and persistence",
    summary: "Schemas, indexes, relational models, caches, and queues.",
    Icon: FiDatabase,
    items: ["MongoDB", "PostgreSQL", "Prisma", "Redis", "Index optimization", "CSV pipelines"],
  },
  {
    title: "Realtime and platform logic",
    summary: "Live activity, score engines, coding flows, and multi-tenant routing.",
    Icon: FiActivity,
    items: ["Socket.IO", "Subdomains", "Leaderboards", "GitHub API", "Scoring systems", "CLI flows"],
  },
  {
    title: "Infrastructure",
    summary: "Practical deployment and operational workflows for production systems.",
    Icon: FiCpu,
    items: ["AWS EC2", "Nginx", "Linux", "Docker", "GitHub Actions", "Cloudinary"],
  },
  {
    title: "Product domains",
    summary: "Where the engineering work has been applied.",
    Icon: FiBox,
    items: ["Condo SaaS", "Developer communities", "Legal ops", "E-commerce", "Exam systems", "Fintech research"],
  },
];

export const stackIcons = [
  { Icon: SiReact, label: "React" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiNestjs, label: "NestJS" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiRedis, label: "Redis" },
  { Icon: SiSocketdotio, label: "Socket.IO" },
  { Icon: SiAmazonaws, label: "AWS" },
  { Icon: SiNginx, label: "Nginx" },
  { Icon: SiDocker, label: "Docker" },
  { Icon: SiGithubactions, label: "GitHub Actions" },
];

export const timeline = [
  {
    period: "Apr 2026 - Present",
    title: "Lead Full Stack Developer - 13rinda Inc. / CondAI",
    body:
      "Building SaaS workflows across React, NestJS, PostgreSQL, structured APIs, third-party integrations, and cloud-hosted platform reliability.",
  },
  {
    period: "Jan 2024 - Present",
    title: "Founder and Lead Full-Stack Engineer - devSemble",
    body:
      "Designing a developer ecosystem with reputation, hackathons, competitive coding, multi-tenant routing, realtime systems, GitHub integration, and CLI workflows.",
  },
  {
    period: "2020 - Present",
    title: "Freelance Full-Stack Developer",
    body:
      "Delivered e-commerce, exam, portfolio, and admin systems with payments, media handling, email workflows, deployment, and product-minded UX.",
  },
  {
    period: "2022 - 2024",
    title: "MSc.IT - SK Somaiya College",
    body:
      "Led the Geo-Attendance and Defaulters Management System capstone, with emphasis on backend architecture, databases, and distributed workflows.",
  },
];
