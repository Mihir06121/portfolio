import { AiOutlineArrowRight } from "react-icons/ai";
import { API } from "../config";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function BlogCard({ data }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={`${API}/blog/photo/${data.slug}`} alt="card-img" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <div className="card-text" style={{ textAlign: "justify" }}>
        {parse(`<div align="justify">${data.excerpt}</div>`)}
        </div>
        <Button variant="primary" href={data.title} target="_blank">
          {/* {data.isBlog ? "Blog" : "GitHub"} */}
        </Button>
        {"\n"}
        {"\n"}
          <Button
            variant="primary"
            style={{ marginLeft: "10px" }}
          >
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/blog/${data.slug}`}
            key={data._id}
          >
            View Blog
          </Link>
          </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;