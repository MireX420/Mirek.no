import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

export default function Contact() {
  const channels = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "Adrian Mirek", href: profile.linkedin, external: true },
    { icon: Github, label: "GitHub", value: "MireX420", href: profile.github, external: true },
  ];

  return (
    <section id="contact" className="section container">
      <SectionHeading index="05" label="contact" title="Let's talk" />
      <div className="contact">
        <p className="contact__intro">
          I’m looking for entry-level and graduate roles in cybersecurity. If you have an opportunity or a question about my work, email is the fastest way to reach me.
        </p>
        <ul className="contact__channels">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label}>
              <a
                className="card channel"
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon size={20} className="channel__icon" aria-hidden="true" />
                <span className="channel__label">{label}</span>
                <span className="channel__value">{value}</span>
                <ArrowUpRight size={18} className="channel__arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
