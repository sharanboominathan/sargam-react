import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

type Direction = 'up' | 'left' | 'right' | 'fade';

interface ScrollRevealOptions {
  direction?: Direction;
  duration?: number;
  delay?: number;
  stagger?: number;
  distance?: number;
  start?: string;
  childSelector?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  const {
    direction = 'up',
    duration = 0.8,
    delay = 0,
    stagger = 0.15,
    distance = 40,
    start = 'top 85%',
    childSelector,
  } = options;

  useGSAP(() => {
    if (!ref.current) return;

    const targets = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : ref.current;

    const fromVars: gsap.TweenVars = { opacity: 0 };

    switch (direction) {
      case 'up':
        fromVars.y = distance;
        break;
      case 'left':
        fromVars.x = -distance;
        break;
      case 'right':
        fromVars.x = distance;
        break;
      case 'fade':
        break;
    }

    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start,
        toggleActions: 'play none none none',
      },
    };

    if (childSelector && targets instanceof NodeList && targets.length > 1) {
      toVars.stagger = stagger;
    }

    gsap.fromTo(targets, fromVars, toVars);
  }, { scope: ref });

  return ref;
}
