import React from "react";
import { FiShield, FiTerminal, FiUsers } from "react-icons/fi";

const signalCards = [
  {
    Icon: FiShield,
    title: "Access-safe workflows",
    body:
      "Building-scoped authorization, RBAC, subscriptions, protected routes, and audit-friendly data boundaries.",
  },
  {
    Icon: FiUsers,
    title: "Async and realtime systems",
    body:
      "Redis/Bull workers, Socket.IO results, scoring engines, background sync, and live platform feedback loops.",
  },
  {
    Icon: FiTerminal,
    title: "Production ownership",
    body:
      "AWS EC2, Nginx, PM2, SSL, Docker, MongoDB, Redis, email workflows, CI/CD, and direct debugging ownership.",
  },
];

function SignalSection() {
  return (
    <section className="section-frame proof-section" aria-label="Core engineering signal">
      <div className="section-heading split-heading">
        <span className="section-kicker">Signal</span>
        <div>
          <h2>Backend, access control, and realtime flows built with care.</h2>
          <p>
            I like product work where the details matter: who can do what, how records change,
            how jobs finish, and how users get clear feedback.
          </p>
        </div>
      </div>

      <div className="proof-grid">
        {signalCards.map(({ Icon, title, body }) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SignalSection;
