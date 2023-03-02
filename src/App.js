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
  AiFillContacts
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
  SiNextdotjs,
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
import { useEffect, useRef } from "react";
import about_img from './assets/web-development.webp'
import frame9 from './assets/Frame9.png'
import ProjectCard from "./components/ProjectCard";
import Resume from "./components/Resume";
import emailjs from "@emailjs/browser";
import HomeBack from "./assets/home.png"
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./RouterNew"
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

  return (
    // <div style={{backgroundColor: 'black'}}>
    //   {/* <Outlet/> */}
    // <div id="home" className="homebg" style={{height: '100vh', backgroundColor: 'black'}}>
    //   <div className="">
    //     <NavBar />
    //   </div>
    //   <section>
    //   <Container fluid className="home-section" id="home">
    //     <Container className="home-content">
    //       <Row>
    //         <Col md={8} className="pt-md-5"data-aos="fade-up" data-aos-delay="200">
    //           <h1 style={{ paddingBottom: 15 }} className="px-md-5 px-3">
    //             Hi There !!{" "}
    //             <span className="wave" role="img" aria-labelledby="wave">
    //               👋🏻
    //             </span>
    //           </h1>

    //           <h1 className="px-md-5 px-3">
    //             I'M
    //             <strong className="main-name"> MIHIR PANCHAL</strong>
    //           </h1>
    //           <div className="p-md-5 px-3" style={{textAlign: "left" }}>
    //             <h1>A</h1>
    //           <Typewriter
    //             options={{
    //               strings: [
    //                 "Developer",
    //                 "MERN Stack Developer",
    //                 "Open Source Contributor",
    //               ],
    //               autoStart: true,
    //               loop: true,
    //               deleteSpeed: 50,
    //             }}
    //           />
    //           </div>
    //         </Col>

    //         <Col md={4} className="d-flex">
    //           <div className="d-none d-lg-flex">
    //             <Row>
    //               <Col md={12} data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-out-back">
    //                 <div className="bg-white m-auto col-6 rounded-pill">
    //                   <a href="#about" className="text-center nav-link">
    //                   <span className="text-dark"style={{padding:0}}><AiOutlineUser size={30} style={{ marginBottom: "2px" }} /> ABOUT</span>
    //                   </a>
    //                 </div>
    //               </Col>
    //               <Col md={12} data-aos="fade-up" data-aos-delay="700" data-aos-easing="ease-out-back">
    //                 <div className="bg-white m-auto col-6 rounded-pill">
    //                   <a href="#project" className="text-center nav-link">
    //                   <span className="text-dark"style={{padding:0}}><AiOutlineFundProjectionScreen size={30} style={{ marginBottom: "2px" }} /> PROJECT</span>
    //                   </a>
    //                 </div>
    //               </Col>
    //               <Col md={12} data-aos="fade-up" data-aos-delay="900" data-aos-easing="ease-out-back">
    //                 <div className="bg-white m-auto col-6 rounded-pill">
    //                   <a href="#resume" className="text-center nav-link">
    //                   <span className="text-dark"style={{padding:0}}><CgFileDocument size={30} style={{ marginBottom: "2px" }} /> RESUME</span>
    //                   </a>
    //                 </div>
    //               </Col>
    //               <Col md={12} data-aos="fade-up" data-aos-delay="1100" data-aos-easing="ease-out-back">
    //                 <div className="bg-white m-auto col-6 rounded-pill">
    //                   <a href="/#contact" className="text-center nav-link">
    //                   <span className="text-dark"style={{padding:0}}><AiFillContacts size={30} style={{ marginBottom: "2px" }} /> CONTACT</span>
    //                   </a>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </div>
    //         </Col>
    //       </Row>
    //     </Container>
    //     <div className="pt-5" data-aos="fade-up" data-aos-delay="400">
    //       <div className="d-lg-none d-md-block bg-white m-auto col-10 rounded-pill">
    //         <a href="#about" className="text-center nav-link">
    //         <span className="text-dark"style={{padding:0}}><AiOutlineDownCircle size={20} style={{ marginBottom: "2px" }} /> ABOUT ME</span>
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </section>
    // </div>
    // <div id="about" className="py-5" style={{ backgroundColor:'black', boxShadow:"0px -200px 300px black"}}>
    //   <div className="pt-5">
    //     <div className="bg-white m-auto col-10 rounded-pill" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out-back">
    //       <div className="text-center nav-link">
    //       <span className="text-dark display-4" style={{padding:0}}> ABOUT ME</span>
    //       </div>
    //     </div>
    //     <div className="container-fluid p-md-5 p-3 m-auto">
    //       <div className="p-md-5 p-2" style={{textAlign: 'justify'}}>
    //   <Container>
    //     <Row>
    //       <Col lg={7} className="about-description" data-aos="fade-up" data-aos-delay="500">
    //         <h1 style={{ fontSize: "2.6em" }}>
    //           LET ME <span className="text-primary"> INTRODUCE </span> MYSELF
    //         </h1>
    //         <p className="home-about-body">
    //         I have been in love with programming stuff like Websites, Web Applications, Mobile Development, and many more things. 
    //         I have also interested in flashing custom ROMs and recoveries on android devices. 
    //         I am also a fan of Linux distros. 
    //         Also, I design UI and UX for mobile and websites.

    //           <br />
    //           <br />
    //           My field of Interest's are developing new &nbsp;
    //           <i>
    //             <b className="text-primary">Web Applications and Products </b> and
    //             also in areas related to{" "}
    //             <b className="text-primary">
    //               Data Science.
    //             </b>
    //           </i>
    //           <br />
    //           <br />
    //           Whenever possible, I also apply my passion for developing products
    //           with <b className="text-primary">Node.js</b> and
    //           <i>
    //             <b className="text-primary">
    //               {" "}
    //               Modern Javascript Library and Frameworks
    //             </b>
    //           </i>
    //           &nbsp; like
    //           <i>
    //             <b className="text-primary"> React.js, Next.js and React Native</b>
    //           </i>
    //         </p>
    //       </Col>
    //       <Col md={0} lg={5} className="d-none d-lg-block myAvtar d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
    //           <img src={about_img} className="img-fluid" alt="avatar" />
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container className="">
    //   <h1 className="text-white py-md-5 py-4" align="center" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
    //       Professional <strong className="text-primary">Skillset </strong>
    //     </h1>

    //     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="This is JavaScript language." data-aos-duration="1000" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1100"data-aos-delay="">
    //           <DiJavascript1 color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="This is framework which allows you to run JavaScript outside the browser." data-aos-duration="1100" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
    //           <DiNodejs color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="This is a JavaScript library, used for developing front-end." data-aos-duration="1200" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1300" data-aos-delay="">
    //          <DiReact color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="Fastest growing document based database management system." data-aos-duration="1300" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1400" data-aos-delay="">
    //         <DiMongodb color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons"data-aos="fade-up" data-toggle="tooltip" title="JavaScript library, recommended for server-side rendering." data-aos-duration="1500" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="">
    //         <SiNextdotjs color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons"data-aos="fade-up" data-toggle="tooltip" title="Who else don't know this?" data-aos-duration="1000" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="">
    //         <CgCPlusPlus color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="Git is a version control for softwares." data-aos-duration="1100" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
    //         <DiGit color="white" />
    //         </div>
    //       </Col>
    //     </Row>

    //     <h1 className="text-white py-md-5 py-4" align="center" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
    //       <strong className="text-primary">Tools</strong> I use
    //     </h1>
    //     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="I use Linux as my primary OS" data-aos-duration="1000" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="">
    //         <SiLinux color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="Light weight and robust IDE for development" data-aos-duration="1100" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1300" data-aos-delay="">
    //         <SiVisualstudiocode color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="I use this tool for REST api testing" data-aos-duration="1200" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="">
    //         <SiPostman color="white" />
    //         </div>
    //       </Col>
    //       <Col xs={4} md={2} className="tech-icons" data-aos="fade-up" data-toggle="tooltip" title="I use heroku for temporary server deployment" data-aos-duration="1300" data-aos-delay="">
    //         <div data-aos="fade-up" data-aos-duration="1700" data-aos-delay="">
    //         <SiHeroku color="white" />
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>

    //   <Row>
    //       <Col md={12} className="home-about-social" data-aos="fade-up" data-aos-delay="500">
    //         <h1>FIND ME ON</h1>
    //         <p>
    //           Feel free to <span className="text-primary">connect </span>with me
    //         </p>
    //         <ul className="home-about-social-links">
    //           <li className="social-icons">
    //             <a
    //               href="https://github.com/mihir06121"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour  home-social-icons"
    //             >
    //               <AiFillGithub />
    //             </a>
    //           </li>
    //           <li className="social-icons">
    //             <a
    //               href="https://www.linkedin.com/in/mihir-panchal-5167811a4/"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour  home-social-icons"
    //             >
    //               <FaLinkedinIn />
    //             </a>
    //           </li>
    //           <li className="social-icons">
    //             <a
    //               href="https://www.instagram.com/_mihir.panchal_/"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour home-social-icons"
    //             >
    //               <AiFillInstagram />
    //             </a>
    //           </li>
    //         </ul>
    //       </Col>
    //     </Row>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div id="project" className="py-5" style={{backgroundColor:'black'}}>
    // <div className="pt-5">
    //   <div className="bg-white m-auto col-10 rounded-pill" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out-back">
    //     <div className="text-center nav-link">
    //     <span className="text-dark display-4" style={{padding:0}}> PROJECTS</span>
    //     </div>
    //   </div>
    //   <Container fluid className="project-section">
    //   <Container>
    //     <h2 style={{ color: "white" }} align="center" data-aos="fade-up" data-aos-delay="200">
    //       Here are a few <span className="text-primary">projects</span> I've worked on recently.
    //     </h2>
    //     <Row style={{ justifyContent: "around", paddingBottom: "10px" }}>
    //       <Col md={4} className="project-card" data-aos="fade-up" data-aos-duration="1100" >
    //         <ProjectCard data-aos="fade-up" data-aos-duration="1100"
    //           imgPath={'https://github.com/prashantpaddune/Drive2park/raw/v2/screenshots/Screenshot%20from%202020-06-02%2014-48-17.png?raw=true'}
    //           isBlog={false}
    //           title="Drive2Park"
    //           description="Drive2park makes it easy to find and book parking space for any location. This was
    //           my first group project as well as first major assigned by IIDE (Indian Institute if
    //           Digital Education). I mainly worked with the frontend part along with Akshay and on
    //           the backend, we had Prashant Paddune."
    //           ghLink="https://github.com/prashantpaddune/Drive2park"
    //         />
    //       </Col>

    //       <Col md={4} className="project-card" data-aos="fade-up" data-aos-duration="1300">
    //         <ProjectCard
    //           imgPath={HomeBack}
    //           isBlog={false}
    //           title="Muskanlabel"
    //           description="Muskanlabel.com is a client-based e-commerce website. This website is currently
    //           hosted on ec2-instance of AWS with Google domains. This website includes payment
    //           gateway from Paytm, email services integrated with SendGrid APIs and Cloudinary
    //           for media storage."
    //           demoLink="https://muskanlabel.com"
    //         />
    //       </Col>

    //       <Col md={4} className="project-card" data-aos="fade-up" data-aos-duration="1300">
    //         <ProjectCard
    //           imgPath={HomeBack}
    //           isBlog={false}
    //           title="Exam-Portal"
    //           description="This is an ongoing client-based project built with mern-stack. This project has mainly
    //           two user-interfaces one for the web for the admins, sub-admins and the center-
    //           admins and the other for mobile devices. The exams are MCQ based and will be
    //           conducted on mobile devices. This portal has email services integrated with SendGrid
    //           APIs, Cloudinary for media storage and payment-gateway integrated Paytm APIs."
    //           ghLink="https://github.com/Mihir06121/exam_portal"
    //         />
    //       </Col>

    //       <Col md={3} className="project-card" data-aos="fade-up" data-aos-duration="1100">
    //         <ProjectCard
    //           imgPath={'https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/technova21.png?raw=true'}
    //           isBlog={false}
    //           title="Technova"
    //           description="This project is website for the college fest Technova."
    //           ghLink="https://github.com/Mihir06121/TechNova"
    //           demoLink="https://technovafest.netlify.app/"
    //         />
    //       </Col>

    //       <Col md={3} className="project-card" data-aos="fade-up" data-aos-duration="1300">
    //         <ProjectCard
    //           imgPath={frame9}
    //           isBlog={false}
    //           title="TODO 2.0"
    //           description="This is my first project in field of mobile development. This project is built with react-
    //           native libraries, that helps me to develop this application cross platform using single
    //           code base. This is full stack application with NodeJS and express in the backend."
    //           ghLink="https://github.com/Mihir06121/Todo_React_Native"
    //         />
    //       </Col>
          
    //       <Col md={3} className="project-card" data-aos="fade-up" data-aos-duration="1300">
    //         <ProjectCard
    //           imgPath={'https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/covid_tracker_01.png?raw=true'}
    //           isBlog={false}
    //           title="Covid-19 Tracker"
    //           description="Another API based REACT.js application but for a change I used Material-UI to
    //           style this application. This was a small challange for me as I was new to this
    //           Material-UI and it took a while for me to understand its styling concepts."
    //           ghLink="https://github.com/Mihir06121/Covid-19-Tracker"
    //         />
    //       </Col>

    //       <Col md={3} className="project-card" data-aos="fade-up" data-aos-duration="1500">
    //         <ProjectCard
    //           imgPath={'https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/react_youtube.png?raw=true'}
    //           isBlog={false}
    //           title="YouTube Clone"
    //           description="I went for this project as to get better hands-on using APIs. The main challenge I
    //           faced here is making the streaming column static. As it would not be a good user-experience that 
    //           while a video the player scrolls while playing."
    //           ghLink="https://github.com/Mihir06121/youtube-clone"        
    //         />
    //       </Col>
    //     </Row>
    //   </Container>
    // </Container>
    //   </div>
    // </div>
    // <div id="resume" className="py-5" style={{backgroundColor:'black'}}>
    // <div className="pt-5">
    //   <div className="bg-white m-auto col-10 rounded-pill" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out-back">
    //     <div className="text-center nav-link">
    //     <span className="text-dark display-4" style={{padding:0}}> RESUME</span>
    //     </div>
    //   </div>
    //   <div>
    //   <Resume/>
    //   </div>
    //   </div>
    // </div>
    // <div id="contact" className="py-5" style={{ backgroundColor:'black'}}>
    // <div className="pt-5">
    //   <div className="bg-white m-auto col-10 rounded-pill">
    //     <div className="text-center nav-link">
    //     <span className="text-dark display-4" style={{padding:0}}> CONTACT ME</span>
    //     </div>
    //   </div>
    //   <div className="py-md-5 py-3">
    //       <div className="container p-md-5 p-2 d-flex justify-content-center align-items-center" >
    //       <div className="col-md-6">
    //       <form className='form-group' ref={form} onSubmit={sendEmail}>
    //         <div className='form-group p-2'>
    //           <input className='form-control bg-dark border-0 text-white' placeholder='Your Name' type="text" name="user_name"
    //             />
    //         </div>
    //         <div className='form-group p-2'>
    //           <input className='form-control bg-dark border-0 text-white' placeholder='Your Email' type="email" name="user_email" 
    //            />
    //         </div>
    //         <div className='form-group p-2'>
    //           <textarea className='form-control bg-dark border-0 text-white' placeholder='Type your message here' name="message" 
    //            />
    //         </div>
    //         <div className='p-2' >            
    //           <button className='btn btn-outline-primary col-12' type="submit" value="Send" >Send</button>
    //         </div>
    //       </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <hr className="my-3 bg-white" />
    // <div id="footer" className="" style={{backgroundColor:'grey'}}>
    // <Container fluid className="footer">
    //   <Row>
    //     <Col md="4" className="footer-copywright">
    //       <h3>Designed and Developed by Mihir Panchal</h3>
    //     </Col>
    //     <Col md="4" className="footer-copywright">
    //       <h3>Copyright © {year} mihirpanchal</h3>
    //     </Col>
    //     <Col md="4" className="footer-body">
    //       <ul className="footer-icons">
    //         <li className="social-icons">
    //           <a
    //             href="https://github.com/mihir06121"
    //             style={{ color: "white" }}
    //             target="_blank" 
    //             rel="noopener noreferrer"
    //           >
    //             <AiFillGithub />
    //           </a>
    //         </li>
    //         <li className="social-icons">
    //           <a
    //             href="https://www.instagram.com/_mihir.panchal_"
    //             style={{ color: "white" }}
    //             target="_blank" 
    //             rel="noopener noreferrer"
    //           >
    //             <AiFillInstagram />
    //           </a>
    //         </li>
    //       </ul>
    //     </Col>
    //   </Row>
    // </Container>
    // </div>
    // </div>
    <Router>
      <Routes />
    </Router>
  );
}

export default App