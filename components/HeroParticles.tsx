'use client';
import { useEffect, useRef } from 'react';

const SPACING  = 32;   // px between dots
const SPEED    = 90;   // px/s — wave travels downward at this speed
const SIGMA    = 0.22; // wave envelope width as fraction of canvas height
const REST_OP  = 0.05; // opacity when wave is not passing (almost invisible)
const REST_R   = 1.0;  // dot radius at rest
const PEAK_OP  = 0.30; // opacity at wave crest
const PEAK_R   = 2.4;  // dot radius at wave crest

// Slight horizontal curvature so the wave front is not a flat line
const H_CURVE  = 28;   // px of sinusoidal curve across the width

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let visible = true;
    let prev = 0;

    // waveY is the Y-position of the wave crest (can be outside canvas bounds)
    // Starts above the canvas and scrolls down; loops back when fully past bottom
    let waveY = -canvas.height * SIGMA * 3;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // reset wave to top so resize doesn't cause a jump
      waveY = -canvas.height * SIGMA * 3;
    };

    const draw = (ts: number) => {
      rafId = requestAnimationFrame(draw);
      if (!visible) return;

      const dt = Math.min((ts - prev) / 1000, 0.05); // cap at 50ms
      prev = ts;

      const W = canvas.width;
      const H = canvas.height;

      // advance wave
      waveY += SPEED * dt;

      // loop: once the wave is fully past the bottom, restart from top
      const loopPoint = H + H * SIGMA * 3;
      if (waveY > loopPoint) waveY -= loopPoint + H * SIGMA * 3;

      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / SPACING) + 1;
      const rows = Math.ceil(H / SPACING) + 1;
      const sigma = H * SIGMA;

      for (let r = 0; r < rows; r++) {
        const y = r * SPACING;

        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;

          // slightly curve the wave front horizontally (organic feel)
          const localWaveY = waveY + Math.sin(x * 0.018) * H_CURVE;

          // Gaussian envelope: peak = 1 when y == localWaveY, falls off symmetrically
          const dist  = y - localWaveY;
          const pulse = Math.exp(-(dist * dist) / (2 * sigma * sigma));

          const opacity = REST_OP + pulse * (PEAK_OP - REST_OP);
          const radius  = REST_R  + pulse * (PEAK_R  - REST_R);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${opacity.toFixed(3)})`;
          ctx.fill();
        }
      }
    };

    const observer = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener('resize', resize);
    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 2, pointerEvents: 'none' }}
    />
  );
}
