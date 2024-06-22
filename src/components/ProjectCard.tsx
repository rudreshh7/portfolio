import React from "react";

const ProjectCard = ({ title, description, stack, github, live }) => {
  return (
    <div
      id="project-card"
      className="flex justify-between backdrop-blur-sm border-2 p-5 text-sm md:text-lg"
    >
      {/* Left Side */}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="text-sm">{stack}</p>
      </div>
      {/* Right Side */}
      <div>
        <p>{github && <a href={github}>Github</a>}</p>
        <p>{live && <a href={live}>Live</a>}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
