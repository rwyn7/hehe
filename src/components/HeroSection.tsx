import React, { useState } from 'react';
import { ArrowDown, Eye, FileText, CheckCircle2, Sparkles, Cpu, GraduationCap, Layers, Kanban } from 'lucide-react';
import { FigmaIcon, CodaIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenCVModal: () => void;
}

export function HeroSection({ onOpenCVModal }: HeroSectionProps) {
  const { profile } = PORTFOLIO_DATA;
  const { language, t } = useLanguage();
  const [activeRoleFocus, setActiveRoleFocus] = useState<'designer' | 'pm' | 'synergy'>('synergy');

  return (
    <section className="relative pt-12 pb-20 md:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 overflow-hidden transition-colors duration-300">
      {/* Primary Engineering & Design Grid Background (40px squares) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(203, 213, 225, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(203, 213, 225, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 75% at 50% 25%, black 45%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 50% 25%, black 45%, transparent 95%)',
        }}
      />

      {/* Major Grid Accent Lines (160px squares) with subtle blue tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px',
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 30%, black 35%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 30%, black 35%, transparent 90%)',
        }}
      />

      {/* Ambient Gradient Glows for depth & aesthetic contrast */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] max-w-full h-80 bg-gradient-to-tr from-blue-200/40 dark:from-blue-600/15 via-sky-100/30 dark:via-sky-500/10 to-transparent blur-3xl pointer-events-none -z-0 rounded-full" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/35 dark:bg-blue-600/10 blur-3xl rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-slate-100/60 dark:bg-slate-800/40 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.12]">
              {t('hero.h1')}
              <br />
              <span className="text-blue-600 dark:text-blue-400 font-extrabold">
                {t('hero.h2')}
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              {language === 'en' ? (
                <>
                  Hello, I'm <strong className="font-semibold text-slate-900 dark:text-white">Herwin Herdiansyah</strong>. Bridging the aesthetic precision of a{' '}
                  <strong className="font-semibold text-blue-600 dark:text-blue-400">UI/UX Designer</strong> with the operational rigor of an Agile{' '}
                  <strong className="font-semibold text-slate-900 dark:text-white">Project Manager</strong>. Aligning business vision, user research, and technology team workflows seamlessly.
                </>
              ) : (
                <>
                  Halo, saya <strong className="font-semibold text-slate-900 dark:text-white">Herwin Herdiansyah</strong>. Menggabungkan ketelitian estetika seorang{' '}
                  <strong className="font-semibold text-blue-600 dark:text-blue-400">UI/UX Designer</strong> dengan ketegasan operasional seorang{' '}
                  <strong className="font-semibold text-slate-900 dark:text-white">Project Manager</strong>. Menghubungkan visi bisnis, riset kebutuhan pengguna, dan manajemen alur kerja tim teknologi secara presisi.
                </>
              )}
            </p>

            {/* Credentials Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{language === 'en' ? 'Google Skills Arcade 2026 Facilitator' : 'Fasilitator Google Skills Arcade 2026'}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>{language === 'en' ? 'Google Developer Program GEAR (AI Focus)' : 'Google Developer Program GEAR (AI Focus)'}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 shadow-2xs">
                <GraduationCap className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>{language === 'en' ? 'Informatics Management - Poltek LP3I' : 'D3 Manajemen Informatika - Poltek LP3I'}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                title={t('nav.cvTooltip')}
              >
                <Eye className="w-4 h-4" />
                <span>{t('hero.ctaCV')}</span>
              </button>

              <a
                href="#portofolio"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-sm font-semibold transition-all hover:border-slate-400 dark:hover:border-slate-600"
              >
                <span>{t('hero.ctaPortfolio')}</span>
                <ArrowDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Hero Capability Stack Widget */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-700">
              
              {/* Card Window Header */}
              <div className="bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 px-4 py-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    herwin-capability-stack.config
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800">
                  ● ACTIVE
                </span>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* 1. UI/UX Designer Role */}
                <div
                  onClick={() => setActiveRoleFocus('designer')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeRoleFocus === 'designer'
                      ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700 ring-2 ring-blue-400/20 shadow-xs'
                      : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/90 dark:border-slate-800 hover:bg-blue-50/40 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-xs font-bold text-slate-900 dark:text-white">
                          UI/UX Designer Role
                        </h2>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {language === 'en' ? 'Design Thinking, Prototyping, Design System' : 'Design Thinking, Prototyping, Design System'}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-700/60 shrink-0">
                      <FigmaIcon className="w-2.5 h-2.5" />
                      Figma Core
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      User Flow
                    </span>
                    <span className="text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      Wireframing
                    </span>
                    <span className="text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      Design Token & Auto-Layout
                    </span>
                  </div>
                </div>

                {/* Connector Badge */}
                <div className="flex items-center justify-center -my-1 relative z-10">
                  <button
                    onClick={() => setActiveRoleFocus('synergy')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                      activeRoleFocus === 'synergy'
                        ? 'bg-lime-300 text-slate-900 border-lime-400 shadow-xs ring-2 ring-lime-400/30'
                        : 'bg-lime-200/90 dark:bg-lime-400/20 text-slate-800 dark:text-lime-300 border-lime-300 dark:border-lime-500/30 hover:bg-lime-300'
                    }`}
                  >
                    <span>⇄</span>
                    <span>{language === 'en' ? 'Cross-Functional Synergy' : 'Cross-Functional Synergy'}</span>
                  </button>
                </div>

                {/* 2. Project Manager Role */}
                <div
                  onClick={() => setActiveRoleFocus('pm')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    activeRoleFocus === 'pm'
                      ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600 ring-2 ring-slate-400/20 shadow-xs'
                      : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/90 dark:border-slate-800 hover:bg-slate-100/70 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-900/10 dark:bg-slate-700/30 flex items-center justify-center shrink-0">
                        <Kanban className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                      </div>
                      <div>
                        <h2 className="text-xs font-bold text-slate-900 dark:text-white">
                          Project Manager Role
                        </h2>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          {language === 'en' ? 'Agile/Scrum, Roadmap, Scope & Resource Delivery' : 'Agile/Scrum, Roadmap, Scope & Resource Delivery'}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-700/60 shrink-0">
                      <CodaIcon className="w-2.5 h-2.5" />
                      Coda Ecosystem
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      Agile Sprint
                    </span>
                    <span className="text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      PRD & User Stories
                    </span>
                    <span className="text-[10px] bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      Data & Milestone Tracking
                    </span>
                  </div>
                </div>

                {/* Metrics Bar */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-800/50">
                    <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">
                      100%
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                      {language === 'en' ? 'Handoff Accuracy' : 'Kesesuaian Desain'}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-800/50">
                    <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      On-Time
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                      Sprint Delivery
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50/80 dark:bg-slate-800/50">
                    <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      3+ Proyek
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                      {language === 'en' ? 'Enterprise & Apps' : 'Skala Enterprise & App'}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
