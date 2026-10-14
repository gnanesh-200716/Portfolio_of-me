import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimation() {
  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.line-inner, .scroll-reveal, .clip-reveal-frame').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    // 1. Initialize Lenis Smooth Scroll
    let lenis;
    let tickerCallback;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
      });

      // Synchronize Lenis scroll with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      tickerCallback = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    } catch (e) {
      console.warn('Lenis smooth scroll fallback to native scroll', e);
    }

    // 2. Scroll-triggered Text & Element Reveals
    const revealElements = document.querySelectorAll('.scroll-reveal, .line-inner, .clip-reveal-frame');
    revealElements.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          el.classList.add('revealed');
        }
      });
    });

    // 3. Hero Ambient Glow Parallax
    const heroGlow = document.querySelector('.hero-glow-ambient');
    if (heroGlow) {
      gsap.to(heroGlow, {
        y: 120,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // 4. Magnetic Buttons for Desktop Pointers
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    let cleanupMagnetic = () => {};

    if (!isTouch) {
      const magneticBtns = document.querySelectorAll('[data-magnetic]');
      const mouseMoveHandlers = [];

      magneticBtns.forEach((btn) => {
        const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power2.out' });
        const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power2.out' });

        const onMouseMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) * 0.25;
          const deltaY = (e.clientY - centerY) * 0.25;

          xTo(deltaX);
          yTo(deltaY);
        };

        const onMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        btn.addEventListener('mousemove', onMouseMove);
        btn.addEventListener('mouseleave', onMouseLeave);

        mouseMoveHandlers.push({ btn, onMouseMove, onMouseLeave });
      });

      cleanupMagnetic = () => {
        mouseMoveHandlers.forEach(({ btn, onMouseMove, onMouseLeave }) => {
          btn.removeEventListener('mousemove', onMouseMove);
          btn.removeEventListener('mouseleave', onMouseLeave);
        });
      };
    }

    // Refresh triggers once layout settles
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      cleanupMagnetic();
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
      }
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
}
