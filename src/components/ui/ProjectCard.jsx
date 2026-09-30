import { animate } from "animejs";

function BrowserMockupIcon() {
  return (
    <svg
      className="project-thumb"
      viewBox="0 0 300 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="298"
        height="158"
        rx="12"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.08)"
      />
      <rect x="1" y="1" width="298" height="28" rx="12" fill="rgba(255,255,255,0.05)" />
      <rect x="1" y="17" width="298" height="12" fill="rgba(255,255,255,0.05)" />
      <circle cx="18" cy="15" r="4" fill="#f87171" />
      <circle cx="32" cy="15" r="4" fill="#fbbf24" />
      <circle cx="46" cy="15" r="4" fill="#4ade80" />
      <rect x="20" y="50" width="120" height="10" rx="5" fill="#a855f7" opacity="0.7" />
      <rect x="20" y="70" width="200" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="20" y="86" width="170" height="8" rx="4" fill="rgba(255,255,255,0.15)" />
      <rect x="20" y="102" width="190" height="8" rx="4" fill="rgba(255,255,255,0.1)" />
      <rect x="20" y="124" width="70" height="20" rx="10" fill="#a855f7" opacity="0.25" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const handleEnter = (e) => {
    animate(e.currentTarget, {
      scale: 1.03,
      rotate: "1deg",
      duration: 250,
      ease: "outQuad",
    });
  };

  const handleLeave = (e) => {
    animate(e.currentTarget, {
      scale: 1,
      rotate: "0deg",
      duration: 250,
      ease: "outQuad",
    });
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-thumb"
        />
      ) : (
        <BrowserMockupIcon />
      )}
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