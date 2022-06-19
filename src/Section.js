import React, {useEffect, useState, useRef} from 'react'
// import AnimatedPage from "./AnimatedPage";
// import { Link } from 'react-router-dom';
import AOS from 'aos'
import blogData from './data/blogs'
import emailjs from "@emailjs/browser";
import parse from 'html-react-parser';
// import blog from './data/blogs';
const Section = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const [show, setShow] = useState(true)
  const [about, setAbout] = useState(false)
  const [projects, setProjects] = useState(false)
  const [qualifications, setQualifications] = useState(false)
  const [contactMe, setContactMe] = useState(false)
  const [blogs, setBlogs] = useState(false)
  const [showBlog, setShowBlog] = useState(false)
  const [blogContent, setBlogContent] =useState({})

  const showHome = () => {
    if (show) {
      return(
        <div>
          <div className='row mx-auto container py-5 px-0'>
            <div className='col-7 mx-auto py-5 px-0'>
            <div  data-aos="fade-left" data-aos-delay="1200">
              <p className='display-2 text-white font-weight-bold '><b>HEY THERE !!!</b></p>
              <p align='right' className='display-4 text-white font-weight-bold px-5'><b>I Am</b></p>
            </div>
            </div>
            <div className='col-5 mx-auto' data-aos="fade-up" data-aos-delay="1200">
              <div className='container d-none d-md-block d-lg-block' style={{position: 'absolute',zIndex: -10}}>
                  <div className="scene" data-aos="zoom-in" data-aos-delay="1500">
                    <div className="light-2">
                      <div className="clip-2">
                        <div className="container-sp2">
                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>

                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>
                          <div className="circle-2 border-sp2"></div>

                          <div className="circle-2"></div>
                          <div className="circle-2"></div>
                          <div className="circle-2"></div>
                          <div className="circle-2"></div>
                          <div className="circle-2"></div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
      {/* For Mobile */}
      <div className='container d-lg-none d-md-none d-sm-block' style={{position: 'absolute',zIndex: -10, right:"20%", top:'20%'}}>
        <div className="scene" data-aos="zoom-in" data-aos-delay="1500">
          <div className="light">
            <div className="clip">
              <div className="container-sp">
                <div className="circle border"></div>
                <div className="circle border"></div>
                <div className="circle border"></div>
                <div className="circle border"></div>
                <div className="circle border"></div>

                <div className="circle border"></div>
                <div className="circle border"></div>
                <div className="circle border"></div>
                <div className="circle border"></div>
                <div className="circle border"></div>

                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
          <div className="container-fluid" data-aos="fade-left" data-aos-delay="1000">
            <div className='ani display-1 card border-0' style={{backgroundColor:'transparent', textAlign: 'justify'}} href="http://www.mihirpanchal.com" target="_blank">Mihir Panchal</div>
          </div>
        </div>
      )
    } 
  }

  const showAbout = () => {
    if (about) {
      return(
        <div>
          <div className='container hideSb d-flex justify-content-center align-items-center'>
            <div className='col-sm'>
              <p className='display-1 hideSb text-white font-weight-bold text-circle' data-aos="fade-left" data-aos-delay="800"><b>ABOUT ME</b></p>
            </div>
          </div>
          <div className="jumbotron" data-aos="fade-left" data-aos-delay="1000">
            <div className="container p-md-4 p-2 main-circle2" style={{borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px'}}>
                <div className='container d-none d-md-block d-lg-block' style={{position: 'absolute',zIndex: -10}}>
                  <div className="scene" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="3000">
                    <div className="light-2">
                      <div className="clip-2">
                        <div className="container-sp2">
                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>

                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>
                          <div className="circle-3 border-sp3"></div>

                          <div className="circle-3"></div>
                          <div className="circle-3"></div>
                          <div className="circle-3"></div>
                          <div className="circle-3"></div>
                          <div className="circle-3"></div>
                        </div>
                      </div>
                  </div>
                </div>
                </div>
            <div className='container d-lg-none d-md-none d-sm-block' data-aos="zoom-out" data-aos-delay="1200" data-aos-duration="3000" style={{ position: 'fixed', zIndex: -1}}>
              <div className="scene">
                  <div className="light">
                    <div className="clip">
                      <div className="container-sp">
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>

                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>
                        <div className="circle border" style={{backgroundColor:"grey"}}></div>

                        <div className="circle" style={{backgroundColor:"grey"}}></div>
                        <div className="circle" style={{backgroundColor:"grey"}}></div>
                        <div className="circle" style={{backgroundColor:"grey"}}></div>
                        <div className="circle" style={{backgroundColor:"grey"}}></div>
                        <div className="circle" style={{backgroundColor:"grey"}}></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
              <h5 className="text-white p-2" style={{lineHeight:'2', height: '100%', overflow: 'scroll', textAlign: 'justify'}}>
                My name is Mihir Panchal. I completed my BSc.IT degree this year. I like to play with cubes, sometimes sketching. I also like to flash custom roms and custom recoveries on android devices. I have an interest in web development and am looking forward to doing some projects and enhancing my skills in web development. I also have an interest in native app development.</h5>
            </div>
          </div>
        </div>
      )
    } 
  }

  const showProjects = () => {
    if (projects) {
      return(
        <div>
          <div className='container d-flex justify-content-center align-items-center'>
            <div className='col-sm' style={{zIndex: 1}}>
              <p className='display-1 text-white font-weight-bold text-circle' data-aos="fade-left" data-aos-delay="800"><b>MY PROJECTS</b></p>
            </div>
            <div className='container' data-aos="zoom-out" data-aos-delay="1200" data-aos-duration="3000" style={{ position: 'fixed', zIndex: 0}}>
              <div className="scene">
                  <div className="light-3">
                    <div className="clip-3">
                      <div className="container-sp3">
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>

                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>

                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hideSb pb-5' style={{backgroundColor: 'transparent', height: '700px', overflow: 'scroll', zIndex: 2}}>
        <section className="" id="projects">
        <section  className="pt-5 pb-5" id="#projects">
                  <div className="px-5"data-aos="fade-left"data-aos-delay="1000">
                    <div className="pl-2 pr-2 row  d-flex justify-content-between shadow-lg mt-2 mb-2" >
                      <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2"style={{
                              backgroundImage:
                                  'url(' +
                                  'https://github.com/prashantpaddune/Drive2park/raw/v2/screenshots/Screenshot%20from%202020-06-02%2014-48-17.png?raw=true' +
                                  ')',
                                  backgroundSize:"cover",
                                  backgroundPosition:"center"
                          }}>
                          <div className="content">
                              <h1 className="title">Drive2Park</h1>
                              <p className="copy">Advanced MERN Application to Find and Book Parking Space.</p>
                              {/* <Link href="/Projects_cards/Drive2Park"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link> */}
                          </div>
                      </div>
                      <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2"style={{
                              backgroundImage:
                                  'url(' +
                                  'https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/covid_tracker_01.png?raw=true' +
                                  ')',
                                  backgroundSize:"cover",
                                  backgroundPosition:"center"
                          }}>
                          <div className="content">
                              <h2 className="title">Covid19-Tracker</h2>
                              <p className="copy">Description of project</p>
                              {/* <Link href="/Projects_cards/Covid-19_tracker"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link> */}
                          </div>
                      </div>
                      <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2"style={{
                              backgroundImage:
                                  'url(' +
                                  'https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/react_youtube.png?raw=true' +
                                  ')',
                                  backgroundSize:"cover",
                                  backgroundPosition:"center"
                          }}>
                          <div className="content">
                              <h2 className="title">YoutubeClone</h2>
                              <p className="copy">React application build along with Youtube API</p>
                              {/* <Link href="/Projects_cards/Youtube_clone"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link> */}
                          </div>
                      </div>
                  </div>
                  <div className="pl-2 pr-2 row  d-flex justify-content-between shadow-lg mt-2 mb-2">
                      <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2"style={{
                              backgroundImage:
                                  'url(' +
                                  'https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/drms_03.png?raw=true' +
                                  ')',
                                  backgroundSize:"cover",
                                  backgroundPosition:"center"
                          }}>
                          <div className="content">
                              <h2 className="title">DRMS</h2>
                              <p className="copy">Another MERN application for college mini-project</p>
                              {/* <Link href="/Projects_cards/DRMS"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link> */}
                          </div>
                      </div>
                      <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2"style={{
                              backgroundImage:
                                  'url(' +
                                  'https://github.com/Mihir06121/Portfolio-v2/blob/master/src/images/assects/technova21.png?raw=true' +
                                  ')',
                                  backgroundSize:"cover",
                                  backgroundPosition:"center"
                          }}>
                          <div className="content">
                              <h2 className="title">TechNova21</h2>
                              <p className="copy">Site developed with React.js for Fest</p>
                          </div>
                      </div>
                  </div>
                  <div className="pl-2 pr-2 row  d-flex justify-content-between shadow-lg mt-2 mb-2">
                      <div className="project-card card card-img2 card-img col-md ml-2 mr-2 mt-2 mb-2"style={{
                              backgroundImage:
                                  'url(' +
                                  'http://blog.tdk.best/img/blog/react-logo.png' +
                                  ')',
                                  backgroundSize:"cover",
                                  backgroundPosition:"center"
                          }}>
                          <div className="content">
                              <h2 className="title">Todo</h2>
                              <p className="copy">Not a simple Todo Application</p>
                              {/* <Link href="/Projects_cards/Todo"><button className="btn btn-lg btn-primary btn-block">View Project</button></Link> */}
                          </div>
                        </div>
                      </div>
                  </div>
                </section>
              </section>
          </div>
        </div>
      )
    } 
  }

  const showBlogs = () => {
    if (blogs) {
      return(
        <div>
          {/* for Desktop */}
          <div className='container d-flex justify-content-center align-items-center'>
            <div className='col-sm' style={{zIndex: 0}}>
            <div className='container' data-aos="zoom-out-right" data-aos-delay="2000" data-aos-duration="3000" style={{position: 'fixed', right:"50%", bottom:'50%', zIndex: -1}}>
              <div className="scene">
                  <div className="light-3">
                    <div className="clip-3">
                      <div className="container-sp3">
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>

                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>
                        <div className="circle-3 border-sp3"></div>

                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                        <div className="circle-3"></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
              <p className='display-1 text-white font-weight-bold text-circle' data-aos="fade-left" data-aos-delay="800"><b>MY BLOGS</b></p>
            </div>
          </div>
          <div className=' hideSb pb-5' data-aos="fade-left" data-aos-delay="1000" style={{zIndex: 2, backgroundColor: 'transparent', height: '700px', overflow: 'scroll'}}>
            <div className='row mx-auto d-flex justify-content-center align-items-center' data-aos="fade-left" data-aos-delay="1000">
            {blogData.map((blog, i) => (
              <div className='col-md-4 p-2' key={i}>
                {/* <Link to={{ pathname: `single-blog/${blog.slug}`}} state={blog.slug}> */}
                <div className="project-card card card-img col-md ml-2 mr-2 mt-2 mb-2"style={{
                  backgroundImage:
                      'url(' +
                      `${blog.photo}` +
                      ')',
                      backgroundSize:"cover",
                      backgroundPosition:"center"
                    }}>
                    <div className="content">
                        <h1 className="text-decoration-none title">{blog.title}</h1>
                        <p className="copy">{blog.excerpt}</p>
                        <button className="btn btn-lg btn-primary btn-block" onClick={() => {
                          setShowBlog(true)
                          setBlogContent(blog)
                        }}>View Blog</button>
                    </div>
                </div>
                {/* </Link> */}
              </div>
            ))}
            </div>
          </div>
        </div>
      )
    } 
  }

  const showQualifications = () => {
    if (qualifications) {
      return(
        <div>
          <div className='container d-flex justify-content-center align-items-center'>
            <div className='col-sm'>
              <p className='display-1 text-white font-weight-bold text-circle' data-aos="fade-left" data-aos-delay="800"><b>MY RESUME</b></p>
            </div>
          </div>
          <div className="container p-md-5 p-2 d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="1000">
          <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          {/* <h2 className='text-white'></h2> */}
          <p className='text-white'></p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4 className='text-white'>Mihir Panchal</h4>
              <p><em className='text-white'></em></p>
              <ul className='text-white'>
                <li>Pleasant Park, Mira Road (E) Thane 401107, India</li>
                <li>+91 7700983123</li>
                <li>mp06121@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4 className='text-white'>Bachelor of Science (Information &amp; Technology)</h4>
              <h5>2019 - 2022</h5>
              {/* <p><em className='text-white'>Shree L.R. Tiwari Degree College of Arts, Commerce and Science</em></p> */}
              <p className='text-white'>Completed my BSc.IT degree from Shree L. R. Tiwari degree college of Arts Commerce and Science in Mumbai.</p>
            </div>
            <div className="resume-item">
              <h4 className='text-white'>Full Stack Web Development</h4>
              <h5>2019 - 2020</h5>
              {/* <p><em className='text-white'>Shree L.R. Tiwari Degree College of Arts, Commerce and Science</em></p> */}
              <p className='text-white'>I completed my full stack web development course from IIDE(Indian Institution of Digital Education)</p>
            </div>
            <div className="resume-item">
              <h4 className='text-white'>Junior College (Science)</h4>
              <h5>2017 - 2019</h5>
              {/* <p><em className='text-white'>Mother Mary College of Arts, Commerce and Science</em></p> */}
              <p className='text-white'>I completed my junior college in Science from Mother Mary Junior College of Science and Commerce Mumbai.</p>
            </div>
            <div className="resume-item">
              <h4 className='text-white'>School</h4>
              <h5>2007 - 2017</h5>
              {/* <p><em className='text-white'>Shree L.R. Tiwari Degree College of Arts, Commerce and Science</em></p> */}
              <p className='text-white'>I completed my schooling from ST. Xavier's High School in Mumbai.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Skills</h3>
            <div className='row'>
              <div className='col-sm-6'>
                <div className="resume-item">
                  <h4 className='text-white'>HTML, CSS</h4>
                  <h5>100%</h5>
                  <div className="progress">
                    <div className="progress-bar bg-white w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="resume-item">
                  <h4 className='text-white'>JavaScript</h4>
                  <h5>80%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="resume-item">
                  <h4 className='text-white'>JAVA</h4>
                  <h5>60%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="resume-item">
                  <h4 className='text-white'>C, C++</h4>
                  <h5>75%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="resume-item">
                  <h4 className='text-white'>Python</h4>
                  <h5>60%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className="resume-item">
                  <h4 className='text-white'>React</h4>
                  <h5>75%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="resume-item">
                  <h4 className='text-white'>React-Native</h4>
                  <h5>60%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="resume-item">
                  <h4 className='text-white'>Nodejs</h4>
                  <h5>75%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="resume-item">
                  <h4 className='text-white'>Flutter</h4>
                  <h5>50%</h5>
                  <div className="progress bg-dark">
                    <div className="progress-bar bg-white" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
          </div>
        </div>
      )
    } 
  }

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
  const showContactMe = () => {

    if (contactMe) {
      return(
        <div>
          <div className='container d-flex justify-content-center align-items-center'>
            <div className='col-sm'>
              <p className='display-1 text-white font-weight-bold text-circle' data-aos="fade-left" data-aos-delay="800"><b>Contact Me</b></p>
            </div>
          </div>
          <div className="container p-md-5 p-2 d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-delay="1000">
          <div className="col-md-6">
          <form className='form-group' ref={form} onSubmit={sendEmail}>
            <div className='form-group p-2'>
              <input className='form-control bg-dark border-0 text-white' placeholder='Your Name' type="text" name="user_name" />
            </div>
            <div className='form-group p-2'>
              <input className='form-control bg-dark border-0 text-white' placeholder='Your Email' type="email" name="user_email" />
            </div>
            <div className='form-group p-2'>
              <textarea className='form-control bg-dark border-0 text-white' placeholder='Type your message here' name="message" />
            </div>
            <div className='p-2'>            
              <button className='btn btn-outline-primary col-12' type="submit" value="Send" >Send</button>
            </div>
          </form>
      </div>
          </div>
        </div>
      )
    } 
  }

  return (
    <div style={{height: '100vh'}} className="home-bg d-flex justify-content-center align-items-start">
      {showBlog ? <div style={{overFlow: "scroll"}}>
        <div className='d-flex justify-content-between align-items-center px-5 p-3'>
        <h1 className='text-white'>Blogs</h1>
        <button className="btn btn btn-primary btn-block" onClick={() => {
          setShowBlog(false)
          setBlogContent({})
        }}>Back</button>
        </div>
              <div className="container-fluid">
                <section>
                    <div align="center" className="container">
                        <img
                            src={blogContent.photo}
                            alt={blogContent.title}
                            className="img img-fluid featured-image"
                        />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h1 className="text-white display-1 pb-3 pt-3 text-center font-weight-bold">{blogContent.title}
                        <hr style={{backgroundColor: 'white', padding: 2}} /></h1>
                    </div>
                </section>
            </div>                  
            <div className="container">
                <section className="container text-justify text-white">  
                    {parse(`<div align="justify">${blogContent.body}</div>`)}
                </section>
            </div>
            <div className='p-md-5 p-3'>
        <button className="btn btn btn-outline-primary col-12" onClick={() => {
          setShowBlog(false)
          setBlogContent({})
        }}>Back</button>
        </div>
      </div> : 
      <div className="container-fluid" style={{ overflow: 'hidden'}}>
        <div style={{height: '80%', backgroundColor: 'transparent', overflow:'scroll'}} className="hideSb d-flex pt-5 justify-content-center align-items-center">
          <div className="row container-fluid p-0">
            <div style={{backgroundColor: 'transparent', height: '70vh'}} className="col-sm-12 justify-content-center align-items-center">
              {showHome()}
              {showAbout()}
              {showProjects()}
              {showQualifications()}
              {showContactMe()}
              {showBlogs()}
            </div>
          </div>
        </div>

        <div style={{backgroundColor: 'transparent'}} className="container col-sm-12">
          <div className='row'>
              <div className="p-3 col d-flex justify-content-center align-items-center">
                <button className="btn col-12 btn-sm btn-outline-primary p-2" onClick={() => {
                  setShow(true)
                  setAbout(false)
                  setProjects(false)
                  setQualifications(false)
                  setContactMe(false)
                  setBlogs(false)
                }}>
                  Home
                </button>
              </div>
              <div className="p-3 col d-flex justify-content-center align-items-center">
                <button className="btn col-12 btn-sm btn-outline-primary p-2" onClick={() => {
                  setShow(false)
                  setAbout(true)
                  setProjects(false)
                  setQualifications(false)
                  setContactMe(false)
                  setBlogs(false)
                }}>
                  About
                </button>
              </div>
              <div className="p-3 col d-flex justify-content-center align-items-center">
                <button className="btn col-12 btn-sm btn-outline-primary p-2" onClick={() => {
                  setShow(false)
                  setAbout(false)
                  setProjects(true)
                  setQualifications(false)
                  setContactMe(false)
                  setBlogs(false)
                }}>
                  Projects
                </button>
              </div>
              <div className="p-3 col d-flex justify-content-center align-items-center">
                <button className="btn col-12 btn-sm btn-outline-primary p-2" onClick={() => {
                  setShow(false)
                  setAbout(false)
                  setProjects(false)
                  setQualifications(false)
                  setContactMe(false)
                  setBlogs(true)
                }}>
                  Blogs
                </button>
              </div>
              <div className="p-3 col d-flex justify-content-center align-items-center">
                <button className="btn col-12 btn-sm btn-outline-primary p-2" onClick={() => {
                  setShow(false)
                  setAbout(false)
                  setProjects(false)
                  setQualifications(true)
                  setContactMe(false)
                  setBlogs(false)
                }}>
                  Resume
                </button>
              </div>
              <div className="p-3 col d-flex justify-content-center align-items-center">
                <button className="btn col-12 btn-sm btn-outline-primary p-2" onClick={() => {
                  setShow(false)
                  setAbout(false)
                  setProjects(false)
                  setQualifications(false)
                  setContactMe(true)
                  setBlogs(false)
                }}>
                  Contact  
                </button>
              </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Section;
