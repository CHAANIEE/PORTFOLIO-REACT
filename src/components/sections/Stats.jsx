import { useStaggerReveal } from "../../hooks/useScrollReveal";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { icon: "👤", value: "3", suffix: "+", label: "Projects Shipped" },
  { icon: "😊", value: "100", suffix: "%", label: "Effort Given" },
  { icon: "⏱", value: "Daily", suffix: "", label: "Learning" },
  { icon: "✎", value: "∞", suffix: "", label: "Curiosity" },
];

function Stats() {
  const gridRef = useStaggerReveal(".stat-cell");

  return (
    <section className="stats">
      <div className="stats-grid" ref={gridRef}>
        {stats.map((stat) => (
          <div key={stat.label} className="stat-cell">
            <div className="stat-glow" />
            <span className="stat-icon">{stat.icon}</span>
            <h3>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;