import React from "react";
import { FiSearch } from "react-icons/fi";

function StackSection({ stackIcons, capabilityGroups, skillQuery, onSkillQueryChange }) {
  return (
    <section id="stack" className="section-frame stack-section">
      <div className="section-heading">
        <span className="section-kicker">Capability index</span>
        <div>
          <h2>Stack and strengths.</h2>
          <p>
            Search by backend, frontend, data, realtime, infrastructure, or product domain.
            The grouping follows the way I usually work on real systems.
          </p>
        </div>
      </div>

      <div className="stack-marquee" aria-label="Technology stack">
        {stackIcons.map(({ Icon, label }) => (
          <span key={label}>
            <Icon aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>

      <div className="skill-board">
        <label className="skill-search">
          <FiSearch aria-hidden="true" />
          <input
            type="search"
            value={skillQuery}
            placeholder="Search capabilities"
            onChange={(event) => onSkillQueryChange(event.target.value)}
          />
        </label>

        <div className="skill-rows">
          {capabilityGroups.map((group, index) => {
            const Icon = group.Icon;

            return (
              <article className="skill-row" key={group.title}>
                <span className="skill-rank">{String(index + 1).padStart(2, "0")}</span>
                <Icon className="skill-icon" aria-hidden="true" />
                <div className="skill-main">
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StackSection;
