import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Shield,
  ShoppingCart,
  Code2,
  Utensils,
  X,
  Rocket,
  Activity,
} from "lucide-react";

const projects = [
  {
    id: "01",
    title: "GRYPHON CYBER",
    subtitle: "ORGANIZATION WEBSITE",
    description:
      "A professional website created for Gryphon Cyber Private Limited, presenting the organization's cybersecurity services, capabilities, and technology-focused work.",
    category: "WEB DEVELOPMENT",
    icon: Shield,
    featured: true,
    technologies: [
      "Web Development",
      "Responsive Design",
      "UI / UX",
    ],
    link: "#",
  },

  {
    id: "02",
    title: "CAMPUSCART",
    subtitle: "AI-POWERED E-COMMERCE",
    description:
      "A full-stack e-commerce platform featuring product discovery, category filtering, authentication, cart and order management, an admin dashboard, and an AI-powered assistant for budget-based product recommendations.",
    category: "WEB DEVELOPMENT × AI",
    icon: ShoppingCart,
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI Assistant",
    ],
    link: "#",
  },

  {
    id: "03",
    title: "SORTING VISUALIZER",
    subtitle: "ALGORITHM VISUALIZATION",
    description:
      "An interactive web application that visually demonstrates sorting algorithms and helps users understand algorithmic behavior through animation.",
    category: "WEB DEVELOPMENT",
    icon: Code2,
    featured: false,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Algorithms",
    ],
    link:
      "https://spyderweb0731.github.io/Sorting-Visualizer/",
  },

  {
    id: "04",
    title: "KITCHEN4U",
    subtitle: "FOOD ORDERING PLATFORM",
    description:
      "A full-stack food ordering website featuring dynamic menus, cart and order management, ratings, and contact functionality.",
    category: "FULL-STACK DEVELOPMENT",
    icon: Utensils,
    featured: false,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link:
      "https://spyderweb0731.github.io/Food-ordering/",
  },
];


/* =========================================================
   DEPLOYMENT STATUS MODAL
   ========================================================= */

function DeploymentModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="deployment-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >

        <motion.div
          className="deployment-modal"
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(event) =>
            event.stopPropagation()
          }
        >

          {/* SCAN LINE */}

          <div className="deployment-scan-line" />

          {/* CLOSE */}

          <button
            className="deployment-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>


          {/* ICON */}

          <motion.div
            className="deployment-icon"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.35,
            }}
          >
            <Rocket size={28} strokeWidth={1.4} />
          </motion.div>


          {/* STATUS */}

          <div className="deployment-status">
            <span className="deployment-status-dot" />
            DEPLOYMENT STATUS
          </div>


          {/* TITLE */}

          <h3>
            {project.title}
          </h3>


          {/* MAIN MESSAGE */}

          <h4>
            PROJECT DEPLOYMENT
            <br />
            <span>IN PROGRESS</span>
          </h4>


          <p>
            This project is currently undergoing
            final development and deployment
            preparation.
          </p>

          <p>
            The live version will be available here
            once deployment is complete.
          </p>


          {/* PROGRESS */}

          <div className="deployment-progress">

            <div className="deployment-progress-top">
              <span>
                SYSTEM STATUS
              </span>

              <span>
                BUILDING
              </span>
            </div>

            <div className="deployment-progress-track">
              <motion.div
                className="deployment-progress-bar"
                initial={{ width: "0%" }}
                animate={{ width: "72%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              />
            </div>

          </div>


          {/* FOOTER */}

          <div className="deployment-footer">

            <div>
              <Activity size={14} />
              <span>
                LIVE DEPLOYMENT PENDING
              </span>
            </div>

            <span>
              {project.id}
            </span>

          </div>

        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}


/* =========================================================
   PROJECT CARD
   ========================================================= */

function ProjectCard({ project, index }) {

  const Icon = project.icon;

  const [showDeployment, setShowDeployment] =
    useState(false);

  const hasLiveProject =
    project.link &&
    project.link !== "#";


  return (
    <>
      <motion.article
        className={`project-card ${
          project.featured
            ? "project-card-featured"
            : "project-card-small"
        }`}

        initial={{
          opacity: 0,
          y: 60,
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
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}

        whileHover={{
          y: -8,
        }}
      >

        <div className="project-card-glow" />


        {/* TOP */}

        <div className="project-card-top">

          <span className="project-number">
            {project.id}
          </span>

          <div className="project-icon">
            <Icon
              size={20}
              strokeWidth={1.5}
            />
          </div>

        </div>


        {/* CONTENT */}

        <div className="project-card-content">

          <span className="project-category">
            {project.category}
          </span>

          <h3>
            {project.title}
          </h3>

          <h4>
            {project.subtitle}
          </h4>

          <p>
            {project.description}
          </p>


          {/* TECHNOLOGIES */}

          <div className="project-tech">

            {project.technologies.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}

          </div>

        </div>


        {/* FOOTER */}

        <div className="project-card-footer">

          {hasLiveProject ? (

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span>
                VIEW PROJECT
              </span>

              <ExternalLink size={16} />
            </a>

          ) : (

            <button
              type="button"
              className="
                project-link
                project-link-coming
              "
              onClick={() =>
                setShowDeployment(true)
              }
            >
              <span>
                VIEW PROJECT
              </span>

              <ArrowUpRight size={16} />
            </button>

          )}


          <span className="project-arrow">
            <ArrowUpRight size={22} />
          </span>

        </div>

      </motion.article>


      {/* DEPLOYMENT MODAL */}

      {showDeployment && (
        <DeploymentModal
          project={project}
          onClose={() =>
            setShowDeployment(false)
          }
        />
      )}

    </>
  );
}


/* =========================================================
   PROJECTS SECTION
   ========================================================= */

export default function Projects() {

  const featuredProjects =
    projects.filter(
      (project) =>
        project.featured
    );

  const secondaryProjects =
    projects.filter(
      (project) =>
        !project.featured
    );


  return (
    <section
      id="projects"
      className="projects-section"
    >

      <div className="projects-container">


        {/* SECTION HEADER */}

        <motion.div
          className="projects-header"

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

            <span>
              03
            </span>

            <span>
              PROJECTS
            </span>

          </div>


          <div className="projects-heading-row">

            <h2>
              BUILDING
              <br />

              <span>
                DIGITAL EXPERIENCES.
              </span>
            </h2>

            <p>
              A selection of projects combining
              web development, AI, software
              engineering, and practical
              technology solutions.
            </p>

          </div>

        </motion.div>


        {/* FEATURED PROJECTS */}

        <div className="projects-featured">

          {featuredProjects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            )
          )}

        </div>


        {/* OTHER PROJECTS */}

        <div className="projects-secondary">

          {secondaryProjects.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 2}
              />
            )
          )}

        </div>

      </div>

    </section>
  );
}