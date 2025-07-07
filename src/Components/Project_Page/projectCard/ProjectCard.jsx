import React from "react";
import "./ProjectCard.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router";

const ProjectCard = ({ projects }) => {
  return (
    <div className="row">
      {projects.map((project, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
          <div
            className="ourProcess-card text-white d-flex flex-column justify-content-between"
            style={{
              backgroundImage: `url(${project.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "250px",
              borderRadius: "12px",
              padding: "20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p className="fs-5 fw-bold">{project.title}</p>
            <Link
              to={`/projectCard-details/${project.id}`}
              className="text-white stretched-link"
              style={{ fontSize: "24px" }}
            >
              <BiRightArrowAlt className="arrow" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
