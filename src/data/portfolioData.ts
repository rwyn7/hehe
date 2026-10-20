export interface Project {
  id: string;
  title: string;
  tag: string;
  tagColor: 'red' | 'emerald' | 'blue';
  year: string;
  focus: string;
  description: string;
  pillTags: string[];
  role: string;
  duration: string;
  metrics: { label: string; value: string }[];
  overview: string;
  problem: string;
  solution: string;
  keyDeliverables: string[];
  mockupType: 'ecommerce' | 'proptech' | 'erp';
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Herwin Herdiansyah',
    handle: '@rwynh__',
    roles: 'UI/UX Designer & Project Manager',
    email: 'hherwyn@gmail.com',
    whatsapp: '+62 812-9772-9136',
    whatsappRaw: '6281297729136',
    instagram: 'rwynh__',
    linkedin: 'Herwin Herdiansyah',
    linkedinUrl: 'https://www.linkedin.com/in/herwin-herdiansyah',
    location: 'Sukoharjo, Jawa Tengah',
    // Logo Format PNG: Menggunakan logo yang disiapkan (logo-herwin.png)
    logoUrl: '/logo-herwin.png', // Logo header
    footerLogoUrl: '/logo-herwin.png', // Logo footer
    availability: 'Tersedia untuk Proyek Freelance & Peluang Karir Tech',
    availabilityBadge: '',
    heroTag: 'DUAL SYNERGY: HUMAN-CENTERED DESIGN + AGILE EXECUTION',
    heroHeadline1: 'Merancang Antarmuka Intuitif.',
    heroHeadline2: 'Memimpin Eksekusi Hingga Tuntas.',
    heroBio:
      'Halo, saya Herwin Herdiansyah. Menggabungkan ketelitian estetika seorang UI/UX Designer dengan ketegasan operasional seorang Project Manager. Menghubungkan visi bisnis, riset kebutuhan pengguna, dan manajemen alur kerja tim teknologi secara presisi.',
    credentials: [
      { id: '1', title: 'Fasilitator Google Skills Arcade 2026', icon: 'award' },
      { id: '2', title: 'Google Developer Program GEAR (AI Focus)', icon: 'cpu' },
      { id: '3', title: 'D3 Manajemen Informatika - Poltek LP3I', icon: 'graduation-cap' },
    ],
    aboutSection: {
      kicker: '01. PROFIL PROFESIONAL',
      heading: 'Kreativitas Berpadu Dengan Ketepatan Manajemen.',
      lead: 'Saya bukan hanya mendesain bagaimana sebuah produk terlihat dan dirasakan, namun juga mengelola bagaimana produk tersebut dirancang, dieksekusi, dan diluncurkan tepat waktu tanpa kompromi kualitas.',
      para1:
        'Sebagai profesional yang bergerak di persimpangan Product Design dan Project Management, saya memandang setiap tantangan digital dari dua lensa: kebutuhan empati pengguna (Human-Centered) serta kelayakan operasional bisnis (Agile Execution).',
      para2:
        'Pengalaman saya memimpin sprint, mengorkestrasi alur kerja di Coda, dan merancang wireframe hingga prototipe kompleks di Figma memungkinkan proses transisi dari konsep ke developer berlangsung tanpa friksi dan miskomunikasi.',
      education: [
        {
          level: 'Pendidikan Tinggi',
          degree: 'D3 Manajemen Informatika',
          institution: 'Politeknik LP3I (2021 – 2024)',
          description: 'Fokus pada sistem informasi bisnis, rekayasa perangkat lunak, & HCI.',
        },
        {
          level: 'Pendidikan Menengah',
          degree: 'SMAN 14 Garut',
          institution: 'Jurusan IPS (Ilmu Pengetahuan Sosial)',
          description: 'Membentuk pemahaman mendalam tentang dinamika perilaku sosial & riset kualitatif pengguna.',
        },
      ],
      googleHighlights: [
        {
          badge: '2026 FACILITATOR',
          title: 'Fasilitator Google Skills Arcade 2026',
          description: 'Membimbing peserta dalam eksplorasi kompetensi cloud, data, dan arsitektur produk digital bersertifikasi Google.',
        },
        {
          badge: 'ACTIVE PARTICIPANT',
          title: 'Google Developer Program GEAR',
          description: 'Terpilih dalam program Google Developer GEAR dengan fokus integrasi Artificial Intelligence (AI) ke dalam alur kerja pengembangan produk & user experience.',
        },
      ],
      philosophyQuote:
        '“Desain yang indah tanpa delivery manajemen yang tepat hanyalah angan-angan. Manajemen yang kaku tanpa empati desain menghasilkan produk yang ditinggalkan pengguna.”',
    },
    toolsSection: {
      kicker: '02. EKOSISTEM KERJA',
      heading: 'Tools Unggulan & Keahlian Inti',
      subtitle:
        'Dua pilar teknologi utama yang saya gunakan sehari-hari untuk mendesain antarmuka dan memanajemeni jalannya proyek secara terukur.',
      figma: {
        badge: 'DESIGN CORNERSTONE',
        title: 'Figma',
        description:
          'Andalan utama dalam merealisasikan UI/UX Design dari tahap sketsa kasar, wireframing, high-fidelity mockup, interactive component prototyping, hingga penataan Design System berbasis token yang scalable.',
        skills: [
          { name: 'Atomic Design System & Variable Tokens', level: 'Proficient' },
          { name: 'Interactive Micro-Interactions & Handoff', level: 'Advanced' },
          { name: 'Auto-Layout Responsive Constraints', level: 'Expert' },
        ],
      },
      coda: {
        badge: 'MANAGEMENT ECOSYSTEM',
        title: 'Coda',
        description:
          'Ekosistem terpusat untuk Project Management & Data Hub. Digunakan untuk merancang Product Requirement Docs (PRD), Agile Sprint Tracking, Roadmap interaktif, alokasi timeline, dan otomatisasi dokumentasi tim.',
        skills: [
          { name: 'Relational Tables & Sprint Gantt Charts', level: 'Proficient' },
          { name: 'PRD, Scope Canvas & User Stories', level: 'Advanced' },
          { name: 'Cross-Functional Milestone Dashboard', level: 'Intermediate' },
        ],
      },
      supportingStack: [
        'FigJam (Brainstorming)',
        'Notion',
        'Jira',
        'Linear',
        'GitHub',
        'HTML/CSS Basics',
      ],
      methodologies: ['Scrum & Kanban', 'Design QA & UAT'],
    },
  },
  projects: [
    {
      id: 'alfamidiku',
      title: 'Redesain Website Alfamidiku',
      tag: 'E-Commerce & Retail',
      tagColor: 'red',
      year: '2024',
      focus: 'Fokus: UI/UX Redesign & Checkout Streamlining',
      description:
        'Menyederhanakan alur navigasi belanja sembako dan kebutuhan harian daring, mengoptimasi pencarian kilat produk, serta memangkas gesekan saat checkout.',
      pillTags: ['User Flow', 'Figma', 'Checkout Flow'],
      role: 'Lead UI/UX Designer & User Researcher',
      duration: '8 Minggu (Design Sprint & Iterasi)',
      metrics: [
        { label: 'Checkout Completion', value: '+38%' },
        { label: 'Drop-off saat Pembayaran', value: '-42%' },
        { label: 'Waktu Cari Produk', value: '2.1x Lebih Cepat' },
      ],
      overview:
        'Alfamidiku adalah platform belanja online untuk jaringan retail minimarket harian. Melalui audit UX menyeluruh dan usability testing bersama 15 pengguna aktif, proyek redesain ini memfokuskan pada penyederhanaan browsing sembako, perampingan keranjang belanja, serta transparansi slot pengiriman lokal.',
      problem:
        'Tingginya angka keranjang belanja yang ditinggalkan (cart abandonment) akibat proses checkout yang membutuhkan 5 langkah berlapis, sistem input alamat yang tidak ramah ponsel, dan pencarian kategori sembako yang tumpang tindih.',
      solution:
        'Merombak struktur informasi dengan navigasi bottom-sheet cepat, menyatukan proses checkout menjadi 2-step single screen dengan ringkasan instan, serta mengintegrasikan visual indicator untuk promo voucher yang langsung memotong total pembayaran.',
      keyDeliverables: [
        'Design System UI Kit 240+ komponen terstandarisasi',
        'Figma High-Fidelity Prototype alur checkout ekspres',
        'Laporan Usability Testing & Heuristic Evaluation Scorecard',
        'Spesifikasi Handoff Token Warna & Tipografi untuk Frontend Dev',
      ],
      mockupType: 'ecommerce',
    },
    {
      id: 'mamikos',
      title: 'Desain UI Mobile Mamikos',
      tag: 'Property Tech Mobile App',
      tagColor: 'emerald',
      year: '2024',
      focus: 'Fokus: Mobile App Interface & Smart Filter',
      description:
        'Membangun tata letak halaman detail properti kos yang lebih informatif, sistem filter pencarian multi-parameter yang ergonomis, serta navigasi booking yang intuitif.',
      pillTags: ['Mobile UI', 'Design System', 'Heuristic'],
      role: 'UI/UX Designer',
      duration: '6 Minggu',
      metrics: [
        { label: 'Konversi Ajukan Sewa', value: '+27%' },
        { label: 'Kecepatan Filter Kos', value: '2.4x Lebih Cepat' },
        { label: 'Miskomunikasi Aturan Kos', value: '-35%' },
      ],
      overview:
        'Merancang ulang antarmuka aplikasi pencarian kos nomor satu di Indonesia untuk memudahkan mahasiswa dan pekerja rantau menemukan hunian impian dengan transparansi fasilitas dan biaya sewa yang terperinci.',
      problem:
        'Pengguna sering kali merasa overwhelmed saat melihat halaman kos yang padat teks, kesulitan memastikan apakah harga sudah termasuk listrik dan kamar mandi dalam, serta filter pencarian yang lambat diperbarui ketika mengubah kriteria rentang harga.',
      solution:
        'Mendesain tata letak kartu kos modular dengan badge fasilitas berkode warna (AC, KM Dalam, Wifi, Parkir Mobil), filter drawer mengambang yang responsif dengan live count hasil kos, dan modul tanya pengelola cepat via floating micro-CTA.',
      keyDeliverables: [
        'Mobile UI Screen Design (iOS & Android guidelines)',
        'Smart Filtering UI Component dengan multi-select chips',
        'Micro-interaction animasi swipe foto kos & save favorite',
        'Design Guideline token komponen Auto-Layout 5.0',
      ],
      mockupType: 'proptech',
    },
    {
      id: 'erp-enterprise',
      title: 'Desain Antarmuka Sistem ERP Perusahaan',
      tag: 'Enterprise B2B SaaS',
      tagColor: 'blue',
      year: '2023 - 2024',
      focus: 'Fokus: UI/UX & Project Management Internal',
      description:
        'Mengorkestrasikan desain dashboard data masif untuk modul HR & Operasional Logistik, memimpin roadmap sprint di Coda, serta menjembatani tim desain dan engineer.',
      pillTags: ['Coda Tracking', 'Enterprise UI', 'Data Tables'],
      role: 'UI/UX Designer & Agile Project Manager',
      duration: '6 Bulan (Multi-phase Deployment)',
      metrics: [
        { label: 'On-time Sprint Release', value: '99.4%' },
        { label: 'Approval Operasional', value: '-60% Waktu Tunggu' },
        { label: 'Dev Handoff Accuracy', value: '100% Sesuai Desain' },
      ],
      overview:
        'Sistem Enterprise Resource Planning (ERP) internal berskala besar untuk mendukung operasional distribusi logistik ratusan armada serta manajemen absensi, payroll, dan KPI karyawan.',
      problem:
        'Sistem lama menggunakan spreadsheet terpisah yang rentan human-error, alur persetujuan surat jalan yang memakan waktu 3 hari, dan tim IT internal kesulitan memprioritaskan backlog fitur karena ketiadaan dokumentasi terpusat.',
      solution:
        'Membangun antarmuka data table interaktif dengan density switch (Compact vs Comfortable), quick batch action, dan breadcrumbs status alur approval. Menggunakan Coda sebagai central product hub untuk PRD, user stories, dependency tracking, dan automated status notification.',
      keyDeliverables: [
        'Coda Project Workspace (PRD Hub, Sprint Board, QA Checklist)',
        'Design System ERP (Tables, Form Controls, Status Badges, Charts)',
        'User Journey & Role-Based Access Flow (Admin, Staff, Supervisor)',
        'Sprint Handoff Docs & Acceptance Criteria terperinci',
      ],
      mockupType: 'erp',
    },
  ] as Project[],
  experiences: [
    {
      id: 'exp-1',
      period: '1 April 2026 - Sekarang',
      company: 'PT. Abhirama Kresna / Freelance Enterprise',
      role: 'UI/UX Designer',
      description:
        'Terlibat dalam perancangan tampilan antarmuka sistem ERP perusahaan, serta memastikan keselarasan antara tim bisnis dan engineer.',
      tags: ['Enterprise Scale', 'Agile Lead'],
    },
    {
      id: 'exp-2',
      period: '2026 Program',
      company: 'Google Developer Ecosystem',
      role: 'Fasilitator Google Skills Arcade 2026',
      description:
        'Memandu peserta dalam menyelesaikan modul arsitektur cloud, data, dan pemanfaatan AI generative. Mengembangkan kurikulum pendukung dan memfasilitasi sesi tanya jawab teknis.',
      tags: ['Mentorship', 'Google Cloud'],
    },
    {
      id: 'exp-3',
      period: '2026 - Sekarang',
      company: 'Wedding Planner',
      role: 'UI/UX Designer & Project Manager',
      description:
        'memanajemen backlog fitur dan timeline rilis sprint menggunakan dokumentasi terstruktur di Coda, serta merancang alur interaksi antarmuka pengguna digital.',
      tags: ['Product Strategy', 'Wireframing'],
    },
  ] as Experience[],
};

export const PORTFOLIO_DATA_EN = {
  profile: {
    ...PORTFOLIO_DATA.profile,
    roles: 'UI/UX Designer & Project Manager',
    availability: 'Available for Freelance Projects & Tech Career Opportunities',
    heroTag: 'DUAL SYNERGY: HUMAN-CENTERED DESIGN + AGILE EXECUTION',
    heroHeadline1: 'Crafting Intuitive Interfaces.',
    heroHeadline2: 'Leading Execution To Completion.',
    heroBio:
      "Hello, I'm Herwin Herdiansyah. Bridging the aesthetic precision of a UI/UX Designer with the operational rigor of an Agile Project Manager. Aligning business vision, user research, and technology team workflows seamlessly.",
    credentials: [
      { id: '1', title: 'Google Skills Arcade 2026 Facilitator', icon: 'award' },
      { id: '2', title: 'Google Developer Program GEAR (AI Focus)', icon: 'cpu' },
      { id: '3', title: 'D3 Informatics Management - Poltek LP3I', icon: 'graduation-cap' },
    ],
    aboutSection: {
      kicker: '01. PROFESSIONAL PROFILE',
      heading: 'Creativity Meets Rigorous Management.',
      lead: 'I do not simply design how a product looks and feels; I lead how it is scoped, executed, and shipped on time without compromising quality.',
      para1:
        'As a professional operating at the intersection of Product Design and Project Management, I approach every digital challenge through two lenses: user empathy (Human-Centered) and business viability (Agile Execution).',
      para2:
        'My experience leading agile sprints, orchestrating workflows in Coda, and developing wireframes to production-grade prototypes in Figma ensures handoffs to developers occur without friction or miscommunication.',
      education: [
        {
          level: 'Higher Education',
          degree: 'D3 Informatics Management',
          institution: 'Politeknik LP3I (2021 – 2024)',
          description: 'Focused on business information systems, software engineering, & HCI.',
        },
        {
          level: 'Secondary Education',
          degree: 'SMAN 14 Garut',
          institution: 'Social Sciences Major',
          description: 'Cultivated in-depth understanding of social behavior dynamics and qualitative user research.',
        },
      ],
      googleHighlights: [
        {
          badge: '2026 FACILITATOR',
          title: 'Google Skills Arcade 2026 Facilitator',
          description: 'Mentoring participants in mastering cloud competencies, data analytics, and Google-certified digital architectures.',
        },
        {
          badge: 'ACTIVE PARTICIPANT',
          title: 'Google Developer Program GEAR',
          description: 'Selected for the Google Developer GEAR program focusing on integrating Artificial Intelligence (AI) into product workflows and user experiences.',
        },
      ],
      philosophyQuote:
        '“Beautiful design without disciplined management delivery is merely wishful thinking. Rigid management without design empathy results in products users abandon.”',
    },
    toolsSection: {
      ...PORTFOLIO_DATA.profile.toolsSection,
      kicker: '02. WORK ECOSYSTEM',
      heading: 'Featured Tools & Core Capabilities',
      subtitle:
        'Two primary technology pillars I utilize daily to craft interfaces and orchestrate project delivery measurably.',
    },
  },
  projects: [
    {
      id: 'alfamidiku',
      title: 'Alfamidiku Website Redesign',
      tag: 'E-Commerce & Retail',
      tagColor: 'red',
      year: '2024',
      focus: 'Focus: UI/UX Redesign & Checkout Streamlining',
      description:
        'Streamlined daily grocery shopping navigation, optimized rapid product search, and eliminated checkout friction.',
      pillTags: ['User Flow', 'Figma', 'Checkout Flow'],
      role: 'Lead UI/UX Designer & User Researcher',
      duration: '8 Weeks (Design Sprint & Iteration)',
      metrics: [
        { label: 'Checkout Completion', value: '+38%' },
        { label: 'Payment Drop-off', value: '-42%' },
        { label: 'Product Search Speed', value: '2.1x Faster' },
      ],
      overview:
        'Alfamidiku is the online grocery platform for an established nationwide convenience store chain. Through comprehensive UX audits and usability testing with 15 active shoppers, this redesign focused on simplifying daily grocery browsing, streamlining the cart, and providing transparent local delivery slots.',
      problem:
        'High shopping cart abandonment rates caused by a convoluted 5-step checkout process, mobile-unfriendly address input forms, and overlapping grocery category taxonomies.',
      solution:
        'Overhauled the information architecture with fast bottom-sheet navigation, consolidated checkout into a 2-step single screen with instant order summaries, and introduced visual promo voucher cues that immediately apply discounts.',
      keyDeliverables: [
        'Standardized Design System UI Kit with 240+ components',
        'Figma High-Fidelity Prototype of express checkout flow',
        'Usability Testing Report & Heuristic Evaluation Scorecard',
        'Color & Typography Token Handoff Specs for Frontend Devs',
      ],
      mockupType: 'ecommerce',
    },
    {
      id: 'mamikos',
      title: 'Mamikos Mobile UI Design',
      tag: 'Property Tech Mobile App',
      tagColor: 'emerald',
      year: '2024',
      focus: 'Focus: Mobile App Interface & Smart Filter',
      description:
        'Built informative boarding house detail pages, ergonomic multi-parameter search filters, and intuitive booking navigation.',
      pillTags: ['Mobile UI', 'Design System', 'Heuristic'],
      role: 'UI/UX Designer',
      duration: '6 Weeks',
      metrics: [
        { label: 'Rental Application Conversion', value: '+27%' },
        { label: 'Search Filter Speed', value: '2.4x Faster' },
        { label: 'House Rule Misunderstandings', value: '-35%' },
      ],
      overview:
        'Redesigning the interface of Indonesia’s leading rental property platform, enabling students and working professionals to find ideal boarding homes with complete clarity on amenities and itemized costs.',
      problem:
        'Users frequently felt overwhelmed by dense, text-heavy room listings, struggled to verify whether utilities and private bathrooms were included, and experienced slow filter reloads when adjusting price brackets.',
      solution:
        'Designed modular room cards with color-coded amenity badges (AC, Private Bathroom, Wi-Fi, Parking), a responsive floating filter drawer with live result counts, and a floating micro-CTA to contact property managers instantly.',
      keyDeliverables: [
        'Mobile UI Screen Design (iOS & Android guidelines)',
        'Smart Filtering UI Component with multi-select chips',
        'Micro-interactions for photo swipe & save-to-favorites',
        'Auto-Layout 5.0 Component Token Guidelines',
      ],
      mockupType: 'proptech',
    },
    {
      id: 'erp-enterprise',
      title: 'Enterprise ERP System UI Design',
      tag: 'Enterprise B2B SaaS',
      tagColor: 'blue',
      year: '2023 - 2024',
      focus: 'Focus: UI/UX & Internal Project Management',
      description:
        'Orchestrated massive data dashboard designs for HR & Logistics Operations, led sprint roadmaps in Coda, and bridged design and engineering teams.',
      pillTags: ['Coda Tracking', 'Enterprise UI', 'Data Tables'],
      role: 'UI/UX Designer & Agile Project Manager',
      duration: '6 Months (Multi-phase Deployment)',
      metrics: [
        { label: 'On-time Sprint Release', value: '99.4%' },
        { label: 'Operational Approval', value: '-60% Wait Time' },
        { label: 'Dev Handoff Accuracy', value: '100% Pixel Perfect' },
      ],
      overview:
        'A comprehensive internal Enterprise Resource Planning (ERP) platform supporting logistics distribution for hundreds of fleet vehicles alongside employee attendance, payroll, and KPI management.',
      problem:
        'The legacy system relied on disjointed spreadsheets prone to human error, delivery approval workflows taking 3 business days, and internal IT teams struggling with backlog prioritization due to lack of centralized documentation.',
      solution:
        'Built interactive data table interfaces with density switching (Compact vs Comfortable), quick batch actions, and approval status breadcrumbs. Utilized Coda as a central product hub for PRDs, user stories, dependency tracking, and automated status alerts.',
      keyDeliverables: [
        'Coda Project Workspace (PRD Hub, Sprint Board, QA Checklist)',
        'Enterprise ERP Design System (Tables, Form Controls, Status Badges, Charts)',
        'User Journey & Role-Based Access Flow (Admin, Staff, Supervisor)',
        'Detailed Sprint Handoff Docs & Acceptance Criteria',
      ],
      mockupType: 'erp',
    },
  ] as Project[],
  experiences: [
    {
      id: 'exp-1',
      period: 'April 1, 2026 – Present',
      company: 'PT. Abhirama Kresna / Freelance Enterprise',
      role: 'UI/UX Designer',
      description:
        'Involved in designing enterprise ERP system user interfaces, ensuring seamless alignment between business and engineering teams.',
      tags: ['Enterprise Scale', 'Agile Lead'],
    },
    {
      id: 'exp-2',
      period: '2026 Program',
      company: 'Google Developer Ecosystem',
      role: 'Google Skills Arcade 2026 Facilitator',
      description:
        'Guided participants through cloud architecture, data, and generative AI modules. Developed supporting curriculum and facilitated technical Q&A sessions.',
      tags: ['Mentorship', 'Google Cloud'],
    },
    {
      id: 'exp-3',
      period: '2026 – Present',
      company: 'Wedding Planner',
      role: 'UI/UX Designer & Project Manager',
      description:
        'Managing feature backlogs and sprint release timelines with structured documentation in Coda, and designing digital UI user flows.',
      tags: ['Product Strategy', 'Wireframing'],
    },
  ] as Experience[],
};

export function getLocalizedPortfolioData(lang: 'id' | 'en') {
  return lang === 'en' ? PORTFOLIO_DATA_EN : PORTFOLIO_DATA;
}

export function getLocalizedProjects(lang: 'id' | 'en') {
  return lang === 'en' ? PORTFOLIO_DATA_EN.projects : PORTFOLIO_DATA.projects;
}

export function getLocalizedExperiences(lang: 'id' | 'en') {
  return lang === 'en' ? PORTFOLIO_DATA_EN.experiences : PORTFOLIO_DATA.experiences;
}

export function getLocalizedAbout(lang: 'id' | 'en') {
  return lang === 'en' ? PORTFOLIO_DATA_EN.profile.aboutSection : PORTFOLIO_DATA.profile.aboutSection;
}
