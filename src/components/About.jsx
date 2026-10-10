import { Crosshair, Fingerprint, ClipboardCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

const icons = [Crosshair, Fingerprint, ClipboardCheck];

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading index="01" label="about" title="Attacker mindset, defender’s discipline" />
      <div className="about">
        <div className="about__text">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="focus">
          {profile.focus.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={f.title} className="card focus__item">
                <Icon size={20} className="focus__icon" aria-hidden="true" />
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
