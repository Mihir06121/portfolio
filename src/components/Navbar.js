import React, { useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import pdf from "../assets/Mihir_Panchal.pdf";

const navLinks = [
  { to: "/#work", label: "Work" },
  { to: "/#stack", label: "Stack" },
  { to: "/#experience", label: "Experience" },
  { to: "/#resume", label: "Resume" },
  { to: "/#contact", label: "Contact" },
];

function NavBar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-nav">
      <Link className="brand-mark" to="/#home" onClick={closeMenu} aria-label="Mihir Panchal home">
        <span>MP</span>
        <div>
          <strong>Mihir Panchal</strong>
          <small>Full-stack systems</small>
        </div>
      </Link>

      <button
        className="nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}
        <button className="theme-toggle" type="button" onClick={onThemeToggle}>
          {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          {isDark ? "Light" : "Dark"}
        </button>
        <a className="nav-resume" href={pdf} download="Mihir_Panchal.pdf" onClick={closeMenu}>
          <FiDownload aria-hidden="true" />
          CV
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
