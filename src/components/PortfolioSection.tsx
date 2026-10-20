import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project, getLocalizedProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const { language, t } = useLanguage();
  const projects = getLocalizedProjects(language);

  const getTagClasses = (tagColor: Project['tagColor']) => {
    switch (tagColor) {
      case 'red':
        return 'bg-rose-50 text-rose-700 border-rose-200/80';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 'blue':
        return 'bg-blue-50 text-blue-700 border-blue-200/80';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="portofolio" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-2">
              {t('portfolio.kicker')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              {t('portfolio.heading')}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {t('portfolio.subtitle')}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold shrink-0 shadow-2xs self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{language === 'en' ? 'Click card to view detailed case study' : 'Klik kartu untuk membuka modal studi kasus'}</span>
          </div>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-blue-400/80 dark:hover:border-blue-500 p-6 sm:p-7 shadow-2xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getTagClasses(
                      project.tagColor
                    )}`}
                  >
                    {project.tag}
                  </span>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {project.year}
                  </span>
                </div>

                {/* Title & Focus */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3.5">
                  {project.focus}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags & Link Arrow */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.pillTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white text-slate-400 dark:text-slate-300 flex items-center justify-center shrink-0 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
