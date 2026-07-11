import React from "react";
import Resume from "../Resume";

function ResumeSection() {
  return (
    <section id="resume" className="section-frame resume-block">
      <div className="section-heading">
        <span className="section-kicker">Resume</span>
        <div>
          <h2>Resume and PDF.</h2>
          <p>
            A concise version of my experience across SaaS, backend systems, product engineering,
            and deployment work.
          </p>
        </div>
      </div>
      <Resume />
    </section>
  );
}

export default ResumeSection;
