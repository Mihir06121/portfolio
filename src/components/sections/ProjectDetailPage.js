import React from "react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import { workItems } from "../../data/portfolioContent";

function DetailList({ title, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="project-detail-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = workItems.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const detail = project.detail;
  const externalUrl = project.liveUrl || project.link;

  return (
    <article className="section-frame project-detail-page">
      <div className="project-detail-nav">
        <Link to="/#work">
          <FiArrowLeft aria-hidden="true" />
          Back to selected work
        </Link>
      </div>

      <header className="project-detail-hero">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-role">{project.role}</p>
        </div>
        <div className="project-detail-summary">
          <h2>{detail.headline}</h2>
          <p>{detail.intro}</p>
          {externalUrl && (
            <a className="button button-soft" href={externalUrl} target="_blank" rel="noreferrer">
              Open public page
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      </header>

      <section className="project-detail-context">
        <h2>Why this project matters</h2>
        <p>{detail.context}</p>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {detail.screenshots?.length > 0 && (
        <section className="project-screenshots">
          <div className="section-heading compact-heading">
            <span className="section-kicker">Screenshots</span>
            <div>
              <h2>Public visuals from the product surface.</h2>
              <p>Only real captured screens are shown here.</p>
            </div>
          </div>
          <div className="screenshot-grid">
            {detail.screenshots.map((shot) => (
              <figure key={shot.src}>
                <img src={shot.src} alt={shot.alt} />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {detail.screenshotNote && (
        <p className="screenshot-note">{detail.screenshotNote}</p>
      )}

      <div className="project-detail-grid">
        <DetailList title="Responsibilities" items={detail.responsibilities} />
        <DetailList title="Architecture" items={detail.architecture} />
        <DetailList title="Product Features" items={detail.productFeatures} />
        <DetailList title="Outcomes" items={detail.outcomes} />
      </div>
    </article>
  );
}

export default ProjectDetailPage;
