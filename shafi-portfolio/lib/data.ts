export const profile = {
  name: "Muhammed Shafi KT",
  firstName: "Muhammed",
  lastName: "Shafi KT",
  title: "Full Stack Developer (MERN)",
  role: "MERN Stack Developer with 1 year of hands-on experience building scalable full-stack applications with React.js, Node.js, MongoDB, and TypeScript.",
  location: "Calicut, Kerala, India",
  email: "muhammedshafikt85@gmail.com",
  phone: "+91 81378 32789",
  phoneHref: "tel:+918137832789",
  resumePath: "/assets/Muhammed_Shafi_KT_Full_Stack_Developer.pdf",
  portraitPath: "/assets/portrait-env.png",
  github: "https://github.com/muhammedShafiKT",
  linkedin: "https://www.linkedin.com/in/muhammedshafikt",
  portfolioUrl: "https://muhammedshafikt-fullstack-developer.vercel.app",
};

export const facts = [
  { k: "LOCATION", v: "Calicut, Kerala, India" },
  { k: "CURRENT ROLE", v: "Full Stack Developer Intern @ Bridgeon Solutions" },
  { k: "EXPERIENCE", v: "1 Year Hands-on Experience", accent: true },
  { k: "CORE STACK", v: "React.js · Node.js · Express.js · MongoDB · TypeScript" },
  { k: "AI & SYSTEMS", v: "RAG Pipelines · pgvector · Redis · Docker · AWS" },
  { k: "EDUCATION", v: "BCA, SGOU Kerala — Expected 2026" },
  { k: "STATUS", v: "Open to opportunities", accent: true },
];

export const stackMarquee = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "FastAPI",
  "Python",
  "RAG & pgvector",
  "Docker",
  "Redis",
  "BullMQ",
  "AWS EC2",
  "AWS S3",
  "Cloudflare R2",
  "Socket.IO",
  "Zod",
  "OpenAI SDK",
  "Gemini",
  "Tailwind CSS",
  "Prisma",
  "CI/CD",
];

export type CapabilityGroup = {
  num: string;
  categoryKey: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    num: "01",
    categoryKey: "languages",
    title: "Languages",
    icon: "{ }",
    description: "Core programming and markup languages used across frontend, microservices, and data pipelines.",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    num: "02",
    categoryKey: "frontend",
    title: "Frontend Engineering",
    icon: "❖",
    description: "Component architecture, predictable state management, and responsive high-performance interfaces.",
    items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Recharts"],
  },
  {
    num: "03",
    categoryKey: "backend",
    title: "Backend & APIs",
    icon: "⛁",
    description: "Scalable REST APIs, asynchronous schema validation, background job queues, and WebSockets.",
    items: ["Node.js", "Express.js", "FastAPI", "REST API Development", "Socket.IO", "Zod", "BullMQ"],
  },
  {
    num: "04",
    categoryKey: "databases",
    title: "Databases & Vector",
    icon: "◈",
    description: "Document storage, relational engines, in-memory caching, in-process analytics, and vector search.",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma", "Redis", "DuckDB", "pgvector"],
  },
  {
    num: "05",
    categoryKey: "devops",
    title: "Cloud & DevOps",
    icon: "☁",
    description: "Cloud servers, distributed object storage, multi-stage Docker containerization, and automated CI/CD.",
    items: ["AWS EC2", "AWS S3", "Cloudflare R2", "Vercel", "Docker", "CI/CD"],
  },
  {
    num: "06",
    categoryKey: "security",
    title: "Auth & Security",
    icon: "⚿",
    description: "Secure token lifecycles, organization-scoped access control, httpOnly cookies, and OAuth.",
    items: ["JWT", "Refresh Tokens", "Google OAuth", "Role-Based Access Control", "Bcrypt", "Cookie-Based Authentication"],
  },
  {
    num: "07",
    categoryKey: "ai",
    title: "AI & Analytics",
    icon: "✦",
    description: "Retrieval-augmented generation, vector embeddings, LLM orchestration, and dataset profiling.",
    items: ["RAG Pipelines", "Embeddings", "OpenAI SDK", "LLM Integration", "Data Profiling", "Dashboard Generation"],
  },
  {
    num: "08",
    categoryKey: "tools",
    title: "Tools & Integrations",
    icon: "⚙",
    description: "Version control, API testing, payment gateway workflows, media optimization, and browser automation.",
    items: ["Git", "GitHub", "Postman", "Vite", "Razorpay", "Cloudinary", "Puppeteer"],
  },
];

export type Shot = { src: string; url: string; alt: string };

export type ProjectArchitecture = {
  summary: string;
  pipeline: { step: string; detail: string }[];
  highlights: { title: string; desc: string }[];
};

export type EventRole = {
  name: string;
  slug: string;
  tag: string;
  desc: string;
  access: string[];
};

export type RagStage = {
  step: string;
  name: string;
  engine: string;
  code: string;
  detail: string;
};

export type CommerceModule = {
  name: string;
  detail: string;
};

export type Project = {
  index: string;
  name: string;
  badge?: string;
  year: string;
  tagline: string;
  liveUrl?: string;
  githubUrl: string;
  shots?: Shot[];
  architecture?: ProjectArchitecture;
  roles?: EventRole[];
  ragStages?: RagStage[];
  commerceModules?: CommerceModule[];
  metrics?: { label: string; value: string }[];
  problem: string;
  solution: string;
  features: string[];
  flow: string[];
  decisions: { label: string; detail: string }[];
  authDeployment: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    index: "01 / AI DATA ANALYTICS PLATFORM",
    name: "InsightFlow",
    badge: "Solo Product",
    year: "2026",
    tagline: "Turns raw CSV and Excel datasets into interactive analytics dashboards via an automated background processing pipeline.",
    liveUrl: "https://insightflow-ai88.vercel.app",
    githubUrl: "https://github.com/muhammedShafiKT/Insights-Flow-AI",
    metrics: [
      { label: "Query Execution", value: "DuckDB in R2" },
      { label: "Background Queue", value: "Redis + BullMQ" },
      { label: "Live Telemetry", value: "Socket.IO" },
      { label: "Intelligence", value: "OpenAI SDK" },
    ],
    shots: [
      { src: "/assets/insightflow-hero.png", url: "insightflow-ai88.vercel.app/home", alt: "InsightFlow landing page — AI-powered data analytics for the modern enterprise" },
      { src: "/assets/insightflow-datasets.png", url: "insightflow-ai88.vercel.app/datasets", alt: "InsightFlow dataset ingestion screen with drag-and-drop upload" },
      { src: "/assets/insightflow-dashboard.png", url: "insightflow-ai88.vercel.app/datasets/.../dashboard", alt: "InsightFlow operational intelligence dashboard with generated charts" },
      { src: "/assets/insightflow-chat.png", url: "insightflow-ai88.vercel.app/chat/...", alt: "InsightFlow AI chat interface answering questions about an uploaded dataset" },
    ],
    problem: "Transforming raw, unstructured datasets into executive-ready dashboards traditionally demands manual cleaning, SQL authoring, schema guesswork, and manual chart design.",
    solution: "Built a multi-stage analytics pipeline that ingests datasets, profiles distributions, validates schema integrity, and automatically generates interactive dashboards alongside a conversational AI assistant.",
    features: [
      "Built a multi-stage analytics pipeline for dataset ingestion, profiling, validation, and interactive dashboard generation",
      "Implemented DuckDB-based analytics querying large datasets directly from Cloudflare R2 without heavy disk download overhead",
      "Integrated Redis and BullMQ background processing to keep the API server responsive during heavy jobs",
      "Real-time job progress and status updates streamed directly to the frontend via Socket.IO",
      "Automated server-side PDF report generation using headless Puppeteer",
      "Natural-language Q&A and dataset interrogation powered by OpenAI SDK and LLM integration",
    ],
    flow: ["React · Vercel", "Express API · AWS EC2", "BullMQ / Redis Queue", "DuckDB over Cloudflare R2", "MongoDB Job State", "Socket.IO Real-Time Stream"],
    decisions: [
      { label: "DuckDB over Cloudflare R2", detail: "Executes columnar queries directly on remote objects, avoiding high memory footprint on the API server" },
      { label: "Redis + BullMQ Queue", detail: "Decouples resource-intensive dataset profiling and PDF compilation into isolated background workers" },
      { label: "Socket.IO WebSockets", detail: "Streams live ingestion percentages and step transitions without client polling overhead" },
    ],
    authDeployment: "Cookie-based JWT authentication with Google OAuth. Express backend deployed on AWS EC2 behind Nginx reverse proxy; React frontend deployed on Vercel.",
    stack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "DuckDB", "Redis", "BullMQ", "Socket.IO", "Cloudflare R2", "AWS", "OpenAI SDK", "Puppeteer"],
  },
  {
    index: "02 / EVENT & VENUE MANAGEMENT PLATFORM",
    name: "EventOS",
    badge: "Team Project",
    year: "2026",
    tagline: "Comprehensive multi-role event ecosystem supporting venue booking, ticketing, check-in, certificates, and a RAG chatbot.",
    liveUrl: "https://eventapp-psi.vercel.app",
    githubUrl: "https://github.com/eventsos03-star/eventapp",
    metrics: [
      { label: "Stakeholder Roles", value: "4 Distinct RBAC Tiers" },
      { label: "Validation Engine", value: "Strict Zod Schemas" },
      { label: "Containerization", value: "Docker Dev/Prod" },
      { label: "Cloud Storage", value: "AWS S3 Assets" },
    ],
    roles: [
      {
        name: "Event Organizers",
        slug: "organizer",
        tag: "Event Creation & Lifecycle",
        desc: "Create and publish events, manage venue bookings, configure ticketing tiers, monitor live attendance, and issue certificates.",
        access: ["Event Module Creation", "Zod-Validated Ticket Tiers", "Automated Certificate Issuance", "Attendee Check-in Dashboard"],
      },
      {
        name: "Venue Owners",
        slug: "venue",
        tag: "Facility & Booking Control",
        desc: "List venues, manage availability calendars, approve reservation requests from organizers, and set capacity limits.",
        access: ["Venue Management", "Reservation Approvals", "Availability Slot Grid", "Capacity & Amenity Controls"],
      },
      {
        name: "Attendees",
        slug: "attendee",
        tag: "Ticketing & RAG AI Assistant",
        desc: "Discover events, purchase tickets, check in with QR validation, download certificates, and query event details via RAG AI.",
        access: ["Ticket Purchase & QR", "Certificate Downloads", "RAG Chatbot Assistant", "Real-time Notifications"],
      },
      {
        name: "Platform Admins",
        slug: "admin",
        tag: "Governance & RBAC Matrix",
        desc: "Full administrative dashboard controls, organization-based role management, platform analytics, and event approvals.",
        access: ["System-wide Event Controls", "Organization RBAC Enforcement", "User & Role Moderation", "Audit & Analytics Logs"],
      },
    ],
    architecture: {
      summary: "Multi-Role Architecture with Modular Event Services, Secure RBAC, and AI Retrieval",
      pipeline: [
        { step: "User Authentication", detail: "JWT with secure httpOnly cookie storage + Google OAuth sign-in" },
        { step: "Role-Based Routing", detail: "Strict access control across 4 roles: Organizers, Venue Owners, Attendees, Admins" },
        { step: "Event Engine", detail: "Full lifecycle: scheduling, venue reservation, ticketing, attendance check-in, certificates" },
        { step: "RAG Assistant", detail: "Embedded knowledge chatbot answering attendee and organizer questions in real time" },
        { step: "Docker & CI/CD", detail: "Containerized development and production stages with automated pipeline deployment" },
      ],
      highlights: [
        { title: "Event Module Ownership", desc: "Built the complete Event module: data model, Zod validation, service layer, controller, and REST routes" },
        { title: "Admin Management", desc: "Extended admin control plane with real-time event oversight, approvals, and platform metrics" },
        { title: "Dockerized Architecture", desc: "Created multi-stage Dockerfiles for dev and production with automated CI/CD integration" },
      ],
    },
    problem: "Coordinating events across multiple stakeholder roles (venue managers, organizers, attendees, and admins) often creates fragmented workflows across ticketing, booking, validation, and attendee support.",
    solution: "Contributed to a production-grade multi-role event and venue platform built with Next.js, Node.js/Express, MongoDB, Docker, AWS S3, and an integrated RAG chatbot for real-time attendee queries.",
    features: [
      "Contributed to a multi-role platform (organizers, venue owners, attendees, admins) covering venue booking, ticketing, check-in, certificates, and a RAG-powered chatbot",
      "Built the Event module end to end: data model, Zod schema validation, service logic, controller, and REST routes",
      "Extended and customized the admin dashboard with complete event management and lifecycle controls",
      "Integrated JWT (httpOnly cookie) and Google OAuth authentication with organization-based role access control",
      "Dockerized the backend with multi-stage development and production images, integrated with CI/CD",
      "Connected AWS S3 for secure storage and delivery of event assets and attendee certificates",
    ],
    flow: ["Next.js / React UI", "Express REST API", "Zod Validation Layer", "MongoDB + AWS S3", "RAG Chatbot Service", "Docker / CI/CD"],
    decisions: [
      { label: "Organization-Based RBAC", detail: "Rigorous authorization matrix ensuring venue owners, organizers, attendees, and admins have strictly scoped permissions" },
      { label: "httpOnly Cookie JWT + Google OAuth", detail: "Eliminates token exposure in client-side storage, guarding against XSS while simplifying user onboarding" },
      { label: "Multi-Stage Docker Images", detail: "Separated development hot-reloading from lean, hardened production runtime images" },
    ],
    authDeployment: "JWT (httpOnly cookie) and Google OAuth with organization-based role access. Media and certificates stored in AWS S3. Backend fully Dockerized with CI/CD deployment pipelines.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Zod", "Docker", "AWS S3", "Google OAuth", "RAG", "CI/CD"],
  },
  {
    index: "03 / RAG KNOWLEDGE PLATFORM",
    name: "KnowledgeHub",
    badge: "AI & Microservice Architecture",
    year: "2026",
    tagline: "Document-to-RAG knowledge pipeline coupling dense vector similarity in PostgreSQL/pgvector with a Python FastAPI AI microservice.",
    githubUrl: "https://github.com/muhammedShafiKT/KnowledgeHub",
    metrics: [
      { label: "Vector Search", value: "pgvector in PostgreSQL" },
      { label: "AI Microservice", value: "Python FastAPI" },
      { label: "Database Layer", value: "Prisma ORM" },
      { label: "LLM Synthesis", value: "Google Gemini" },
    ],
    ragStages: [
      {
        step: "01",
        name: "Document Ingestion & Text Chunking",
        engine: "Next.js / Node.js Engine",
        code: "extractText(doc) -> semanticChunker({ size: 512, overlap: 64 })",
        detail: "Parses complex documents, cleans text artifacts, and partitions content into semantically coherent overlapping windows.",
      },
      {
        step: "02",
        name: "FastAPI Vector Embeddings",
        engine: "Python FastAPI AI Service",
        code: "POST /api/v1/embed -> compute_dense_embeddings(chunks)",
        detail: "Asynchronous Python FastAPI microservice receives chunk arrays and generates dense high-dimensional vector representations.",
      },
      {
        step: "03",
        name: "pgvector Indexing & Similarity",
        engine: "PostgreSQL + Prisma",
        code: "SELECT *, 1 - (embedding <=> query_vec) AS similarity ORDER BY similarity DESC LIMIT 5",
        detail: "Performs cosine similarity distance vector retrieval inside PostgreSQL via pgvector with HNSW index indexing.",
      },
      {
        step: "04",
        name: "Gemini Synthesis & Grounding",
        engine: "Google Gemini LLM",
        code: "gemini.generateContent({ prompt: query, context: matchedVectors })",
        detail: "Augments the prompt context with top matched vector records, returning hallucination-resistant, verified technical answers.",
      },
    ],
    architecture: {
      summary: "Document Ingestion, Semantic Vector Indexing, and FastAPI Microservice Architecture",
      pipeline: [
        { step: "Document Ingestion", detail: "Automated extraction and intelligent chunking of text from raw documents" },
        { step: "FastAPI AI Microservice", detail: "Dedicated Python service running high-throughput embedding calculations" },
        { step: "pgvector Indexing", detail: "Dense vector embeddings stored in PostgreSQL via pgvector and Prisma ORM" },
        { step: "Semantic Search", detail: "Cosine distance vector similarity retrieval for high-relevance context matching" },
        { step: "Gemini Synthesis", detail: "Google Gemini LLM context integration generating grounded, accurate answers" },
      ],
      highlights: [
        { title: "Document-to-RAG Pipeline", desc: "Automated text extraction, semantic chunking, embedding generation, and vector indexing" },
        { title: "Python FastAPI Service", desc: "High-performance async microservice for embeddings and vector similarity queries" },
        { title: "pgvector + PostgreSQL", desc: "Unified relational and vector storage using pgvector with type-safe Prisma schema" },
      ],
    },
    problem: "Traditional keyword search fails on complex, multi-format knowledge bases, causing users to miss vital documentation or LLMs to hallucinate answers without context.",
    solution: "Engineered an end-to-end document-to-RAG pipeline using PostgreSQL and pgvector for high-dimensional vector storage, coordinated through a Python FastAPI AI microservice and Google Gemini LLM.",
    features: [
      "Built a document-to-RAG pipeline for text extraction, chunking, embedding generation, and vector storage using PostgreSQL/pgvector",
      "Developed a Python FastAPI AI microservice for embeddings and semantic retrieval, integrated with the Node.js backend",
      "Implemented vector similarity search using PostgreSQL's pgvector extension managed through Prisma ORM",
      "Engineered hybrid microservice communication between Next.js/Node.js application layer and Python AI services",
      "Integrated Google Gemini LLM for hallucination-resistant, context-grounded document summarization and Q&A",
    ],
    flow: ["Document Ingestion", "Text Extraction & Chunking", "FastAPI AI Microservice", "PostgreSQL + pgvector", "Semantic Similarity Query", "Google Gemini LLM"],
    decisions: [
      { label: "PostgreSQL + pgvector", detail: "Eliminates third-party hosted vector database lock-in by co-locating relational metadata and vector embeddings in PostgreSQL" },
      { label: "Python FastAPI AI Microservice", detail: "Isolates machine learning computations and embedding pipelines into a lightweight, high-performance async Python service" },
      { label: "Prisma ORM", detail: "Guarantees end-to-end type safety, reliable relational migrations, and clean schema governance" },
    ],
    authDeployment: "Hybrid architecture: TypeScript/Node.js backend interfacing with a Python FastAPI microservice. PostgreSQL database with pgvector extension.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "pgvector", "FastAPI", "Python", "Gemini"],
  },
  {
    index: "04 / FULL STACK E-COMMERCE PLATFORM",
    name: "Luxora",
    badge: "Full-Stack Commerce",
    year: "2026",
    tagline: "Production-ready e-commerce platform with product catalog management, dynamic coupon engine, and Razorpay checkout.",
    liveUrl: "https://luxoraaa.vercel.app",
    githubUrl: "https://github.com/muhammedShafiKT/E-commerce-frontend-backened",
    metrics: [
      { label: "Payment Gateway", value: "Razorpay (Cards/UPI/COD)" },
      { label: "Access Control", value: "Superadmin / Admin / User" },
      { label: "Media Pipeline", value: "Cloudinary CDN" },
      { label: "Cart & Wishlist", value: "Independent Collections" },
    ],
    commerceModules: [
      { name: "Three-Tier RBAC", detail: "Rigorous authorization separating Customers, Admins, and Superadministrators across all endpoints." },
      { name: "Dynamic Coupon Engine", detail: "Calculates percentage and flat-rate discounts with usage quota validation and expiry triggers." },
      { name: "Razorpay Checkout", detail: "Production payment flows with webhook confirmations supporting Cards, UPI, and Cash-on-Delivery." },
      { name: "Cloudinary CDN", detail: "Automatic image transformation, responsive thumbnail compression, and fast global CDN asset delivery." },
    ],
    shots: [
      { src: "/assets/luxora-home.png", url: "luxoraaa.vercel.app", alt: "Luxora storefront home page — online store of furniture inspired by nature" },
      { src: "/assets/luxora-products.png", url: "luxoraaa.vercel.app/products", alt: "Luxora product grid with wooden furniture pieces" },
      { src: "/assets/luxora-product-detail.png", url: "luxoraaa.vercel.app/products/...", alt: "Luxora product detail page for a sculptural curved wooden bookshelf" },
      { src: "/assets/luxora-checkout.png", url: "luxoraaa.vercel.app/detailsandpayment", alt: "Luxora checkout page with delivery details, coupon code, and payment method" },
      { src: "/assets/luxora-orders.png", url: "luxoraaa.vercel.app/orders", alt: "Luxora order history page showing order status" },
    ],
    problem: "Building a production e-commerce store requires robust inventory state management, reliable coupon logic, secure payment processing, and multi-tier role authorization without payment or cart discrepancies.",
    solution: "Architected a full-featured e-commerce platform featuring catalog management, persistent cart and wishlist collections, a flexible coupon engine, Razorpay payments, and a three-tier administrative dashboard.",
    features: [
      "Built an e-commerce platform with product management, cart, wishlist, coupons, role-based authorization, and admin dashboard",
      "Integrated JWT (httpOnly cookie) and Google OAuth authentication with role-based access control (superadmin, admin, user)",
      "Secure payment processing via Razorpay supporting card, UPI, and Cash-on-Delivery (COD) flows",
      "Cloudinary media management for optimized, responsive product image delivery and CDN caching",
      "Custom coupon engine supporting percentage and flat discounts, usage quotas, and expiration rules",
    ],
    flow: ["React Frontend · Vercel", "Express REST API", "MongoDB Collections", "Cloudinary Media CDN", "Razorpay Payment Gateway"],
    decisions: [
      { label: "Three-Tier RBAC", detail: "Provides strict authorization boundaries separating customers, administrators, and superadmins across all endpoints" },
      { label: "Decoupled Cart & Wishlist", detail: "Maintained as independent MongoDB collections with optimistic frontend synchronization for resilient checkout" },
      { label: "Cloudinary Image Pipeline", detail: "Automatic compression and thumbnail delivery offloading server bandwidth and improving mobile load times" },
    ],
    authDeployment: "JWT authentication with Google OAuth and role-based authorization. Frontend deployed on Vercel, Express REST API with MongoDB and Cloudinary.",
    stack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
  },
];

export type TimelineItem = {
  date: string;
  role: string;
  org: string;
  badge?: string;
  desc?: string[];
  techPills?: string[];
};

export const timeline: TimelineItem[] = [
  {
    date: "NOV 2025 — PRESENT",
    role: "Full Stack Developer Intern",
    org: "Bridgeon Solutions · Kerala, India",
    badge: "Current Role",
    techPills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
    desc: [
      "Developed scalable web application features using React.js, Node.js, Express.js, and MongoDB.",
      "Designed and integrated secure REST APIs with JWT authentication and MongoDB.",
      "Built reusable backend modules, optimized application performance, and maintained existing features.",
    ],
  },
  {
    date: "EXPECTED GRADUATION: 2026",
    role: "Bachelor of Computer Applications (BCA)",
    org: "Sree Narayana Guru Open University (SGOU) · Kerala, India",
    badge: "Education",
    techPills: ["Data Structures", "Database Systems", "Software Engineering", "Web Architecture"],
    desc: [
      "Comprehensive coursework in software engineering, database design, algorithms, computer networks, and modern web application development.",
    ],
  },
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const terminalLines = [
  { p: "$", k: "whoami" },
  { out: "muhammed_shafi_kt — Full Stack Developer (MERN)" },
  { p: "$", k: "cat current_role.json" },
  { out: '{\n  "role": "Full Stack Developer Intern",\n  "company": "Bridgeon Solutions",\n  "experience": "1 year hands-on experience"\n}' },
  { p: "$", k: "stack --primary" },
  { out: "React.js · Next.js · Node.js · Express.js · MongoDB · TypeScript" },
  { p: "$", k: "ai --capabilities" },
  { out: "RAG pipelines · pgvector · embeddings · OpenAI SDK · Gemini · DuckDB" },
  { p: "$", k: "status ./availability" },
  { out: "Open to full-stack & MERN engineering opportunities" },
];
