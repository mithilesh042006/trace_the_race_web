import React, { useRef, useEffect } from "react";

/** Animated particles floating effect */
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    const particles = [];
    const particleCount = 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particles
    const createParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          hue: Math.random() > 0.5 ? 330 : 300, // Pink or Purple
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${particle.opacity})`;
        ctx.fill();

        // Draw connections to nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 20, 147, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resize);
    resize();
    createParticles();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

/** Animated gradient orbs */
const GradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Orb 1 */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255,20,147,0.4) 0%, transparent 70%)',
          left: '10%',
          top: '20%',
          animation: 'float1 20s ease-in-out infinite',
        }}
      />
      {/* Orb 2 */}
      <div
        className="absolute w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(128,0,64,0.5) 0%, transparent 70%)',
          right: '15%',
          bottom: '30%',
          animation: 'float2 25s ease-in-out infinite',
        }}
      />
      {/* Orb 3 */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)',
          left: '50%',
          top: '60%',
          animation: 'float3 18s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -30px) scale(1.1); }
          50% { transform: translate(20px, 40px) scale(0.95); }
          75% { transform: translate(-30px, 20px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.1); }
          66% { transform: translate(30px, -20px) scale(0.9); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, -40px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

/** Grid pattern overlay */
const GridPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,20,147,0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

/** Floating icons */
const FloatingIcons = () => {
  const icons = ['⚡', '💡', '🎯', '✨', '🔗', '💫'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-5"
          style={{
            left: `${15 + (i * 15)}%`,
            top: `${20 + (i * 10)}%`,
            animation: `iconFloat${i % 3} ${15 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {icon}
        </div>
      ))}

      <style>{`
        @keyframes iconFloat0 {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.05; }
          50% { transform: translateY(-30px) rotate(10deg); opacity: 0.1; }
        }
        @keyframes iconFloat1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.05; }
          50% { transform: translateY(-20px) translateX(15px); opacity: 0.08; }
        }
        @keyframes iconFloat2 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.05; }
          50% { transform: translateY(-25px) scale(1.1); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

/** Main animated background component */
export default function Component() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Secondary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-950/30 via-transparent to-purple-950/20" />

      {/* Grid pattern */}
      <GridPattern />

      {/* Animated gradient orbs */}
      <GradientOrbs />

      {/* Particle field with connections */}
      <ParticleField />

      {/* Floating icons */}
      <FloatingIcons />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
