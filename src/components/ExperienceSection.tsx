import React from 'react';
import { PORTFOLIO_DATA, getLocalizedExperiences } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export function ExperienceSection() {
  const { language, t } = useLanguage();
  const experiences = getLocalizedExperiences(language);

  return (
    <section id="pengalaman" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-2">
            {t('experience.kicker')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            {t('experience.heading')}
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 p-6 sm:p-7 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* Left Side: Period, Company, Role, Desc */}
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    <span
                      className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded border ${
                        idx === 0
                          ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                          : idx === 1
                          ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white">
                    {exp.role}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>

                {/* Right Side: Skill / Focus Tags */}
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-1.5 shrink-0 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded px-2.5 py-0.5 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
