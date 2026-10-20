import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

function resolvePort(): number {
  const portArgIndex = process.argv.indexOf('--port');
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    return parseInt(process.argv[portArgIndex + 1], 10);
  }
  // Dev server must always run on port 3000 in AI Studio dev environment
  if (!isProduction) {
    return 3000;
  }
  return process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
}

const PORT = resolvePort();

const app = express();
app.use(express.json());

// Initialize GoogleGenAI client on the server
// Telemetry header User-Agent: 'aistudio-build' is mandatory as per skill guidelines
const apiKey = process.env.GEMINI_API_KEY || '';

function getGenAIClient() {
  const key = process.env.GEMINI_API_KEY || apiKey;
  return new GoogleGenAI({
    apiKey: key || undefined,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `Anda adalah "Hehe Assistant", asisten kecerdasan buatan resmi untuk portofolio Herwin Herdiansyah.

ATURAN KOMUNIKASI UTAMA (SANGAT PENTING & MUTLAK DIIKUTI):
1. JANGAN PERNAH MEMPERKENALKAN DIRI BERULANG KALI:
   • DILARANG KERAS memulai respon dengan kalimat template seperti "Halo! Saya Hehe Assistant...", "Perkenalkan saya Hehe Assistant...", atau pengantar sejenis. Pengguna sudah mengetahui siapa Anda dari awal interaksi.
   • Jika pengguna memberikan salam singkat (misalnya "halo", "hai", "pagi"), cukup tanggapi dengan ramah, sopan, dan singkat (contoh: "Halo! Ada yang bisa saya bantu mengenai portofolio atau proyek Herwin?") tanpa menjelaskan ulang identitas Anda.
2. LANGSUNG KE INTI PERTANYAAN (TO THE POINT, CEPAT & AKURAT):
   • Segera jawab pertanyaan yang diajukan pengguna tanpa basa-basi atau pengantar yang bertele-tele.
   • Jawab HANYA apa yang ditanyakan. Jika ditanya tentang satu topik spesifik (misal: "Siapa Herwin?", "Apa keahlian Figma?", "Bagaimana cara menghubunginya?"), fokuskan 100% jawaban Anda pada topik tersebut.
3. AKURASI DATA & INFORMASI RESMI HERWIN HERDIANSYAH:
   • Nama: Herwin Herdiansyah
   • Peran Profesional: Dual Synergy — UI/UX Designer & Agile Project Manager.
   • Lokasi: Sukoharjo, Jawa Tengah (Berpengalaman kerja Remote dengan zona waktu WIB, serta terbuka untuk On-site atau Hybrid).
   • Email Resmi: hherwyn@gmail.com
   • WhatsApp: +62 812-9772-9136
   • Status Ketersediaan: Terbuka & siap untuk proyek freelance maupun peluang karir tech (Full-time / Kontrak).
   • Pendidikan: D3 Manajemen Informatika - Politeknik LP3I (2021–2024), SMAN 14 Garut (Ilmu Pengetahuan Sosial).
   • Pengakuan Google:
     - Fasilitator Resmi Google Skills Arcade 2026 (membimbing peserta dalam modul Cloud, Data, dan AI Generatif).
     - Peserta Program Google Developer GEAR (fokus implementasi AI ke workflow produk & UX).
   • Keahlian Utama (Figma & Coda):
     - Figma: Auto-Layout (Expert), Interactive Micro-Interactions & Handoff (Advanced), Atomic Design System & Variable Tokens (Proficient).
     - Coda: PRD, Scope Canvas & User Stories (Advanced), Relational Tables & Sprint Gantt Charts (Proficient), Cross-Functional Milestone Dashboard (Intermediate).
     - Supporting Tools: FigJam, Notion, Jira, Linear, GitHub, HTML/CSS Basics.
     - Metodologi: Human-Centered Design (Design Thinking), Agile Scrum & Kanban, Design QA & UAT, Single-Screen Checkout Optimization.
   • 3 Studi Kasus Portofolio:
     1. Redesain Website Alfamidiku (E-Commerce Quick Commerce):
        - Optimasi 2-step express checkout dan transparansi stok barang.
        - Memangkas drop-off pembayaran -42%, menaikkan checkout completion +38%, pencarian produk 2.1x lebih cepat.
        - Dilengkapi Design System 240+ komponen dan prototipe interaktif.
     2. Desain UI Mobile Mamikos (PropTech Room Discovery):
        - Kartu kos modular, smart filter dengan multi-select chips, transparansi fasilitas tanpa biaya tersembunyi.
        - Meningkatkan konversi pengajuan sewa +27%, kecepatan filter 2.4x lebih cepat.
     3. Desain Antarmuka Sistem ERP Perusahaan (Enterprise B2B SaaS):
        - Dashboard tracking armada logistik 140+ truk, approval workflow memangkas waktu tunggu 60%.
        - Menggunakan Coda sebagai central product hub (PRD, sprint tracking, QA checklist) dengan akurasi handoff developer 100% dan on-time sprint release 99.4%.
   • Pengalaman Kerja:
     - UI/UX Designer di PT. Abhirama Kresna / Freelance Enterprise (1 April 2026 - Sekarang)
     - Fasilitator Google Skills Arcade 2026 (Google Developer Ecosystem)
     - UI/UX Designer & Project Manager di Wedding Planner (2026 - Sekarang)
4. ATURAN FORMAT PENULISAN:
   • DILARANG KERAS menggunakan karakter bintang (*) untuk formatting apapun dalam teks output. Jangan pernah mencetak tanda bintang *.
   • Untuk format TEKS TEBAL, gunakan tag HTML <b>teks tebal</b>.
   • Untuk format TEKS MIRING, gunakan tag HTML <i>teks miring</i>.
   • Untuk daftar poin-poin (bullet points), WAJIB gunakan simbol bulat (•) di awal baris.
   • Untuk daftar berurutan, WAJIB gunakan urutan numerik (1., 2., 3.).
   • Jangan gunakan heading tanda pagar (#). Gunakan kalimat pengantar berformat tebal seperti <b>1. Keahlian Utama:</b>.
   • Sesuaikan bahasa respon dengan bahasa pengguna (Bahasa Indonesia atau English).`;

// Fallback intelligent responses when GEMINI_API_KEY is unavailable or in offline mode
function getIntelligentFallbackResponse(userPrompt: string, language: string = 'id'): string {
  const q = userPrompt.toLowerCase().trim();
  const isEn = language === 'en';

  // Greeting only
  if (/^(halo|hai|hi|hello|hey|hei|pagi|siang|sore|malam|selamat)/.test(q) && q.split(' ').length <= 3) {
    return isEn
      ? 'Hello! How can I help you regarding Herwin Herdiansyah\'s design portfolio, skills, or collaboration opportunities?'
      : 'Halo! Ada yang bisa saya bantu terkait portofolio desain, keahlian, atau peluang kolaborasi bersama Herwin Herdiansyah?';
  }

  // Who is Herwin / Profile / Bio
  if (q.includes('siapa') || q.includes('who is') || q.includes('profil') || q.includes('profile') || q.includes('tentang') || q.includes('about') || q.includes('biodata') || q.includes('bio')) {
    return isEn
      ? `<b>Herwin Herdiansyah</b> is a <b>UI/UX Designer & Agile Project Manager</b> based in Sukoharjo, Central Java.

Key highlights:
• <b>Dual Synergy:</b> Combines aesthetic design precision in Figma with operational sprint management discipline in Coda.
• <b>Recognition:</b> Official Google Skills Arcade 2026 Facilitator & active participant in the Google Developer Program GEAR.
• <b>Education:</b> Diploma 3 in Informatics Management from Politeknik LP3I.
• <b>Availability:</b> Open for freelance digital design projects and tech career roles (Remote / Hybrid / On-site).`
      : `<b>Herwin Herdiansyah</b> adalah seorang <b>UI/UX Designer & Agile Project Manager</b> yang berdomisili di Sukoharjo, Jawa Tengah.

Ringkasan profil:
• <b>Dual Synergy:</b> Memadukan ketelitian estetika antarmuka di Figma dengan ketegasan manajemen sprint agile di Coda.
• <b>Pengakuan Resmi:</b> Fasilitator Resmi Google Skills Arcade 2026 & peserta aktif Google Developer Program GEAR (fokus AI).
• <b>Latar Belakang:</b> Lulusan D3 Manajemen Informatika Politeknik LP3I.
• <b>Ketersediaan:</b> Terbuka untuk proyek freelance, kontrak, maupun posisi tetap (Remote / Hybrid / On-site).`;
  }

  // Projects / Portfolio / Case Studies
  if (q.includes('proyek') || q.includes('project') || q.includes('portofolio') || q.includes('portfolio') || q.includes('case study') || q.includes('alfamidi') || q.includes('mamikos') || q.includes('erp')) {
    if (q.includes('alfamidi')) {
      return isEn
        ? `<b>Alfamidiku Website Redesign (E-Commerce Grocery):</b>
• <b>Focus:</b> 2-Step Express Checkout & rapid grocery category browsing.
• <b>Impact:</b> Reduced checkout drop-off by <b>-42%</b>, boosted transaction completion by <b>+38%</b>, product search <b>2.1x faster</b>.
• <b>Artifacts:</b> Standardized Design System UI Kit with 240+ components and interactive Figma prototype.`
        : `<b>Redesain Website Alfamidiku (E-Commerce Sembako):</b>
• <b>Fokus:</b> <i>2-Step Express Checkout</i> dan navigasi kategori belanja cepat.
• <b>Dampak:</b> Memangkas drop-off pembayaran sebesar <b>-42%</b>, menaikkan penyelesaian checkout <b>+38%</b>, pencarian produk <b>2.1x lebih cepat</b>.
• <b>Artefak:</b> Design System UI Kit 240+ komponen dan prototipe interaktif di Figma.`;
    }

    if (q.includes('mamikos')) {
      return isEn
        ? `<b>Mamikos Mobile UI Design (PropTech Room Discovery):</b>
• <b>Focus:</b> Modular property cards, smart multi-select filtering, and full price transparency.
• <b>Impact:</b> Increased rental application conversion by <b>+27%</b> and room search filtering speed by <b>2.4x</b>.
• <b>Artifacts:</b> Mobile UI screen guidelines (iOS & Android) and micro-interactions.`
        : `<b>Desain UI Mobile Mamikos (PropTech Pencarian Kos):</b>
• <b>Fokus:</b> Kartu hunian kos modular dengan smart filter multi-select chips dan transparansi biaya tanpa biaya tersembunyi.
• <b>Dampak:</b> Meningkatkan konversi pengajuan sewa <b>+27%</b> dan kecepatan filter <b>2.4x lebih cepat</b>.
• <b>Artefak:</b> Desain layar mobile (iOS & Android) serta micro-interaction interaktif.`;
    }

    if (q.includes('erp')) {
      return isEn
        ? `<b>Enterprise ERP System UI & Project Management:</b>
• <b>Focus:</b> Massive fleet dispatch tracking (140+ trucks) and HR/KPI operation dashboards.
• <b>Impact:</b> Reduced operational approval waiting time by <b>60%</b>, achieved <b>99.4% on-time sprint release</b> and <b>100% developer handoff accuracy</b>.
• <b>Platform:</b> Coda Product Workspace for PRD, sprint boards, and QA checklists.`
        : `<b>Desain Antarmuka Sistem ERP Perusahaan (Enterprise B2B SaaS):</b>
• <b>Fokus:</b> Manajemen dispatch logistik 140+ armada truk serta modul absensi, payroll, dan KPI karyawan.
• <b>Dampak:</b> Memangkas waktu tunggu approval operasional sebesar <b>60%</b>, sprint delivery tepat waktu <b>99.4%</b>, dan akurasi handoff developer <b>100%</b>.
• <b>Platform:</b> Workspace Coda terpusat untuk PRD, sprint backlog, dan checklist QA.`;
    }

    return isEn
      ? `Herwin's portfolio features <b>3 flagship case studies</b>:

1. <b>Alfamidiku Website Redesign</b> (E-Commerce): 2-Step Express Checkout, +38% checkout completion.
2. <b>Mamikos Living Discovery</b> (PropTech Mobile): Smart multi-select filters, +27% booking conversion.
3. <b>Enterprise ERP System</b> (B2B SaaS): Fleet dispatch tracking for 140+ trucks, 60% faster approvals via Coda PRD.

Which project would you like to explore in more detail?`
      : `Portofolio Herwin berfokus pada <b>3 studi kasus unggulan</b>:

1. <b>Redesain Website Alfamidiku</b> (E-Commerce): <i>2-Step Express Checkout</i>, +38% penyelesaian transaksi.
2. <b>Desain UI Mobile Mamikos</b> (PropTech): Smart filter pencarian kos, +27% konversi sewa.
3. <b>Sistem ERP Perusahaan</b> (B2B SaaS): Manajemen armada 140+ truk, approval 60% lebih cepat dengan integrasi Coda.

Apakah ada studi kasus tertentu yang ingin Anda ketahui lebih detail?`;
  }

  // Skills / Figma / Coda / Tools
  if (q.includes('figma') || q.includes('coda') || q.includes('skill') || q.includes('keahlian') || q.includes('tools') || q.includes('kemampuan')) {
    return isEn
      ? `Herwin leverages two core technology pillars daily:

<b>Figma Core (UI/UX Design Engine):</b>
• Auto-Layout Responsive Constraints — <b>Expert</b>
• Interactive Micro-Interactions & Dev Handoff — <b>Advanced</b>
• Atomic Design System & Variable Tokens — <b>Proficient</b>

<b>Coda Ecosystem (Agile Project Management & Data Hub):</b>
• PRD, Scope Canvas & User Stories — <b>Advanced</b>
• Relational Tables & Sprint Gantt Charts — <b>Proficient</b>
• Cross-Functional Milestone Dashboard — <b>Intermediate</b>

<b>Supporting Stack:</b> FigJam, Jira, Notion, Linear, GitHub, HTML/CSS Basics.`
      : `Herwin menggunakan dua pilar teknologi utama setiap hari:

<b>Figma (UI/UX Design Engine):</b>
• Auto-Layout Responsive Constraints — <b>Expert</b>
• Interactive Micro-Interactions & Dev Handoff — <b>Advanced</b>
• Atomic Design System & Variable Tokens — <b>Proficient</b>

<b>Coda (Agile Project Management & Data Hub):</b>
• PRD, Scope Canvas & User Stories — <b>Advanced</b>
• Relational Tables & Sprint Gantt Charts — <b>Proficient</b>
• Cross-Functional Milestone Dashboard — <b>Intermediate</b>

<b>Supporting Tools:</b> FigJam, Jira, Notion, Linear, GitHub, Dasar HTML/CSS.`;
  }

  // Contact / WhatsApp / Email / Hire
  if (q.includes('kontak') || q.includes('contact') || q.includes('email') || q.includes('whatsapp') || q.includes('wa') || q.includes('hubungi') || q.includes('hire') || q.includes('kerjasama') || q.includes('freelance')) {
    return isEn
      ? `You can reach Herwin directly through the following official channels:

• <b>Email:</b> hherwyn@gmail.com
• <b>WhatsApp:</b> +62 812-9772-9136 (Fast response)
• <b>Instagram:</b> @rwynh__
• <b>Response Time:</b> Within 1×24 business hours (WIB / GMT+7)
• <b>Status:</b> Open for freelance projects and tech career opportunities.`
      : `Anda dapat langsung menghubungi Herwin melalui saluran resmi berikut:

• <b>Email:</b> hherwyn@gmail.com
• <b>WhatsApp:</b> +62 812-9772-9136 (Respon cepat)
• <b>Instagram:</b> @rwynh__
• <b>Waktu Respon:</b> Kurang dari 1×24 jam kerja (Zona WIB / GMT+7)
• <b>Status:</b> Siap untuk kolaborasi proyek freelance maupun tawaran karir tech.`;
  }

  // Location / Domisili / Sukoharjo
  if (q.includes('lokasi') || q.includes('dimana') || q.includes('location') || q.includes('tempat') || q.includes('sukoharjo') || q.includes('domisili')) {
    return isEn
      ? 'Herwin is based in <b>Sukoharjo, Central Java, Indonesia</b>. He is fully experienced in <b>Remote work (WIB / GMT+7 timezone)</b> and available for Hybrid or On-site arrangements as required.'
      : 'Herwin berdomisili di <b>Sukoharjo, Jawa Tengah</b>. Sangat terbiasa bekerja secara <b>Remote (Zona Waktu WIB / GMT+7)</b> serta fleksibel untuk kebutuhan Hybrid atau On-site.';
  }

  // Education / LP3I
  if (q.includes('pendidikan') || q.includes('kuliah') || q.includes('education') || q.includes('lp3i') || q.includes('lulusan') || q.includes('sekolah')) {
    return isEn
      ? `<b>Formal Education Background:</b>
• <b>Diploma 3 (D3) Informatics Management:</b> Politeknik LP3I (2021 – 2024), focusing on business information systems, software engineering, and Human-Computer Interaction (HCI).
• <b>Secondary Education:</b> SMAN 14 Garut (Social Sciences), cultivating qualitative user research and social behavior understanding.`
      : `<b>Latar Belakang Pendidikan Formal:</b>
• <b>D3 Manajemen Informatika:</b> Politeknik LP3I (2021 – 2024), fokus pada sistem informasi bisnis, rekayasa perangkat lunak, dan Human-Computer Interaction (HCI).
• <b>Pendidikan Menengah:</b> SMAN 14 Garut (Jurusan IPS), membentuk pemahaman dinamika perilaku sosial dan riset kualitatif pengguna.`;
  }

  // Google Recognition / Facilitator / GEAR
  if (q.includes('google') || q.includes('fasilitator') || q.includes('facilitator') || q.includes('gear') || q.includes('arcade')) {
    return isEn
      ? `<b>Google Ecosystem Recognition:</b>
• <b>Official Facilitator - Google Skills Arcade 2026:</b> Mentoring participants in cloud architecture, data analytics, and certified digital competencies.
• <b>Active Participant - Google Developer Program GEAR:</b> Selected participant focusing on integrating Artificial Intelligence (AI) into product workflows and UX.`
      : `<b>Program & Pengakuan Google:</b>
• <b>Fasilitator Resmi Google Skills Arcade 2026:</b> Membimbing peserta dalam kompetensi Cloud, Data, dan arsitektur produk digital bersertifikasi Google.
• <b>Peserta Aktif Google Developer Program GEAR:</b> Terpilih dalam program Google Developer GEAR dengan fokus integrasi Artificial Intelligence (AI) ke dalam user experience dan pengembangan produk.`;
  }

  // Turnaround time / Timeline / Pricing / Estimasi
  if (q.includes('waktu') || q.includes('estimasi') || q.includes('timeline') || q.includes('harga') || q.includes('biaya') || q.includes('rate') || q.includes('lama') || q.includes('turnaround')) {
    return isEn
      ? `<b>Turnaround & Workflow Approach:</b>
• <b>UI/UX Sprint:</b> Typically 2 to 4 weeks depending on scope, starting from user flow, wireframing, interactive Figma prototype, to token handoff.
• <b>Full Product / Redesign:</b> 6 to 8 weeks with design sprint iterations and usability evaluation.
• <b>Consultation:</b> For exact timeline and customized scope, contact Herwin directly via WhatsApp at <b>+62 812-9772-9136</b> or email <b>hherwyn@gmail.com</b>.`
      : `<b>Estimasi Waktu & Pendekatan Kerja:</b>
• <b>Sprint Desain UI/UX:</b> Rata-rata 2 hingga 4 minggu bergantung pada cakupan (mulai dari wireframe, prototipe interaktif di Figma, hingga handoff token).
• <b>Redesain Produk Penuh:</b> Sekitar 6 hingga 8 minggu mencakup audit UX, iterasi sprint, dan usability evaluation.
• <b>Konsultasi Lingkup:</b> Untuk estimasi timeline dan anggaran yang sesuai kebutuhan proyek Anda, silakan hubungi Herwin langsung via WhatsApp <b>+62 812-9772-9136</b> atau email <b>hherwyn@gmail.com</b>.`;
  }

  // Default concise direct answer without boilerplate introduction
  return isEn
    ? `Herwin Herdiansyah is a UI/UX Designer & Project Manager based in Sukoharjo, Central Java, specializing in Figma (Design Systems) and Coda (Agile Sprint Management).

Feel free to ask specifically about:
• Case studies (Alfamidiku, Mamikos, ERP Fleet Hub)
• Core design & project management capabilities
• Availability and direct contact details via <b>hherwyn@gmail.com</b> or WhatsApp <b>+62 812-9772-9136</b>.`
    : `Herwin Herdiansyah adalah UI/UX Designer & Project Manager asal Sukoharjo, Jawa Tengah yang berspesialisasi dalam Figma (Design System) dan Coda (Agile Sprint Management).

Anda dapat menanyakan hal spesifik seperti:
• Studi kasus (Alfamidiku, Mamikos, ERP Fleet Hub)
• Tingkat keahlian tools desain dan manajemen proyek
• Ketersediaan dan kontak langsung via <b>hherwyn@gmail.com</b> atau WhatsApp <b>+62 812-9772-9136</b>.`;
}

// Post chat endpoint with streaming SSE support
app.post('/api/chat', async (req: Request, res: Response) => {
  const { messages, language = 'id', stream = false } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const lastUserMessage = messages[messages.length - 1]?.text || '';

  // If streaming is requested via SSE
  if (stream) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const activeApiKey = process.env.GEMINI_API_KEY || apiKey;
    if (activeApiKey && activeApiKey !== 'MY_GEMINI_API_KEY') {
      try {
        const ai = getGenAIClient();
        const validMessages = messages
          .filter((m: { role: string; text: string }) => m && typeof m.text === 'string' && m.text.trim().length > 0)
          .map((m: { role: string; text: string }) => ({
            role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
            parts: [{ text: m.text }],
          }));

        if (validMessages.length === 0) {
          validMessages.push({
            role: 'user',
            parts: [{ text: lastUserMessage || 'Halo' }],
          });
        }

        const responseStream = await ai.models.generateContentStream({
          model: 'gemini-3.8-flash',
          contents: validMessages,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.4,
          },
        });

        for await (const chunk of responseStream) {
          const textChunk = chunk.text || '';
          if (textChunk) {
            // Clean any stray asterisks just in case
            const cleanChunk = textChunk.replace(/\*/g, '');
            res.write(`data: ${JSON.stringify({ text: cleanChunk })}\n\n`);
          }
        }

        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
        return res.end();
      } catch (geminiError: any) {
        console.error('Gemini streaming error, falling back:', geminiError?.message || geminiError);
        // Fallback gracefully
        const fallbackText = getIntelligentFallbackResponse(lastUserMessage, language);
        res.write(`data: ${JSON.stringify({ text: fallbackText })}\n\n`);
        res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
        return res.end();
      }
    } else {
      // Simulate real-time streaming chunks for intelligent fallback
      const fallbackText = getIntelligentFallbackResponse(lastUserMessage, language);
      const words = fallbackText.split(' ');
      
      for (let i = 0; i < words.length; i++) {
        const chunk = (i === 0 ? '' : ' ') + words[i];
        res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
        await new Promise((r) => setTimeout(r, 12));
      }
      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      return res.end();
    }
  }

  // Non-streaming response
  const activeApiKey = process.env.GEMINI_API_KEY || apiKey;
  if (activeApiKey && activeApiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = getGenAIClient();
      const validMessages = messages
        .filter((m: { role: string; text: string }) => m && typeof m.text === 'string' && m.text.trim().length > 0)
        .map((m: { role: string; text: string }) => ({
          role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
          parts: [{ text: m.text }],
        }));

      if (validMessages.length === 0) {
        validMessages.push({
          role: 'user',
          parts: [{ text: lastUserMessage || 'Halo' }],
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: validMessages,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.4,
        },
      });

      let reply = response.text || '';
      // Ensure zero asterisks
      reply = reply.replace(/\*/g, '');

      return res.json({ reply });
    } catch (error: any) {
      console.error('Gemini generateContent error:', error?.message || error);
      const fallbackReply = getIntelligentFallbackResponse(lastUserMessage, language);
      return res.json({ reply: fallbackReply });
    }
  } else {
    const fallbackReply = getIntelligentFallbackResponse(lastUserMessage, language);
    return res.json({ reply: fallbackReply });
  }
});

// Start Express server and mount Vite in development or static dist in production
async function start() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true, port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
