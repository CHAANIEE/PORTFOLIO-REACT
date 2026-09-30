import { useEffect, useRef } from "react";
import { createTimeline, stagger, splitText } from "animejs";

function FlipText({ text, as: Tag = "h1", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const { chars } = splitText(ref.current, {
      chars: {
        wrap: "clip",
        clone: "bottom",
      },
    });

    const tl = createTimeline().add(
      chars,
      {
        y: "-100%",
        loop: true,
        loopDelay: 350,
        duration: 750,
        ease: "inOut(2)",
      },
      stagger(150, { from: "center" })
    );

    return () => tl.pause();
  }, [text]);

  return (
    <Tag ref={ref} className={`flip-text ${className}`}>
      {text}
    </Tag>
  );
}

export default FlipText;