import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const isNumeric = !isNaN(parseInt(value));
  const target = isNumeric ? parseInt(value) : 0;

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, isNumeric]);

  return (
    <motion.span ref={ref} className="counter">
      {isNumeric ? count : value}
      {suffix}
    </motion.span>
  );
}

export default AnimatedCounter;