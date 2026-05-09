'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type VantaEffect = { destroy: () => void };

export default function VantaFog() {
  const ref = useRef<HTMLDivElement>(null);
  const fx  = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    import('vanta/dist/vanta.fog.min').then((mod) => {
      const FOG = mod.default ?? mod;
      try {
        fx.current = FOG({
          el,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x1a3a6e,
          midtoneColor:   0x0d2a50,
          lowlightColor:  0x0a1f3a,
          baseColor:      0x0a192f,
          blurFactor:     0.9,
          speed:          0.8,
          zoom:           1.0,
        }) as VantaEffect;
      } catch (e) {
        console.error('[VantaFog]', e);
      }
    });

    return () => { fx.current?.destroy(); };
  }, []);

  return <div ref={ref} className="absolute inset-0" style={{ zIndex: 0 }} />;
}
