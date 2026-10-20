import React from 'react';
import { HeheLogo } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { profile } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand - Click to scroll to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-3.5 text-left cursor-pointer group"
            title={language === 'en' ? 'Click to scroll to top' : 'Klik untuk kembali ke atas'}
          >
            <img
              src={profile.footerLogoUrl || profile.logoUrl || '/logo-herwin.png'}
              alt="Logo Herwin"
              className="h-8 w-auto max-h-8 object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.footer-logo-fallback') as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="footer-logo-fallback hidden">
              <HeheLogo className="h-7 w-auto text-blue-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xs tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {profile.roles}
              </span>
            </div>
          </button>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#tentang" className="hover:text-white transition-colors">
              {t('nav.about')}
            </a>
            <a href="#keahlian" className="hover:text-white transition-colors">
              {t('nav.skills')}
            </a>
            <a href="#portofolio" className="hover:text-white transition-colors">
              {t('nav.portfolio')}
            </a>
            <a href="#pengalaman" className="hover:text-white transition-colors">
              {t('nav.experience')}
            </a>
            <a
              href={`https://wa.me/${profile.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/herwin-herdiansyah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`https://instagram.com/${profile.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>

        </div>

        {/* Bottom Row: Copyright & Design System */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
          </div>

          <div className="flex items-center gap-2">
            <span>{t('footer.builtWith')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
