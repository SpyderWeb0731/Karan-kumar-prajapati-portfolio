import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  ExternalLink,
  FileText,
  Presentation,
} from "lucide-react";

const certifications = [
  {
    title: "AWS ACADEMY",
    subtitle: "Cloud Security Foundations",
    date: "NOV — DEC 2025",
    link: null,
  },
  {
    title: "CCNA",
    subtitle: "Introduction to Network",
    date: "FEB — APR 2025",
    link: null,
  },
  {
    title: "NPTEL",
    subtitle: "Compiler Design",
    date: "JAN — APR 2025",
    link: "/certificates/compiler-design-nptel.pdf",
  },
  {
    title: "NPTEL",
    subtitle: "Software Engineering and Testing Methodology",
    date: "JUL — OCT 2024",
    link: "/certificates/software-engineering-nptel.jpg",
  },
];

const research = [
  {
    title: "ICA6NT 2026",
    subtitle: "Certificate of Participation",
    description:
      "Presented a research paper titled “CampusCart: E-Commerce Website With Personalized Recommendations” at the 6th International Conference on Artificial Intelligence, 6G Communications and Network Technologies.",
    organization: "VELAMMAL INSTITUTE OF TECHNOLOGY",
    location: "CHENNAI",
    date: "25 — 26 MAR 2026",
    link: "/certificates/ica6nt-2026-campuscart.pdf",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">

        {/* HEADER */}
        <motion.div
          className="education-header"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="section-label">
            <span>05</span>
            <span>EDUCATION & CERTIFICATIONS</span>
          </div>

          <h2>
            KNOWLEDGE
            <br />
            <span>BUILDS CAPABILITY.</span>
          </h2>
        </motion.div>

        {/* EDUCATION + CERTIFICATIONS */}
        <div className="education-layout">

          {/* EDUCATION */}
          <motion.div
            className="education-main"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="education-block-label">
              <GraduationCap size={18} />
              <span>EDUCATION</span>
            </div>

            <div className="degree-card">
              <div className="degree-top">
                <span>2022 — 2026</span>
                <span>77.7%</span>
              </div>

              <h3>
                B.TECH
                <br />
                COMPUTER SCIENCE
                <br />
                & ENGINEERING
              </h3>

              <p>GALGOTIAS UNIVERSITY</p>

              <div className="degree-line" />
            </div>

            <div className="school-details">
              <div>
                <span>CLASS XII</span>
                <strong>74.8%</strong>
              </div>

              <div>
                <span>CLASS X</span>
                <strong>80.8%</strong>
              </div>
            </div>
          </motion.div>

          {/* CERTIFICATIONS */}
          <motion.div
            className="certifications-main"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <div className="education-block-label">
              <Award size={18} />
              <span>CERTIFICATIONS & COURSES</span>
            </div>

            <div className="certification-list">
              {certifications.map((cert, index) => {
                const content = (
                  <>
                    <span className="cert-number">
                      0{index + 1}
                    </span>

                    <div className="cert-info">
                      <span>{cert.title}</span>

                      <h4>{cert.subtitle}</h4>
                    </div>

                    <div className="cert-date">
                      {cert.date}
                    </div>

                    {cert.link ? (
                      <ExternalLink
                        size={15}
                        className="cert-arrow"
                      />
                    ) : (
                      <span className="cert-arrow-placeholder" />
                    )}
                  </>
                );

                return (
                  <motion.div
                    className={`certification-item ${
                      cert.link ? "certification-clickable" : ""
                    }`}
                    key={cert.subtitle}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                    }}
                  >
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certification-link"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* RESEARCH & CONFERENCES */}
        <motion.div
          className="research-section"
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
            duration: 0.8,
          }}
        >
          <div className="education-block-label research-label">
            <Presentation size={18} />
            <span>RESEARCH & CONFERENCES</span>
          </div>

          <div className="research-card">
            <div className="research-card-glow" />

            <div className="research-number">
              01
            </div>

            <div className="research-icon">
              <FileText size={22} />
            </div>

            <div className="research-content">
              <div className="research-meta">
                <span>CONFERENCE PAPER</span>
                <span>{research[0].date}</span>
              </div>

              <h3>
                {research[0].title}
              </h3>

              <h4>
                {research[0].subtitle}
              </h4>

              <p>
                {research[0].description}
              </p>

              <div className="research-bottom">
                <div>
                  <span>
                    {research[0].organization}
                  </span>
                  <small>
                    {research[0].location}
                  </small>
                </div>

                <a
                  href={research[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-view"
                >
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}