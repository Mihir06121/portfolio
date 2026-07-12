import React from "react";
import { FiArrowUpRight, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import pdf from "../../assets/Mihir_Panchal.pdf";

const fetchRows = [
  ["Name", "Mihir Panchal"],
  ["Role", "Full-stack software engineer"],
  ["Work", "CondAI + devSemble"],
  ["Focus", "RBAC, queues, realtime, data"],
  ["Stack", "React, NestJS, Node, Prisma"],
  ["Runtime", "AWS, Nginx, PM2, Docker"],
];

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
            <span>mihir@portfolio:~</span>
          </div>
          <div className="fastfetch-body" aria-label="Fastfetch style profile summary">
            <pre className="fastfetch-logo" aria-hidden="true">
{` __  __   ____
|  \\/  | |  _ \\
| |\\/| | | |_) |
| |  | | |  __/
|_|  |_| |_|

mihir.systems`}
            </pre>
            <div className="fastfetch-output">
              <p className="fastfetch-command"><span>$</span> mihirctl profile</p>
              <div className="fastfetch-identity">mihir@portfolio</div>
              <div className="fastfetch-lines">
                {fetchRows.map(([label, value]) => (
                  <p className="fastfetch-row" key={label}>
                    <span className="fastfetch-label">{label}</span>
                    <span className="fastfetch-separator">:</span>
                    <span>{value}</span>
                  </p>
                ))}
              </div>
              <div className="fastfetch-palette" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
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
