import { useState, useRef } from "react";
import { animate } from "animejs";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const bodyRefs = useRef([]);

  const toggle = (i) => {
    const isOpening = openIndex !== i;
    const el = bodyRefs.current[i];

    if (openIndex !== null && openIndex !== i) {
      const prevEl = bodyRefs.current[openIndex];
      animate(prevEl, {
        height: 0,
        opacity: 0,
        duration: 250,
        ease: "outQuad",
      });
    }

    if (el) {
      animate(el, {
        height: isOpening ? [0, el.scrollHeight] : 0,
        opacity: isOpening ? [0, 1] : 0,
        duration: 300,
        ease: "outQuad",
      });
    }

    setOpenIndex(isOpening ? i : null);
  };

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
          <div
            ref={(el) => (bodyRefs.current[i] = el)}
            className="accordion-body"
            style={{ height: 0, opacity: 0, overflow: "hidden" }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;