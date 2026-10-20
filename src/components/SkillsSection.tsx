import React from 'react';
import { Layers, CheckCircle, Check, Sparkles } from 'lucide-react';
import { FigmaIcon, CodaIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export function SkillsSection() {
  const { toolsSection } = PORTFOLIO_DATA.profile;
  const { language, t } = useLanguage();

  return (
    <section id="keahlian" className="py-20 bg-slate-50/60 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-2">
            {t('skills.kicker')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {t('skills.heading')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* 2 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Pillar 1: Figma */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center text-[10px] font-bold tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 px-2.5 py-1 rounded-full uppercase">
                  {toolsSection.figma.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">Design Pillar</span>
              </div>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50/80 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 flex items-center justify-center shrink-0">
                  <FigmaIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                    {toolsSection.figma.title}
                  </h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">UI/UX Design Engine</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {t('skills.figmaDesc')}
              </p>
            </div>

            {/* Figma Skills Breakdown */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-3">
              {toolsSection.figma.skills.map((skill) => {
                const getBadgeColor = (lvl: string) => {
                  switch (lvl) {
                    case 'Expert':
                      return 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800';
                    case 'Advanced':
                      return 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800';
                    case 'Proficient':
                      return 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800';
                    case 'Intermediate':
                      return 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800';
                    default:
                      return 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700';
                  }
                };

                return (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between text-xs py-1"
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className={`font-mono text-[11px] font-semibold border rounded px-2.5 py-0.5 ${getBadgeColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pillar 2: Coda */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center text-[10px] font-bold tracking-wider text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800 px-2.5 py-1 rounded-full uppercase">
                  {toolsSection.coda.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">Ops Pillar</span>
              </div>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50/80 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-900 flex items-center justify-center shrink-0">
                  <CodaIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                    {toolsSection.coda.title}
                  </h3>
                  <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold">{t('skills.codaSub')}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {t('skills.codaDesc')}
              </p>
            </div>

            {/* Coda Skills Breakdown */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-3">
              {toolsSection.coda.skills.map((skill) => {
                const getBadgeColor = (lvl: string) => {
                  switch (lvl) {
                    case 'Expert':
                      return 'text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800';
                    case 'Advanced':
                      return 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/80 dark:border-indigo-800';
                    case 'Proficient':
                      return 'text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800';
                    case 'Intermediate':
                      return 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border-amber-200/80 dark:border-amber-800';
                    default:
                      return 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700';
                  }
                };

                return (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between text-xs py-1"
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <span className={`font-mono text-[11px] font-semibold border rounded px-2.5 py-0.5 ${getBadgeColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Supporting Stack Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 p-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white mr-2">
                Supporting Stack
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                FigJam (Brainstorming), Notion, Jira, Linear, GitHub, HTML/CSS Basics
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-800">
              <Check className="w-3.5 h-3.5" /> Scrum & Kanban
            </span>
            <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-800">
              <Check className="w-3.5 h-3.5" /> Design QA & UAT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
