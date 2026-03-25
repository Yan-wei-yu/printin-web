import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import PageHero from '../../components/ui/PageHero';
import SectionTitle from '../../components/ui/SectionTitle';

const features = [
  {
    titleZh: '數位蠟型設計', titleEn: 'Digital Wax-Up',
    descZh: '取代傳統蠟型，數位化設計冠橋、全口義齒等各類修復體，更快速、更精準、可重複。',
    descEn: 'Replace traditional wax-up with digital design for crowns, bridges and full dentures — faster, more precise, repeatable.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    titleZh: '邊緣線自動偵測', titleEn: 'Auto Margin Detection',
    descZh: 'AI 自動偵測並描繪預備體邊緣線，節省大量手動操作時間，邊緣精確度達臨床標準。',
    descEn: 'AI auto-detects and traces preparation margins — saves significant manual time with clinical-grade precision.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    titleZh: '3D 咬合分析', titleEn: '3D Occlusion Analysis',
    descZh: '3D 咬合接觸點分析，確保修復體咬合高度與接觸均勻度，減少臨床調磨次數。',
    descEn: '3D occlusion contact analysis ensures proper vertical dimension and even contact — fewer chairside adjustments.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    titleZh: '加工路徑自動輸出', titleEn: 'Auto Milling Path Export',
    descZh: '設計完成後自動生成銑切加工路徑，相容主流五軸加工機，一鍵輸出，無需額外 CAM 軟體。',
    descEn: 'Auto-generate milling paths after design, compatible with major 5-axis mills — no separate CAM software needed.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    titleZh: '多材料支援', titleEn: 'Multi-Material Support',
    descZh: '支援氧化鋯、樹脂、PMMA、蠟塊等多種牙科材料的設計與加工路徑生成。',
    descEn: 'Supports zirconia, resin, PMMA, wax and other dental materials for design and milling path generation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    titleZh: '全口義齒設計', titleEn: 'Full Denture Design',
    descZh: '完整的全口義齒數位化設計流程，從義齒基托到牙齒排列，全程數位化，提升美觀與功能。',
    descEn: 'Complete digital full denture workflow from denture base to tooth arrangement — enhanced esthetics and function.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const materials = [
  { zh: '氧化鋯 (Zirconia)', en: 'Zirconia' },
  { zh: 'PMMA', en: 'PMMA' },
  { zh: '光固化樹脂', en: 'Dental Resin' },
  { zh: '蠟塊', en: 'Wax Block' },
  { zh: '複合樹脂', en: 'Composite Resin' },
  { zh: '鈦合金', en: 'Titanium' },
];

export default function DenturePage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Denture Software' : '假牙軟體'}
        subtitle={isEn
          ? 'Complete digital prosthetic design from scan to milling — dramatically faster and more consistent than traditional lab methods.'
          : '從掃描建模到加工路徑輸出的完整數位義齒設計流程，效率與精確度遠超傳統技工所作業。'}
        breadcrumbs={[
          { label: isEn ? 'Dental Software' : '牙科專用軟體', href: '/software' },
          { label: isEn ? 'Denture Software' : '假牙軟體' },
        ]}
        tag={isEn ? 'Software' : '軟體'}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Key Features' : '核心功能'}
            title={isEn ? 'Full Digital Prosthetic Workflow' : '完整數位義齒設計流程'}
            subtitle={isEn
              ? 'From crown design to full dentures — covering every prosthetic indication with one powerful software platform.'
              : '從單冠設計到全口義齒，一套強大軟體涵蓋所有修復適應症。'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map(f => (
              <div key={f.titleZh} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#7C3AED]/30 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-[#F5F3FF] rounded-2xl flex items-center justify-center text-[#7C3AED] mb-4 group-hover:scale-105 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#0B2545] mb-2">{isEn ? f.titleEn : f.titleZh}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{isEn ? f.descEn : f.descZh}</p>
              </div>
            ))}
          </div>

          {/* Supported materials */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 mb-12">
            <h3 className="font-bold text-[#0B2545] text-lg mb-2 text-center">
              {isEn ? 'Supported Materials' : '支援材料'}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-5">
              {isEn ? 'Design and mill with all major dental materials' : '支援所有主流牙科材料的設計與加工'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {materials.map(m => (
                <span key={m.zh} className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-[#0B2545] shadow-sm">
                  {isEn ? m.en : m.zh}
                </span>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { numZh: '70%↓', numEn: '70% ↓', labelZh: '設計時間較傳統縮短', labelEn: 'vs. traditional design time' },
              { numZh: '±20 μm', numEn: '±20 μm', labelZh: '邊緣精確度', labelEn: 'Margin accuracy' },
              { numZh: '6 種', numEn: '6 materials', labelZh: '支援材料類型', labelEn: 'Supported material types' },
            ].map(s => (
              <div key={s.labelZh} className="bg-gradient-to-br from-[#F5F3FF] to-[#EDE9FE] rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#7C3AED] mb-1">{isEn ? s.numEn : s.numZh}</div>
                <div className="text-gray-600 text-sm">{isEn ? s.labelEn : s.labelZh}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#7C3AED]/30 hover:-translate-y-0.5"
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
