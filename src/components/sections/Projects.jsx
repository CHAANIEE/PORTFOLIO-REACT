import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const done = projects.filter((p) => p.status === "done");
  const inProgress = projects.filter((p) => p.status === "in-progress");

  return (
    <section id="projects" className="projects">
      <h2>My Best Works</h2>
      <div className="project-grid">
        {done.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h3>Not Finished Projects</h3>
      <div className="project-grid">
        {inProgress.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;