import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Code2,
  Network,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function About() {
    const aboutRef = useRef(null);
const [showCyberCore, setShowCyberCore] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowCyberCore(entry.isIntersecting);
    },
    {
      threshold: 0.2,
    }
  );

  if (aboutRef.current) {
    observer.observe(aboutRef.current);
  }

  return () => observer.disconnect();
}, []);
  const focusAreas = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Cybersecurity",
      description:
        "Security implementation, vulnerability assessment, web security, security research and secure system design.",
    },
    {
      icon: Code2,
      number: "02",
      title: "Web Development",
      description:
        "Building modern web applications using frontend and backend technologies with a focus on functionality and user experience.",
    },
    {
      icon: Network,
      number: "03",
      title: "Networking",
      description:
        "Networking fundamentals, OSI model, TCP/IP, Linux environments and practical network security concepts.",
    },
    {
      icon: Terminal,
      number: "04",
      title: "Security Tools",
      description:
        "Hands-on exposure to tools including Wireshark, Burp Suite, Nmap, Metasploit and Cisco Packet Tracer.",
    },
  ];

  return (
    <section className="about-section" id="about">

      {/* Background elements */}
      <div className="section-grid"></div>

      <div className="about-orb about-orb-one"></div>
      <div className="about-orb about-orb-two"></div>


      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
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
            01 / ABOUT ME
          </div>

          <h2>
            SECURITY
            <span> × </span>
            DEVELOPMENT
          </h2>

          <p>
            I build, secure and understand digital systems from
            both sides of the technology spectrum.
          </p>
        </motion.div>


        {/* Main About */}
        <div className="about-main">

          {/* Left */}
          <motion.div
            className="about-introduction"
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.8,
            }}
          >

            <div className="about-number">
              01
            </div>

            <h3>
              Building digital
              <br />
              <span>experiences with security in mind.</span>
            </h3>

            <p>
              I am a B.Tech Computer Science graduate currently
              working as a Cyber Security Analyst at Gryphon Cyber
              Private Limited.
            </p>

            <p>
              My work involves cybersecurity implementation,
              security research, GrapheneOS and MDM solutions,
              technical reporting and evaluating security
              solutions.
            </p>

            <p>
              Alongside cybersecurity, I have a strong interest in
              web development and have built full-stack applications
              using technologies such as React.js, Node.js,
              Express.js and MongoDB.
            </p>

            <button
              className="about-link"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              EXPLORE MY PROJECTS
              <ArrowUpRight size={17} />
            </button>

          </motion.div>


          {/* Right - Focus Areas */}
          <motion.div
            className="focus-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.div
                  className="focus-card"
                  key={area.number}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                  }}
                >

                  <div className="focus-card-top">
                    <span className="focus-number">
                      {area.number}
                    </span>

                    <Icon
                      size={23}
                      strokeWidth={1.5}
                    />
                  </div>

                  <h4>
                    {area.title}
                  </h4>

                  <p>
                    {area.description}
                  </p>

                  <div className="focus-card-line"></div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>


        {/* Bottom Stats */}
        <motion.div
          className="about-stats"
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="stat">
            <strong>01</strong>
            <span>Cybersecurity Role</span>
          </div>

          <div className="stat">
            <strong>03+</strong>
            <span>Web Projects</span>
          </div>

          <div className="stat">
            <strong>04+</strong>
            <span>Certifications / Courses</span>
          </div>

          <div className="stat">
            <strong>02</strong>
            <span>Technical Domains</span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}