export interface ProjectScreen {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  badge: string;
  mockupSvg?: string;
  imageUrl?: string;
  isCustom?: boolean;
  timestamp?: string;
}

// Generate realistic, rich SVG data URLs for design screens
function createAlfamidiScreen1(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
    <defs>
      <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff5f5"/>
        <stop offset="100%" stop-color="#fee2e2"/>
      </linearGradient>
      <linearGradient id="primary" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#e11d48"/>
        <stop offset="100%" stop-color="#be123c"/>
      </linearGradient>
    </defs>
    <!-- Background Frame -->
    <rect width="800" height="500" fill="#f8fafc" rx="16"/>
    <!-- Top Header Bar -->
    <rect width="800" height="60" fill="url(#primary)" rx="16 16 0 0"/>
    <text x="32" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="18" letter-spacing="1">ALFAMIDIKU EXPRESS</text>
    <rect x="250" y="14" width="380" height="32" rx="16" fill="#ffffff" fill-opacity="0.2"/>
    <text x="270" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13">🔍 Cari sembako, minyak, susu, beras...</text>
    <rect x="650" y="14" width="118" height="32" rx="8" fill="#ffffff"/>
    <text x="670" y="35" fill="#e11d48" font-family="system-ui, sans-serif" font-weight="700" font-size="12">Keranjang (4)</text>

    <!-- Subheader Location Banner -->
    <rect y="60" width="800" height="36" fill="#ffe4e6"/>
    <text x="32" y="83" fill="#9f1239" font-family="system-ui, sans-serif" font-size="12" font-weight="600">📍 Pengiriman ke: Sukoharjo Kota • Slot Tiba Hari Ini: 14:00 - 15:00 WIB (Toko Sukoharjo Indah)</text>

    <!-- Promo Banner Carousel -->
    <rect x="32" y="112" width="736" height="120" rx="12" fill="url(#bg1)" stroke="#fecdd3" stroke-width="1.5"/>
    <text x="56" y="152" fill="#be123c" font-family="system-ui, sans-serif" font-weight="800" font-size="22">FLASH SALE SEMBAKO BULANAN</text>
    <text x="56" y="178" fill="#475569" font-family="system-ui, sans-serif" font-size="13">Diskon hingga 35% + Gratis Ongkir Min. Belanja Rp50.000</text>
    <rect x="56" y="192" width="140" height="28" rx="6" fill="#e11d48"/>
    <text x="75" y="211" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11">KLAIM VOUCHER</text>
    <rect x="590" y="126" width="160" height="92" rx="8" fill="#ffffff" stroke="#fecdd3"/>
    <text x="610" y="155" fill="#e11d48" font-family="system-ui, sans-serif" font-weight="800" font-size="18">-42% DROP</text>
    <text x="610" y="175" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Checkout Friction</text>
    <text x="610" y="195" fill="#059669" font-family="system-ui, sans-serif" font-weight="700" font-size="12">✓ 2-Step Optimized</text>

    <!-- Categories Row -->
    <text x="32" y="260" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="15">Kategori Pilihan</text>
    <rect x="32" y="274" width="105" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="48" y="299" fill="#334155" font-family="system-ui, sans-serif" font-weight="600" font-size="12">🌾 Beras & Biji</text>
    <rect x="150" y="274" width="105" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="166" y="299" fill="#334155" font-family="system-ui, sans-serif" font-weight="600" font-size="12">🍳 Minyak & Gula</text>
    <rect x="268" y="274" width="105" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="284" y="299" fill="#334155" font-family="system-ui, sans-serif" font-weight="600" font-size="12">🥛 Susu & Dairy</text>
    <rect x="386" y="274" width="105" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="402" y="299" fill="#334155" font-family="system-ui, sans-serif" font-weight="600" font-size="12">🧼 Perlengkapan</text>
    <rect x="504" y="274" width="105" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="520" y="299" fill="#334155" font-family="system-ui, sans-serif" font-weight="600" font-size="12">🍏 Buah Segar</text>

    <!-- Product Grid Cards (Bottom) -->
    <rect x="32" y="330" width="225" height="145" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
    <rect x="44" y="342" width="201" height="60" rx="6" fill="#f1f5f9"/>
    <text x="56" y="377" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Minyak Goreng Sania 2L</text>
    <text x="44" y="420" fill="#e11d48" font-family="system-ui, sans-serif" font-weight="700" font-size="14">Rp34.500</text>
    <text x="120" y="420" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-decoration="line-through">Rp39.000</text>
    <rect x="44" y="432" width="201" height="30" rx="6" fill="#e11d48"/>
    <text x="110" y="452" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11">+ Keranjang</text>

    <rect x="287" y="330" width="225" height="145" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
    <rect x="299" y="342" width="201" height="60" rx="6" fill="#f1f5f9"/>
    <text x="311" y="377" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Beras Rojolele Super 5kg</text>
    <text x="299" y="420" fill="#e11d48" font-family="system-ui, sans-serif" font-weight="700" font-size="14">Rp68.900</text>
    <rect x="299" y="432" width="201" height="30" rx="6" fill="#e11d48"/>
    <text x="365" y="452" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11">+ Keranjang</text>

    <rect x="543" y="330" width="225" height="145" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
    <rect x="555" y="342" width="201" height="60" rx="6" fill="#f1f5f9"/>
    <text x="567" y="377" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Susu UHT Diamond 1000ml</text>
    <text x="555" y="420" fill="#e11d48" font-family="system-ui, sans-serif" font-weight="700" font-size="14">Rp18.200</text>
    <rect x="555" y="432" width="201" height="30" rx="6" fill="#e11d48"/>
    <text x="621" y="452" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11">+ Keranjang</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createAlfamidiScreen2(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
    <!-- Frame -->
    <rect width="800" height="500" fill="#f8fafc" rx="16"/>
    <!-- Top Nav -->
    <rect width="800" height="56" fill="#be123c" rx="16 16 0 0"/>
    <text x="32" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="16">← Alur Checkout Kilat (2-Step Single Screen)</text>
    <text x="620" y="36" fill="#ffe4e6" font-family="system-ui, sans-serif" font-size="12">Langkah 1 dari 2</text>

    <!-- Two-column Checkout Layout -->
    <!-- Left Column: Address & Items -->
    <rect x="32" y="80" width="460" height="150" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="52" y="108" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="14">1. Alamat Pengiriman & Waktu Tiba</text>
    <rect x="52" y="122" width="420" height="50" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="68" y="145" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="600" font-size="12">Herwin Herdiansyah (+62 812-9772-9136)</text>
    <text x="68" y="162" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Perum Garden Sukoharjo Indah Blok B4, Sukoharjo, Jawa Tengah</text>
    <rect x="52" y="182" width="200" height="34" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
    <text x="66" y="204" fill="#065f46" font-family="system-ui, sans-serif" font-size="11" font-weight="700">⚡ Slot: 14:00 - 15:00 WIB (Hari Ini)</text>

    <!-- Cart Items Summary -->
    <rect x="32" y="246" width="460" height="224" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="52" y="274" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="14">Item Pesanan (3 Barang)</text>
    <line x1="52" y1="288" x2="472" y2="288" stroke="#f1f5f9"/>
    <text x="52" y="312" fill="#334155" font-family="system-ui, sans-serif" font-size="12">1× Minyak Goreng Sania 2L</text>
    <text x="410" y="312" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="600" font-size="12">Rp34.500</text>
    <text x="52" y="340" fill="#334155" font-family="system-ui, sans-serif" font-size="12">1× Beras Rojolele Super 5kg</text>
    <text x="410" y="340" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="600" font-size="12">Rp68.900</text>
    <text x="52" y="368" fill="#334155" font-family="system-ui, sans-serif" font-size="12">2× Susu UHT Diamond 1000ml</text>
    <text x="410" y="368" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="600" font-size="12">Rp36.400</text>
    <rect x="52" y="390" width="420" height="60" rx="8" fill="#f0fdf4" stroke="#86efac"/>
    <text x="68" y="414" fill="#166534" font-family="system-ui, sans-serif" font-weight="700" font-size="12">🎁 Voucher Otomatis Diterapkan: POTONGAN25K</text>
    <text x="68" y="434" fill="#15803d" font-family="system-ui, sans-serif" font-size="11">Hemat Rp25.000 + Bebas Ongkos Kirim</text>

    <!-- Right Column: Payment & Final CTA -->
    <rect x="510" y="80" width="258" height="390" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="530" y="108" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="14">2. Ringkasan Pembayaran</text>
    <text x="530" y="140" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Subtotal Barang</text>
    <text x="710" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-size="12" text-anchor="end">Rp139.800</text>
    <text x="530" y="165" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Ongkos Kirim</text>
    <text x="710" y="165" fill="#059669" font-family="system-ui, sans-serif" font-size="12" text-anchor="end">GRATIS (Rp0)</text>
    <text x="530" y="190" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Diskon Voucher</text>
    <text x="710" y="190" fill="#e11d48" font-family="system-ui, sans-serif" font-size="12" text-anchor="end">-Rp25.000</text>
    <line x1="530" y1="205" x2="748" y2="205" stroke="#e2e8f0"/>
    <text x="530" y="230" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="800" font-size="14">Total Tagihan</text>
    <text x="748" y="230" fill="#e11d48" font-family="system-ui, sans-serif" font-weight="800" font-size="18" text-anchor="end">Rp114.800</text>

    <!-- Payment Methods -->
    <text x="530" y="265" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="12">Metode Pembayaran Cepat</text>
    <rect x="530" y="278" width="218" height="34" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
    <text x="545" y="300" fill="#1e40af" font-family="system-ui, sans-serif" font-weight="700" font-size="11">✓ QRIS Instan / GoPay / OVO</text>
    <rect x="530" y="318" width="218" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="545" y="340" fill="#475569" font-family="system-ui, sans-serif" font-size="11">BCA Virtual Account</text>
    <rect x="530" y="358" width="218" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="545" y="380" fill="#475569" font-family="system-ui, sans-serif" font-size="11">COD (Bayar di Tempat)</text>

    <rect x="530" y="415" width="218" height="42" rx="8" fill="#e11d48"/>
    <text x="639" y="441" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="13" text-anchor="middle">BAYAR SEKARANG →</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createAlfamidiScreen3(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%">
    <rect width="800" height="500" fill="#f8fafc" rx="16"/>
    <!-- Top Green Header -->
    <rect width="800" height="60" fill="#059669" rx="16 16 0 0"/>
    <text x="32" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="18">✓ PESANAN BERHASIL DIPROSES</text>
    <text x="560" y="38" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="13">No. Pesanan: #ALFA-SKH-88219</text>

    <!-- Tracking Stepper -->
    <rect x="32" y="80" width="736" height="90" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="52" y="106" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Status Pengiriman Real-Time (Estimasi Tiba: 14:25 WIB)</text>

    <!-- Step 1 -->
    <circle cx="90" cy="138" r="14" fill="#059669"/>
    <text x="90" y="143" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">✓</text>
    <text x="90" y="162" fill="#059669" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Diterima</text>
    <line x1="110" y1="138" x2="270" y2="138" stroke="#059669" stroke-width="3"/>

    <!-- Step 2 -->
    <circle cx="290" cy="138" r="14" fill="#059669"/>
    <text x="290" y="143" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">✓</text>
    <text x="290" y="162" fill="#059669" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Dikemas</text>
    <line x1="310" y1="138" x2="470" y2="138" stroke="#059669" stroke-width="3"/>

    <!-- Step 3 Active -->
    <circle cx="490" cy="138" r="16" fill="#2563eb" stroke="#bfdbfe" stroke-width="4"/>
    <text x="490" y="143" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="800" text-anchor="middle">🚚</text>
    <text x="490" y="162" fill="#2563eb" font-family="system-ui, sans-serif" font-size="10" font-weight="800" text-anchor="middle">Kurir Mengantar</text>
    <line x1="512" y1="138" x2="670" y2="138" stroke="#e2e8f0" stroke-width="3"/>

    <!-- Step 4 Pending -->
    <circle cx="690" cy="138" r="14" fill="#e2e8f0"/>
    <text x="690" y="143" fill="#64748b" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">4</text>
    <text x="690" y="162" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">Tiba di Rumah</text>

    <!-- Map & Driver Information -->
    <rect x="32" y="185" width="460" height="280" rx="12" fill="#e2e8f0" stroke="#cbd5e1"/>
    <!-- Mock Map Grid -->
    <line x1="50" y1="240" x2="470" y2="240" stroke="#ffffff" stroke-width="8"/>
    <line x1="160" y1="195" x2="160" y2="450" stroke="#ffffff" stroke-width="8"/>
    <line x1="340" y1="195" x2="340" y2="450" stroke="#ffffff" stroke-width="8"/>
    <circle cx="340" cy="240" r="14" fill="#e11d48"/>
    <text x="340" y="245" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">📍</text>
    <text x="340" y="270" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">Toko Alfamidi</text>

    <circle cx="210" cy="360" r="12" fill="#2563eb"/>
    <text x="210" y="365" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" text-anchor="middle">🛵</text>
    <text x="210" y="388" fill="#1e3a8a" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">Kurir Raka (0.8 km)</text>

    <!-- Driver Card on Right -->
    <rect x="510" y="185" width="258" height="280" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="530" y="215" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="14">Informasi Kurir Mitra</text>
    <rect x="530" y="230" width="50" height="50" rx="25" fill="#eff6ff"/>
    <text x="555" y="260" fill="#2563eb" font-family="system-ui, sans-serif" font-size="20" text-anchor="middle">👤</text>
    <text x="590" y="250" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Raka Pratama</text>
    <text x="590" y="270" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Honda Beat (AD 4921 BZ)</text>
    <rect x="530" y="295" width="218" height="34" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="639" y="316" fill="#15803d" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">📞 Hubungi Kurir (WhatsApp)</text>
    <rect x="530" y="340" width="218" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="545" y="364" fill="#334155" font-family="system-ui, sans-serif" font-weight="700" font-size="11">Metrik Desain Alur Checkout:</text>
    <text x="545" y="386" fill="#059669" font-family="system-ui, sans-serif" font-size="11">• Checkout Selesai: +38%</text>
    <text x="545" y="406" fill="#059669" font-family="system-ui, sans-serif" font-size="11">• Waktu Transaksi: 2.1x Lebih Cepat</text>
    <text x="545" y="426" fill="#059669" font-family="system-ui, sans-serif" font-size="11">• Drop-off Keranjang: -42%</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Mamikos Mobile screens
function createMamikosScreen1(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%">
    <rect width="800" height="500" fill="#f0fdf4" rx="16"/>
    <!-- Top Green Bar -->
    <rect width="800" height="56" fill="#059669" rx="16 16 0 0"/>
    <text x="32" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="18">MAMIKOS MOBILE — PENCARIAN KOS KILAT</text>
    <text x="640" y="36" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="12">Area: Sukoharjo & Sekitarnya</text>

    <!-- Search & Multi Filter Pills -->
    <rect x="32" y="74" width="736" height="48" rx="24" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="56" y="104" fill="#0f172a" font-family="system-ui, sans-serif" font-size="13">🔍 Dekat Kampus Univ / Kantor • Putra / Putri • AC & Wifi</text>
    <rect x="620" y="80" width="136" height="36" rx="18" fill="#059669"/>
    <text x="688" y="103" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="12" text-anchor="middle">Smart Filter (3)</text>

    <!-- Quick Filter Chips -->
    <rect x="32" y="132" width="95" height="30" rx="15" fill="#059669"/>
    <text x="80" y="152" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">Semua Kos</text>
    <rect x="135" y="132" width="90" height="30" rx="15" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="180" y="152" fill="#334155" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Kos Putri</text>
    <rect x="233" y="132" width="90" height="30" rx="15" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="278" y="152" fill="#334155" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Kos Putra</text>
    <rect x="331" y="132" width="115" height="30" rx="15" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="388" y="152" fill="#334155" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Kamar Mandi Dalam</text>
    <rect x="454" y="132" width="100" height="30" rx="15" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="504" y="152" fill="#334155" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Ada AC & Parkir</text>

    <!-- Kos Cards 3 items -->
    <rect x="32" y="180" width="230" height="295" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <rect x="32" y="180" width="230" height="130" rx="12 12 0 0" fill="#e2e8f0"/>
    <text x="147" y="250" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">🖼️ Foto Kamar 360°</text>
    <rect x="44" y="192" width="70" height="22" rx="4" fill="#059669"/>
    <text x="79" y="207" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="10" text-anchor="middle">KOS PUTRI</text>
    <text x="44" y="332" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Kost Graha Sukoharjo Asri</text>
    <text x="44" y="352" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">📍 350m dari Pusat Kota</text>
    <text x="44" y="375" fill="#047857" font-family="system-ui, sans-serif" font-weight="600" font-size="11">✓ AC • Wifi 100Mbps • KM Dalam</text>
    <text x="44" y="415" fill="#059669" font-family="system-ui, sans-serif" font-weight="800" font-size="16">Rp1.250.000</text>
    <text x="135" y="415" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">/ bulan</text>
    <rect x="44" y="430" width="206" height="32" rx="6" fill="#059669"/>
    <text x="147" y="451" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">Ajukan Sewa Langsung</text>

    <!-- Card 2 -->
    <rect x="285" y="180" width="230" height="295" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <rect x="285" y="180" width="230" height="130" rx="12 12 0 0" fill="#e2e8f0"/>
    <text x="400" y="250" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">🖼️ Foto Kamar 360°</text>
    <rect x="297" y="192" width="70" height="22" rx="4" fill="#2563eb"/>
    <text x="332" y="207" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="10" text-anchor="middle">KOS PUTRA</text>
    <text x="297" y="332" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Kost Surya Sentosa Sukoharjo</text>
    <text x="297" y="352" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">📍 500m dari Stasiun / Terminal</text>
    <text x="297" y="375" fill="#047857" font-family="system-ui, sans-serif" font-weight="600" font-size="11">✓ Parkir Mobil • Listrik Termasuk</text>
    <text x="297" y="415" fill="#059669" font-family="system-ui, sans-serif" font-weight="800" font-size="16">Rp950.000</text>
    <text x="375" y="415" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">/ bulan</text>
    <rect x="297" y="430" width="206" height="32" rx="6" fill="#059669"/>
    <text x="400" y="451" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">Ajukan Sewa Langsung</text>

    <!-- Card 3 -->
    <rect x="538" y="180" width="230" height="295" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <rect x="538" y="180" width="230" height="130" rx="12 12 0 0" fill="#e2e8f0"/>
    <text x="653" y="250" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">🖼️ Foto Kamar 360°</text>
    <rect x="550" y="192" width="75" height="22" rx="4" fill="#7c3aed"/>
    <text x="587" y="207" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="10" text-anchor="middle">KOS CAMPUR</text>
    <text x="550" y="332" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Kost Exclusive Harmoni Prima</text>
    <text x="550" y="352" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">📍 Sukoharjo Kota (Bebas Jam Malam)</text>
    <text x="550" y="375" fill="#047857" font-family="system-ui, sans-serif" font-weight="600" font-size="11">✓ Smart Lock • Dapur Bersama</text>
    <text x="550" y="415" fill="#059669" font-family="system-ui, sans-serif" font-weight="800" font-size="16">Rp1.500.000</text>
    <text x="640" y="415" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">/ bulan</text>
    <rect x="550" y="430" width="206" height="32" rx="6" fill="#059669"/>
    <text x="653" y="451" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">Ajukan Sewa Langsung</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createMamikosScreen2(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%">
    <rect width="800" height="500" fill="#f8fafc" rx="16"/>
    <!-- Top Bar -->
    <rect width="800" height="56" fill="#065f46" rx="16 16 0 0"/>
    <text x="32" y="36" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="16">← Detail Properti & Transparansi Biaya Sewa</text>

    <!-- Detail Content -->
    <rect x="32" y="74" width="460" height="200" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="52" y="104" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="800" font-size="16">Kost Graha Sukoharjo Asri Tipe A (AC)</text>
    <text x="52" y="126" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">📍 Jl. Jend. Sudirman No. 42, Sukoharjo, Jawa Tengah</text>
    <rect x="52" y="140" width="90" height="24" rx="4" fill="#ecfdf5"/>
    <text x="97" y="156" fill="#065f46" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">3 Kamar Tersisa</text>
    <rect x="150" y="140" width="110" height="24" rx="4" fill="#eff6ff"/>
    <text x="205" y="156" fill="#1e40af" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Ukuran 3.5 × 4.0 m</text>

    <text x="52" y="190" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Fasilitas Termasuk dalam Biaya:</text>
    <text x="52" y="215" fill="#334155" font-family="system-ui, sans-serif" font-size="12">✓ Listrik Termasuk (Token Gratis) • Kasur Springbed • Lemari & Meja Belajar</text>
    <text x="52" y="240" fill="#334155" font-family="system-ui, sans-serif" font-size="12">✓ Kamar Mandi Dalam (Shower & Kloset Duduk) • Wifi Indihome 100 Mbps</text>
    <text x="52" y="262" fill="#059669" font-family="system-ui, sans-serif" font-size="11" font-weight="700">★ Rating Kebersihan 4.9/5 dari 32 Penghuni Aktif</text>

    <!-- Transparansi Biaya Breakdown -->
    <rect x="32" y="290" width="460" height="185" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="52" y="320" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="14">Transparansi Rincian Biaya (Tanpa Biaya Tersembunyi)</text>
    <text x="52" y="350" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Biaya Sewa 1 Bulan</text>
    <text x="472" y="350" fill="#0f172a" font-family="system-ui, sans-serif" font-size="12" text-anchor="end">Rp1.250.000</text>
    <text x="52" y="375" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Deposit Jaminan (Dikembalikan 100%)</text>
    <text x="472" y="375" fill="#0f172a" font-family="system-ui, sans-serif" font-size="12" text-anchor="end">Rp200.000</text>
    <text x="52" y="400" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">Iuran Sampah & Parkir Motor</text>
    <text x="472" y="400" fill="#059669" font-family="system-ui, sans-serif" font-size="12" text-anchor="end">GRATIS</text>
    <line x1="52" y1="418" x2="472" y2="418" stroke="#e2e8f0"/>
    <text x="52" y="445" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="800" font-size="14">Total Pembayaran Bulan Pertama</text>
    <text x="472" y="445" fill="#059669" font-family="system-ui, sans-serif" font-weight="800" font-size="18" text-anchor="end">Rp1.450.000</text>

    <!-- Right Side Floating Booking Action -->
    <rect x="510" y="74" width="258" height="401" rx="12" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="530" y="106" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="800" font-size="15">Jadwalkan Survei / Sewa</text>
    <text x="530" y="130" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Tentukan tanggal masuk kos:</text>
    <rect x="530" y="144" width="218" height="36" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="546" y="167" fill="#0f172a" font-family="system-ui, sans-serif" font-size="12">📅 1 November 2026</text>

    <text x="530" y="205" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Pilihan Durasi Sewa:</text>
    <rect x="530" y="218" width="105" height="34" rx="6" fill="#059669"/>
    <text x="582" y="239" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">1 Bulan</text>
    <rect x="643" y="218" width="105" height="34" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="695" y="239" fill="#334155" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">3 Bulan (-5%)</text>

    <rect x="530" y="270" width="218" height="85" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="545" y="295" fill="#1e40af" font-family="system-ui, sans-serif" font-weight="700" font-size="12">💬 Tanya Pengelola Kos</text>
    <text x="545" y="315" fill="#3b82f6" font-family="system-ui, sans-serif" font-size="11">Bpk. H. Sukamto (Pemilik)</text>
    <text x="545" y="335" fill="#1e3a8a" font-family="system-ui, sans-serif" font-size="10">Respon chat rata-rata: &lt; 5 menit</text>

    <rect x="530" y="375" width="218" height="42" rx="8" fill="#059669"/>
    <text x="639" y="401" fill="#ffffff" font-family="system-ui, sans-serif" font-weight="800" font-size="13" text-anchor="middle">AJUKAN SEWA KOS →</text>
    <rect x="530" y="425" width="218" height="36" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
    <text x="639" y="448" fill="#334155" font-family="system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">Jadwalkan Survei Lokasi</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// ERP Enterprise screens
function createErpScreen1(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%">
    <rect width="800" height="500" fill="#0f172a" rx="16"/>
    <!-- Top Dark Enterprise Bar -->
    <rect width="800" height="56" fill="#1e293b" rx="16 16 0 0"/>
    <text x="32" y="36" fill="#38bdf8" font-family="system-ui, sans-serif" font-weight="800" font-size="16">ERP LOGISTICS & FLEET DISPATCH ENGINE</text>
    <text x="540" y="36" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">148 Armada Aktif • 99.4% On-time SLA</text>

    <!-- Top KPI Stats -->
    <rect x="32" y="74" width="170" height="66" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="48" y="98" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Total Surat Jalan Hari Ini</text>
    <text x="48" y="126" fill="#f8fafc" font-family="system-ui, sans-serif" font-weight="800" font-size="20">342 SPK</text>

    <rect x="220" y="74" width="170" height="66" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="236" y="98" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Armada Dalam Rute</text>
    <text x="236" y="126" fill="#38bdf8" font-family="system-ui, sans-serif" font-weight="800" font-size="20">118 Truk</text>

    <rect x="408" y="74" width="170" height="66" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="424" y="98" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Approval Menunggu</text>
    <text x="424" y="126" fill="#fbbf24" font-family="system-ui, sans-serif" font-weight="800" font-size="20">3 Pending</text>

    <rect x="596" y="74" width="172" height="66" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="612" y="98" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Efisiensi Bahan Bakar</text>
    <text x="612" y="126" fill="#4ade80" font-family="system-ui, sans-serif" font-weight="800" font-size="20">+18.4% YoY</text>

    <!-- Main Data Table Grid -->
    <rect x="32" y="156" width="736" height="318" rx="8" fill="#1e293b" stroke="#334155"/>
    <!-- Table Header -->
    <rect x="32" y="156" width="736" height="38" rx="8 8 0 0" fill="#334155"/>
    <text x="52" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="700" font-size="11">NO. SPK</text>
    <text x="170" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="700" font-size="11">DRIVER & ARMADA</text>
    <text x="340" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="700" font-size="11">RUTE ASAL - TUJUAN</text>
    <text x="520" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="700" font-size="11">STATUS OPERASIONAL</text>
    <text x="680" y="180" fill="#cbd5e1" font-family="system-ui, sans-serif" font-weight="700" font-size="11">AKSI</text>

    <!-- Row 1 -->
    <line x1="32" y1="236" x2="768" y2="236" stroke="#334155"/>
    <text x="52" y="218" fill="#38bdf8" font-family="system-ui, sans-serif" font-weight="700" font-size="11">SPK-2026-0911</text>
    <text x="170" y="212" fill="#f8fafc" font-family="system-ui, sans-serif" font-weight="600" font-size="11">Bambang S. (Fuso 8T)</text>
    <text x="170" y="228" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Plat: B 9421 UV</text>
    <text x="340" y="218" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11">DC Sukoharjo → Surabaya Tanjung Perak</text>
    <rect x="520" y="204" width="110" height="22" rx="4" fill="#065f46"/>
    <text x="575" y="219" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">DALAM RUTE (78%)</text>
    <rect x="680" y="204" width="60" height="22" rx="4" fill="#0284c7"/>
    <text x="710" y="219" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Detail</text>

    <!-- Row 2 -->
    <line x1="32" y1="284" x2="768" y2="284" stroke="#334155"/>
    <text x="52" y="266" fill="#38bdf8" font-family="system-ui, sans-serif" font-weight="700" font-size="11">SPK-2026-0912</text>
    <text x="170" y="260" fill="#f8fafc" font-family="system-ui, sans-serif" font-weight="600" font-size="11">Hendra W. (Wingbox 12T)</text>
    <text x="170" y="276" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Plat: AD 8219 DA</text>
    <text x="340" y="266" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11">DC Sukoharjo → Cikarang Dry Port</text>
    <rect x="520" y="252" width="110" height="22" rx="4" fill="#854d0e"/>
    <text x="575" y="267" fill="#fef08a" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">BONGKAR MUAT</text>
    <rect x="680" y="252" width="60" height="22" rx="4" fill="#0284c7"/>
    <text x="710" y="267" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Detail</text>

    <!-- Row 3 -->
    <line x1="32" y1="332" x2="768" y2="332" stroke="#334155"/>
    <text x="52" y="314" fill="#38bdf8" font-family="system-ui, sans-serif" font-weight="700" font-size="11">SPK-2026-0913</text>
    <text x="170" y="308" fill="#f8fafc" font-family="system-ui, sans-serif" font-weight="600" font-size="11">Agus T. (Colt Diesel 4T)</text>
    <text x="170" y="324" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Plat: AD 3310 KA</text>
    <text x="340" y="314" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11">Solo Raya Retail Hub → Sukoharjo</text>
    <rect x="520" y="300" width="110" height="22" rx="4" fill="#1e3a8a"/>
    <text x="575" y="315" fill="#bfdbfe" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">SELESAI / CLOSED</text>
    <rect x="680" y="300" width="60" height="22" rx="4" fill="#0284c7"/>
    <text x="710" y="315" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Detail</text>

    <!-- Pagination & Coda Integration status -->
    <rect x="32" y="430" width="736" height="44" rx="0 0 8 8" fill="#0f172a"/>
    <text x="52" y="457" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Menampilkan 1-3 dari 342 data • Sync Coda DB: Aktif (2 detik lalu)</text>
    <text x="650" y="457" fill="#38bdf8" font-family="system-ui, sans-serif" font-weight="700" font-size="11">Export CSV / PDF →</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function createErpScreen2(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%">
    <rect width="800" height="500" fill="#f8fafc" rx="16"/>
    <!-- Top Header -->
    <rect width="800" height="56" fill="#0f172a" rx="16 16 0 0"/>
    <text x="32" y="36" fill="#38bdf8" font-family="system-ui, sans-serif" font-weight="700" font-size="16">CODA AGILE SPRINT & PRD WORKSPACE HUB</text>
    <text x="560" y="36" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Sprint 24 • Handoff Dev Ready</text>

    <!-- Coda Roadmaps Board View -->
    <rect x="32" y="74" width="230" height="395" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="48" y="104" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Backlog & PRD Ready (4)</text>
    <rect x="48" y="118" width="198" height="74" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="60" y="140" fill="#0f172a" font-family="system-ui, sans-serif" font-weight="600" font-size="11">Otomatisasi Validasi Surat Jalan</text>
    <text x="60" y="158" fill="#64748b" font-family="system-ui, sans-serif" font-size="10">PRD disetujui • Est: 5 Story Points</text>
    <rect x="60" y="168" width="70" height="16" rx="4" fill="#eff6ff"/>
    <text x="95" y="180" fill="#2563eb" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle">HIGH PRIORITY</text>

    <!-- Column 2 In Sprint -->
    <rect x="285" y="74" width="230" height="395" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="301" y="104" fill="#2563eb" font-family="system-ui, sans-serif" font-weight="700" font-size="13">In Progress / QA (3)</text>
    <rect x="301" y="118" width="198" height="74" rx="8" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="313" y="140" fill="#1e3a8a" font-family="system-ui, sans-serif" font-weight="600" font-size="11">Multi-level Approval Modal</text>
    <text x="313" y="158" fill="#3b82f6" font-family="system-ui, sans-serif" font-size="10">Figma token handoff ke React dev</text>
    <rect x="313" y="168" width="70" height="16" rx="4" fill="#dbeafe"/>
    <text x="348" y="180" fill="#1d4ed8" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle">DESIGN QA</text>

    <!-- Column 3 Done -->
    <rect x="538" y="74" width="230" height="395" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
    <text x="554" y="104" fill="#059669" font-family="system-ui, sans-serif" font-weight="700" font-size="13">Done & Deployed (12)</text>
    <rect x="554" y="118" width="198" height="74" rx="8" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="566" y="140" fill="#14532d" font-family="system-ui, sans-serif" font-weight="600" font-size="11">Data Table Density Toggle</text>
    <text x="566" y="158" fill="#16a34a" font-family="system-ui, sans-serif" font-size="10">Production release v2.4</text>
    <rect x="566" y="168" width="80" height="16" rx="4" fill="#dcfce7"/>
    <text x="606" y="180" fill="#15803d" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle">VERIFIED 100%</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const INITIAL_PROJECT_SCREENS: Record<string, ProjectScreen[]> = {
  alfamidiku: [
    {
      id: 'alfa-1',
      title: 'Beranda & Pencarian Kilat Belanja Sembako',
      subtitle: 'Tampilan Mobile Responsive — Katalog & Flash Sale',
      description:
        'Mengatasi friksi browsing dengan navigasi instan berbasis kategori cepat, transparansi ketersediaan stok di toko minimarket Sukoharjo, serta promo voucher yang langsung tampil di layar utama.',
      format: 'PNG',
      badge: 'PROD SCREEN 01',
      mockupSvg: createAlfamidiScreen1(),
    },
    {
      id: 'alfa-2',
      title: 'Alur 2-Step Express Checkout & Voucher Sheet',
      subtitle: 'Single Screen Checkout — Menghilangkan 5 Langkah Rumit',
      description:
        'Redesain alur transaksi dengan menyatukan pemilihan slot tiba, verifikasi alamat otomatis, auto-apply kupon diskon, dan metode pembayaran QRIS/VA dalam 1 layar komprehensif.',
      format: 'PNG',
      badge: 'PROD SCREEN 02',
      mockupSvg: createAlfamidiScreen2(),
    },
    {
      id: 'alfa-3',
      title: 'Pelacakan Pesanan & Rute Mitra Kurir Cepat',
      subtitle: 'Live Tracking Order — Status Pemrosesan & Peta Rute',
      description:
        'Antarmuka pelacakan real-time yang memperlihatkan tahapan pesanan (Diterima, Dikemas, Kurir Mengantar) disertai peta rute kurir dan estimasi menit tiba.',
      format: 'PNG',
      badge: 'PROD SCREEN 03',
      mockupSvg: createAlfamidiScreen3(),
    },
  ],
  mamikos: [
    {
      id: 'mami-1',
      title: 'Discovery Peta Kos & Kartu Hunian Modular',
      subtitle: 'Halaman Pencarian Mobile — Smart Filters & Tag Fasilitas',
      description:
        'Antarmuka pencarian hunian kos nomor satu dengan visual kartu modular, chip gender kos berkode warna, dan indikator transparan harga sewa per bulan.',
      format: 'PNG',
      badge: 'MOBILE SCREEN 01',
      mockupSvg: createMamikosScreen1(),
    },
    {
      id: 'mami-2',
      title: 'Detail Kamar Kos & Transparansi Biaya Lengkap',
      subtitle: 'Detail Properti & Booking — Rincian Tanpa Biaya Tersembunyi',
      description:
        'Halaman rincian yang mengklarifikasi fasilitas listrik/kamar mandi dalam, estimasi deposit yang dikembalikan, jadwal survei fisik, dan modul chat langsung ke pemilik kos.',
      format: 'PNG',
      badge: 'MOBILE SCREEN 02',
      mockupSvg: createMamikosScreen2(),
    },
    {
      id: 'mami-3',
      title: 'Konfirmasi Booking & Simulasi Virtual Account',
      subtitle: 'Alur Pengajuan Sewa — 3 Klik Langsung Terverifikasi',
      description:
        'Pengajuan sewa cepat tanpa antrean konfirmasi manual, dilengkapi pilihan tempo bayar (1 atau 3 bulan) dan tanda terima digital.',
      format: 'PNG',
      badge: 'MOBILE SCREEN 03',
      mockupSvg: createMamikosScreen1(), // reusing rich responsive frame
    },
  ],
  'erp-enterprise': [
    {
      id: 'erp-1',
      title: 'Fleet Logistics Dispatch & Live Tracking Board',
      subtitle: 'Enterprise Dark Mode Dashboard — Manajemen 140+ Armada',
      description:
        'Tabel data interaktif dengan densitas tinggi untuk memantau status Surat Perintah Kerja (SPK), rute distribusi barang antar-kota, dan utilisasi kapasitas muatan truk.',
      format: 'PNG',
      badge: 'ENTERPRISE SCREEN 01',
      mockupSvg: createErpScreen1(),
    },
    {
      id: 'erp-2',
      title: 'Coda Agile Sprint Hub & Workspace PRD',
      subtitle: 'Project Management Central — Handoff Desain ke Engineering',
      description:
        'Pusat orkestrasi proyek di Coda yang mengintegrasikan Product Requirement Documents (PRD), Agile Sprint Tracking, dan matriks validasi Design QA.',
      format: 'PNG',
      badge: 'ENTERPRISE SCREEN 02',
      mockupSvg: createErpScreen2(),
    },
    {
      id: 'erp-3',
      title: 'Multi-Level Approval Workflow & Audit Trail',
      subtitle: 'Sistem Persetujuan Bertingkat — Pangkas Waktu Tunggu 60%',
      description:
        'Alur persetujuan dokumen operasional berbasis peran (Supervisor, Manager, Direksi) dengan riwayat jejak audit digital yang transparan.',
      format: 'PNG',
      badge: 'ENTERPRISE SCREEN 03',
      mockupSvg: createErpScreen1(),
    },
  ],
};
