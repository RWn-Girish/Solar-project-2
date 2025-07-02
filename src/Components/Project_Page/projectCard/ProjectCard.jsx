import React from "react";
import "./ProjectCard.css"
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router";
import  projectData from "../project-carc-detailes"

const ProjectCard = ({ projectImg , projectTitle }) => {
    return(
        <>
           <div className="col-12 col-md-6 col-lg-3 d-flex">
                            <div className="ourProcess-card h-100 w-100">
                                  <p>{projectData.project1.title}</p>
                                <Link to={"/projectCard-details"} className="d-inlie-block"><BiRightArrowAlt className="arrow"/></Link>
                            </div>
                        </div>
        </>
    )
}

export default ProjectCard; 
