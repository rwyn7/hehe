import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { InterfaceSimulationGallery } from './InterfaceSimulationGallery';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function CaseStudyModal({ project, onClose, onOpenContact }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'prototype'>('overview');
  const { language } = useLanguage();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-950 border-b border-slate-200/90 dark:border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                {project.tag}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500 font-medium font-mono">
                {project.year}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.focus}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 sm:px-8 border-b border-slate-200 dark:border-slate-800 flex gap-4 text-xs font-semibold bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {language === 'en' ? 'Overview & Solution' : 'Ringkasan & Solusi'}
          </button>
          <button
            onClick={() => setActiveTab('prototype')}
            className={`py-3.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'prototype'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {language === 'en' ? 'Interface Simulation' : 'Simulasi Antarmuka'}
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900">
          
          {activeTab === 'overview' && (
            <>
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-center"
                  >
                    <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                      {metric.value}
                    </div>
                    <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Role & Duration Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700">
                <div>
                  <span className="text-slate-400 dark:text-slate-400 font-medium block">
                    {language === 'en' ? 'Role in Project:' : 'Peran dalam Proyek:'}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">{project.role}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-400 font-medium block">
                    {language === 'en' ? 'Project Duration:' : 'Durasi Kerja:'}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">{project.duration}</span>
                </div>
              </div>

              {/* Context & Problem */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  {language === 'en' ? '1. Background & Core Challenges' : '1. Latar Belakang & Tantangan Utama'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.overview}
                </p>
                <div className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/60 text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                  <strong>{language === 'en' ? 'User Pain Point:' : 'Pain Point Pengguna:'}</strong> {project.problem}
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  {language === 'en' ? '2. Design Approach & Solution' : '2. Pendekatan Desain & Solusi'}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  {language === 'en' ? '3. Key Artifacts & Deliverables' : '3. Artefak & Hasil Kerja Utama'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyDeliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'prototype' && (
            <InterfaceSimulationGallery project={project} />
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:px-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
            {language === 'en'
              ? 'Interested in viewing full Figma prototypes or Coda PRD workspaces?'
              : 'Ingin melihat prototipe Figma lengkap atau PRD proyek ini?'}
          </span>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{language === 'en' ? 'Discuss a Similar Project' : 'Diskusikan Proyek Serupa'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
