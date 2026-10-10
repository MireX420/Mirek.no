import { BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, certifications, languages } from "../data";

export default function Education() {
  return (
    <section id="education" className="section container">
      <SectionHeading index="03" label="education" title="Education & certifications" />
      <div className="edu">
        <ol className="timeline">
          {education.map((e) => (
            <li key={e.degree} className="timeline__item">
              <p className="timeline__period">{e.period}</p>
              <h3>{e.degree}</h3>
              <p className="timeline__school">{e.school}</p>
            </li>
          ))}
        </ol>

        <div className="edu__side">
          <div className="card side-card">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((c) => (
                <li key={c.name}>
                  <BadgeCheck size={18} className="side-card__icon" aria-hidden="true" />
                  <span>
                    <strong>{c.name}</strong>
                    <span className="side-card__sub">{c.status}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card side-card">
            <h3>Languages</h3>
            <dl className="langs">
              {languages.map((l) => (
                <div key={l.name}>
                  <dt>{l.name}</dt>
                  <dd>{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
