import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import FlipText from "../ui/FlipText";
import profile from "../../assets/profile.jpg";

function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current || !imgRef.current) return;

    const anim = animate(imgRef.current, {
      rotate: "1turn",
      scale: [1, 1.15, 1],
      duration: 1000,
      autoplay: onScroll({
        target: heroRef.current,
        enter: "bottom top",
        leave: "top bottom",
        sync: true, // ties progress directly to scroll position instead of just triggering once
        debug: false,
      }),
    });

    return () => anim.pause();
  }, []);

  return (
    <section id="top" className="hero" ref={heroRef}>
      <img
        ref={imgRef}
        src={profile}
        alt="Christian Lagula"
        className="profile-img"
      />
      <FlipText as="h1" text="CHRISTIAN LAGULA" />
      <p>Philippines – Davao</p>
    </section>
  );
}

export default Hero;