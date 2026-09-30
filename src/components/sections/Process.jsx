import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { processSteps } from "../../data/process";

function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const steps = el.querySelectorAll(".process-step");
        if (entry.isIntersecting) {
          animate(steps, {
            translateX: [-60, 0],
            skewX: ["-4deg", "0deg"],
            opacity: [0, 1],
            duration: 650,
            ease: "outQuad",
            delay: stagger(150),
          });
        } else {
          steps.forEach((s) => {
            s.style.opacity = 0;
          });
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process" ref={sectionRef}>
      <h2>My process</h2>
      <div className="process-list">
        {processSteps.map((step) => (
          <div key={step.phase} className="process-step" style={{ opacity: 0 }}>
            <span className="process-phase">{step.phase}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;