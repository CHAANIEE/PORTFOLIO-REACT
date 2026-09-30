import { animate } from "animejs";

function SkillBadge({ name }) {
  const handleEnter = (e) => {
    animate(e.currentTarget, {
      scale: 1.12,
      duration: 200,
      ease: "outQuad",
    });
  };

  const handleLeave = (e) => {
    animate(e.currentTarget, {
      scale: 1,
      duration: 200,
      ease: "outQuad",
    });
  };

  return (
    <span
      className="skill-badge"
      style={{ opacity: 0 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {name}
    </span>
  );
}

export default SkillBadge;