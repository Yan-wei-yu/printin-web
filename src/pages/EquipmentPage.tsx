import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';

const featuredProducts = [
  {
    nameZh: 'PrintInDLP+',
    nameEn: 'PrintInDLP+',
    tagZh: '自主研發',
    tagEn: 'In-House',
    descZh: '品印三維自主研發的牙科專用 DLP 3D 列印機，針對牙科工作流程深度優化，支援全系列牙科樹脂，穩定性業界領先。',
    descEn: 'PrintIn3D\'s proprietary dental DLP 3D printer, deeply optimized for dental workflows. Supports all dental resins with industry-leading stability.',
    specsZh: ['列印尺寸 192×108×220 mm', '解析度 50 μm XY', 'UV 波長 405 nm', '切層軟體一體整合'],
    specsEn: ['Build size 192×108×220 mm', 'Resolution 50 μm XY', 'UV wavelength 405 nm', 'Integrated slicing software'],
    color: '#00AEEF',
    bg: '#F0F9FF',
  },
  {
    nameZh: 'PrintInMill 五軸加工機',
    nameEn: 'PrintInMill 5-Axis Mill',
    tagZh: '旗艦機型',
    tagEn: 'Flagship',
    descZh: '桌上型五軸牙科加工中心機，支援氧化鋯、PMMA、蠟塊等各類材料，精度 ±10 μm，適合技工所及診所內製作。',
    descEn: 'Desktop 5-axis dental milling center supporting zirconia, PMMA, wax and more. ±10 μm accuracy for in-house lab and clinic fabrication.',
    specsZh: ['五軸聯動加工', '精度 ±10 μm', '支援氧化鋯 / PMMA / 蠟', '全自動換刀系統'],
    specsEn: ['5-axis simultaneous milling', 'Accuracy ±10 μm', 'Zirconia / PMMA / Wax', 'Auto tool-change system'],
    color: '#D97706',
    bg: '#FFFBEB',
  },
];

const equipmentCategories = [
  {
    category: { zh: '掃描設備', en: 'Scanning Equipment' },
    color: '#00AEEF',
    bg: '#F0F9FF',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { nameZh: '口腔內掃描儀', nameEn: 'Intraoral Scanner', descZh: '高精度口腔掃描，即時 3D 建模，取代傳統印模', descEn: 'High-precision oral scanning with real-time 3D modeling, replacing traditional impressions' },
      { nameZh: '桌上型掃描儀', nameEn: 'Desktop Scanner', descZh: '適用印模及石膏模型掃描，高精度數位化', descEn: 'For impression and plaster model scanning with high-precision digitization' },
      { nameZh: '臉部掃描儀', nameEn: 'Face Scanner', descZh: '精確臉部輪廓擷取，輔助美觀分析與排牙設計', descEn: 'Precise facial contour capture for esthetic analysis and tooth arrangement' },
    ],
  },
  {
    category: { zh: '3D 列印設備', en: '3D Printing Equipment' },
    color: '#059669',
    bg: '#F0FDF4',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    items: [
      { nameZh: 'PrintInDLP+', nameEn: 'PrintInDLP+', descZh: '自研牙科 DLP 列印機，高精度高穩定性，完整售後支援', descEn: 'In-house dental DLP printer, high precision & stability with complete after-sales support' },
      { nameZh: 'Lumii DLP', nameEn: 'Lumii DLP', descZh: '工業級 DLP 技術，大尺寸列印，適合高產量需求', descEn: 'Industrial DLP technology with large print size for high-volume production' },
      { nameZh: 'SONIC XL 4K PLUS', nameEn: 'SONIC XL 4K PLUS', descZh: '4K 高解析度 LCD 列印機，速度與精度兼具', descEn: '4K high resolution LCD printer balancing speed and precision' },
      { nameZh: 'SOL PLUS', nameEn: 'SOL PLUS', descZh: '大幅面 LCD 牙科列印機（12.7×21.8 cm），業界最快樹脂加熱系統，可同時列印多件修復體，支援全陶瓷混合樹脂', descEn: 'Large-format LCD dental printer (12.7×21.8 cm) with industry-fastest resin heater, supporting crowns, bridges, surgical guides and biocompatible prosthetics' },
      { nameZh: 'Form 4', nameEn: 'Form 4', descZh: 'Formlabs 旗艦 SLA 列印機，完整牙科材料支援', descEn: 'Formlabs flagship SLA printer with full dental material support' },
      { nameZh: 'PrintInCure+', nameEn: 'PrintInCure+', descZh: '品印三維高強度固化機，高功率寬頻 LED、輸出強度可調、記憶功能，快速均勻固化 3D 列印牙科材料', descEn: 'PrintIn3D high-intensity curing unit with high-power wide-band LED, adjustable output, and memory function for rapid uniform curing of dental 3D prints' },
    ],
  },
  {
    category: { zh: '加工設備', en: 'Milling Equipment' },
    color: '#D97706',
    bg: '#FFFBEB',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { nameZh: 'PrintInMill 五軸加工機', nameEn: 'PrintInMill 5-Axis Mill', descZh: '精準五軸銑切，支援氧化鋯、PMMA、蠟塊等材料', descEn: 'Precise 5-axis milling supporting zirconia, PMMA, wax and more' },
      { nameZh: '燒結爐 F20', nameEn: 'Sintering Furnace F20', descZh: '氧化鋯高溫燒結，精準溫控確保材料性能', descEn: 'Zirconia high-temp sintering with precise temperature control' },
      { nameZh: '燒瓷爐 F30', nameEn: 'Ceramic Furnace F30', descZh: '陶瓷上瓷、結晶化與上光一機完成', descEn: 'Ceramic glazing, crystallization and polishing in one unit' },
    ],
  },
  {
    category: { zh: '後處理 / 週邊', en: 'Post-process & Peripherals' },
    color: '#7C3AED',
    bg: '#F5F3FF',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    items: [
      { nameZh: '氣壓熱塑成型機', nameEn: 'Vacuum Forming Machine', descZh: '牙套與保護板製作必備，快速精準成型', descEn: 'Essential for aligner and nightguard fabrication with fast precision forming' },
      { nameZh: 'PrintInTrimmer 膜片切割機', nameEn: 'PrintInTrimmer', descZh: '精準裁切熱壓膜片，提升製作效率', descEn: 'Precision thermoforming film trimming for improved fabrication efficiency' },
      { nameZh: '醫療頭燈', nameEn: 'Medical Headlight', descZh: '高亮度醫療級 LED 頭燈，提升臨床視野', descEn: 'High-brightness medical LED headlight for improved clinical visibility' },
    ],
  },
];

export default function EquipmentPage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Digital Dental Equipment' : '數位牙科設備'}
        subtitle={isEn
          ? 'Complete hardware ecosystem — from scanning and 3D printing to milling and finishing. All from a single trusted partner.'
          : '完整的硬體生態系，涵蓋掃描、列印、銑切與後處理，一家廠商提供全方位設備解決方案。'}
        breadcrumbs={[{ label: isEn ? 'Equipment' : '數位牙科設備' }]}
        tag={isEn ? 'Equipment' : '設備'}
      />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Featured' : '明星機型'}
            title={isEn ? 'Our Signature Products' : '品印三維旗艦機型'}
            subtitle={isEn
              ? 'Developed and refined in collaboration with dental professionals for optimal clinical performance.'
              : '與牙科專業人士共同開發與優化，為臨床工作流程提供最佳性能表現。'}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProducts.map(p => (
              <div
                key={p.nameZh}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: p.color }} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span
                        className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-full mb-2"
                        style={{ color: p.color, backgroundColor: p.bg }}
                      >
                        {isEn ? p.tagEn : p.tagZh}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0B2545]">{isEn ? p.nameEn : p.nameZh}</h3>
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: p.bg }}
                    >
                      <svg className="w-6 h-6" style={{ color: p.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {isEn ? p.descEn : p.descZh}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {(isEn ? p.specsEn : p.specsZh).map(spec => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: p.color }}
                  >
                    {isEn ? 'Request Quotation' : '索取報價'}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Equipment Catalog */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Full Catalog' : '完整設備目錄'}
            title={isEn ? 'Complete Equipment Range' : '完整設備系列'}
            subtitle={isEn
              ? 'Every product is carefully selected and tested to ensure compatibility with our software ecosystem.'
              : '每款設備均經過嚴格篩選與測試，確保與我們的軟體生態系完美相容。'}
          />

          <div className="space-y-14">
            {equipmentCategories.map(cat => (
              <div key={cat.category.zh}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: cat.bg }}
                  >
                    <span style={{ color: cat.color }}>{cat.icon}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0B2545]">
                    {isEn ? cat.category.en : cat.category.zh}
                  </h2>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.items.map(item => (
                    <div
                      key={item.nameZh}
                      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                        style={{ backgroundColor: cat.bg }}
                      >
                        <span style={{ color: cat.color }}>{cat.icon}</span>
                      </div>
                      <h3 className="font-semibold text-[#0B2545] mb-1.5 text-sm group-hover:text-[#00AEEF] transition-colors">
                        {isEn ? item.nameEn : item.nameZh}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {isEn ? item.descEn : item.descZh}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-[#0B2545] to-[#123B6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isEn ? 'Need Help Choosing Equipment?' : '不確定選哪款設備？'}
          </h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto">
            {isEn
              ? 'Our specialists will assess your clinic\'s needs and recommend the perfect equipment combination.'
              : '我們的專業顧問將評估您診所的需求，推薦最適合的設備組合方案。'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#00AEEF]/25 hover:-translate-y-0.5"
          >
            {isEn ? 'Talk to a Specialist' : '諮詢專業顧問'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
