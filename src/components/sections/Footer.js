import React from "react";
import systemMark from "../../assets/home.png";

function Footer() {
  return (
    <footer className="site-footer">
      <img src={systemMark} alt="" aria-hidden="true" />
      <span>Designed and developed by Mihir Panchal.</span>
      <span>Copyright {new Date().getFullYear()}.</span>
    </footer>
  );
}

export default Footer;
