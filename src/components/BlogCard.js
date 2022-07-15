import { AiOutlineArrowRight } from "react-icons/ai";
import { API } from "../config";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function BlogCard({ data }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={data.photo} alt="card-img" />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <div className="card-text py-md-3 py-2" style={{ textAlign: "justify" }}>
        {parse(`<div align="justify">${data.excerpt}</div>`)}
        </div>
        {"\n"}
        {"\n"}
        <Link className="btn-primary"
            to={`/blog/${data.slug}`}
            key={data._id}
          >
          <Button
            variant="primary"
          >

            View Blog
          </Button>
          </Link>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;