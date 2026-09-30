import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { benefits } from "../../data/benefits";

function Benefits() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const cards = el.querySelectorAll(".benefit-card");
        if (entry.isIntersecting) {
          animate(cards, {
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 600,
            ease: "outQuad",
            delay: stagger(100),
          });
        } else {
          cards.forEach((c) => {
            c.style.opacity = 0;
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="benefits" ref={sectionRef}>
      <h2>Why work with me</h2>
      <div className="benefits-grid">
        {benefits.map((b) => (
          <div key={b.title} className="benefit-card" style={{ opacity: 0 }}>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;