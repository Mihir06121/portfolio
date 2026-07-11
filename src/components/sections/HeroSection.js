import React from "react";
import { FiArrowUpRight, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import pdf from "../../assets/Mihir_Panchal.pdf";

function HeroSection({ stats, focusAreas }) {
  return (
    <section id="home" className="hero-section section-frame">
      <div className="hero-copy">
        <p className="eyebrow">
          <FiMapPin aria-hidden="true" />
          Mumbai, India / Full-stack software engineer
        </p>
        <h1 className="hero-title">Engineering product systems where reliability is the feature.</h1>
        <p className="hero-lede">
          I am Mihir Panchal, a product-minded full-stack software engineer building SaaS platforms,
          backend systems, developer tools, and multi-tenant applications. My work sits around scoped
          access, reliable data models, realtime workflows, background jobs, and production operations.
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#work">
            <FiArrowUpRight aria-hidden="true" />
            View Work
          </a>
          <a className="button button-secondary" href={pdf} download="Mihir_Panchal.pdf">
            <FiDownload aria-hidden="true" />
            Resume
          </a>
          <a className="button button-soft" href="mailto:mp06121@gmail.com">
            <FiMail aria-hidden="true" />
            Email
          </a>
        </div>

        <div className="focus-strip" aria-label="Engineering focus areas">
          {focusAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Mihir Panchal engineering profile">
        <div className="terminal-panel">
          <div className="terminal-topline">
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span className="terminal-dot" />
            <span>~/mihir.systems</span>
          </div>
          <pre className="ascii-mark" aria-hidden="true">
{`+----------------------+
|  MIHIR PANCHAL      |
|  SYSTEMS BUILDER    |
+----------------------+`}
          </pre>
          <div className="terminal-code" aria-label="Profile code sample">
            <p><span>const</span> profile = {"{"}</p>
            <p> role: "software engineer",</p>
            <p> current: "CondAI + devSemble",</p>
            <p> systems: ["RBAC", "queues", "judge"],</p>
            <p> deploys: ["AWS", "Nginx", "PM2"],</p>
            <p>{"}"};</p>
          </div>
        </div>

        <div className="system-card-grid">
          {stats.map((item) => (
            <article className="metric-tile" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
