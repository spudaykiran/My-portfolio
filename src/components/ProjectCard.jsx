import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="visit-button"
      >
        Visit Website
      </a>
    </div>
  );
};

export default ProjectCard;
