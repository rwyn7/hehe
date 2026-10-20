import { jsPDF } from 'jspdf';
import { PORTFOLIO_DATA, getLocalizedPortfolioData } from '../data/portfolioData';

/**
 * Generates and downloads a pristine, single-page (1-page) PDF Curriculum Vitae
 * with executive visual spacing, comfortable breathing room, and strict alignment
 * with the CV preview modal:
 *
 * 1. Document Header: Name, Dual Roles, Availability Badge, Contact info (Email, Phone, Location)
 * 2. 01. Ringkasan Profesional (Executive Summary)
 * 3. 02. Pengalaman Kerja & Kepemimpinan (Work Experience & Leadership with individual tags)
 * 4. 03. Portofolio Kunci & Studi Kasus (3-column cards with metrics)
 * 5. 04. Pendidikan Formal & 05. Program & Pengakuan Google (2-column balanced layout)
 * 6. 06. Keahlian Inti & Ekosistem Tools (Figma Core & Coda Ecosystem)
 * 7. Verified footer anchored to bottom of page
 */
export function generateAndDownloadCVPdf(language: 'id' | 'en' = 'id') {
  // A4 dimensions: 210mm x 297mm
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const { profile, experiences, projects } = getLocalizedPortfolioData(language);
  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 14;
  const contentWidth = pageWidth - marginX * 2; // 182mm

  // Translations dictionary for bilingual support
  const isEn = language === 'en';
  const labels = {
    secSummary: isEn ? '01. Executive Summary' : '01. Ringkasan Profesional',
    secExp: isEn ? '02. Work Experience & Leadership' : '02. Pengalaman Kerja & Kepemimpinan',
    secProj: isEn ? '03. Featured Portfolio & Case Studies' : '03. Portofolio Kunci & Studi Kasus',
    secEdu: isEn ? '04. Formal Education' : '04. Pendidikan Formal',
    secGoogle: isEn ? '05. Google Programs & Recognition' : '05. Program & Pengakuan Google',
    secSkills: isEn ? '06. Core Skills & Tool Ecosystem' : '06. Keahlian Inti & Ekosistem Tools',
    focus: isEn ? 'Focus' : 'Fokus',
    footerLeft: 'Herwin Herdiansyah  ·  Curriculum Vitae Profesional',
    footerRight: isEn ? 'Page 1 of 1  ·  Verified Resume Document' : 'Halaman 1 dari 1  ·  Dokumen Resmi Terverifikasi',
  };

  // Helper: Section Header matching CV Preview Modal (Blue title + hairline rule with generous spacing)
  const drawSectionHeader = (title: string, yPos: number): number => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235); // text-blue-600
    doc.text(title.toUpperCase(), marginX, yPos);

    const titleWidth = doc.getTextWidth(title.toUpperCase());
    const lineStartX = marginX + titleWidth + 3.5;

    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.35);
    doc.line(lineStartX, yPos - 0.9, marginX + contentWidth, yPos - 0.9);

    return yPos + 5.2;
  };

  // ==========================================
  // 1. DOCUMENT HEADER (Spacious, Crisp & Matching Preview)
  // ==========================================
  let y = 16;

  // Name (Large & Bold)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // slate-950
  doc.text(profile.name.toUpperCase(), marginX, y);

  // Dual Role Title (Well spaced below Name)
  y += 7.2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(37, 99, 235); // blue-600
  doc.text(profile.roles, marginX, y);

  // Contact Strip with bullets (Well spaced below Role)
  y += 5.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactText = `${profile.email}   •   ${profile.whatsapp}   •   ${profile.location}`;
  doc.text(contactText, marginX, y);

  // Header bottom divider line
  y += 5;
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.4);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 6.5;

  // ==========================================
  // 2. RINGKASAN PROFESIONAL (Section 01)
  // ==========================================
  y = drawSectionHeader(labels.secSummary, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(71, 85, 105); // slate-600
  const summaryLines = doc.splitTextToSize(profile.heroBio, contentWidth);
  doc.text(summaryLines, marginX, y);
  y += summaryLines.length * 4.0 + 7;

  // ==========================================
  // 3. PENGALAMAN KERJA & KEPEMIMPINAN (Section 02)
  // ==========================================
  y = drawSectionHeader(labels.secExp, y);

  experiences.forEach((exp) => {
    // Card background box with generous internal padding
    const cardTop = y - 0.5;
    const cardWidth = contentWidth;

    // Calculate heights with comfortable line spacing
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    const descLines = doc.splitTextToSize(exp.description, cardWidth - 10);
    const cardHeight = 13 + descLines.length * 3.8 + 8;

    // Light container box
    doc.setFillColor(248, 250, 252); // slate-50
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.3);
    doc.roundedRect(marginX, cardTop, cardWidth, cardHeight, 1.5, 1.5, 'FD');

    // Role & Company
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(exp.role, marginX + 4.5, cardTop + 5.2);

    const roleWidth = doc.getTextWidth(exp.role);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(37, 99, 235); // blue-600
    doc.text(` — ${exp.company}`, marginX + 4.5 + roleWidth, cardTop + 5.2);

    // Period Badge (Right aligned, clean white pill)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(100, 116, 139); // slate-500
    const periodText = exp.period;
    const periodWidth = doc.getTextWidth(periodText) + 5;
    const periodX = marginX + cardWidth - periodWidth - 4.5;
    const periodY = cardTop + 2.2;

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(periodX, periodY, periodWidth, 4.8, 1, 1, 'FD');
    doc.text(periodText, periodX + 2.5, periodY + 3.4);

    // Description with comfortable leading
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(71, 85, 105); // slate-600
    doc.text(descLines, marginX + 4.5, cardTop + 10.5);

    // Tags rendered as distinct pill badges matching the preview
    let tagX = marginX + 4.5;
    const tagY = cardTop + 10.5 + descLines.length * 3.8 + 2.2;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(100, 116, 139); // slate-500
    const focusLabel = `${labels.focus}:`;
    doc.text(focusLabel, tagX, tagY + 3.2);
    tagX += doc.getTextWidth(focusLabel) + 3;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.6);
    exp.tags.forEach((tag) => {
      const tagW = doc.getTextWidth(tag) + 4;
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.25);
      doc.roundedRect(tagX, tagY, tagW, 4.4, 0.8, 0.8, 'FD');
      doc.setTextColor(71, 85, 105);
      doc.text(tag, tagX + 2, tagY + 3.1);
      tagX += tagW + 2.5;
    });

    y = cardTop + cardHeight + 4.5;
  });

  y += 3;

  // ==========================================
  // 4. PORTOFOLIO KUNCI & STUDI KASUS (Section 03)
  // 3-Column Grid matching the preview modal
  // ==========================================
  y = drawSectionHeader(labels.secProj, y);

  const colGap = 4;
  const colWidth = (contentWidth - colGap * 2) / 3;
  const cardH = 30; // Spacious height for 3 cards
  const gridStartY = y;

  projects.forEach((proj, idx) => {
    const colX = marginX + idx * (colWidth + colGap);

    // Card boundary
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.setLineWidth(0.3);
    doc.roundedRect(colX, gridStartY, colWidth, cardH, 1.5, 1.5, 'FD');

    // Tag & Year
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(37, 99, 235); // blue-600
    doc.text(proj.tag, colX + 3.5, gridStartY + 4.8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(proj.year, colX + colWidth - 3.5, gridStartY + 4.8, { align: 'right' });

    // Project Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(proj.title, colX + 3.5, gridStartY + 9.5);

    // Focus & Scope
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(71, 85, 105);
    const focusLines = doc.splitTextToSize(proj.focus, colWidth - 7).slice(0, 2);
    doc.text(focusLines, colX + 3.5, gridStartY + 14);

    // Divider
    doc.setDrawColor(241, 245, 249); // slate-100
    doc.line(colX + 3.5, gridStartY + 22.5, colX + colWidth - 3.5, gridStartY + 22.5);

    // Key Metric Impact
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(5, 150, 105); // emerald-700
    const metricText = `${proj.metrics[0].label}: ${proj.metrics[0].value}`;
    const metricLines = doc.splitTextToSize(metricText, colWidth - 7);
    doc.text(metricLines[0], colX + 3.5, gridStartY + 27);
  });

  y = gridStartY + cardH + 7;

  // ==========================================
  // 5. PENDIDIKAN FORMAL (04) & PROGRAM GOOGLE (05)
  // 2-Column Side-by-Side Grid matching preview
  // ==========================================
  const halfGap = 5;
  const halfColWidth = (contentWidth - halfGap) / 2;
  const twoColStartY = y;

  // --- Left Column: 04. Pendidikan Formal ---
  let leftY = drawSectionHeader(labels.secEdu, twoColStartY);

  profile.aboutSection.education.forEach((edu) => {
    const cardTop = leftY - 0.5;
    const cardH = 17.5;

    doc.setFillColor(248, 250, 252); // slate-50
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.25);
    doc.roundedRect(marginX, cardTop, halfColWidth, cardH, 1.2, 1.2, 'FD');

    // Degree & Level
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, marginX + 3.5, cardTop + 4.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(148, 163, 184);
    doc.text(edu.level, marginX + halfColWidth - 3.5, cardTop + 4.5, { align: 'right' });

    // Institution
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(37, 99, 235);
    doc.text(edu.institution, marginX + 3.5, cardTop + 8.5);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(71, 85, 105);
    const desc = doc.splitTextToSize(edu.description, halfColWidth - 7).slice(0, 2);
    doc.text(desc, marginX + 3.5, cardTop + 12.5);

    leftY = cardTop + cardH + 3.2;
  });

  // --- Right Column: 05. Program & Pengakuan Google ---
  const rightColX = marginX + halfColWidth + halfGap;
  let rightY = twoColStartY;

  // Right Section Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(37, 99, 235);
  doc.text(labels.secGoogle.toUpperCase(), rightColX, rightY);

  const gTitleWidth = doc.getTextWidth(labels.secGoogle.toUpperCase());
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.35);
  doc.line(rightColX + gTitleWidth + 3, rightY - 0.9, rightColX + halfColWidth, rightY - 0.9);
  rightY += 5.2;

  profile.aboutSection.googleHighlights.forEach((g) => {
    const cardTop = rightY - 0.5;
    const cardH = 17.5;

    doc.setFillColor(248, 250, 252); // slate-50
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.25);
    doc.roundedRect(rightColX, cardTop, halfColWidth, cardH, 1.2, 1.2, 'FD');

    // Title & Badge
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(15, 23, 42);
    const gTitleLines = doc.splitTextToSize(g.title, halfColWidth - 32);
    doc.text(gTitleLines[0], rightColX + 3.5, cardTop + 4.5);

    // Badge
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.4);
    doc.setTextColor(180, 83, 9); // amber-700
    const bText = g.badge;
    const bW = doc.getTextWidth(bText) + 4;
    const bX = rightColX + halfColWidth - bW - 3.5;
    doc.setFillColor(254, 243, 199); // amber-100
    doc.roundedRect(bX, cardTop + 1.8, bW, 4.2, 0.8, 0.8, 'F');
    doc.text(bText, bX + 2, cardTop + 4.6);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(71, 85, 105);
    const gDesc = doc.splitTextToSize(g.description, halfColWidth - 7).slice(0, 2);
    doc.text(gDesc, rightColX + 3.5, cardTop + 9.5);

    rightY = cardTop + cardH + 3.2;
  });

  y = Math.max(leftY, rightY) + 4.5;

  // ==========================================
  // 6. KEAHLIAN INTI & EKOSISTEM TOOLS (Section 06)
  // 2-Column Boxes (Figma Core & Coda Ecosystem)
  // ==========================================
  y = drawSectionHeader(labels.secSkills, y);

  const skillsH = 22;
  const skillColWidth = halfColWidth;

  // Left Skill Box: Figma
  doc.setFillColor(239, 246, 255); // blue-50
  doc.setDrawColor(219, 234, 254); // blue-100
  doc.setLineWidth(0.3);
  doc.roundedRect(marginX, y, skillColWidth, skillsH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text('UI/UX Designer — Figma Core', marginX + 4, y + 5.2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(71, 85, 105);
  const figmaSummary =
    'Auto-Layout (Expert), Interactive Micro-Interactions & Handoff (Advanced), Atomic Design System & Variable Tokens (Proficient).';
  const figmaLines = doc.splitTextToSize(figmaSummary, skillColWidth - 8);
  doc.text(figmaLines, marginX + 4, y + 10);

  // Right Skill Box: Coda
  doc.setFillColor(254, 252, 232); // amber-50/yellow-50
  doc.setDrawColor(254, 240, 138); // yellow-200
  doc.setLineWidth(0.3);
  doc.roundedRect(rightColX, y, skillColWidth, skillsH, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);
  doc.text('Project Management — Coda Ecosystem', rightColX + 4, y + 5.2);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(71, 85, 105);
  const codaSummary =
    'PRD, Scope Canvas & User Stories (Advanced), Relational Tables & Sprint Gantt Charts (Proficient), Milestone Dashboard (Intermediate).';
  const codaLines = doc.splitTextToSize(codaSummary, skillColWidth - 8);
  doc.text(codaLines, rightColX + 4, y + 10);

  // ==========================================
  // 7. FOOTER (Strict single-page anchor)
  // ==========================================
  const footerLineY = pageHeight - 11;
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.35);
  doc.line(marginX, footerLineY, marginX + contentWidth, footerLineY);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text(labels.footerLeft, marginX, footerLineY + 5);
  doc.text(labels.footerRight, marginX + contentWidth, footerLineY + 5, { align: 'right' });

  // Safety assert: Ensure strictly 1 page in document
  const finalPages = doc.getNumberOfPages();
  if (finalPages > 1) {
    for (let p = finalPages; p > 1; p--) {
      doc.deletePage(p);
    }
  }

  // Trigger browser download
  const fileName = 'CV_Herwin_Herdiansyah_UIUX_PM.pdf';
  doc.save(fileName);
}
