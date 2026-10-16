// All site content lives here, so updating the portfolio means editing this file only.

export const profile = {
  name: "Adrian Mirek",
  role: "Cybersecurity Student",
  tagline:
    "Cybersecurity Student finishing a double-degree MSc in Applied Computer Science and Cybersecurity. Hands-on with penetration testing, digital forensics, security auditing and OSINT.",
  email: "adrianmirek03@gmail.com",
  github: "https://github.com/MireX420",
  linkedin: "https://www.linkedin.com/in/adrian-mirek-6b7396354/",
  location: "Norway",
  status: [
    { key: "degree", value: "MSc Cybersecurity · Aug 2027", live: true },
    { key: "cert", value: "CompTIA Security+ · in progress" },
    { key: "lab", value: "TryHackMe · active" },
  ],
  about: [
    "I work across both sides of security: testing systems the way an attacker would, and building the policies, audits and controls that keep organisations safe.",
    "Through my master's at Østfold University College (HIOF) and a double-degree exchange at IPVC in Portugal, I've done practical coursework in ethical hacking, digital forensics, cryptography, security auditing and compliance. I keep sharpening those skills with offensive and defensive labs on TryHackMe.",
    "Before security I studied digital media and design and worked with frontend development, so I'm comfortable writing reports and explaining findings to people who aren't technical.",
  ],
  focus: [
    {
      title: "Offensive security",
      text: "Reconnaissance, vulnerability mapping and penetration testing in lab networks.",
    },
    {
      title: "Digital forensics",
      text: "Evidence acquisition and analysis with a documented chain of custody.",
    },
    {
      title: "Governance & audit",
      text: "Security audits, risk assessment and governance plans with prioritised actions.",
    },
  ],
};

export const projects = [
  {
    title: "Simulated penetration test on a multi-VM network",
    category: "Penetration testing",
    points: [
      "Built and configured a network of virtual machines as a test environment for a penetration test.",
      "Ran reconnaissance and vulnerability mapping, then documented findings and attack paths.",
    ],
    tools: ["Kali Linux", "Nmap", "Wireshark"],
  },
  {
    title: "Security audit of a fictional company",
    category: "Security audit",
    points: [
      "Carried out a full security audit of a fictional organisation, covering policies, controls and technical vulnerabilities.",
      "Wrote a structured audit report with prioritised findings and recommended measures.",
    ],
    tools: ["Audit methodology", "Risk assessment", "Reporting"],
  },
  {
    title: "Authorised phishing campaign against IPVC",
    category: "Social engineering",
    points: [
      "Designed and ran an authorised social engineering campaign against an institution in Portugal to map human security weaknesses.",
    ],
    tools: ["Phishing simulation", "Awareness", "Human risk"],
  },
  {
    title: "OSINT-based governance plan for a Norwegian hospital",
    category: "OSINT & governance",
    points: [
      "Mapped a Norwegian hospital's digital attack surface using public data only.",
      "Developed a security plan addressing the identified vulnerabilities and risk areas.",
    ],
    tools: ["OSINT", "Threat intelligence", "Governance"],
  },
  {
    title: "Digital forensics case investigation",
    category: "Digital forensics",
    points: [
      "Acquired and analysed a mobile phone for digital evidence, following chain-of-custody principles.",
    ],
    tools: ["Autopsy", "Chain of custody", "Evidence analysis"],
  },
];

export const education = [
  {
    degree: "M.Sc. Applied Computer Science, Cybersecurity Management",
    school: "Østfold University College (HIOF), Halden",
    period: "Aug 2025 – Aug 2027",
  },
  {
    degree: "M.Sc. Cybersecurity, dual-degree exchange",
    school: "Instituto Politécnico de Viana do Castelo (IPVC), Portugal",
    period: "Feb 2026 – Feb 2027",
  },
  {
    degree: "B.A. Digital Media and Design",
    school: "Østfold University College (HIOF), Halden",
    period: "Aug 2022 – Jun 2025",
  },
];

export const certifications = [
  { name: "CompTIA Security+", status: "In progress" },
  { name: "TryHackMe", status: "Active · offensive & defensive labs" },
];

export const skills = [
  {
    group: "Security domains",
    items: [
      "Ethical hacking fundamentals",
      "Digital forensics",
      "Cryptography",
      "Security auditing & compliance",
      "Cyber threat intelligence",
      "OSINT",
    ],
  },
  {
    group: "Tools",
    items: ["Kali Linux", "Nmap", "Wireshark", "Autopsy", "OpenVAS", "Burp Suite", "Metasploit"],
  },
  {
    group: "Systems & networks",
    items: ["Linux (VMs)", "TCP/IP fundamentals", "Packet analysis"],
  },
  {
    group: "Development",
    items: ["Python", "JavaScript, HTML, CSS", "React", "Git & GitHub"],
  },
];

export const languages = [
  { name: "Polish", level: "Native" },
  { name: "Norwegian", level: "Fluent" },
  { name: "English", level: "Fluent" },
];
