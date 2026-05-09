'use client';
import dynamic from 'next/dynamic';

const VantaFog = dynamic(() => import('./VantaFog'), { ssr: false });

export default function VantaFogClient() {
  return <VantaFog />;
}
