import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollReveal } from "../../lib/animations";
import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { icon: "👤", value: "3", suffix: "+", label: "Projects Shipped" },
  { icon: "😊", value: "100", suffix: "%", label: "Effort Given" },
  { icon: "⏱", value: "Daily", suffix: "", label: "Learning" },
  { icon: "✎", value: "∞", suffix: "", label: "Curiosity" },
];

function Stats() {
  return (
    <section className="stats">
      <motion.div
        className="stats-grid"
        variants={staggerContainer}
        {...scrollReveal}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} className="stat-cell" variants={fadeInUp}>
            <div className="stat-glow" />
            <span className="stat-icon">{stat.icon}</span>
            <h3>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;