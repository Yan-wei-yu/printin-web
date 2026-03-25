import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import PageHero from '../../components/ui/PageHero';
import SectionTitle from '../../components/ui/SectionTitle';

const features = [
  {
    titleZh: '全中文介面', titleEn: 'Full Chinese UI',
    descZh: '完整中文化操作介面，降低學習門檻，快速上手設計，適合台灣本地診所。',
    descEn: 'Complete localized UI reduces learning curve for fast design onboarding in Taiwan clinics.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    titleZh: '3D 咬合模擬', titleEn: '3D Occlusion Simulation',
    descZh: '動態 3D 咬合模擬，精準評估矯正後咬合關係，降低臨床調整次數。',
    descEn: 'Dynamic 3D occlusion simulation for accurate post-treatment bite assessment, reducing chair adjustments.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titleZh: 'AI 智慧排牙', titleEn: 'AI Smart Tooth Alignment',
    descZh: '一鍵 AI 智慧排牙，自動計算最佳矯正路徑，醫師可手動微調任何步驟。',
    descEn: 'One-click AI tooth arrangement auto-computes the optimal correction path; doctors can manually adjust any step.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    titleZh: '雲端病歷管理', titleEn: 'Cloud Patient Management',
    descZh: '雲端儲存所有病患資料與矯正計畫，隨時隨地安全存取，支援多裝置同步。',
    descEn: 'Cloud storage for all patient data and treatment plans — secure, anytime access across devices.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    titleZh: '一鍵匯出列印', titleEn: 'One-Click Print Export',
    descZh: '設計完成後直接輸出切層檔，無縫銜接 3D 列印流程，消除中間轉換步驟。',
    descEn: 'Direct sliced file export after design for seamless 3D printing workflow — no intermediate conversion needed.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    titleZh: '術前術後對比', titleEn: 'Before/After Comparison',
    descZh: '疊加術前術後 3D 模型對比，方便醫師與患者溝通矯正計畫，提升患者接受度。',
    descEn: 'Overlay 3D before/after models for clear doctor-patient communication and improved case acceptance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const workflow = [
  { zh: '匯入口掃資料', en: 'Import Scan Data' },
  { zh: 'AI 自動排牙', en: 'AI Auto Arrange' },
  { zh: '咬合確認微調', en: 'Verify & Fine-tune' },
  { zh: '匯出列印牙套', en: 'Export & Print Aligner' },
];

export default function OrthodonticPage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Orthodontic Software' : '矯正軟體'}
        subtitle={isEn
          ? 'Full Chinese UI invisible aligner design software powered by AI tooth arrangement — design faster, treat better.'
          : '全中文化隱形牙套設計軟體，搭載 AI 智慧排牙演算法，設計更快速、治療更精準。'}
        breadcrumbs={[
          { label: isEn ? 'Dental Software' : '牙科專用軟體', href: '/software' },
          { label: isEn ? 'Orthodontic Software' : '矯正軟體' },
        ]}
        tag={isEn ? 'Software' : '軟體'}
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Key Features' : '核心功能'}
            title={isEn ? 'Powerful Orthodontic Design Tools' : '強大的矯正設計工具組'}
            subtitle={isEn
              ? 'From treatment planning to aligner export — a complete digital orthodontic workflow in one platform.'
              : '從治療計畫到牙套輸出，完整的數位矯正工作流程盡在一個平台。'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map(f => (
              <div key={f.titleZh} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#059669]/30 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-[#F0FDF4] rounded-2xl flex items-center justify-center text-[#059669] mb-4 group-hover:scale-105 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#0B2545] mb-2">{isEn ? f.titleEn : f.titleZh}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{isEn ? f.descEn : f.descZh}</p>
              </div>
            ))}
          </div>

          {/* Workflow */}
          <div className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] rounded-2xl p-8 mb-12">
            <h3 className="font-bold text-[#0B2545] text-xl mb-2 text-center">
              {isEn ? 'Simplified Clinical Workflow' : '簡化的臨床工作流程'}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-7">
              {isEn ? 'From scan to finished aligner in 4 simple steps' : '從掃描到完成牙套，僅需 4 個步驟'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {workflow.map((s, i) => (
                <div key={s.zh} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-[#059669]/25">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="mt-2 text-sm font-medium text-[#0B2545] text-center whitespace-nowrap">{isEn ? s.en : s.zh}</span>
                  </div>
                  {i < workflow.length - 1 && (
                    <svg className="w-5 h-5 text-[#059669]/40 hidden sm:block mt-[-20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comparison: Digital vs Traditional */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-3 bg-[#0B2545] text-white text-sm font-semibold">
              <div className="px-5 py-3.5 text-white/60">{isEn ? 'Category' : '比較項目'}</div>
              <div className="px-5 py-3.5 text-[#00AEEF] text-center">{isEn ? 'Digital (Our Software)' : '數位化（本軟體）'}</div>
              <div className="px-5 py-3.5 text-white/50 text-center">{isEn ? 'Traditional Method' : '傳統方式'}</div>
            </div>
            {[
              { cat: isEn ? 'Design Time' : '設計時間', digital: isEn ? '30–60 min' : '30–60 分鐘', trad: isEn ? '3–5 days' : '3–5 天' },
              { cat: isEn ? 'Error Rate' : '出錯率', digital: isEn ? '< 2%' : '< 2%', trad: isEn ? '8–12%' : '8–12%' },
              { cat: isEn ? 'Patient Files' : '病歷保存', digital: isEn ? 'Cloud, permanent' : '雲端永久保存', trad: isEn ? 'Paper/plaster' : '紙本/石膏' },
              { cat: isEn ? 'Modification' : '設計修改', digital: isEn ? 'Instant, free' : '即時，免費', trad: isEn ? 'Days, costly' : '需數天，費用高' },
            ].map((row, i) => (
              <div key={row.cat} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="px-5 py-3.5 text-gray-500">{row.cat}</div>
                <div className="px-5 py-3.5 text-[#059669] font-semibold text-center">{row.digital}</div>
                <div className="px-5 py-3.5 text-gray-400 text-center">{row.trad}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#059669]/30 hover:-translate-y-0.5"
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
