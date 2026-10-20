import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  id: {
    // Top banner
    'banner.title': 'FASILITATOR RESMI GOOGLE SKILLS ARCADE 2026 & ACTIVE PARTICIPANT GOOGLE DEVELOPER PROGRAM GEAR',
    'banner.availability': 'Tersedia untuk Freelance & Full-time',

    // Nav
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.portfolio': 'Portofolio',
    'nav.experience': 'Pengalaman',
    'nav.contact': 'Kontak',
    'nav.viewCV': 'Lihat CV',
    'nav.cvTooltip': 'Lihat Pratinjau CV Herwin Herdiansyah',

    // Hero
    'hero.badge': 'DUAL SYNERGY: HUMAN-CENTERED DESIGN + AGILE EXECUTION',
    'hero.h1': 'Merancang Antarmuka Intuitif.',
    'hero.h2': 'Memimpin Eksekusi Hingga Tuntas.',
    'hero.bio': 'Halo, saya Herwin Herdiansyah. Menggabungkan ketelitian estetika seorang UI/UX Designer dengan ketegasan operasional seorang Project Manager. Menghubungkan visi bisnis, riset kebutuhan pengguna, dan manajemen alur kerja tim teknologi secara presisi.',
    'hero.ctaCV': 'Lihat CV',
    'hero.ctaPortfolio': 'Eksplorasi Studi Kasus',
    'hero.ctaWhatsApp': 'Konsultasi Cepat (WhatsApp)',
    'hero.stat1': 'Rata-rata Konversi Checkout',
    'hero.stat2': 'On-time Agile Delivery',
    'hero.stat3': 'Dev Handoff Accuracy',
    'hero.activePill': 'Aktif Berkontribusi di Komunitas Google Developer Indonesia',

    // Profile / About
    'about.kicker': '01 / PROFIL PROFESIONAL',
    'about.heading': 'Menghubungkan Empati Desain & Ketepatan Eksekusi',
    'about.lead': 'Saya percaya bahwa produk digital terbaik lahir ketika riset kebutuhan pengguna (Design Thinking) dan ritme delivery tim rekayasa perangkat lunak (Agile Sprint) berjalan dalam satu harmoni yang selaras.',
    'about.p1': 'Berangkat dari latar belakang D3 Manajemen Informatika di Politeknik LP3I dan pengalaman kepemimpinan di industri digital, saya membiasakan diri bekerja secara sistematis: merancang wireframe dan design token di Figma dengan standar developer-ready, sekaligus menyusun Product Requirement Documents (PRD) dan roadmap interaktif di Coda.',
    'about.p2': 'Sebagai Fasilitator Google Skills Arcade 2026 dan peserta aktif Google Developer Program GEAR, saya terus mengasah keahlian pada cloud, machine learning, dan tata kelola software modern demi menghadirkan solusi digital yang tidak hanya memikat secara visual, namun juga teruji secara performa dan bisnis.',
    'about.googleTitle': 'Program & Pengakuan Google',
    'about.eduTitle': 'Pendidikan Formal',
    'about.metricsTitle': 'Metrik Kunci & Nilai Tambah',

    // Skills
    'skills.kicker': '02 / EKOSISTEM KERJA',
    'skills.heading': 'Tools Unggulan & Keahlian Inti',
    'skills.subtitle': 'Dua pilar teknologi utama yang saya gunakan sehari-hari untuk mendesain antarmuka dan memanajemeni jalannya proyek secara terukur.',
    'skills.figmaSub': 'UI/UX Design Engine',
    'skills.figmaDesc': 'Andalan utama dalam merealisasikan UI/UX Design dari tahap sketsa kasar, wireframing, high-fidelity mockup, interactive component prototyping, hingga penataan Design System berbasis token yang scalable.',
    'skills.codaSub': 'Project Management & Data Hub',
    'skills.codaDesc': 'Ekosistem terpusat untuk Project Management & Data Hub. Digunakan untuk merancang Product Requirement Docs (PRD), Agile Sprint Tracking, Roadmap interaktif, alokasi timeline, dan otomatisasi dokumentasi tim.',
    'skills.stackTitle': 'Supporting Stack',
    'skills.scrum': 'Scrum & Kanban',
    'skills.qa': 'Design QA & UAT',

    // Portfolio
    'portfolio.kicker': '03 / PORTOFOLIO TERPILIH',
    'portfolio.heading': 'Studi Kasus Desain & Manajemen Proyek',
    'portfolio.subtitle': 'Rangkuman proyek nyata dengan fokus pada human-centered design, pemecahan masalah pengguna, dan kolaborasi agile.',
    'portfolio.all': 'Semua Kategori',
    'portfolio.btnDetail': 'Pelajari Studi Kasus',
    'portfolio.keyImpact': 'Dampak Kunci & Metrik Terukur',

    // Experience
    'experience.kicker': '04 / PERJALANAN KARIR',
    'experience.heading': 'Pengalaman Kerja & Kontribusi Nyata',
    'experience.subtitle': 'Rekam jejak kepemimpinan desain, orkestrasi tim, dan fasilitasi teknologi.',

    // Contact
    'contact.kicker': '05 / MARI TERHUBUNG',
    'contact.heading': 'Punya Ide Proyek? Mari Wujudkan Bersama.',
    'contact.desc': 'Apakah Anda membutuhkan UI/UX Designer untuk menciptakan pengalaman produk yang memikat, atau Project Manager untuk mengawal eksekusi proyek tepat waktu? Silakan hubungi saya melalui jalur langsung berikut:',
    'contact.emailLabel': 'Email Bisnis & Kolaborasi',
    'contact.emailAction': 'Kirim Email Langsung',
    'contact.waLabel': 'WhatsApp Langsung (Fast Response)',
    'contact.waDesc': 'Tersedia untuk chat santai, konsultasi lingkup proyek, atau tawaran kolaborasi.',
    'contact.igLabel': 'Instagram Profesional',
    'contact.formTitle': 'Kirim Pesan / Brief Singkat',
    'contact.formDesc': 'Isi formulir ringkas ini untuk langsung memulai percakapan via WhatsApp:',
    'contact.fieldName': 'Nama Lengkap',
    'contact.fieldEmail': 'Alamat Email',
    'contact.fieldType': 'Jenis Kebutuhan Proyek',
    'contact.fieldMsg': 'Pesan atau Detail Proyek',
    'contact.submitBtn': 'Kirim Pesan via WhatsApp',
    'contact.placeholderName': 'Contoh: Budi Pratama',
    'contact.placeholderEmail': 'budi@perusahaan.com',
    'contact.placeholderMsg': 'Ceritakan secara singkat ide produk, timeline yang diharapkan, atau target platform...',

    // Footer
    'footer.roles': 'UI/UX Designer & Project Manager',
    'footer.rights': 'Seluruh hak cipta dilindungi undang-undang.',
    'footer.builtWith': 'Dibangun dengan React, Tailwind CSS, TypeScript & Vite.',

    // CV Modal
    'cv.title': 'Pratinjau Curriculum Vitae',
    'cv.subtitle': 'Format resmi terstandarisasi untuk rekrutmen & kemitraan',
    'cv.downloadBtn': 'Unduh File PDF (.pdf)',
    'cv.downloadedBtn': 'PDF Terunduh!',
    'cv.successMsg': 'Dokumen berhasil dibuat dan diunduh ke folder unduhan Anda.',
    'cv.available': 'Tersedia untuk Peluang Baru',
    'cv.secSummary': '01. Ringkasan Profesional',
    'cv.secExp': '02. Pengalaman Kerja & Kepemimpinan',
    'cv.secProj': '03. Portofolio Kunci & Studi Kasus',
    'cv.secEdu': '04. Pendidikan Formal',
    'cv.secGoogle': '05. Program & Pengakuan Google',
    'cv.secSkills': '06. Keahlian Inti & Ekosistem Tools',
    'cv.footerNotice': 'Siap untuk lampiran lamaran kerja atau proposal kerjasama proyek.',

    // Case Study Modal
    'modal.problemTitle': 'Latar Belakang & Masalah',
    'modal.solutionTitle': 'Solusi Desain & Pendekatan Eksekusi',
    'modal.metricsTitle': 'Dampak Kunci & Metrik Terukur',
    'modal.deliverablesTitle': 'Artefak Desain & Deliverables',
    'modal.discussBtn': 'Diskusikan Proyek Serupa',
    'modal.closeBtn': 'Tutup Studi Kasus',
  },
  en: {
    // Top banner
    'banner.title': 'OFFICIAL GOOGLE SKILLS ARCADE 2026 FACILITATOR & ACTIVE PARTICIPANT GOOGLE DEVELOPER PROGRAM GEAR',
    'banner.availability': 'Available for Freelance & Full-time',

    // Nav
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.viewCV': 'View CV',
    'nav.cvTooltip': 'View Herwin Herdiansyah Resume Preview',

    // Hero
    'hero.badge': 'DUAL SYNERGY: HUMAN-CENTERED DESIGN + AGILE EXECUTION',
    'hero.h1': 'Crafting Intuitive Interfaces.',
    'hero.h2': 'Leading Execution To Completion.',
    'hero.bio': "Hello, I'm Herwin Herdiansyah. Bridging the aesthetic precision of a UI/UX Designer with the operational rigor of an Agile Project Manager. Aligning business vision, user research, and technology team workflows seamlessly.",
    'hero.ctaCV': 'View CV',
    'hero.ctaPortfolio': 'Explore Case Studies',
    'hero.ctaWhatsApp': 'Quick Chat (WhatsApp)',
    'hero.stat1': 'Avg Checkout Conversion',
    'hero.stat2': 'On-time Agile Delivery',
    'hero.stat3': 'Dev Handoff Accuracy',
    'hero.activePill': 'Actively Contributing to the Google Developer Community Indonesia',

    // Profile / About
    'about.kicker': '01 / PROFESSIONAL PROFILE',
    'about.heading': 'Connecting Design Empathy & Precise Execution',
    'about.lead': 'I believe the finest digital products emerge when user empathy research (Design Thinking) and software engineering delivery cadence (Agile Sprints) operate in seamless harmony.',
    'about.p1': 'With a background in Diploma of Informatics Management at Politeknik LP3I and leadership experience in the digital industry, I work methodically: designing wireframes and token-based Design Systems in Figma that are developer-ready, while authoring Product Requirement Documents (PRDs) and interactive roadmaps in Coda.',
    'about.p2': 'As an official Google Skills Arcade 2026 Facilitator and active participant in the Google Developer Program GEAR, I continuously sharpen my skills in cloud, machine learning, and modern software governance to deliver solutions that are not only visually engaging, but also robust in performance and business impact.',
    'about.googleTitle': 'Google Programs & Recognition',
    'about.eduTitle': 'Formal Education',
    'about.metricsTitle': 'Key Metrics & Added Value',

    // Skills
    'skills.kicker': '02 / WORK ECOSYSTEM',
    'skills.heading': 'Featured Tools & Core Capabilities',
    'skills.subtitle': 'Two primary technology pillars I utilize daily to craft interfaces and orchestrate project delivery measurably.',
    'skills.figmaSub': 'UI/UX Design Engine',
    'skills.figmaDesc': 'My primary tool for turning ideas into reality: from rough wireframes, high-fidelity mockups, and interactive component prototypes, to structured and scalable tokenized Design Systems.',
    'skills.codaSub': 'Project Management & Data Hub',
    'skills.codaDesc': 'Centralized ecosystem for Project Management & Data Hub. Used for crafting Product Requirement Docs (PRDs), Agile Sprint Tracking, interactive roadmaps, timeline allocation, and automated team documentation.',
    'skills.stackTitle': 'Supporting Stack',
    'skills.scrum': 'Scrum & Kanban',
    'skills.qa': 'Design QA & UAT',

    // Portfolio
    'portfolio.kicker': '03 / FEATURED PORTFOLIO',
    'portfolio.heading': 'Design Case Studies & Project Management',
    'portfolio.subtitle': 'Real-world product initiatives focused on human-centered design, user problem-solving, and agile cross-functional execution.',
    'portfolio.all': 'All Categories',
    'portfolio.btnDetail': 'Read Case Study',
    'portfolio.keyImpact': 'Key Impact & Measurable Metrics',

    // Experience
    'experience.kicker': '04 / CAREER JOURNEY',
    'experience.heading': 'Work Experience & Proven Contribution',
    'experience.subtitle': 'A proven track record of design leadership, team orchestration, and tech facilitation.',

    // Contact
    'contact.kicker': "05 / LET'S CONNECT",
    'contact.heading': "Have a Project Idea? Let's Build It Together.",
    'contact.desc': 'Whether you need a UI/UX Designer to craft captivating digital product experiences or a Project Manager to steer on-time sprint delivery, feel free to reach out directly through the channels below:',
    'contact.emailLabel': 'Business & Collaboration Email',
    'contact.emailAction': 'Send Direct Email',
    'contact.waLabel': 'Direct WhatsApp (Fast Response)',
    'contact.waDesc': 'Available for casual chats, project scope discussions, or collaboration inquiries.',
    'contact.igLabel': 'Professional Instagram',
    'contact.formTitle': 'Send a Message / Project Brief',
    'contact.formDesc': 'Fill out this brief form to immediately start a conversation via WhatsApp:',
    'contact.fieldName': 'Full Name',
    'contact.fieldEmail': 'Email Address',
    'contact.fieldType': 'Project Scope / Type',
    'contact.fieldMsg': 'Message or Project Details',
    'contact.submitBtn': 'Send Message via WhatsApp',
    'contact.placeholderName': 'e.g. John Doe',
    'contact.placeholderEmail': 'john@company.com',
    'contact.placeholderMsg': 'Briefly describe your product vision, expected timeline, or target platform...',

    // Footer
    'footer.roles': 'UI/UX Designer & Project Manager',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with React, Tailwind CSS, TypeScript & Vite.',

    // CV Modal
    'cv.title': 'Curriculum Vitae Preview',
    'cv.subtitle': 'Standardized official resume format for recruitment & partnerships',
    'cv.downloadBtn': 'Download PDF (.pdf)',
    'cv.downloadedBtn': 'PDF Downloaded!',
    'cv.successMsg': 'Document successfully generated and downloaded to your downloads folder.',
    'cv.available': 'Available for New Opportunities',
    'cv.secSummary': '01. Executive Summary',
    'cv.secExp': '02. Work Experience & Leadership',
    'cv.secProj': '03. Featured Portfolio & Case Studies',
    'cv.secEdu': '04. Formal Education',
    'cv.secGoogle': '05. Google Programs & Recognition',
    'cv.secSkills': '06. Core Skills & Tool Ecosystem',
    'cv.footerNotice': 'Ready for job application submissions or enterprise project proposals.',

    // Case Study Modal
    'modal.problemTitle': 'Background & Challenge',
    'modal.solutionTitle': 'Design Solution & Execution Approach',
    'modal.metricsTitle': 'Key Impact & Measurable Metrics',
    'modal.deliverablesTitle': 'Design Artifacts & Deliverables',
    'modal.discussBtn': 'Discuss a Similar Project',
    'modal.closeBtn': 'Close Case Study',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('app_language');
      return saved === 'en' ? 'en' : 'id';
    } catch {
      return 'id';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('app_language', lang);
    } catch {}
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
