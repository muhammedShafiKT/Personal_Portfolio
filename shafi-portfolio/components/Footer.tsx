import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot-grid">
        <span className="foot-left">
          Designed &amp; engineered by Muhammed Shafi KT · © {year}
        </span>
        <div className="foot-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.resumePath} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
