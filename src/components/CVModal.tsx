import React, { useState } from 'react';
import { X, Download, Mail, Phone, MapPin, CheckCircle2, FileCheck, Award, Briefcase, GraduationCap, Cpu, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, getLocalizedPortfolioData } from '../data/portfolioData';
import { generateAndDownloadCVPdf } from '../utils/generateCVPdf';
import { useLanguage } from '../context/LanguageContext';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const { profile, experiences, projects } = getLocalizedPortfolioData(language);

  const handleDownloadPDF = () => {
    generateAndDownloadCVPdf(language);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:px-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {t('cv.title')}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                {t('cv.subtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Primary Download PDF Button */}
            <button
              onClick={handleDownloadPDF}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer ${
                downloadSuccess
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white hover:shadow-md'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <FileCheck className="w-4 h-4 text-emerald-200" />
                  <span>{t('cv.downloadedBtn')}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{t('cv.downloadBtn')}</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Tutup pratinjau CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Indicator Banner if downloaded */}
        {downloadSuccess && (
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-200 dark:border-emerald-800 px-6 py-2.5 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                {language === 'en' ? (
                  <>Document <strong>CV_Herwin_Herdiansyah_UIUX_PM.pdf</strong> (1-page format) was generated and downloaded.</>
                ) : (
                  <>Dokumen <strong>CV_Herwin_Herdiansyah_UIUX_PM.pdf</strong> (format 1 halaman) berhasil dibuat dan diunduh.</>
                )}
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-100/80 dark:bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-300/60 dark:border-emerald-700 shrink-0">
              {t('cv.downloadedBtn')}
            </span>
          </div>
        )}

        {/* CV Document Preview Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900">
          
          {/* Document Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white uppercase tracking-tight">
                  {profile.name}
                </h1>
                <div className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                  {profile.roles}
                </div>
              </div>

              <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full self-start sm:self-auto">
                ● {t('cv.available')}
              </div>
            </div>

            <div className="flex flex-wrap gap-y-1 gap-x-5 text-xs text-slate-600 pt-1 font-medium">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                {profile.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                {profile.whatsapp}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {profile.location}
              </span>
            </div>
          </div>

          {/* 1. Tentang Saya */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <span>{t('cv.secSummary')}</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {profile.heroBio}
            </p>
          </div>

          {/* 2. Pengalaman Kerja */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <span>{t('cv.secExp')}</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </h2>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{exp.role}</span>
                      <span className="text-blue-600 font-semibold"> — {exp.company}</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tags.map((t) => (
                      <span key={t} className="text-[10px] bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Portofolio & Studi Kasus */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <span>{t('cv.secProj')}</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl border border-slate-200 space-y-2 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mb-1">
                      <span className="font-semibold text-blue-600">{proj.tag}</span>
                      <span>{proj.year}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">{proj.title}</h4>
                    <p className="text-[11px] text-slate-600 line-clamp-2 mt-1 leading-snug">
                      {proj.focus}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 text-[10px] text-emerald-700 font-bold">
                    {proj.metrics[0].label}: {proj.metrics[0].value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Pendidikan Formal & Program Google */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pendidikan */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-600 flex items-center gap-2">
                <span>{t('cv.secEdu')}</span>
                <div className="h-px bg-slate-200 flex-1"></div>
              </h2>

              <div className="space-y-3">
                {profile.aboutSection.education.map((edu) => (
                  <div key={edu.degree} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                    <div className="flex justify-between items-start font-bold text-slate-900">
                      <span>{edu.degree}</span>
                      <span className="text-slate-400 font-normal text-[11px]">{edu.level}</span>
                    </div>
                    <div className="text-blue-600 text-[11px] font-semibold">{edu.institution}</div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Programs */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-600 flex items-center gap-2">
                <span>{t('cv.secGoogle')}</span>
                <div className="h-px bg-slate-200 flex-1"></div>
              </h2>

              <div className="space-y-3">
                {profile.aboutSection.googleHighlights.map((g) => (
                  <div key={g.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-slate-900">{g.title}</span>
                      <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                        {g.badge}
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{g.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 5. Keahlian & Ekosistem Tools */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider text-blue-600 flex items-center gap-2">
              <span>{t('cv.secSkills')}</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1.5">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  UI/UX Design (Figma Core)
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Auto-Layout (Expert), Interactive Micro-Interactions & Handoff (Advanced), Atomic Design System & Variable Tokens (Proficient).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-100 space-y-1.5">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-700" />
                  Project Management (Coda Ecosystem)
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  PRD, Scope Canvas & User Stories (Advanced), Relational Tables & Sprint Gantt Charts (Proficient), Milestone Dashboard (Intermediate).
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Bar with Quick Download CTA */}
        <div className="p-4 sm:px-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            {t('cv.footerNotice')}
          </div>

          <button
            onClick={handleDownloadPDF}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer ${
              downloadSuccess
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow'
            }`}
          >
            {downloadSuccess ? (
              <>
                <FileCheck className="w-4 h-4 text-emerald-200" />
                <span>{t('cv.downloadedBtn')}</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>{t('cv.downloadBtn')}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
