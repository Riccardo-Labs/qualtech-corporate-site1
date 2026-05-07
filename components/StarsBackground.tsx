'use client';
import { useEffect, useRef } from 'react';

// ─── Tweak these ─────────────────────────────────────────────────────────────
const BUBBLE_COUNT  = 1000;   // total bubbles on screen at once
const SPEED_MIN     = 8;     // px/s slowest bubble
const SPEED_MAX     = 80;    // px/s fastest bubble
const SIZE_SMALL    = 0.1;  // radius (px) — tiny pinpoints
const SIZE_MEDIUM   = 0.8;   // radius medium
const SIZE_LARGE    = 2;  // radius large
const WOBBLE_AMP    = 2;     // horizontal sinusoidal drift amplitude (px)
const WOBBLE_FREQ   = 0.4;  // wobble cycles per second
const MOUSE_FACTOR  = 0.05; // parallax layer shift per bubble (0 = off)
// ─────────────────────────────────────────────────────────────────────────────

interface Bubble {
  x: number; y: number;
  r: number;
  speed: number;
  opacity: number;
  phase: number;
  layer: number;
}

function makeBubble(W: number, H: number, fromBottom = false): Bubble {
  const rng = Math.random();
  const r =
    rng < 0.07 ? SIZE_LARGE  * (0.8 + Math.random() * 0.4) :
    rng < 0.25 ? SIZE_MEDIUM * (0.8 + Math.random() * 0.4) :
                 SIZE_SMALL  * (0.8 + Math.random() * 0.4);

  return {
    x:       Math.random() * W,
    y:       fromBottom ? H + r : Math.random() * H,
    r,
    speed:   SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
    opacity: 0.15 + Math.random() * 0.65,
    phase:   Math.random() * Math.PI * 2,
    layer:   Math.random(),
  };
}

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let visible = true;
    let prev     = 0;
    let elapsed  = 0;
    let mouseX   = 0;
    let mouseY   = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseX = (e.clientX - r.left - canvas.width  / 2) / canvas.width;
      mouseY = (e.clientY - r.top  - canvas.height / 2) / canvas.height;
    };

    resize();
    const W = () => canvas.width;
    const H = () => canvas.height;

    const bubbles: Bubble[] = Array.from({ length: BUBBLE_COUNT }, () =>
      makeBubble(W(), H(), false)
    );

    const draw = (ts: number) => {
      rafId = requestAnimationFrame(draw);
      if (!visible) return;

      const dt = Math.min((ts - prev) / 1000, 0.05);
      prev     = ts;
      elapsed += dt;

      ctx.clearRect(0, 0, W(), H());

      // Background gradient: dark navy bottom → deep blue top
      const grad = ctx.createLinearGradient(0, H(), 0, 0);
      grad.addColorStop(0, '#0a192f');
      grad.addColorStop(0.5, '#0d2a4a');
      grad.addColorStop(1, '#0f3d6e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W(), H());

      for (const b of bubbles) {
        b.y -= b.speed * dt;

        const wobbleX = Math.sin(elapsed * WOBBLE_FREQ * Math.PI * 2 + b.phase) * WOBBLE_AMP;
        const px = mouseX * MOUSE_FACTOR * b.layer * W();
        const py = mouseY * MOUSE_FACTOR * b.layer * H();

        const drawX = b.x + wobbleX + px;
        const drawY = b.y           + py;

        const edgeFade = Math.min(1, (b.y / H()) * 6);
        const opacity  = b.opacity * edgeFade;

        if (b.y + b.r < 0) {
          Object.assign(b, makeBubble(W(), H(), true));
        }

        if (b.r > SIZE_MEDIUM) {
          ctx.shadowBlur  = b.r * 2;
          ctx.shadowColor = `rgba(255,255,255,${opacity * 0.4})`;
        } else {
          ctx.shadowBlur  = 0;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${opacity.toFixed(3)})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    };

    const observer = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting; },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouse);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
