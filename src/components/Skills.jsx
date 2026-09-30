import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Network,
  Terminal,
  Cpu,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "CYBERSECURITY",
    icon: ShieldCheck,
    skills: [
      "Vulnerability Assessment",
      "Penetration Testing Basics",
      "Web Security",
      "Cryptography Basics",
      "Security Research",
      "Secure System Design",
    ],
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    number: "03",
    title: "NETWORKING & SYSTEMS",
    icon: Network,
    skills: [
      "TCP/IP",
      "OSI Model",
      "Network Security",
      "Linux",
      "Kali Linux",
      "Ubuntu",
      "Windows",
    ],
  },
  {
    number: "04",
    title: "SECURITY TOOLS",
    icon: Terminal,
    skills: [
      "Wireshark",
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "John the Ripper",
      "Cisco Packet Tracer",
    ],
  },
  {
    number: "05",
    title: "PROGRAMMING & CS",
    icon: Cpu,
    skills: [
      "Java",
      "Python",
      "Data Structures",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "SQL",
    ],
  },
  {
    number: "06",
    title: "TOOLS & PLATFORMS",
    icon: Wrench,
    skills: [
      "GitHub",
      "Git",
      "VS Code",
      "MySQL",
      "GrapheneOS",
      "MDM",
    ],
  },
];

function SkillGroup({ group, index }) {
  const Icon = group.icon;

  return (
    <motion.div
      className="skill-group"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
      }}
    >
      <div className="skill-group-top">
        <span className="skill-number">
          {group.number}
        </span>

        <div className="skill-icon">
          <Icon size={19} strokeWidth={1.5} />
        </div>
      </div>

      <h3>{group.title}</h3>

      <div className="skill-list">
        {group.skills.map((skill, skillIndex) => (
          <motion.span
            key={skill}
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay:
                index * 0.08 +
                skillIndex * 0.035,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="skills-container">

        <motion.div
          className="skills-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="section-label">
            <span>04</span>
            <span>SKILLS</span>
          </div>

          <div className="skills-heading-row">
            <h2>
              SECURITY
              <br />
              <span>MEETS CODE.</span>
            </h2>

            <p>
              A combination of cybersecurity
              knowledge, software development,
              networking, and practical security
              tooling.
            </p>
          </div>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.number}
              group={group}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}