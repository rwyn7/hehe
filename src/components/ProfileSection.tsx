import React from 'react';
import { GraduationCap, Sparkles, Users, Cpu, Quote } from 'lucide-react';
import { GoogleGIcon } from './Icons';
import { PORTFOLIO_DATA, getLocalizedAbout } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export function ProfileSection() {
  const { language, t } = useLanguage();
  const aboutSection = getLocalizedAbout(language);

  return (
    <section id="tentang" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-2">
            {t('about.kicker')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            {t('about.heading')}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('about.lead')}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Tentang & Latar Belakang Pendidikan */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'About Herwin Herdiansyah' : 'Tentang Herwin Herdiansyah'}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('about.p2')}
              </p>
            </div>

            {/* Education Sub-section */}
            <div className="pt-4">
              <h4 className="text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-3">
                {language === 'en' ? 'EDUCATIONAL BACKGROUND & LICENSES' : 'LATAR BELAKANG PENDIDIKAN & LISENSI'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LP3I */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{aboutSection.education[0].level}</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    {aboutSection.education[0].degree}
                  </h5>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {aboutSection.education[0].institution}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {aboutSection.education[0].description}
                  </p>
                </div>

                {/* SMAN 14 Garut */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 text-xs font-semibold mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{aboutSection.education[1].level}</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    {aboutSection.education[1].degree}
                  </h5>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {aboutSection.education[1].institution}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {aboutSection.education[1].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rekam Jejak Unggulan & Filosofi */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Header info */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-amber-600 text-xs font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Flagship Track Record' : 'Rekam Jejak Unggulan'}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t('about.googleTitle')}
              </h3>
            </div>

            {/* Google Items */}
            <div className="space-y-3.5">
              
              {/* Item 1: Facilitator */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-100/80 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/50 border border-amber-300/60 dark:border-amber-700/60 rounded px-1.5 py-0.5 inline-block">
                    {aboutSection.googleHighlights[0].badge}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {aboutSection.googleHighlights[0].title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {aboutSection.googleHighlights[0].description}
                  </p>
                </div>
              </div>

              {/* Item 2: GEAR */}
              <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center shrink-0 font-mono text-[11px] font-bold border border-slate-800 dark:border-slate-700">
                  01
                  <br />
                  10
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100/70 dark:bg-blue-950/50 border border-blue-300/60 dark:border-blue-700/60 rounded px-1.5 py-0.5 inline-block">
                    {aboutSection.googleHighlights[1].badge}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {aboutSection.googleHighlights[1].title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {aboutSection.googleHighlights[1].description}
                  </p>
                </div>
              </div>

            </div>

            {/* Dark Quote Card: Filosofi Kerja */}
            <div className="p-5 rounded-2xl bg-slate-950 dark:bg-slate-900 text-white shadow-md border border-slate-800/80 relative overflow-hidden">
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold tracking-wider uppercase mb-3">
                <Quote className="w-3.5 h-3.5 text-blue-400 rotate-180" />
                <span>{language === 'en' ? 'WORK PHILOSOPHY' : 'FILOSOFI KERJA'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed italic">
                {aboutSection.philosophyQuote}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
