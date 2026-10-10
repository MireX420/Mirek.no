import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeading index="02" label="projects" title="Selected work" />
      <div className="projects">
        {projects.map((p) => (
          <article key={p.title} className="card project">
            <a
              className="project__media"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={p.image} alt="" loading="lazy" />
            </a>
            <div className="project__body">
              <p className="project__meta">{p.year}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a className="project__link" href={p.url} target="_blank" rel="noopener noreferrer">
                View project <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
