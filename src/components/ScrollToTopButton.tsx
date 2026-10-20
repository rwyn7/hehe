import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ScrollToTopProps {
  lang?: 'id' | 'en';
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ lang }) => {
  const { language: currentLang } = useLanguage();
  const activeLang = lang || currentLang || 'id';
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show toggle when scrolled past 350px
      if (currentScrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Compute scroll percentage
      if (totalScrollableHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / totalScrollableHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG circular progress calculation
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  const tooltipText = activeLang === 'id' ? 'Kembali ke Atas' : 'Back to Top';

  return (
    <div
      className={`fixed bottom-6 right-6 sm:right-6.5 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Tooltip on hover */}
        <div
          role="tooltip"
          className={`absolute bottom-full right-0 mb-2 px-2.5 py-1 text-xs font-medium text-slate-800 dark:text-slate-100 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-lg shadow-lg border border-slate-200/80 dark:border-slate-800 whitespace-nowrap transition-all duration-200 pointer-events-none ${
            showTooltip ? 'opacity-100 -translate-y-0.5' : 'opacity-0 translate-y-1'
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span>{tooltipText}</span>
            <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-semibold">
              {Math.round(scrollProgress)}%
            </span>
          </div>
          {/* Tooltip caret */}
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white dark:bg-slate-900 border-b border-r border-slate-200/80 dark:border-slate-800 rotate-45" />
        </div>

        {/* Scroll To Top Toggle Button */}
        <button
          type="button"
          onClick={handleScrollToTop}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          aria-label={tooltipText}
          className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          {/* Circular SVG Scroll Progress Indicator */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 44 44"
          >
            {/* Background ring */}
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="text-slate-200/60 dark:text-slate-800/80 stroke-current"
              strokeWidth="2.5"
              fill="transparent"
            />
            {/* Progress ring with gradient/accent color */}
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="text-blue-600 dark:text-blue-400 stroke-current transition-all duration-150 ease-out"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Arrow Up Icon */}
          <ArrowUp className="w-4.5 h-4.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

export const ScrollToTopButton = ScrollToTop;
export default ScrollToTop;
