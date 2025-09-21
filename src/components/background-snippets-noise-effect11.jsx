import React, { useRef, useEffect } from "react";

const Noise = ({
  patternSize = 250, // (reserved for future scaling)
  patternScaleX = 1,  // (reserved)
  patternScaleY = 1,  // (reserved)
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId = 0;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      // Cover viewport
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) drawGrain();
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      ref={grainRef}
      className="pointer-events-none absolute inset-0"
      style={{ imageRendering: "pixelated" }} />
  );
};

/** Detective themed animated background with circuit patterns */
const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="#ff1493" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="90" cy="90" r="1.5" fill="#800040" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <line x1="10" y1="10" x2="90" y2="10" stroke="#ff1493" strokeWidth="0.5" opacity="0.3" />
            <line x1="10" y1="10" x2="10" y2="90" stroke="#800040" strokeWidth="0.5" opacity="0.3" />
            <line x1="10" y1="90" x2="90" y2="90" stroke="#ff1493" strokeWidth="0.5" opacity="0.2" />
            <line x1="90" y1="10" x2="90" y2="90" stroke="#800040" strokeWidth="0.5" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '4s'
          }}
        >
          <div className="text-4xl opacity-10">
            {['🔍', '🕵️', '🔐', '💻', '🐛', '⚡'][i]}
          </div>
        </div>
      ))}
    </div>
  );
};

/** Detective themed gradient + Noise background. */
export default function Component() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-pink-800/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff1493_0%,transparent_25%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#800040_0%,transparent_25%)] opacity-15" />
      
      {/* Circuit pattern overlay */}
      <CircuitPattern />
      
      {/* Floating detective elements */}
      <FloatingElements />
      
      {/* Grain overlay */}
      <Noise patternRefreshInterval={3} patternAlpha={15} />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent animate-pulse" 
           style={{ animationDuration: '6s' }} />
    </div>
  );
}
