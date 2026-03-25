import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import PageHero from '../../components/ui/PageHero';
import SectionTitle from '../../components/ui/SectionTitle';

const features = [
  {
    titleZh: 'CBCT 影像整合', titleEn: 'CBCT Image Integration',
    descZh: '直接匯入 CBCT 影像，3D 可視化骨骼結構，在真實解剖環境中精確規劃植體位置。',
    descEn: 'Import CBCT images directly for 3D bone structure visualization and precise implant planning in a real anatomical environment.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    titleZh: '植體位置規劃', titleEn: 'Implant Position Planning',
    descZh: '精準控制植體角度、深度與位置，同時自動標示下齒槽神經等重要解剖結構，確保安全植入。',
    descEn: 'Precise control of implant angle, depth and position, with auto-marking of vital structures like the inferior alveolar nerve.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titleZh: '自動手術導板生成', titleEn: 'Auto Surgical Guide Generation',
    descZh: '一鍵生成符合 ISO 標準的手術導板 3D 設計檔，直接輸出至 3D 列印機，縮短製作時間。',
    descEn: 'One-click ISO-compliant surgical guide generation — export directly to 3D printer for fast fabrication.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titleZh: '醫師端可自行調整', titleEn: 'Doctor-Adjustable Planning',
    descZh: '醫師可透過 VIEWER 軟體自行檢視並微調植體計畫，無需依賴技工所，提升溝通效率。',
    descEn: 'Doctors review and fine-tune implant plans via VIEWER software independently, improving communication efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    titleZh: '多品牌植體資料庫', titleEn: 'Multi-Brand Implant Library',
    descZh: '支援 Straumann、Nobel Biocare、Osstem、Dentium 等主流植體品牌，涵蓋主要規格型號。',
    descEn: 'Supports Straumann, Nobel Biocare, Osstem, Dentium and other major brands with their main implant sizes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    titleZh: '安全風險分析', titleEn: 'Safety Risk Analysis',
    descZh: '自動標示危險解剖區域，提供安全植入角度建議，並顯示植體與神經管的安全距離。',
    descEn: 'Auto-marks dangerous anatomy, recommends safe implant angles, and shows clearance from the nerve canal.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const supportedBrands = ['Straumann', 'Nobel Biocare', 'Osstem', 'Dentium', 'MegaGen', 'BioHorizons'];

export default function ImplantPage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Implant Software' : '植牙軟體'}
        subtitle={isEn
          ? 'CBCT-integrated implant planning with auto surgical guide generation — safer, more predictable outcomes.'
          : '整合 CBCT 影像的植牙規劃軟體，自動生成手術導板，讓植牙結果更安全、更可預期。'}
        breadcrumbs={[
          { label: isEn ? 'Dental Software' : '牙科專用軟體', href: '/software' },
          { label: isEn ? 'Implant Software' : '植牙軟體' },
        ]}
        tag={isEn ? 'Software' : '軟體'}
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Key Features' : '核心功能'}
            title={isEn ? 'Precision Implant Planning System' : '精準植牙規劃系統'}
            subtitle={isEn
              ? 'Integrating imaging, planning and fabrication into one seamless workflow for predictable implant outcomes.'
              : '將影像、規劃與製作整合為一體化流程，為植牙手術帶來可預期的高成功率。'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map(f => (
              <div key={f.titleZh} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#D97706]/30 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-[#FFFBEB] rounded-2xl flex items-center justify-center text-[#D97706] mb-4 group-hover:scale-105 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#0B2545] mb-2">{isEn ? f.titleEn : f.titleZh}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{isEn ? f.descEn : f.descZh}</p>
              </div>
            ))}
          </div>

          {/* Supported brands */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 mb-12">
            <h3 className="font-bold text-[#0B2545] text-lg mb-2 text-center">
              {isEn ? 'Supported Implant Brands' : '支援植體品牌'}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-5">
              {isEn ? 'Compatible with all major global implant systems' : '相容全球主要植體系統，持續更新擴充'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {supportedBrands.map(b => (
                <span key={b} className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-[#0B2545] shadow-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Trust band */}
          <div className="bg-gradient-to-r from-[#0B2545] to-[#123B6E] rounded-2xl p-8 text-center text-white mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-xl font-bold">{isEn ? 'Trusted by Implant Specialists Across Taiwan' : '全台植牙專科醫師的首選軟體'}</h3>
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-xl mx-auto">
              {isEn
                ? 'Our implant software is used by hundreds of dental clinics and oral surgeons for its accuracy, safety features and seamless OEM service integration.'
                : '品印植牙軟體以其精準度、安全功能及與代工服務的無縫整合，被全台數百間牙科診所與口腔外科醫師採用。'}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#00AEEF]/25 hover:-translate-y-0.5"
            >
              {isEn ? 'Request a Demo' : '申請試用演示'}
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
