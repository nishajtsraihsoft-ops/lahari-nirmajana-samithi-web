import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      title="Scroll to top"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-themeRed hover:bg-themeRed-hover text-white shadow-xl hover:shadow-2xl border-2 border-white/40 flex items-center justify-center transition-all duration-300 group active:scale-95 ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 scale-75 translate-y-6 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5] transform group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};

export default ScrollToTopButton;
