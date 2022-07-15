import React, {useEffect, useState} from 'react'
// import { useLocation } from 'react-router-dom';
// import blogData from './data/blogs'
// import parse from 'html-react-parser';
const SingleBlog = (props) => {
    // const location = useLocation();
    // console.log(location);

    // const [blog, setBlog] = useState({})

    // useEffect(() => {
    //     getSingleBlog()
    // }, [])

    // const getSingleBlog = () => {
    //     blogData.map((blog, i) => {
    //         if (blog.slug === location.state) {
    //             console.log("Blog",blog)
    //             setBlog(blog)
    //         }
    //     })
    // }

    return (
        <div>
            Blogs
            {/* <div className="container-fluid">
                <section>
                    <div align="center" className="container">
                        <img
                            src={blog.photo}
                            alt={blog.title}
                            className="img img-fluid featured-image"
                        />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h1 className="text-white display-1 pb-3 pt-3 text-center font-weight-bold">{blog.title}
                        <hr style={{backgroundColor: 'white', padding: 2}} /></h1>
                    </div>
                </section>
            </div>                  
            <div className="container">
                <section className="container text-justify text-white">  
                    {parse(`${blog.body}`)}
                </section>
            </div> */}
        </div>
    )
}

export default SingleBlog