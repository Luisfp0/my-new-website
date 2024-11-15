import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  isDNAParticle: boolean;
  baseSpeed: number;
  strand: number;
  position: number;
  opacity: number;
  distanceToTarget: number;
}

interface DNAReactTransitionProps {
  primaryColor?: string;
  secondaryColor?: string;
  particleCount?: number;
  particleSize?: number;
  randomParticlePercentage?: number;
}

const DNAReactTransition = ({
  primaryColor = "#4ECDC4",
  secondaryColor = "#FF6B6B",
  particleCount = 180,
  particleSize = 2,
  randomParticlePercentage = 20,
}: DNAReactTransitionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const [shape, setShape] = useState<"dna" | "react">("dna");
  const [isFormed, setIsFormed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const rotationRef = useRef(0);
  const particleStabilityRef = useRef(0);
  const orbitOffsetRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);

  const getScaleFactor = () => {
    if (!canvasRef.current) return 1;
    return Math.min(canvasRef.current.width, canvasRef.current.height) / 1000;
  };

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

      const scaleFactor = getScaleFactor();
      particlesRef.current.forEach((particle) => {
        particle.size =
          particleSize * scaleFactor * (particle.isDNAParticle ? 1.2 : 0.8);
      });

      if (particlesRef.current.length === 0) {
        initParticles();
      }
    };

    const initParticles = () => {
      const particles: Particle[] = [];
      const mainParticleCount =
        particleCount -
        Math.floor(particleCount * (randomParticlePercentage / 100));
      const scaleFactor = getScaleFactor();

      // Partículas principais
      for (let i = 0; i < mainParticleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
          size: particleSize * scaleFactor * (0.9 + Math.random() * 0.2),
          color: i % 2 === 0 ? primaryColor : secondaryColor,
          isDNAParticle: true,
          baseSpeed: 0.3 + Math.random() * 0.7,
          strand: i % 2,
          position: i / mainParticleCount,
          opacity: 0.8 + Math.random() * 0.2,
          distanceToTarget: 0,
        });
      }

      // Partículas de fundo
      for (
        let i = 0;
        i < particleCount * (randomParticlePercentage / 100);
        i++
      ) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
          size: particleSize * scaleFactor * 0.8,
          color: i % 2 === 0 ? primaryColor : secondaryColor,
          isDNAParticle: false,
          baseSpeed: 0.3 + Math.random() * 0.7,
          strand: -1,
          position: -1,
          opacity: 0.6,
          distanceToTarget: 0,
        });
      }

      particlesRef.current = particles;
    };

    const calculateDNAPosition = (particle: Particle, time: number) => {
      const centerX = canvas.width * 0.75;
      const scaleFactor = getScaleFactor();

      const dnaHeight = canvas.height * 0.7;
      const startY = canvas.height * 0.15;

      const frequency = 2.5;
      const amplitude = 80 * scaleFactor;

      const progress = particle.position;
      const y = startY + progress * dnaHeight;

      const rotation = rotationRef.current;
      const angle = progress * Math.PI * 2 * frequency + rotation;

      const randomOffset =
        Math.sin(time * 0.001 + progress * 10) * 2 * scaleFactor;
      const xOffset = Math.sin(angle) * amplitude + randomOffset;
      const x = centerX + (particle.strand === 0 ? xOffset : -xOffset);

      return { x, y };
    };

    const updateOrbitOffset = (time: number) => {
      const amplitude = 5 * getScaleFactor();
      const frequency = 0.001;
      orbitOffsetRef.current = {
        x: Math.sin(time * frequency) * amplitude,
        y: Math.cos(time * frequency) * amplitude,
      };
    };

    const calculateReactPosition = (particle: Particle, time: number) => {
      const centerX = canvas.width * 0.75;
      const centerY = canvas.height / 2;
      const scaleFactor = getScaleFactor();
      const progress = particle.position;
      const rotation = rotationRef.current;
      const offset = orbitOffsetRef.current;

      const isCore = progress < 0.1;

      if (isCore) {
        const angle = progress * Math.PI * 20;
        const radius = 40 * scaleFactor;
        return {
          x: centerX + Math.cos(angle) * radius + offset.x,
          y: centerY + Math.sin(angle) * radius + offset.y,
        };
      } else {
        const orbitProgress = (progress - 0.1) / 0.9;
        const orbit = Math.floor(orbitProgress * 3);
        const progressInOrbit = (orbitProgress * 3) % 1;

        const baseRadiusX = 250 * scaleFactor;
        const baseRadiusY = 90 * scaleFactor;

        const radiusX =
          baseRadiusX + Math.sin(time * 0.001 + orbit) * (10 * scaleFactor);
        const radiusY =
          baseRadiusY + Math.cos(time * 0.001 + orbit) * (5 * scaleFactor);

        const orbitAngle = orbit * ((Math.PI * 2) / 3) + rotation;
        const angle = progressInOrbit * Math.PI * 2;

        const ellipseX = Math.cos(angle) * radiusX;
        const ellipseY = Math.sin(angle) * radiusY;

        const finalX =
          centerX +
          (ellipseX * Math.cos(orbitAngle) - ellipseY * Math.sin(orbitAngle)) +
          offset.x;
        const finalY =
          centerY +
          (ellipseX * Math.sin(orbitAngle) + ellipseY * Math.cos(orbitAngle)) +
          offset.y;

        return { x: finalX, y: finalY };
      }
    };

    const moveTowards = (
      particle: Particle,
      targetX: number,
      targetY: number
    ) => {
      const dx = targetX - particle.x;
      const dy = targetY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      particle.distanceToTarget = distance;

      if (distance < 0.1) {
        particle.x = targetX;
        particle.y = targetY;
        particle.dx = 0;
        particle.dy = 0;
        return;
      }

      const speed = Math.min(0.1 * particle.baseSpeed, distance / 20);

      particle.dx = dx * speed;
      particle.dy = dy * speed;
    };

    const drawDNAConnections = (ctx: CanvasRenderingContext2D) => {
      const scaleFactor = getScaleFactor();
      const particles = particlesRef.current.filter((p) => p.isDNAParticle);
      const strand0 = particles
        .filter((p) => p.strand === 0)
        .sort((a, b) => a.position - b.position);
      const strand1 = particles
        .filter((p) => p.strand === 1)
        .sort((a, b) => a.position - b.position);

      [strand0, strand1].forEach((strand, index) => {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        const color = index === 0 ? primaryColor : secondaryColor;
        gradient.addColorStop(0, `${color}33`);
        gradient.addColorStop(0.5, `${color}66`);
        gradient.addColorStop(1, `${color}33`);

        for (let i = 0; i < strand.length - 1; i++) {
          const current = strand[i];
          const next = strand[i + 1];
          const control1 = {
            x: current.x + (next.x - current.x) * 0.5,
            y: current.y + (next.y - current.y) * 0.5,
          };

          if (i === 0) ctx.moveTo(current.x, current.y);
          ctx.quadraticCurveTo(control1.x, control1.y, next.x, next.y);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2 * scaleFactor;
        ctx.stroke();
      });

      ctx.beginPath();
      for (let i = 0; i < strand0.length; i += 2) {
        const p1 = strand0[i];
        const p2 = strand1[i];
        if (p1 && p2) {
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
        }
      }

      ctx.strokeStyle = `${primaryColor}44`;
      ctx.lineWidth = 1 * scaleFactor;
      ctx.stroke();
    };

    const drawReactConnections = (
      ctx: CanvasRenderingContext2D,
      time: number
    ) => {
      const scaleFactor = getScaleFactor();
      const particles = particlesRef.current.filter((p) => p.isDNAParticle);
      const orbitParticles = particles.filter((p) => p.position >= 0.1);

      for (let orbit = 0; orbit < 3; orbit++) {
        const orbitStart = 0.1 + orbit * 0.3;
        const orbitEnd = orbitStart + 0.3;

        const orbitParticlesSubset = orbitParticles
          .filter((p) => p.position >= orbitStart && p.position < orbitEnd)
          .sort((a, b) => {
            const angleA = Math.atan2(
              a.y - canvas.height / 2,
              a.x - canvas.width / 2
            );
            const angleB = Math.atan2(
              b.y - canvas.height / 2,
              b.x - canvas.width / 2
            );
            return angleA - angleB;
          });

        ctx.beginPath();
        orbitParticlesSubset.forEach((particle, i) => {
          const nextParticle =
            orbitParticlesSubset[(i + 1) % orbitParticlesSubset.length];

          if (i === 0) {
            ctx.moveTo(particle.x, particle.y);
          }

          const progress = i / orbitParticlesSubset.length;
          const wave =
            Math.sin(time * 0.001 + progress * Math.PI * 2) * (3 * scaleFactor);

          const xc = (particle.x + nextParticle.x) / 2 + wave;
          const yc = (particle.y + nextParticle.y) / 2 + wave;

          ctx.quadraticCurveTo(xc, yc, nextParticle.x, nextParticle.y);
        });

        ctx.closePath();
        ctx.strokeStyle = `${primaryColor}66`;
        ctx.lineWidth = 2 * scaleFactor;
        ctx.stroke();
      }

      // Núcleo com pulsação
      const pulseScale = 1 + Math.sin(time * 0.002) * 0.1;
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2 + orbitOffsetRef.current.x,
        canvas.height / 2 + orbitOffsetRef.current.y,
        40 * scaleFactor * pulseScale,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `${primaryColor}44`;
      ctx.fill();
    };

    const updateParticles = (time: number) => {
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      let totalDistance = 0;

      if (shape === "dna" || shape === "react") {
        rotationRef.current += 0.002;
      }

      if (shape === "react") {
        updateOrbitOffset(time);
      }

      particlesRef.current.forEach((particle) => {
        if (!particle.isDNAParticle) {
          particle.x += particle.dx;
          particle.y += particle.dy;

          if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

          particle.dx += (Math.random() - 0.5) * 0.1;
          particle.dy += (Math.random() - 0.5) * 0.1;

          const speed = Math.sqrt(
            particle.dx * particle.dx + particle.dy * particle.dy
          );
          if (speed > 2) {
            particle.dx = (particle.dx / speed) * 2;
            particle.dy = (particle.dy / speed) * 2;
          }
        } else {
          const target =
            shape === "dna"
              ? calculateDNAPosition(particle, time)
              : calculateReactPosition(particle, time);

          moveTowards(particle, target.x, target.y);
          particle.x += particle.dx;
          particle.y += particle.dy;

          totalDistance += particle.distanceToTarget;
        }
      });

      const averageDistance = totalDistance / particlesRef.current.length;
      if (averageDistance < 0.5) {
        particleStabilityRef.current++;
        if (particleStabilityRef.current > 30 && !isFormed) {
          setIsFormed(true);
        }
      } else {
        particleStabilityRef.current = 0;
        setIsFormed(false);
      }
    };

    const drawParticles = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isFormed) {
        if (shape === "react") {
          drawReactConnections(ctx, time);
        } else if (shape === "dna") {
          drawDNAConnections(ctx);
        }
      }

      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        const pulseIntensity =
          1 + Math.sin(time * 0.002 + particle.position * Math.PI) * 0.2;
        const opacity = Math.min(
          255,
          Math.floor(particle.opacity * pulseIntensity * 255)
        );
        const alpha = opacity.toString(16).padStart(2, "0");

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );

        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.6, `${particle.color}${alpha}`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const animate = (time: number) => {
      updateParticles(time);
      drawParticles(time);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const startTransitionCycle = () => {
      timeoutRef.current = setTimeout(() => {
        setIsFormed(false);
        particleStabilityRef.current = 0;
        setShape((prev) => (prev === "dna" ? "react" : "dna"));
        startTransitionCycle();
      }, 8000);
    };

    handleResize();
    lastTimeRef.current = performance.now();
    animate(lastTimeRef.current);
    startTransitionCycle();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    primaryColor,
    secondaryColor,
    particleCount,
    particleSize,
    randomParticlePercentage,
    shape,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        background: "rgba(2, 3, 18, 0.98)",
        zIndex: 0,
      }}
    />
  );
};

export default DNAReactTransition;
