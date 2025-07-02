import React from "react";
import "./ProjectDetails.css"
import ProjectCard from "../projectCard/ProjectCard";

const ProjectDetails = () => {
    return(
        <>
            <div className="project-details">
                <div className="container">
                    <h1 className="project-details__title mb-3">Our work speaks for Itself</h1>
                    <p className="project-details__desc">Explore our project portfolio to see the impact Solect’s solar solutions, energy storage, and optimization services can have for companies and organizations like yours.</p>

                    <ProjectCard/>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails;
