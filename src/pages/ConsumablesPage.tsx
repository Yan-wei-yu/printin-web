import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';

const consumableCategories = [
  {
    category: { zh: '列印樹脂', en: 'Print Resins' },
    color: '#00AEEF',
    bg: '#F0F9FF',
    borderColor: '#BAE6FD',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    items: [
      {
        nameZh: '模型樹脂 (Model Resin)',
        nameEn: 'Model Resin',
        descZh: '高精度牙科模型，尺寸穩定性佳，適合製作石膏代替模型與工作模型。',
        descEn: 'High-precision dental models with excellent dimensional stability for stone substitute and working models.',
        tagZh: 'ISO 認證', tagEn: 'ISO Certified',
      },
      {
        nameZh: '矯正透明樹脂 (Clear Ortho)',
        nameEn: 'Clear Ortho Resin',
        descZh: '高透明度，專為牙套壓模底座設計，表面光滑，易於拋光。',
        descEn: 'High transparency for aligner mold bases — smooth surface easy to polish.',
        tagZh: '生物相容', tagEn: 'Biocompatible',
      },
      {
        nameZh: '手術導板樹脂 (Surgical Guide)',
        nameEn: 'Surgical Guide Resin',
        descZh: '醫療級生物相容性材料，符合 ISO 10993，專為口內手術使用設計。',
        descEn: 'Medical-grade biocompatible material meeting ISO 10993 for intraoral surgical use.',
        tagZh: 'ISO 10993', tagEn: 'ISO 10993',
      },
      {
        nameZh: '臨時冠橋樹脂 (Temp Crown)',
        nameEn: 'Temporary Crown Resin',
        descZh: '口腔生物相容，高強度耐磨，適合臨時修復體短期使用。',
        descEn: 'Oral biocompatible, high strength and abrasion resistance for short-term temporary restorations.',
        tagZh: '高強度', tagEn: 'High Strength',
      },
    ],
  },
  {
    category: { zh: '植牙配件', en: 'Implant Accessories' },
    color: '#D97706',
    bg: '#FFFBEB',
    borderColor: '#FDE68A',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      {
        nameZh: '植體專用鑽針套組',
        nameEn: 'Implant Drill Kit',
        descZh: '適用多品牌植體系統，鑽針鍍層耐磨，確保精準導引定位。',
        descEn: 'Multi-brand compatible, wear-resistant coated drills for precise guided positioning.',
        tagZh: '多品牌相容', tagEn: 'Multi-brand',
      },
      {
        nameZh: '導板固定釘',
        nameEn: 'Guide Fixation Pins',
        descZh: '安全固定手術導板，防止術中位移，確保植體植入精準度。',
        descEn: 'Securely fix surgical guides to prevent intraoperative movement for precise implant placement.',
        tagZh: '防移位設計', tagEn: 'Anti-shift Design',
      },
      {
        nameZh: '掃描體 (Scan Body)',
        nameEn: 'Scan Body',
        descZh: '支援主流植體系統數位掃描定位，高精度基準點確保冠修復精準度。',
        descEn: 'Supports major implant system digital scanning with high-precision reference for crown accuracy.',
        tagZh: '高精度', tagEn: 'High Precision',
      },
    ],
  },
  {
    category: { zh: '熱壓膜片', en: 'Thermoforming Films' },
    color: '#7C3AED',
    bg: '#F5F3FF',
    borderColor: '#DDD6FE',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: [
      {
        nameZh: '透明矯正膜片',
        nameEn: 'Clear Aligner Film',
        descZh: '高透明度、高彈性，專為隱形牙套製作設計，厚度規格多元。',
        descEn: 'High transparency and elasticity, purpose-built for invisible aligner fabrication with multiple thickness options.',
        tagZh: '多厚度選擇', tagEn: 'Multi-thickness',
      },
      {
        nameZh: '厚版夜間保護膜片',
        nameEn: 'Nightguard Film',
        descZh: '高耐磨性，適合夜間磨牙保護板製作，舒適耐用。',
        descEn: 'High abrasion resistance for nightguard fabrication — comfortable and durable.',
        tagZh: '高耐磨', tagEn: 'High Durability',
      },
      {
        nameZh: '美白托盤膜片',
        nameEn: 'Whitening Tray Film',
        descZh: '柔軟彈性材質，與牙齒輪廓貼合性佳，適合美白托盤製作。',
        descEn: 'Soft elastic material with excellent tooth contour fit for whitening tray fabrication.',
        tagZh: '高貼合性', tagEn: 'Superior Fit',
      },
    ],
  },
];

const certifications = [
  { nameZh: 'ISO 10993 生物相容性', nameEn: 'ISO 10993 Biocompatibility' },
  { nameZh: 'CE 醫療器材認證', nameEn: 'CE Medical Device' },
  { nameZh: 'FDA 510(k) 登錄', nameEn: 'FDA 510(k) Listed' },
  { nameZh: 'TFDA 衛部醫器', nameEn: 'TFDA Approved' },
];

export default function ConsumablesPage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Consumables' : '耗材'}
        subtitle={isEn
          ? 'Complete consumable supply — certified print resins, implant accessories and thermoforming films from a single trusted source.'
          : '完整的耗材供應，經認證的列印樹脂、植牙配件與熱壓膜片，一站式採購。'}
        breadcrumbs={[{ label: isEn ? 'Consumables' : '耗材' }]}
        tag={isEn ? 'Consumables' : '耗材'}
      />

      {/* Certification strip */}
      <section className="bg-[#0B2545] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-widest shrink-0">
              {isEn ? 'Certifications' : '認證標準'}
            </span>
            {certifications.map(c => (
              <div key={c.nameZh} className="flex items-center gap-2 text-white/70">
                <svg className="w-4 h-4 text-[#00AEEF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium">{isEn ? c.nameEn : c.nameZh}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Product Range' : '產品系列'}
            title={isEn ? 'Quality Dental Consumables' : '優質牙科耗材'}
            subtitle={isEn
              ? 'Every consumable is rigorously tested and certified for dental use — ensuring consistent clinical quality every time.'
              : '所有耗材均經嚴格測試與牙科認證，確保每次使用都能達到一致的臨床品質。'}
          />

          <div className="space-y-16">
            {consumableCategories.map(cat => (
              <div key={cat.category.zh}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b-2" style={{ borderColor: cat.color + '20' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: cat.bg, color: cat.color }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0B2545]">{isEn ? cat.category.en : cat.category.zh}</h2>
                    <p className="text-gray-400 text-xs">{cat.items.length} {isEn ? 'products' : '款產品'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {cat.items.map(item => (
                    <div
                      key={item.nameZh}
                      className="bg-white rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
                      style={{ borderColor: cat.borderColor }}
                    >
                      <div className="h-2" style={{ backgroundColor: cat.color }} />
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: cat.bg, color: cat.color }}>
                            {cat.icon}
                          </div>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ color: cat.color, backgroundColor: cat.bg }}
                          >
                            {isEn ? item.tagEn : item.tagZh}
                          </span>
                        </div>
                        <h3 className="font-semibold text-[#0B2545] text-sm mb-2 group-hover:text-[#00AEEF] transition-colors leading-snug">
                          {isEn ? item.nameEn : item.nameZh}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {isEn ? item.descEn : item.descZh}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk order CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0B2545] to-[#123B6E] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-white text-xl mb-2">
                {isEn ? 'Need Bulk Orders or Custom Specs?' : '需要大量訂購或客製化規格？'}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-lg">
                {isEn
                  ? 'Contact us for volume pricing, custom packaging, or OEM consumable specifications tailored to your clinic.'
                  : '聯絡我們詢問量購優惠、客製化包裝或專為您診所量身打造的 OEM 耗材規格。'}
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#00AEEF]/25 hover:-translate-y-0.5"
            >
              {isEn ? 'Contact Us' : '聯絡我們'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
