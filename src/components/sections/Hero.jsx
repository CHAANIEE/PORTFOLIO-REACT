import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import FlipText from "../ui/FlipText";
import profile from "../../assets/profile.jpg";

function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);



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