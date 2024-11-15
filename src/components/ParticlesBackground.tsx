import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
}

interface ParticlesProps {
  particleColor?: string;
  lineColor?: string;
  particleCount?: number;
  particleSize?: number;
  lineMaxLength?: number;
  speed?: number;
}

const ParticlesBackground = ({
  particleColor = "rgba(240, 96, 60, 0.5)",
  lineColor = "rgba(240, 96, 60, 0.15)",
  particleCount = 50,
  particleSize = 2,
  lineMaxLength = 150,
  speed = 1,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = Array(particleCount)
        .fill(null)
        .map(() => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * speed,
          dy: (Math.random() - 0.5) * speed,
          size: particleSize + Math.random() * particleSize * 0.5,
        }));
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      ctx.fillStyle = "rgba(2, 3, 18, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.dx *= -1;
          particle.dx += (Math.random() - 0.5) * 0.2;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.dy *= -1;
          particle.dy += (Math.random() - 0.5) * 0.2;
        }

        const maxSpeed = speed * 2;
        particle.dx = Math.max(Math.min(particle.dx, maxSpeed), -maxSpeed);
        particle.dy = Math.max(Math.min(particle.dy, maxSpeed), -maxSpeed);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < lineMaxLength) {
            const opacity = (1 - distance / lineMaxLength) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = lineColor.replace("0.15", opacity.toString());
            ctx.lineWidth = (1 - distance / lineMaxLength) * 2;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    particleColor,
    lineColor,
    particleCount,
    particleSize,
    lineMaxLength,
    speed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        background: "rgba(2, 3, 18, 0.8)",
        zIndex: 0,
      }}
    />
  );
};

export default ParticlesBackground;
