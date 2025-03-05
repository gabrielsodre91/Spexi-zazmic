import { useEffect, useRef } from 'react';

export const useScrollReveal = (onlyOnce = false) => {
  const ref = useRef(null);

  useEffect(() => {
    const scrollReveal = () => {
      const elements = document.querySelectorAll(onlyOnce ? '.reveal-once' : '.reveal');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50 && elementBottom > 0) {
          element.classList.add('active');
          // Se for animação única, mantém ativo permanentemente
          if (onlyOnce) {
            element.classList.add('permanent');
          }
        } else if (!element.classList.contains('permanent')) {
          element.classList.remove('active');
        }
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          scrollReveal();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    scrollReveal(); // Checa inicial

    return () => window.removeEventListener('scroll', onScroll);
  }, [onlyOnce]);

  return ref;
}; 