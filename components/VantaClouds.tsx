'use client';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VantaEffect = { destroy: () => void };

export default function VantaClouds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const THREE = await import('three');
      const { default: CLOUDS2 } = await import('vanta/dist/vanta.clouds2.min');

      if (cancelled || !containerRef.current) return;

      effectRef.current = CLOUDS2({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        texturePath: '/gallery/noise.png',
      }) as VantaEffect;
    })();

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" style={{ zIndex: 0 }} />;
}
