// components/LenisScroll.js
"use client"
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: 'vertical', // vertical or horizontal
      gestureDirection: 'vertical', // vertical or horizontal
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1.3,
      lerp: .075
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisScroll;
