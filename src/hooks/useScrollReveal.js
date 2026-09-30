import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 600,
            ease: "outQuad",
            ...options,
          });
        } else {
          // reset instantly so it's ready to animate in again next time
          el.style.opacity = 0;
          el.style.transform = "translateY(40px)";
        }
      },
      { threshold: 0.2 }
    );

    el.style.opacity = 0;
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useStaggerReveal(childSelector, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const children = el.querySelectorAll(childSelector);
        if (entry.isIntersecting) {
          animate(children, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 600,
            delay: stagger(120),
            ease: "outQuad",
            ...options,
          });
        } else {
          children.forEach((c) => {
            c.style.opacity = 0;
            c.style.transform = "translateY(40px)";
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [childSelector]);

  return ref;
}