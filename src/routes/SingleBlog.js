import React, {useEffect, useState} from 'react'
import parse from 'html-react-parser';
import blog from "../data/blogs";
import { useParams } from "react-router-dom";
import NavBar from '../components/Navbar';

const SingleBlog = () => {

    const [singleBlog, setBlog] = useState({})
    let params = useParams();

    useEffect(() => {
        setSingleBlog()
    }, [])

    const setSingleBlog = () => {
        let sBlog =  blog.find(
            (blog) => blog.slug === params.slug
        )
    setBlog(sBlog)
}


    return (
        <div className='py-5' style={{backgroundColor:"black"}}>
            <NavBar/>
            <div className="container-fluid">
                <section>
                    <div align="center" className="container">
                        <img
                            src={singleBlog.photo}
                            alt={singleBlog.title}
                            className="img img-fluid featured-image"
                        />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h1 className="text-white display-1 pb-3 pt-3 text-center font-weight-bold">{singleBlog.title}
                        <hr style={{backgroundColor: 'white', padding: 2}} /></h1>
                    </div>
                </section>
            </div>                  
            <div className="container">
                <section className="container text-justify text-white">  
                    {parse(`<div align="justify">${singleBlog.body}</div>`)}
                </section>
            </div>
        </div>
    )
}

export default SingleBlog