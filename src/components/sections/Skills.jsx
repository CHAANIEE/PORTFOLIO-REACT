import { skills } from "../../data/projects";
import SkillBadge from "../ui/SkillBadge";

function Skills() {
  return (
    <section id="skills" className="skills">
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