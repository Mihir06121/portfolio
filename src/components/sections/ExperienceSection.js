import React from "react";

function ExperienceSection({ timeline }) {
  return (
    <section id="experience" className="section-frame timeline-section">
      <div className="section-heading">
        <span className="section-kicker">Experience</span>
        <div>
          <h2>Experience across client work, founder work, and SaaS engineering.</h2>
          <p>
            I have moved from freelance delivery and academic leadership into founder-led products
            and production SaaS work.
          </p>
        </div>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.title}>
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
