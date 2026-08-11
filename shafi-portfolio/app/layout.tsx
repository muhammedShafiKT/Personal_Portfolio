import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Shafi KT — Full-Stack Engineer",
  description:
    "Muhammed Shafi KT is a full-stack engineer building AI-powered and e-commerce products end to end with React, Node.js, and MongoDB — currently interning at Bridgeon Solutions.",
  openGraph: {
    title: "Muhammed Shafi KT — Full-Stack Engineer",
    description:
      "Full-stack engineer building AI-powered products end to end — React, Node.js, MongoDB, background job pipelines, and real-time systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Shafi KT — Full-Stack Engineer",
    description:
      "Full-stack engineer building AI-powered products end to end — React, Node.js, MongoDB, background job pipelines, and real-time systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
