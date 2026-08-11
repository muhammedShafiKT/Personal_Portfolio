import { capabilities } from "@/lib/data";
import Reveal from "./Reveal";

export default function Capabilities() {
  return (
    <section className="section" id="capabilities" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">02 — Capabilities</span>
          <h2 className="section-title">What I build with.</h2>
          <p className="section-sub">
            Grouped by what each layer is responsible for, not just a tag cloud.
          </p>
        </Reveal>
        <Reveal className="cap-grid">
          {capabilities.map((group) => (
            <div className="cap-card" key={group.num}>
              <span className="cap-num">{group.num}</span>
              <h3 className="cap-title">{group.title}</h3>
              <div className="cap-list">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
