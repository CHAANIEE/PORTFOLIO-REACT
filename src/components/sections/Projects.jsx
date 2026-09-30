import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const cards = el.querySelectorAll(".project-card");
        if (entry.isIntersecting) {
          animate(cards, {
            scale: [0.85, 1],
            opacity: [0, 1],
            duration: 550,
            ease: "outQuad",
            delay: stagger(120),
          });
        } else {
          cards.forEach((c) => {
            c.style.opacity = 0;
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const done = projects.filter((p) => p.status === "done");
  const inProgress = projects.filter((p) => p.status === "in-progress");

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2>My Best Works</h2>
      <div className="project-grid">
        {done.map((project) => (
          <div key={project.id} style={{ opacity: 0 }} className="project-card-wrapper">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <h3>Not Finished Projects</h3>
      <div className="project-grid">
        {inProgress.map((project) => (
          <div key={project.id} style={{ opacity: 0 }} className="project-card-wrapper">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;