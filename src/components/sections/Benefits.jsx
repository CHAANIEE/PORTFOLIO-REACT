import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scrollReveal } from "../../lib/animations";
import { benefits } from "../../data/benefits";

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <h2>Why work with me</h2>
      <motion.div
        className="benefits-grid"
        variants={staggerContainer}
        {...scrollReveal}
      >
        {benefits.map((b) => (
          <motion.div key={b.title} className="benefit-card" variants={fadeInUp}>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Benefits;