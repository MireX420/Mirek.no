import SectionHeading from "./SectionHeading";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading index="04" label="skills" title="What I work with" />
      <div className="skills">
        {skills.map((s, i) => (
          <article key={s.group} className={`card skill ${i === 0 ? "skill--primary" : ""}`}>
            <h3>{s.group}</h3>
            <ul>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
