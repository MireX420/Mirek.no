import SectionHeading from "./SectionHeading";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="labs" className="section container">
      <SectionHeading index="02" label="labs & projects" title="Hands-on security work" />
      <ol className="labs">
        {projects.map((p, i) => (
          <li key={p.title} className="card lab">
            <div className="lab__meta">
              <span className="lab__id">LAB-{String(i + 1).padStart(2, "0")}</span>
              <span className="lab__category">{p.category}</span>
            </div>
            <div className="lab__body">
              <h3>{p.title}</h3>
              <ul className="lab__points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Tools and methods">
                {p.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
