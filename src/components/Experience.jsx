import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Network,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    period: "MAY 2026 — PRESENT",
    company: "GRYPHON CYBER PRIVATE LIMITED",
    role: "Cyber Security Analyst",
    type: "PROFESSIONAL EXPERIENCE",
    icon: ShieldCheck,

    description:
      "Working on cybersecurity implementation, security research, GrapheneOS and MDM solutions for secure device management and policy enforcement.",

    details: [
      "Cybersecurity implementation",
      "GrapheneOS",
      "Mobile Device Management (MDM)",
      "Security research",
      "Security solution evaluation",
      "Technical reports and presentations",
    ],

    featured: true,
  },

  {
    number: "02",
    period: "AUG 2025 — SEP 2025",
    company: "COGNIFYZ TECHNOLOGIES",
    role: "Web Development Intern",
    type: "INTERNSHIP",
    icon: Code2,

    description:
      "Completed a virtual internship focused on web development and practical application of web technologies.",

    details: [
      "Web development",
      "Frontend development",
      "Web technologies",
      "Practical project work",
    ],

    featured: false,
  },

  {
    number: "03",
    period: "JUL 2024 — AUG 2024",
    company:
      "URANIUM CORPORATION OF INDIA LIMITED",
    role: "Networking Intern",
    type: "INTERNSHIP",
    icon: Network,

    description:
      "Completed a networking internship with practical exposure to networking concepts and the networking field.",

    details: [
      "Networking fundamentals",
      "Network technologies",
      "Practical networking exposure",
    ],

    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="experience-grid"></div>

      <div className="experience-glow experience-glow-one"></div>

      <div className="experience-glow experience-glow-two"></div>


      <div className="experience-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          className="section-heading experience-heading"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div className="section-label">
            <span></span>
            02 / EXPERIENCE
          </div>

          <h2>
            MY
            <span> JOURNEY</span>
          </h2>

          <p>
            From networking and web development to
            professional cybersecurity, my journey has
            been shaped by continuous technical learning
            and hands-on experience.
          </p>

        </motion.div>


        {/* =========================================
            TIMELINE
        ========================================= */}

        <motion.div
          className="experience-timeline"

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.08,
          }}
        >

          {/* Central timeline */}
          <div className="timeline-line">

            <motion.div
              className="timeline-progress"

              initial={{
                height: "0%",
              }}

              whileInView={{
                height: "100%",
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />

          </div>


          {experiences.map((experience, index) => {

            const Icon = experience.icon;

            return (
              <motion.article
                className={`experience-item ${
                  index % 2 === 0
                    ? "experience-left"
                    : "experience-right"
                } ${
                  experience.featured
                    ? "experience-featured"
                    : ""
                }`}

                key={experience.number}

                variants={cardVariants}
              >

                {/* Timeline node */}

                <div className="timeline-node">

                  <div className="timeline-node-inner">
                    {index === 0 ? (
                      <ShieldCheck size={16} />
                    ) : (
                      <span>
                        {experience.number}
                      </span>
                    )}
                  </div>

                </div>


                {/* Experience card */}

                <div className="experience-card">

                  {/* Top line */}

                  <div className="experience-card-top">

                    <span className="experience-number">
                      {experience.number}
                    </span>

                    <span className="experience-type">
                      {experience.type}
                    </span>

                  </div>


                  {/* Icon */}

                  <div className="experience-icon">
                    <Icon size={22} />
                  </div>


                  {/* Period */}

                  <div className="experience-period">
                    {experience.period}
                  </div>


                  {/* Company */}

                  <h3>
                    {experience.company}
                  </h3>


                  {/* Role */}

                  <h4>
                    {experience.role}
                  </h4>


                  {/* Description */}

                  <p className="experience-description">
                    {experience.description}
                  </p>


                  {/* Details */}

                  <div className="experience-details">

                    {experience.details.map(
                      (detail) => (
                        <span key={detail}>
                          {detail}
                        </span>
                      )
                    )}

                  </div>


                  {/* Bottom */}

                  <div className="experience-card-bottom">

                    <span className="experience-line"></span>

                    {experience.featured && (
                      <span className="current-role">
                        CURRENT ROLE
                      </span>
                    )}

                  </div>

                </div>

              </motion.article>
            );
          })}

        </motion.div>


        {/* =========================================
            EXPERIENCE FOOTER
        ========================================= */}

        <motion.div
          className="experience-footer"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.5,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div className="experience-footer-icon">
            <Briefcase size={20} />
          </div>

          <div>
            <strong>
              Always learning. Always building.
            </strong>

            <span>
              Cybersecurity × Development
            </span>
          </div>

          <ArrowUpRight size={18} />

        </motion.div>

      </div>

    </section>
  );
}