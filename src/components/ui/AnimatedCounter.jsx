import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isNumeric = !isNaN(parseInt(value));
  const target = isNumeric ? parseInt(value) : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumeric) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const obj = { val: 0 };
          animate(obj, {
            val: target,
            round: 1,
            duration: 1200,
            ease: "outQuad",
            onUpdate: () => setCount(obj.val),
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, isNumeric]);

  return (
    <span ref={ref}>
      {isNumeric ? count : value}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;