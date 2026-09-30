import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] =
    useState("home");

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) =>
          document.getElementById(item.id)
        )
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const goTo = (id) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    const offset = 80;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${
          scrolled
            ? "navbar-scrolled"
            : ""
        }`}
      >
        <div className="navbar-inner">

          {/* LOGO */}
          <button
            className="navbar-logo"
            onClick={() => goTo("home")}
          >
            KP<span>.</span>
          </button>

          {/* DESKTOP NAV */}
          <div className="navbar-links">
            {navItems
              .filter(
                (item) =>
                  item.id !== "home"
              )
              .map((item) => (
                <button
                  key={item.id}
                  className={`navbar-link ${
                    activeSection ===
                    item.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    goTo(item.id)
                  }
                >
                  {item.name}
                </button>
              ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="navbar-actions">

            <button
              className="navbar-talk"
              onClick={() =>
                goTo("contact")
              }
            >
              LET'S TALK
              <ArrowUpRight size={15} />
            </button>

            <button
              className="navbar-menu"
              onClick={() =>
                setMobileOpen(
                  !mobileOpen
                )
              }
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-inner">

            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-link ${
                  activeSection ===
                  item.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  goTo(item.id)
                }
              >
                {item.name}
              </button>
            ))}

            <div className="mobile-socials">

              <a
                href="https://github.com/SpyderWeb0731"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/karan-prajapati-0b607a369/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}