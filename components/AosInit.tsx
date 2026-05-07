'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';

export default function AosInit() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
}
