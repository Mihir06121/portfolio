import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const isPlainLeftClick = (event) =>
  !event.defaultPrevented &&
  event.button === 0 &&
  !event.metaKey &&
  !event.altKey &&
  !event.ctrlKey &&
  !event.shiftKey;

function WorkCard({ item }) {
  const navigate = useNavigate();
  const externalUrl = item.liveUrl || item.link;
  const projectPath = `/projects/${item.slug}`;

  const openCaseFile = (event) => {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();
    navigate(projectPath);
  };

  return (
    <article className="case-card">
      <div className="case-card-top">
        {item.logo ? (
          <span className={`case-logo-plate ${item.logoVariant || ""}`}>
            <img src={item.logo} alt={item.logoAlt} />
          </span>
        ) : (
          <span className="logo-fallback">{item.logoLabel}</span>
        )}
        <div>
          <span>{item.eyebrow}</span>
          <h3>{item.title}</h3>
        </div>
      </div>

      <p className="case-role">{item.role}</p>
      <p className="case-summary">{item.summary}</p>

      <ul className="impact-list">
        {item.impact.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="stack-list">
        {item.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="case-actions">
        <Link className="case-link" to={projectPath} onClick={openCaseFile}>
          Read case file
          <FiArrowUpRight aria-hidden="true" />
        </Link>
        {externalUrl && (
          <a className="case-link secondary" href={externalUrl} target="_blank" rel="noreferrer">
            Open live
            <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

function WorkSection({ filters, activeFilter, onFilterChange, workItems }) {
  return (
    <section id="work" className="section-frame work-section">
      <div className="section-heading">
        <span className="section-kicker">Selected work</span>
        <div>
          <h2>Selected projects and the engineering behind them.</h2>
          <p>
            A short view of what I built, what problem it solved, and the systems involved.
            Each project has a detailed page for the deeper story.
          </p>
        </div>
      </div>

      <div className="segmented-control" aria-label="Filter selected work">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={filter === activeFilter ? "active" : ""}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="case-grid">
        {workItems.map((item) => (
          <WorkCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
