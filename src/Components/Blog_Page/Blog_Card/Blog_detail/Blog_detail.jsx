// import { useLocation, useParams } from "react-router";
// import "./Blog_detail.css"; 

// function Blog_detail() {
//     const { id } = useParams();
//     const { state } = useLocation();

//     if (!state) {
//         return <h2>Blog not found</h2>;
//     }

//     const { image, title, desc, date, content } = state;

//     return (
//         <div className="blog-detail container py-5">
//             {image && <img src={image} alt={title} className="img-fluid mb-4" />}
//             <h1>{title}</h1>
//             <p>{desc}</p>
//             <p><strong>Date:</strong> {date}</p>
//         </div>
//     );
// }

// export default Blog_detail;