import { useEffect, useRef } from "react";

function ShootingStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let meteors = [];
    let staticStars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStaticStars();
    };

    function generateStaticStars() {
      staticStars = [];
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < count; i++) {
        staticStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    function createMeteor() {
      return {
        x: Math.random() * canvas.width * 1.5 - canvas.width * 0.25,
        y: Math.random() * -canvas.height,
        length: Math.random() * 140 + 70,
        speed: Math.random() * 7 + 5,
        angle: Math.PI / 4,
        opacity: Math.random() * 0.5 + 0.5,
      };
    }

    resize();

    for (let i = 0; i < 25; i++) {
      const s = createMeteor();
      s.y = Math.random() * canvas.height;
      meteors.push(s);
    }

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      staticStars.forEach((star) => {
        const twinkle =
          Math.sin(frame * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      meteors.forEach((star, i) => {
        const dx = Math.cos(star.angle) * star.length;
        const dy = Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - dx,
          star.y - dy
        );
        gradient.addColorStop(0, `rgba(200, 160, 255, ${star.opacity})`);
        gradient.addColorStop(1, "rgba(200, 160, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - dx, star.y - dy);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;

        if (star.y > canvas.height + 150 || star.x < -150) {
          meteors[i] = createMeteor();
        }
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    // debounced resize — also fires on mobile address-bar show/hide
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}

export default ShootingStars;