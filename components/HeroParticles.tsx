'use client';
import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 520;
const WAVE_SPEED     = 0.45;  // rad/s — how fast the ribbon oscillates
const WAVE_AMP       = 0.17;  // fraction of canvas height
const WAVE_FREQ      = 1.3;   // full cycles across width
const RIBBON_SIGMA   = 22;    // px — Gaussian spread perpendicular to spine

interface Particle {
  t:       number; // position along spine [0, 1]
  offset:  number; // perpendicular Gaussian offset (px)
  size:    number; // radius (px)
  opacity: number; // base opacity
  phase:   number; // individual shimmer phase
}

function boxMullerNormal(): number {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let visible   = true;
    let startTime: number | null = null;

    /* ── Build particle pool ── */
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t      = Math.random();
      const offset = boxMullerNormal() * RIBBON_SIGMA;

      // size tiers: 5% large, 20% medium, 75% small
      const rng = Math.random();
      let size: number;
      if      (rng < 0.05) size = 4 + Math.random() * 5;   // 4–9 px
      else if (rng < 0.25) size = 1.8 + Math.random() * 2.2; // 1.8–4 px
      else                 size = 0.5 + Math.random() * 1.3;  // 0.5–1.8 px

      // closer to spine → more opaque
      const distFactor = Math.exp(-(offset * offset) / (2 * RIBBON_SIGMA * RIBBON_SIGMA));
      const opacity    = (0.25 + distFactor * 0.75) * (0.55 + Math.random() * 0.45);

      particles.push({ t, offset, size, opacity, phase: Math.random() * Math.PI * 2 });
    }

    /* ── Canvas sizing ── */
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    /* ── Spine curve: diagonal from bottom-left to upper-right, sinusoidal ── */
    const spinePoint = (t: number, time: number, W: number, H: number) => {
      const x     = t * W;
      const baseY = H * (0.68 - t * 0.36);                                   // diagonal
      const waveY = Math.sin(t * WAVE_FREQ * Math.PI * 2 - time * WAVE_SPEED) * H * WAVE_AMP;
      return { x, y: baseY + waveY };
    };

    /* ── Perpendicular normal to spine at t ── */
    const spineNormal = (t: number, time: number, W: number, H: number) => {
      const dt = 0.002;
      const a  = spinePoint(Math.max(0, t - dt), time, W, H);
      const b  = spinePoint(Math.min(1, t + dt), time, W, H);
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const len = Math.sqrt(dx * dx + dy * dy) || 1;
      return { nx: -dy / len, ny: dx / len };
    };

    /* ── Draw loop ── */
    const draw = (ts: number) => {
      rafId = requestAnimationFrame(draw);
      if (!visible) return;

      if (startTime === null) startTime = ts;
      const time = (ts - startTime) / 1000;

      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        const { x: sx, y: sy } = spinePoint(p.t, time, W, H);
        const { nx, ny }       = spineNormal(p.t, time, W, H);

        const x = sx + nx * p.offset;
        const y = sy + ny * p.offset;

        const shimmer      = 0.82 + 0.18 * Math.sin(time * 1.8 + p.phase);
        const finalOpacity = Math.min(1, p.opacity * shimmer);

        // Large dots glow; small ones are pure solid cyan
        if (p.size > 4) {
          ctx.shadowBlur  = 12;
          ctx.shadowColor = `rgba(120,210,255,0.6)`;
        } else {
          ctx.shadowBlur  = 0;
        }

        // Subtle color variance: some dots leaning cooler, some warmer
        const isWarm = p.phase > Math.PI;
        const r = isWarm ? 130 : 95;
        const g = isWarm ? 215 : 195;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},255,${finalOpacity.toFixed(3)})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0; // reset after frame
    };

    /* ── Visibility pause ── */
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
