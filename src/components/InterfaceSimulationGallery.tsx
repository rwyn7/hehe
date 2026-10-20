import React, { useState, useEffect } from 'react';
import {
  Image as ImageIcon,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';
import { Project } from '../data/portfolioData';
import { INITIAL_PROJECT_SCREENS, ProjectScreen } from '../data/mockScreens';
import { useLanguage } from '../context/LanguageContext';

interface InterfaceSimulationGalleryProps {
  project: Project;
}

export function InterfaceSimulationGallery({ project }: InterfaceSimulationGalleryProps) {
  const { language } = useLanguage();

  // Curated authentic screens (> 2 screens per project)
  const screens: ProjectScreen[] = INITIAL_PROJECT_SCREENS[project.id] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project.id]);

  // Ensure index stays valid
  const activeScreen = screens[currentIndex] || screens[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') setIsLightboxOpen(false);
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, screens.length]);

  return (
    <div className="space-y-6">
      {/* Header Info & Screen Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {language === 'en' ? 'Interface Simulation' : 'Simulasi Antarmuka Interaktif'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 font-mono">
              {screens.length} {language === 'en' ? 'Authentic Designs (.PNG)' : 'Desain Asli (.PNG)'}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {language === 'en'
              ? 'Browse authentic full-scale design screens (.PNG) for this case study.'
              : 'Jelajahi tangkapan layar desain antarmuka asli (.PNG) berskala penuh untuk studi kasus ini.'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{language === 'en' ? 'Official Design Archive' : 'Arsip Desain Asli'}</span>
        </div>
      </div>

      {/* Main Interactive Screen Showcase */}
      {activeScreen && (
        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl text-white">
          
          {/* Top Window Chrome / Bar */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-mono text-[11px] text-slate-400">
                {activeScreen.badge} • Format: <strong className="text-white">.PNG</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400 font-mono">
                {currentIndex + 1} / {screens.length}
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                title={language === 'en' ? 'View Fullscreen' : 'Perbesar Tampilan Penuh'}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Screen Image Display Area */}
          <div
            className="relative bg-slate-900/90 flex items-center justify-center p-2 sm:p-4 min-h-[340px] sm:min-h-[420px] max-h-[540px] overflow-hidden group select-none cursor-pointer"
            onClick={() => setIsLightboxOpen(true)}
          >
            {activeScreen.imageUrl ? (
              <img
                src={activeScreen.imageUrl}
                alt={activeScreen.title}
                className="max-h-[500px] w-auto max-w-full rounded-lg shadow-2xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
            ) : activeScreen.mockupSvg ? (
              <img
                src={activeScreen.mockupSvg}
                alt={activeScreen.title}
                className="max-h-[500px] w-auto max-w-full rounded-lg shadow-2xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
              />
            ) : (
              <div className="p-8 text-center text-slate-500">
                <ImageIcon className="w-12 h-12 mx-auto mb-2 text-slate-600" />
                <p>Tidak ada gambar tersedia</p>
              </div>
            )}

            {/* Navigation Arrow Overlays */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur border border-slate-700/80 shadow-lg opacity-80 hover:opacity-100 transition-all cursor-pointer"
              aria-label="Previous screen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur border border-slate-700/80 shadow-lg opacity-80 hover:opacity-100 transition-all cursor-pointer"
              aria-label="Next screen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Click to zoom badge */}
            <div className="absolute bottom-4 right-4 bg-slate-950/80 text-white text-[11px] px-2.5 py-1 rounded-md backdrop-blur border border-slate-700/60 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'en' ? 'Click to zoom' : 'Klik untuk perbesar'}</span>
            </div>
          </div>

          {/* Screen Description Card */}
          <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 space-y-1.5 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm sm:text-base font-bold text-white">
                {activeScreen.title}
              </h4>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                ● {activeScreen.subtitle}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {activeScreen.description}
            </p>
          </div>

        </div>
      )}

      {/* Thumbnail Navigation Strip (>2 authentic images visible at all times) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
          <span>
            {language === 'en'
              ? 'Gallery Thumbnails (Select to view)'
              : 'Pilihan Layar Desain (Pilih untuk melihat)'}
          </span>
          <span className="text-slate-400 font-normal">
            {screens.length} {language === 'en' ? 'screens' : 'layar desain'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
          {screens.map((screen, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={screen.id}
                onClick={() => setCurrentIndex(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer group flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                {/* Thumbnail Preview Area */}
                <div className="w-full h-24 rounded-lg bg-slate-900 overflow-hidden flex items-center justify-center mb-2 border border-slate-100 relative">
                  {screen.imageUrl ? (
                    <img
                      src={screen.imageUrl}
                      alt={screen.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : screen.mockupSvg ? (
                    <img
                      src={screen.mockupSvg}
                      alt={screen.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <ImageIcon className="w-6 h-6 text-slate-600" />
                  )}

                  <span className="absolute bottom-1 right-1 bg-slate-950/80 text-[9px] text-white font-mono px-1.5 py-0.5 rounded font-bold">
                    PNG
                  </span>
                </div>

                {/* Thumbnail Label */}
                <div>
                  <div className="text-[11px] font-bold text-slate-900 truncate">
                    {idx + 1}. {screen.title}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {screen.format} • {screen.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && activeScreen && (
        <div
          className="fixed inset-0 z-60 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Topbar */}
          <div
            className="flex items-center justify-between text-white pb-3 border-b border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-sm font-bold">{activeScreen.title}</h3>
              <p className="text-xs text-slate-400 font-mono">
                {activeScreen.badge} • Format: .PNG ({currentIndex + 1} dari {screens.length})
              </p>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
              aria-label="Tutup pratinjau penuh"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Image */}
          <div
            className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {activeScreen.imageUrl ? (
              <img
                src={activeScreen.imageUrl}
                alt={activeScreen.title}
                className="max-h-[82vh] max-w-full rounded-xl shadow-2xl object-contain border border-slate-800"
              />
            ) : activeScreen.mockupSvg ? (
              <img
                src={activeScreen.mockupSvg}
                alt={activeScreen.title}
                className="max-h-[82vh] max-w-full rounded-xl shadow-2xl object-contain border border-slate-800"
              />
            ) : null}
          </div>

          {/* Lightbox Bottom Controls */}
          <div
            className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{language === 'en' ? 'Previous' : 'Sebelumnya'}</span>
            </button>

            <span className="font-mono text-[11px] text-slate-400 text-center hidden sm:inline">
              {language === 'en'
                ? 'Use Left/Right arrow keys or Esc to close'
                : 'Gunakan tombol panah kiri / kanan keyboard untuk navigasi, Esc untuk menutup'}
            </span>

            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{language === 'en' ? 'Next' : 'Selanjutnya'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
