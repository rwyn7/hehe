import React, { useState } from 'react';
import { Mail, MessageSquare, MessageCircle, Instagram, Linkedin, Clock, Send, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export function ContactSection() {
  const { profile } = PORTFOLIO_DATA;
  const { language, t: ctxT } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'UI/UX Design (Redesain Web / Mobile App)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const t = {
    directChannelHeader: language === 'en' ? 'Direct Contact Channels' : 'Saluran Kontak Langsung',
    emailLabel: language === 'en' ? 'PRIMARY EMAIL' : 'EMAIL UTAMA',
    emailValue: profile.email,
    whatsappLabel: 'WHATSAPP CHAT',
    whatsappValue: profile.whatsapp,
    linkedinLabel: 'LINKEDIN',
    linkedinValue: 'Herwin Herdiansyah',
    instagramLabel: 'INSTAGRAM',
    instagramValue: '@rwynh__',
    responseTime: language === 'en'
      ? 'Within 1×24 business hours. Timezone WIB (GMT+7).'
      : 'Dalam kurun waktu 1×24 jam kerja. Zona waktu WIB (GMT+7).',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate submission
    setSubmitted(true);
  };

  const whatsappRedirectUrl = `https://wa.me/${profile.whatsappRaw}?text=${encodeURIComponent(
    `Halo Herwin, saya ${formData.name || 'rekan'} (${formData.email || 'email'}).\n` +
    `Kebutuhan: ${formData.role}\n` +
    `Pesan: ${formData.message || 'Saya ingin berdiskusi mengenai proyek.'}`
  )}`;

  return (
    <section id="kontak" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-2">
            {ctxT('contact.kicker')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-tight">
            {ctxT('contact.heading')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {ctxT('contact.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
              {t.directChannelHeader}
            </h3>

            {/* Email Channel */}
            <div className="p-4 bg-[#FAFBFD] dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-blue-400/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    {t.emailLabel}
                  </span>
                  <a href={`mailto:${t.emailValue}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {t.emailValue}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(t.emailValue, 'email')}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={language === 'en' ? 'Copy Email' : 'Salin Email'}
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Channel */}
            <div className="p-4 bg-[#FAFBFD] dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-emerald-400/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    {t.whatsappLabel}
                  </span>
                  <a
                    href="https://wa.me/6281297729136"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {t.whatsappValue}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(t.whatsappValue, 'whatsapp')}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={language === 'en' ? 'Copy WhatsApp' : 'Salin WhatsApp'}
              >
                {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Channel */}
            <div className="p-4 bg-[#FAFBFD] dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-blue-400/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    {t.linkedinLabel}
                  </span>
                  <a
                    href="https://www.linkedin.com/in/herwin-herdiansyah"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t.linkedinValue}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('Herwin Herdiansyah', 'linkedin')}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={language === 'en' ? 'Copy LinkedIn' : 'Salin LinkedIn'}
              >
                {copiedField === 'linkedin' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Instagram Channel */}
            <div className="p-4 bg-[#FAFBFD] dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-rose-400/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 rounded-lg">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    {t.instagramLabel}
                  </span>
                  <a
                    href="https://instagram.com/rwynh__"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                  >
                    {t.instagramValue}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('@rwyn.h__', 'instagram')}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={language === 'en' ? 'Copy Instagram' : 'Salin Instagram'}
              >
                {copiedField === 'instagram' ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Responsiveness Notice */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                  {language === 'en' ? 'Responsiveness:' : 'Responsibilitas:'}
                </span>
                <p className="leading-relaxed">{t.responseTime}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Kirim Pesan Cepat Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {language === 'en' ? 'Quick Message' : 'Kirim Pesan Cepat'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-normal mt-1">
                  {language === 'en'
                    ? 'Briefly describe your project or the open role you have.'
                    : 'Ceritakan singkat tentang proyek atau peran yang sedang Anda buka.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                      {language === 'en' ? 'Your Message Has Been Prepared!' : 'Pesan Anda Berhasil Disiapkan!'}
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1">
                      {language === 'en'
                        ? `Thank you, ${formData.name}. I will review this message and respond as soon as possible.`
                        : `Terima kasih, ${formData.name}. Saya akan meninjau pesan ini dan merespon sesegera mungkin.`}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {language === 'en' ? 'Continue Sending via WhatsApp' : 'Lanjutkan Kirim via WhatsApp'}
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          role: language === 'en' ? 'UI/UX Design (Web / Mobile App Redesign)' : 'UI/UX Design (Redesain Web / Mobile App)',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer"
                    >
                      {language === 'en' ? 'Send Another Message' : 'Kirim Pesan Lain'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {language === 'en' ? 'Full Name' : 'Nama Lengkap'} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'en' ? 'e.g., John Doe' : 'misalnya, John Doe'}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white dark:bg-slate-950"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {language === 'en' ? 'Email Address' : 'Alamat Email'} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={language === 'en' ? 'name@company.com' : 'email@perusahaan.com'}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white dark:bg-slate-950"
                      />
                    </div>
                  </div>

                  {/* Role Need */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {language === 'en' ? 'Project Need / Role' : 'Kebutuhan Proyek / Role'}
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white dark:bg-slate-950"
                    >
                      <option value={language === 'en' ? 'UI Design (User Interface)' : 'UI Design (Desain Antarmuka)'}>
                        {language === 'en' ? 'UI Design (User Interface)' : 'UI Design (Desain Antarmuka)'}
                      </option>
                      <option value={language === 'en' ? 'UX Design (User Experience)' : 'UX Design (Desain Pengalaman Pengguna)'}>
                        {language === 'en' ? 'UX Design (User Experience)' : 'UX Design (Desain Pengalaman Pengguna)'}
                      </option>
                      <option value="Project Management / Sprint Delivery">
                        Project Management / Sprint Delivery
                      </option>
                      <option value={language === 'en' ? 'Interactive Wireframe & Prototype' : 'Wireframe & Prototype Interaktif'}>
                        {language === 'en' ? 'Interactive Wireframe & Prototype' : 'Wireframe & Prototype Interaktif'}
                      </option>
                      <option value="Full Product Redesign & Design System">
                        Full Product Redesign & Design System
                      </option>
                      <option value={language === 'en' ? 'Full-Time / Remote Career Opportunity' : 'Peluang Karir Full-Time / Remote'}>
                        {language === 'en' ? 'Full-Time / Remote Career Opportunity' : 'Peluang Karir Full-Time / Remote'}
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {language === 'en' ? 'Message or Project Description' : 'Pesan atau Deskripsi Proyek'} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        language === 'en'
                          ? 'Tell me about the project background, estimated timeline, or brief link...'
                          : 'Ceritakan latar belakang proyek, estimasi timeline, atau tautan brief...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all bg-white dark:bg-slate-950 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm py-3 px-4 rounded-lg shadow-xs hover:shadow transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'en' ? 'Send Message Now' : 'Kirim Pesan Sekarang'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
