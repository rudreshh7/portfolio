import React from "react";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
const Project = () => {
  const projects = [
    {
      title: "Pandabase",
      description: "Digital e-commerce platform",
      stack: "html css js",
      live: "https://live-link.com",
      github: "https://github.com/your-repo",
    },
    {
      title: "Pandabase",
      description: "Digital e-commerce platform",
      stack: "html css typescript java",
      live: "https://live-link.com",
      github: "https://github.com/your-repo",
    },
  ];
  return (
    <div>
      <Navbar />
      <h1 className="mb-10">Projects</h1>
      <div className="m-10 flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
