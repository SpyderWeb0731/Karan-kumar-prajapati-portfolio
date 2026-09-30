import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* SECTION LABEL */}
        <div className="contact-label">
          <span>06</span>
          <span>CONTACT</span>
        </div>

        {/* HEADING */}
        <div className="contact-heading">
          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>

          <p>
            Whether it's cybersecurity,
            web development, or building
            something completely new —
            I'm open to meaningful
            technical opportunities.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="contact-grid">

          {/* EMAIL */}
          <a
            href="mailto:kabir97085@gmail.com"
            className="contact-card"
          >
            <div className="contact-card-icon">

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="M3 7l9 6 9-6" />
              </svg>

            </div>

            <div>
              <span>EMAIL</span>
              <h3>
                kabir97085@gmail.com
              </h3>
            </div>

            <span className="contact-card-arrow">
              ↗
            </span>
          </a>

          {/* PHONE */}
          <a
            href="tel:+917008042157"
            className="contact-card"
          >
            <div className="contact-card-icon">

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18
                  2 19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  A19.79 19.79 0 0 1
                  2.12 4.18
                  2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 0
                  .7 2.81
                  2 2 0 0 1-.45 2.11
                  L8.09 9.91
                  a16 16 0 0 0 6 6
                  l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0
                  2.81.7
                  A2 2 0 0 1 22 16.92z"
                />
              </svg>

            </div>

            <div>
              <span>PHONE</span>
              <h3>
                +91 7008042157
              </h3>
            </div>

            <span className="contact-card-arrow">
              ↗
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/karan-prajapati-0b607a369/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
              />

              <path d="M8 11v6" />
              <path d="M8 8v.01" />
              <path d="M12 17v-3.5a2.5 2.5 0 0 1 5 0V17" />
              <path d="M12 11v6" />
            </svg>

            <span>LINKEDIN</span>

            <span className="social-arrow">
              ↗
            </span>

          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/SpyderWeb0731"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path
                d="M9 19c-4.3 1.4-4.3-2.1-6-2.5
                M15 19v-3.5
                c0-1 .1-1.5-.5-2
                1.7-.2 3.5-.8 3.5-4
                0-.8-.3-1.5-.8-2.1
                .1-.2.3-1-.1-2.1
                0 0-.7-.2-2.2.8
                -.6-.2-1.3-.3-2-.3
                s-1.4.1-2 .3
                c-1.5-1-2.2-.8-2.2-.8
                -.4 1.1-.2 1.9-.1 2.1
                -.5.6-.8 1.3-.8 2.1
                0 3.2 1.8 3.8 3.5 4
                -.6.5-.6 1.1-.6 2V19"
              />
            </svg>

            <span>GITHUB</span>

            <span className="social-arrow">
              ↗
            </span>

          </a>

        </div>

        {/* CTA */}
        <div className="contact-cta">

          <div className="contact-status">
            <span className="status-dot"></span>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>

          <a
            href="mailto:kabir97085@gmail.com"
            className="contact-button"
          >
            START A CONVERSATION
            <span>↗</span>
          </a>

        </div>

        {/* FOOTER */}
        <div className="contact-footer">

          <span>
            KARAN KUMAR PRAJAPATI
          </span>

          <span>
            CYBER SECURITY ANALYST × WEB DEVELOPER
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>

        </div>

      </div>
    </section>
  );
}