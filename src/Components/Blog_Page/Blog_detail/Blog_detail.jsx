import { useParams } from "react-router";
import { blogData } from "../Blog_detail/BlogData";
import "./Blog_detail.css";

function Blog_detail() {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <div className="blog-detail container py-5">
            <img src={blog.image} alt={blog.title} className="img-fluid mb-4" />
            <h1>{blog.title}</h1>
            <p>{blog.desc}</p>
            <p>
                <strong>Date:</strong> {blog.date}
            </p>
            <p>{blog.content}</p>
        </div>
    );
}

export default Blog_detail;