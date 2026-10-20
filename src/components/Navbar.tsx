import React, { useState } from 'react';
import { Eye, MapPin, Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { HeheLogo } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export function Navbar({ onOpenCVModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: t('nav.about'), href: '#tentang' },
    { label: t('nav.skills'), href: '#keahlian' },
    { label: t('nav.portfolio'), href: '#portofolio' },
    { label: t('nav.experience'), href: '#pengalaman' },
    { label: t('nav.contact'), href: '#kontak' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      {/* Top Status Bar */}
      <div className="bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800/80 text-xs py-1.5 px-4 sm:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="text-slate-600 dark:text-slate-300 font-medium hidden sm:inline">
              {language === 'en'
                ? 'Available for Freelance Projects & Tech Career Opportunities'
                : profile.availability}
            </span>
            <span className="text-slate-600 dark:text-slate-300 font-medium sm:hidden">
              {t('banner.availability')}
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between">
        {/* Brand Lockup (PNG Image format) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group cursor-pointer"
          aria-label="Beranda"
          title={language === 'en' ? 'Scroll to top' : 'Kembali ke atas'}
        >
          <img
            src={profile.logoUrl || '/logo-herwin.png'}
            alt="Logo Herwin"
            className="h-8 w-auto max-h-8 object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              // Fallback jika file PNG belum dimuat
              (e.currentTarget as HTMLElement).style.display = 'none';
              const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback') as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div className="logo-fallback hidden">
            <HeheLogo className="h-8 w-auto text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-105" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Theme Toggle, On-Click Language Switcher, CV Button */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle Button with On-Click Animated Transition */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-2xs cursor-pointer group active:scale-90"
            title={
              theme === 'dark'
                ? language === 'en'
                  ? 'Switch to Light Mode'
                  : 'Ganti ke Mode Terang'
                : language === 'en'
                ? 'Switch to Dark Mode'
                : 'Ganti ke Mode Gelap'
            }
            aria-label="Toggle Theme"
          >
            <div className="relative w-4 h-4 flex items-center justify-center">
              <Sun
                className={`w-4 h-4 text-amber-500 transition-all duration-300 transform absolute ${
                  theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
              />
              <Moon
                className={`w-4 h-4 text-blue-400 transition-all duration-300 transform absolute ${
                  theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`}
              />
            </div>
          </button>

          {/* Bilingual Switcher: On-Click Only */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-xs font-bold transition-all duration-300 shadow-2xs cursor-pointer active:scale-95 group"
            title={
              language === 'id'
                ? 'Klik untuk beralih ke English'
                : 'Click to switch to Bahasa Indonesia'
            }
            aria-label="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:rotate-45" />
            <span className="font-extrabold tracking-wider">{language.toUpperCase()}</span>
          </button>

          {/* Lihat CV Button */}
          <button
            onClick={onOpenCVModal}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs hover:shadow transition-all cursor-pointer whitespace-nowrap active:scale-95"
            title={t('nav.cvTooltip')}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('nav.viewCV')}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-xl cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>{t('nav.viewCV')}</span>
            </button>

            {/* Mobile Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-90"
              title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4 text-blue-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>

            {/* Mobile Language Switcher Button (On-Click) */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-extrabold cursor-pointer active:scale-95"
              title="Ganti Bahasa"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
