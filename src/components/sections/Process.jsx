import { motion } from "framer-motion";
import { fadeInUp, scrollReveal } from "../../lib/animations";
import { processSteps } from "../../data/process";

function Process() {
  return (
    <section id="process" className="process">
      <h2>My process</h2>
      <div className="process-list">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.phase}
            className="process-step"
            variants={fadeInUp}
            {...scrollReveal}
            transition={{ delay: i * 0.1 }}
          >
            <span className="process-phase">{step.phase}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Process;