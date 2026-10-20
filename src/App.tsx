/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CVModal } from './components/CVModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Project } from './data/portfolioData';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('kontak');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
          {/* Top Navbar */}
          <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

          {/* Main Content Sections */}
          <main>
            {/* Hero Section */}
            <HeroSection onOpenCVModal={() => setIsCVModalOpen(true)} />

            {/* 01. Profil Profesional */}
            <ProfileSection />

            {/* 02. Ekosistem Kerja (Tools & Keahlian) */}
            <SkillsSection />

            {/* 03. Portofolio Terpilih (Studi Kasus) */}
            <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

            {/* 04. Perjalanan Karir (Pengalaman) */}
            <ExperienceSection />

            {/* 05. Terhubung (Kontak & Formulir Pesan) */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating On-Top Click Button */}
          <ScrollToTopButton />

          {/* Interactive Case Study Modal */}
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenContact={scrollToContact}
          />

          {/* Interactive CV & Ringkasan Portofolio Modal */}
          <CVModal
            isOpen={isCVModalOpen}
            onClose={() => setIsCVModalOpen(false)}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
