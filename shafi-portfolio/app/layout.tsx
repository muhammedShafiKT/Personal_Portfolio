import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Shafi KT | Full Stack Developer (MERN)",
  description:
    "Muhammed Shafi KT is a Full Stack Developer (MERN) with 1 year of hands-on experience building scalable full-stack applications with React.js, Node.js, MongoDB, TypeScript, Docker, Redis, AWS, and RAG AI pipelines.",
  keywords: [
    "Muhammed Shafi KT",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "FastAPI",
    "RAG",
    "Redis",
    "Docker",
    "AWS",
  ],
  authors: [{ name: "Muhammed Shafi KT" }],
  openGraph: {
    title: "Muhammed Shafi KT | Full Stack Developer (MERN)",
    description:
      "MERN Stack Developer with 1 year of hands-on experience building scalable full-stack applications with React.js, Node.js, MongoDB, and TypeScript. Skilled in REST APIs, JWT/OAuth authentication, Docker, Redis, AWS, and RAG pipelines.",
    type: "website",
    url: "https://muhammedshafikt-fullstack-developer.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Shafi KT | Full Stack Developer (MERN)",
    description:
      "MERN Stack Developer with 1 year of hands-on experience building scalable full-stack applications with React.js, Node.js, MongoDB, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
