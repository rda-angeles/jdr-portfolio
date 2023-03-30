import React from "react";
import { projects } from "../../data";

import ProjectLayout from "../UI/ProjectLayout";
const Projects = () => {
  return (
    <div className="gallery__section text-white bg-c-secondary w-full py-[5rem]" id="projects">
      <div className="section-title mb-10 text-center">
        <h5>my works</h5>
        <h2 className="before:left-[50%] before:translate-x-[-50%]">
          Projects
        </h2>
      </div>

      <div className="gallery-content container mx-auto">
        {projects.map((proj) => {
          return <ProjectLayout key={proj.id} proj={proj} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
