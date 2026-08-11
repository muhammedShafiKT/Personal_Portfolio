export const profile = {
  name: "Muhammed Shafi KT",
  firstName: "Muhammed",
  lastName: "Shafi KT",
  role: "Full-stack engineer building AI-powered and e-commerce products — from database schema to the deploy pipeline.",
  location: "Calicut, Kerala, India",
  email: "muhammedshafikt85@gmail.com",
  phone: "+91 81378 32789",
  phoneHref: "tel:+918137832789",
  resumePath: "/assets/Muhammed_Shafi_KT_Resume.pdf",
  portraitPath: "/assets/portrait-env.png",
  // TODO: replace with your real profile URLs
  github: "https://github.com/muhammedShafiKT",
  linkedin: "https://www.linkedin.com/in/muhammedshafikt/",
};

export const facts = [
  { k: "LOCATION", v: "Calicut, Kerala, India" },
  { k: "ROLE", v: "Full Stack Developer Intern @ Bridgeon Solutions" },
  { k: "STACK", v: "React · Node.js · Express · MongoDB" },
  { k: "FOCUS", v: "Real-time systems, job pipelines, AI-integrated apps" },
  { k: "EDUCATION", v: "BCA, SGOU Kerala — Expected 2026" },
  { k: "STATUS", v: "Open to opportunities", accent: true },
];

export const stackMarquee = [
  "React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "TypeScript",
  "Redis", "BullMQ", "Socket.IO", "DuckDB", "Docker", "AWS EC2", "OpenAI SDK",
  "Razorpay", "Cloudinary",
];

export type CapabilityGroup = {
  num: string;
  title: string;
  items: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    num: "01",
    title: "Frontend Engineering",
    items: ["React.js", "Redux Toolkit", "Next.js", "TypeScript", "React Router", "Tailwind CSS", "Recharts", "Axios"],
  },
  {
    num: "02",
    title: "Backend & Auth",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Bcrypt", "Cookie Auth", "Google OAuth"],
  },
  {
    num: "03",
    title: "Data & Infrastructure",
    items: ["MongoDB", "Mongoose", "DuckDB", "Redis", "BullMQ", "Cloudflare R2"],
  },
  {
    num: "04",
    title: "AI & Analytics",
    items: ["OpenAI SDK", "LLM Integration", "Data Profiling", "Dashboard Generation"],
  },
  {
    num: "05",
    title: "DevOps & Deployment",
    items: ["AWS EC2", "Vercel", "Docker", "Git / GitHub", "Postman"],
  },
  {
    num: "06",
    title: "Tools & Integrations",
    items: ["Puppeteer", "Multer", "Vite", "Cloudinary", "Razorpay"],
  },
];

export type Shot = { src: string; url: string; alt: string };

export type Project = {
  index: string;
  name: string;
  tagline: string;
  liveUrl: string;
  shots: Shot[];
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
    tagline: "Turns a raw CSV or Excel file into a live dashboard — no manual charting, powered by a background job pipeline.",
    liveUrl: "https://insightflow-ai88.vercel.app",
    shots: [
      { src: "/assets/insightflow-hero.png", url: "insightflow-ai88.vercel.app/home", alt: "InsightFlow landing page — AI-powered data analytics for the modern enterprise" },
      { src: "/assets/insightflow-datasets.png", url: "insightflow-ai88.vercel.app/datasets", alt: "InsightFlow dataset ingestion screen with drag-and-drop upload" },
      { src: "/assets/insightflow-dashboard.png", url: "insightflow-ai88.vercel.app/datasets/.../dashboard", alt: "InsightFlow operational intelligence dashboard with generated charts" },
      { src: "/assets/insightflow-chat.png", url: "insightflow-ai88.vercel.app/chat/...", alt: "InsightFlow AI chat interface answering questions about an uploaded dataset" },
    ],
    problem: "Turning a raw dataset into something a non-technical stakeholder can read usually means a person manually cleaning data, picking chart types, and writing SQL.",
    solution: "Upload a file and a multi-stage pipeline profiles it, classifies its columns, and proposes a dashboard automatically — with a chat interface for follow-up questions in plain English.",
    features: [
      "Multi-stage ingestion → profiling → validation → dashboard-generation pipeline",
      "DuckDB analytics engine queries datasets directly in Cloudflare R2 — no download step",
      "Redis + BullMQ background workers with live progress over Socket.IO",
      "Server-rendered PDF report export via Puppeteer",
      "Natural-language chat over uploaded datasets using the OpenAI SDK",
    ],
    flow: ["React · Vercel", "Express API · EC2", "BullMQ / Redis queue", "DuckDB over R2", "MongoDB job state", "Socket.IO progress"],
    decisions: [
      { label: "DuckDB over R2", detail: "query large files in place instead of downloading them to the server first" },
      { label: "BullMQ + Redis", detail: "dataset profiling and dashboard generation run as background jobs so the API stays responsive" },
      { label: "Socket.IO", detail: "job progress streams to the client in real time instead of polling" },
    ],
    authDeployment: "Cookie-based JWT authentication with Google OAuth. Express backend deployed on AWS EC2 behind Nginx; React frontend on Vercel.",
    stack: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "DuckDB", "Redis", "BullMQ", "Socket.IO", "Cloudflare R2", "OpenAI SDK", "Puppeteer", "AWS EC2"],
  },
  {
    index: "02 / FULL-STACK E-COMMERCE PLATFORM",
    name: "Luxora",
    tagline: "A luxury furniture storefront with a complete commerce backend — cart, wishlist, coupons, and checkout.",
    liveUrl: "https://luxoraaa.vercel.app",
    shots: [
      { src: "/assets/luxora-home.png", url: "luxoraaa.vercel.app", alt: "Luxora storefront home page — online store of furniture inspired by nature" },
      { src: "/assets/luxora-products.png", url: "luxoraaa.vercel.app/products", alt: "Luxora product grid with wooden furniture pieces" },
      { src: "/assets/luxora-product-detail.png", url: "luxoraaa.vercel.app/products/...", alt: "Luxora product detail page for a sculptural curved wooden bookshelf" },
      { src: "/assets/luxora-checkout.png", url: "luxoraaa.vercel.app/detailsandpayment", alt: "Luxora checkout page with delivery details, coupon code, and payment method" },
      { src: "/assets/luxora-orders.png", url: "luxoraaa.vercel.app/orders", alt: "Luxora order history page showing order status" },
    ],
    problem: "A believable e-commerce experience needs more than product cards — real cart logic, discount handling, order tracking, and a payment flow that doesn't fall apart at the edges.",
    solution: "A full storefront with product management, wishlist, a coupon engine, Razorpay checkout, and an admin dashboard — built on a three-tier role hierarchy.",
    features: [
      "Cart, wishlist, and orders as independent MongoDB collections",
      "Coupon system — percentage or flat discounts, usage limits, expiry",
      "Razorpay payment integration with COD, card, and UPI flows",
      "Cloudinary-backed product image management",
      "Superadmin / admin / user role hierarchy with a full admin dashboard",
    ],
    flow: ["React · Context API", "Express REST API", "MongoDB", "Cloudinary storage", "Razorpay payments"],
    decisions: [
      { label: "Role-based authorization", detail: "a three-tier hierarchy instead of a single admin flag" },
      { label: "Cross-domain cookie auth", detail: "sameSite: none, secure: true to support a split frontend/backend deploy" },
    ],
    authDeployment: "JWT authentication with Google OAuth via Passport.js and OTP verification. React frontend on Vercel, Express backend on Render.",
    stack: ["React.js", "Context API", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary", "Passport.js"],
  },
];

export type TimelineItem = {
  date: string;
  role: string;
  org: string;
  desc?: string[];
};

export const timeline: TimelineItem[] = [
  {
    date: "NOV 2025 — PRESENT",
    role: "Full Stack Developer Intern",
    org: "Bridgeon Solutions · Kerala, India",
    desc: [
      "Developed scalable web application features using React.js, Node.js, Express.js, and MongoDB",
      "Designed and integrated secure REST APIs with JWT authentication and MongoDB",
      "Built reusable backend modules, optimized application performance, and maintained existing features",
    ],
  },
  {
    date: "EXPECTED 2026",
    role: "Bachelor of Computer Applications (BCA)",
    org: "Sree Narayana Guru Open University (SGOU), Kerala",
  },
];

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const terminalLines = [
  { p: "$", k: "whoami" },
  { out: "muhammed_shafi_kt — full-stack engineer" },
  { p: "$", k: "stack --primary" },
  { out: "react · node.js · express · mongodb" },
  { p: "$", k: "status ./availability" },
  { out: "open_to_work: true" },
];
