// import { Link } from "react-router-dom";
// import React from "react";
import NavBar from "./components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineDownCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillContacts,
} from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";

import {
  SiAmazonaws,
  SiDocker,
  SiFigma,
  SiGithubactions,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
} from "react-icons/si";

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

import { CgFileDocument } from "react-icons/cg";
import AOS from 'aos'
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import about_img from './assets/web-development.webp'
import frame9 from './assets/Frame9.png'
import ProjectCard from "./components/ProjectCard";
import Resume from "./components/Resume";
import { Outlet } from "react-router-dom";
import emailjs from "@emailjs/browser";
import HomeBack from "./assets/home.png"
import devSemble from "./assets/devSemble_logo.png"

const App = () => {

  let date = new Date();
  let year = date.getFullYear()

  const form = useRef();
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form)
    emailjs.sendForm("service_vkgrvue", "template_nrgjifn", form.current, "FLv9a2UUero-LL3RF").then(
      (result) => {
        alert("Message Sent Successfully, Check your inbox for confirmation");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      category: "Flagship",
      imgPath: devSemble,
      title: "devSemble",
      description:
        "A community-first platform enabling hackathons, competitive coding, Sembles (internal community modules), transparent reputation scoring, GitHub integration, and CLI-based workflow automation. Built with MERN stack and designed for scalable ecosystem growth.",
      demoLink: "https://devSemble.com",
    },
    {
      category: "Flagship",
      imgPath: HomeBack,
      title: "Geo-Attendance & Defaulters Management System",
      description:
        "Led a cross-functional team during MSc.IT at Somaiya to design and deploy a geo-location based attendance mapping and automated defaulters calculation platform. Built and deployed within 1 month on AWS infrastructure. Handled peak concurrency of ~3,000 active users during attendance windows. Designed backend architecture, database models, and deployment pipeline while coordinating frontend and mobile components.",
    },
    {
      category: "Production",
      imgPath: HomeBack,
      title: "Muskanlabel",
      description:
        "Muskanlabel.com is a client-based e-commerce website hosted on AWS EC2 with Google Domains. Includes Paytm payment gateway, SendGrid email services, and Cloudinary media storage integration.",
    },
    {
      category: "Production",
      imgPath: HomeBack,
      title: "Urban Elements",
      description:
        "Client portfolio website hosted recently with improved UI elements and integrated email services.",
      demoLink: "https://urbanelements.co.in",
    },
    {
      category: "Production",
      imgPath: HomeBack,
      title: "Exam-Portal",
      description:
        "Ongoing MERN stack client project with two interfaces: web dashboard for admins and mobile-based MCQ exam system. Integrated SendGrid email services, Cloudinary storage, and Paytm payment gateway.",
      ghLink: "https://github.com/Mihir06121/exam_portal",
    },
    {
      category: "Other",
      imgPath:
        "https://github.com/prashantpaddune/Drive2park/raw/v2/screenshots/Screenshot%20from%202020-06-02%2014-48-17.png?raw=true",
      title: "Drive2Park",
      description:
        "Drive2park makes it easy to find and book parking space for any location. Group project focusing mainly on frontend development.",
      ghLink: "https://github.com/prashantpaddune/Drive2park",
    },
    {
      category: "Other",
      imgPath:
        "https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/technova21.png?raw=true",
      title: "Technova",
      description:
        "College fest website project built and deployed for Technova event.",
      ghLink: "https://github.com/Mihir06121/TechNova",
      demoLink: "https://technovafest.netlify.app/",
    },
    {
      category: "Other",
      imgPath: frame9,
      title: "TODO 2.0",
      description:
        "First mobile development project built using React Native with NodeJS backend.",
      ghLink: "https://github.com/Mihir06121/Todo_React_Native",
    },
    {
      category: "Other",
      imgPath:
        "https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/covid_tracker_01.png?raw=true",
      title: "Covid-19 Tracker",
      description:
        "API-based React application styled using Material-UI.",
      ghLink: "https://github.com/Mihir06121/Covid-19-Tracker",
    },
    {
      category: "Other",
      imgPath:
        "https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/react_youtube.png?raw=true",
      title: "YouTube Clone",
      description:
        "API-based React project focused on improving streaming UI experience.",
      ghLink: "https://github.com/Mihir06121/youtube-clone",
    },
  ];

  return (
    <div style={{ backgroundColor: 'black' }}>
      {/* <Outlet/> */}
      <div id="home" className="homebg" style={{ height: '100vh', backgroundColor: 'black' }}>
        <div className="">
          <NavBar />
        </div>
        <section>
          <Container fluid className="home-section" id="home">
            <Container className="home-content">
              <Row>
                <Col md={8} className="pt-md-5" data-aos="fade-up" data-aos-delay="200">
                  <h1 style={{ paddingBottom: 15 }} className="px-md-5 px-3">
                    Hi, I'm Mihir 👋
                  </h1>
                  <div className="p-md-5 px-3" style={{ textAlign: "left" }}>
                    <h2 style={{ color: "white", marginBottom: "15px" }}>
                      I build scalable backend systems & product-driven platforms.
                    </h2>
                    <Typewriter
                      options={{
                        strings: [
                          "Full-Stack Product Engineer",
                          "Backend Systems Architect",
                          "Founder @ devSemble",
                          "Product & Infrastructure Builder"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                      }}
                    />
                  </div>
                </Col>

                <Col md={4} className="d-flex">
                  <div className="d-none d-lg-flex">
                    <Row>
                      <Col md={12} data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-out-back">
                        <div className="bg-white m-auto col-6 rounded-pill">
                          <a href="#about" className="text-center nav-link">
                            <span className="text-dark" style={{ padding: 0 }}><AiOutlineUser size={30} style={{ marginBottom: "2px" }} /> ABOUT</span>
                          </a>
                        </div>
                      </Col>
                      <Col md={12} data-aos="fade-up" data-aos-delay="700" data-aos-easing="ease-out-back">
                        <div className="bg-white m-auto col-6 rounded-pill">
                          <a href="#project" className="text-center nav-link">
                            <span className="text-dark" style={{ padding: 0 }}><AiOutlineFundProjectionScreen size={30} style={{ marginBottom: "2px" }} /> PROJECT</span>
                          </a>
                        </div>
                      </Col>
                      <Col md={12} data-aos="fade-up" data-aos-delay="900" data-aos-easing="ease-out-back">
                        <div className="bg-white m-auto col-6 rounded-pill">
                          <a href="#resume" className="text-center nav-link">
                            <span className="text-dark" style={{ padding: 0 }}><CgFileDocument size={30} style={{ marginBottom: "2px" }} /> RESUME</span>
                          </a>
                        </div>
                      </Col>
                      <Col md={12} data-aos="fade-up" data-aos-delay="1100" data-aos-easing="ease-out-back">
                        <div className="bg-white m-auto col-6 rounded-pill">
                          <a href="/#contact" className="text-center nav-link">
                            <span className="text-dark" style={{ padding: 0 }}><AiFillContacts size={30} style={{ marginBottom: "2px" }} /> CONTACT</span>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="pt-5" data-aos="fade-up" data-aos-delay="400">
              <div className="d-lg-none d-md-block bg-white m-auto col-10 rounded-pill">
                <a href="#about" className="text-center nav-link">
                  <span className="text-dark" style={{ padding: 0 }}><AiOutlineDownCircle size={20} style={{ marginBottom: "2px" }} /> ABOUT ME</span>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <div id="about" className="py-5" style={{ backgroundColor: 'black', boxShadow: "0px -200px 300px black" }}>
        <div className="pt-5">
          <div className="bg-white m-auto col-10 rounded-pill" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out-back">
            <div className="text-center nav-link">
              <span className="text-dark display-4" style={{ padding: 0 }}> ABOUT ME</span>
            </div>
          </div>
          <div className="container-fluid p-md-5 p-3 m-auto">
            <div className="">
              <Container>

                {/* ================= INTRO ================= */}
                <Row>
                  <Col lg={12} className="about-description" data-aos="fade-up">
                    <h1 style={{ fontSize: "2.6em" }}>
                      LET ME <span className="text-primary">INTRODUCE</span> MYSELF
                    </h1>

                    <p className="home-about-body">
                      I’m a full-stack product engineer focused on building scalable backend systems,
                      developer platforms, and ecosystem-driven products.
                      <br /><br />
                      I architect modular REST systems, authentication flows, scalable database models,
                      and production infrastructure using the MERN stack — combining backend depth,
                      frontend usability, and strong product thinking.
                    </p>
                  </Col>
                </Row>

                {/* ================= FOUNDER BLOCK ================= */}
                <Row className="mt-5">
                  <Col md={12}>
                    <div
                      className="p-4 rounded-4"
                      style={{
                        background: "rgba(10,14,22,0.85)",
                        // border: "1px solid rgba(88,166,255,0.2)",
                        backdropFilter: "blur(12px)",
                      }}
                      data-aos="fade-up"
                    >
                      <h4 className="text-primary mb-2">
                        Founder — devSemble
                      </h4>

                      <p className="mb-0 text-white">
                        Built a community-first developer ecosystem featuring hackathons,
                        competitive coding, internal modules (Sembles), GitHub OAuth integrations,
                        scoring engines, role-based routing systems, and CLI-driven workflows.
                        Designed for long-term scalability, transparency, and clean architecture.
                      </p>
                    </div>
                  </Col>
                </Row>

                {/* ================= ENGINEERING CAPABILITIES ================= */}
                <h1 className="text-white pt-5 text-center" data-aos="fade-up">
                  Engineering <strong className="text-primary">Capabilities</strong>
                </h1>

                <Row className="mt-4" style={{ justifyContent: "center" }}>
                  {[
                    "Backend Architecture & REST API Design",
                    "Scalable MongoDB Schema & Index Optimization",
                    "JWT, OAuth & Role-Based Access Control",
                    "AWS EC2, Nginx & Production Deployments",
                    "Concurrency Handling & Performance Optimization",
                    "Product-Oriented System & UX Thinking"
                  ].map((item, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4" data-aos="fade-up">
                      <div
                        className="p-3 rounded-3 h-100"
                        style={{
                          background: "rgba(10,14,22,0.7)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <p className="mb-0 text-white">{item}</p>
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* ================= SKILLSET ================= */}
                <h1 className="text-white py-md-5 py-4 text-center">
                  Professional <strong className="text-primary">Skillset</strong>
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
                  {[DiJavascript1, DiNodejs, DiReact, DiMongodb, SiNextdotjs, CgCPlusPlus, DiGit].map((Icon, index) => (
                    <Col xs={4} md={2} key={index} className="tech-icons mb-4" data-aos="fade-up">
                      <div
                        className="p-3 rounded-3"
                      >
                        <Icon color="white" />
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* ================= TOOLS ================= */}
                <h1 className="text-white py-md-5 py-4 text-center">
                  <strong className="text-primary">Tools</strong> I Use
                </h1>

                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                  {[SiLinux, SiVisualstudiocode, SiPostman, SiDocker, SiAmazonaws, SiNginx, SiGithubactions, SiFigma].map((Icon, index) => (
                    <Col xs={4} md={2} key={index} className="tech-icons mb-4" data-aos="fade-up">
                      <div
                        className="p-3 rounded-3"
                      >
                        <Icon color="white" />
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* ================= INFRA PHILOSOPHY ================= */}
                <Row className="mt-4">
                  <Col md={12}>
                    <div
                      className="p-4 rounded-4"
                      style={{
                        background: "rgba(10,14,22,0.85)",
                      }}
                      data-aos="fade-up"
                    >
                      <h4 className="text-primary mb-2">Infrastructure & Workflow Philosophy</h4>
                      <p className="mb-0 text-white">
                        I focus on modular backend architecture, clean separation of concerns,
                        extensible scoring systems, scalable routing logic, and production-ready
                        infrastructure — prioritizing maintainability over short-term hacks.
                      </p>
                    </div>
                  </Col>
                </Row>

                {/* ================= SOCIAL ================= */}
                <Row className="mt-5">
                  <Col md={12} className="home-about-social text-center">
                    <h4>FIND ME ON</h4>
                    <p>
                      Feel free to <span className="text-primary">connect</span> with me
                    </p>

                    <ul className="home-about-social-links">
                      <li className="social-icons">
                        <a href="https://github.com/mihir06121" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                          <AiFillGithub />
                        </a>
                      </li>
                      <li className="social-icons">
                        <a href="https://www.linkedin.com/in/mihir-panchal-5167811a4/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li className="social-icons">
                        <a href="https://www.instagram.com/_mihir.panchal_/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                          <AiFillInstagram />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>

              </Container>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="py-5" style={{ backgroundColor: 'black' }}>
        <div className="pt-5">
          <div className="bg-white m-auto col-10 rounded-pill" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out-back">
            <div className="text-center nav-link">
              <span className="text-dark display-4" style={{ padding: 0 }}> PROJECTS</span>
            </div>
          </div>
          <Container fluid className="project-section">
            <Container>

              {/* ================= INTRO ================= */}
              <div className=" mb-5" data-aos="fade-up">
                <h2 className="text-white">
                  Building <span className="text-primary">Scalable Systems</span> &
                  Production-Ready Products
                </h2>

                <p
                  className="text-light mt-3"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Over the years, I’ve built community platforms, large-scale attendance systems,
                  e-commerce infrastructures, and developer tooling ecosystems.
                  Below are a few highlighted projects — many experimental, internal,
                  and client builds are not listed here.
                </p>
              </div>

              {/* ================= FILTER TABS ================= */}
              <div
                className="mb-5"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div
                  className="d-flex flex-wrap justify-content-center"
                  style={{ gap: "12px" }}
                >
                  {["All", "Flagship", "Production", "Other"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 ${activeTab === tab
                        ? "btn btn-primary"
                        : "btn btn-outline-light"
                        }`}
                      style={{
                        borderRadius: "30px",
                        minWidth: "110px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* ================= PROJECT GRID ================= */}
              <Row className="g-4 justify-content-center">
                {projects
                  .filter((project) =>
                    activeTab === "All" ? true : project.category === activeTab
                  )
                  .map((project, index) => (
                    <Col
                      md={4}
                      className="project-card"
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <ProjectCard {...project} />
                    </Col>
                  ))}
              </Row>

            </Container>
          </Container>
        </div>
      </div>
      <div id="resume" className="py-5" style={{ backgroundColor: 'black' }}>
        <div className="pt-5">
          <div className="bg-white m-auto col-10 rounded-pill" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out-back">
            <div className="text-center nav-link">
              <span className="text-dark display-4" style={{ padding: 0 }}> RESUME</span>
            </div>
          </div>
          <div>
            <Resume />
          </div>
        </div>
      </div>
      <div id="contact" className="py-5" style={{ backgroundColor: 'black' }}>
        <div className="pt-5">
          <div className="bg-white m-auto col-10 rounded-pill">
            <div className="text-center nav-link">
              <span className="text-dark display-4" style={{ padding: 0 }}> CONTACT ME</span>
            </div>
          </div>
          <div className="py-md-5 py-3">
            <div className="container p-md-5 p-2 d-flex justify-content-center align-items-center" >
              <div className="col-md-6">
                <form className='form-group' ref={form} onSubmit={sendEmail}>
                  <div className='form-group p-2'>
                    <input className='form-control bg-dark border-0 text-white' placeholder='Your Name' type="text" name="user_name"
                    />
                  </div>
                  <div className='form-group p-2'>
                    <input className='form-control bg-dark border-0 text-white' placeholder='Your Email' type="email" name="user_email"
                    />
                  </div>
                  <div className='form-group p-2'>
                    <textarea className='form-control bg-dark border-0 text-white' placeholder='Type your message here' name="message"
                    />
                  </div>
                  <div className='p-2' >
                    <button className='btn btn-outline-primary col-12' type="submit" value="Send" >Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-3 bg-white" />
      <div id="footer" className="" style={{ backgroundColor: 'grey' }}>
        <Container fluid className="footer">
          <Row>
            <Col md="4" className="footer-copywright">
              <h3>Designed and Developed by Mihir Panchal</h3>
            </Col>
            <Col md="4" className="footer-copywright">
              <h3>Copyright © {year} mihirpanchal</h3>
            </Col>
            <Col md="4" className="footer-body">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                    href="https://github.com/mihir06121"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_mihir.panchal_"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App