import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { skills } from "../../data/projects";
import SkillBadge from "../ui/SkillBadge";

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const badges = el.querySelectorAll(".skill-badge");
        if (entry.isIntersecting) {
          animate(badges, {
            scale: [0, 1],
            rotate: ["-8deg", "0deg"],
            opacity: [0, 1],
            duration: 500,
            ease: "outBack",
            delay: stagger(40),
          });
        } else {
          badges.forEach((b) => {
            b.style.opacity = 0;
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Skills & Technologies</h2>
      <p>A collection of technologies and tools I work with regularly.</p>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skill-list">
            {items.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;