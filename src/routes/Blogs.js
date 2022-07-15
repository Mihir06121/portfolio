import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard"
import { getBlogs } from "../actions/blog";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos'
import NavBar from "../components/Navbar";
const Blogs = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000
      })
      getHomeBlogs()
    }, [])
  
    const [blogs, setBlogs] = useState([])

    const getHomeBlogs = () => {
      getBlogs().then(data => {
        // console.log(data)
        setBlogs(data)
      }).catch(err => {
        console.log(err)
      })
    }

    return(
        <div className="py-md-5 py-3" style={{backgroundColor:'black'}}>
            <NavBar/>
            <div className="container-fluid">
                <div className="bg-white m-auto col-10 rounded-pill">
                    <div className="text-center nav-link">
                        <span className="text-dark display-4" style={{padding:0}}> BLOGS</span>
                    </div>
                </div>
                <Row className="p-5">
                    {blogs.map((b, i) => (
                        <Col md={4} key={i} className="p-md-3 py-3">
                            <BlogCard
                            key={b.slug}
                            data={b}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Blogs