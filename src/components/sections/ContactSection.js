import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function ContactSection() {
  return (
    <section id="contact" className="section-frame contact-section">
      <div className="contact-copy">
        <span className="section-kicker">Contact</span>
        <h2>Want to talk about a role or project?</h2>
        <p>
          I am open to full-stack, backend-heavy, SaaS, platform, and product engineering roles.
          I am especially interested in teams where engineering quality and product clarity both matter.
        </p>

        <div className="contact-links">
          <a href="mailto:mp06121@gmail.com">
            <FiMail aria-hidden="true" />
            mp06121@gmail.com
          </a>
          <a href="https://github.com/mihir06121" target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mihir-panchal-5167811a4/" target="_blank" rel="noreferrer">
            <FiLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
      <aside className="contact-panel" aria-label="Contact options">
        <h3>Fastest way to reach me</h3>
        <p>
          Send a direct email with the role, product, or project context. I usually respond best
          when the message includes what is being built and what kind of engineering help is needed.
        </p>
        <a className="button button-primary" href="mailto:mp06121@gmail.com">
          <FiMail aria-hidden="true" />
          Email Mihir
        </a>
      </aside>
    </section>
  );
}

export default ContactSection;
