import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={item.question} className="accordion-item">
          <button className="accordion-header" onClick={() => toggle(i)}>
            <span>{item.question}</span>
            <span className={`accordion-icon ${openIndex === i ? "open" : ""}`}>
              +
            </span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                className="accordion-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default Accordion;