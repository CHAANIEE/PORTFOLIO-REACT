function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      ) : (
        <span className="badge">In Progress</span>
      )}
    </div>
  );
}

export default ProjectCard;