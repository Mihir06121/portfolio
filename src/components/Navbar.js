import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/apple-touch-icon.png";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillContacts
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 500) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "d-block" : "d-none"}
    >
      <Container>
        <Navbar.Brand href="/#" className="d-flex" >
          <img src={logo} className="img-fluid logo shadow-lg" alt="Mihir Panchal" />
            {/* <span className="text-white">Mihir Panchal</span> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          {/* <span className="text-dark">Menu</span> */}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <a className="nav-link"
                as={Link}
                href="/#about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /><span className=""> About</span>
              </a>
            </Nav.Item>

            <Nav.Item>
              <a className="nav-link"
                // as={Link}
                href="/#project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                <span className="">Project</span>
              </a>
            </Nav.Item>

            <Nav.Item>
              <a className="nav-link"
                // as={Link}
                href="/#resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /><span className=""> Resume</span>
              </a>
            </Nav.Item>

            {/* <Nav.Item>
              <a className="nav-link"
                href="/blogs"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /><span className=""> Blogs</span>
              </a>
            </Nav.Item> */}

            <Nav.Item>
              <a className="nav-link"
                href="/#contact"
                onClick={() => updateExpanded(false)}
              >
                <AiFillContacts style={{ marginBottom: "2px" }} /><span className=""> Contact</span>
              </a>
            </Nav.Item>
            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/mihir06121"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;