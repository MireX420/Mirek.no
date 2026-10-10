import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import portrait from "../assets/portrait.webp";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero__text">
        <p className="eyebrow">
          <span className="eyebrow__dot" aria-hidden="true" />
          $ whoami
        </p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">
          {profile.role} <span className="hero__sep">/</span> Pentesting{" "}
          <span className="hero__sep">/</span> Forensics <span className="hero__sep">/</span> GRC
        </p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#labs">
            View labs <ArrowRight size={16} />
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>

        <ul className="hero__links" aria-label="Profiles">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} /> Email
            </a>
          </li>
        </ul>
      </div>

      <figure className="hero__portrait">
        <div className="frame">
          <img src={portrait} alt={`Portrait of ${profile.name}`} width="800" height="1000" />
          <span className="frame__corner frame__corner--tl" aria-hidden="true" />
          <span className="frame__corner frame__corner--br" aria-hidden="true" />
        </div>
        <figcaption className="status">
          {profile.status.map((s) => (
            <div key={s.key}>
              <span className="status__key">{s.key}</span>
              <span className="status__val">
                {s.live && <span className="status__live" aria-hidden="true" />}
                {s.value}
              </span>
            </div>
          ))}
        </figcaption>
      </figure>
    </section>
  );
}
