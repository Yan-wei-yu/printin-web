import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';

const softwareItems = [
  {
    id: 'slicing',
    href: '/software/slicing',
    titleZh: '切層軟體',
    titleEn: 'Slicing Software',
    descZh: '精準切層，自動優化列印參數，支援多種牙科樹脂材料，大幅縮短設置時間。',
    descEn: 'Precision slicing with auto-optimized parameters for dental resins, dramatically reducing setup time.',
    features: {
      zh: ['自動支撐生成', '多材料設定檔', '列印時間預估', '高精度切層演算法', '支援主流牙科印表機'],
      en: ['Auto support generation', 'Multi-material profiles', 'Print time estimation', 'High-precision slice algorithm', 'Supports major dental printers'],
    },
    color: '#00AEEF',
    borderColor: 'border-[#00AEEF]',
    tagZh: '必備基礎',
    tagEn: 'Essential',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    id: 'orthodontic',
    href: '/software/orthodontic',
    titleZh: '矯正軟體',
    titleEn: 'Orthodontic Software',
    descZh: '全中文化介面，快速設計隱形牙套，智慧排牙演算法搭配 3D 咬合模擬，效率倍增。',
    descEn: 'Full Chinese UI for rapid invisible aligner design with smart tooth arrangement and 3D occlusion simulation.',
    features: {
      zh: ['全中文介面', '3D 咬合模擬', '自動排牙演算法', '雲端病歷管理', '一鍵匯出列印檔'],
      en: ['Full Chinese UI', '3D occlusion simulation', 'Smart tooth alignment', 'Cloud patient management', 'One-click print export'],
    },
    color: '#059669',
    borderColor: 'border-[#059669]',
    tagZh: '矯正專科',
    tagEn: 'Orthodontics',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    id: 'implant',
    href: '/software/implant',
    titleZh: '植牙軟體',
    titleEn: 'Implant Software',
    descZh: '整合 CBCT 影像，精確規劃植體位置與角度，自動生成手術導板，讓植牙更安全精準。',
    descEn: 'Integrates CBCT images for precise implant position & angle planning with auto surgical guide generation.',
    features: {
      zh: ['CBCT 影像匯入', '植體角度規劃', '自動導板生成', '醫師可自行調整', '多品牌植體庫'],
      en: ['CBCT image import', 'Implant angle planning', 'Auto guide generation', 'Doctor-adjustable', 'Multi-brand implant library'],
    },
    color: '#D97706',
    borderColor: 'border-[#D97706]',
    tagZh: '植牙專科',
    tagEn: 'Implantology',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    id: 'denture',
    href: '/software/denture',
    titleZh: '假牙軟體',
    titleEn: 'Denture Software',
    descZh: '數位義齒設計全流程，從掃描建模、蠟型設計到加工路徑輸出，效率比傳統提升數倍。',
    descEn: 'Full digital prosthetic workflow from scan modeling and wax-up design to milling path output.',
    features: {
      zh: ['數位蠟型設計', '邊緣線自動偵測', '咬合分析', '加工路徑匯出', '多材料支援'],
      en: ['Digital wax-up', 'Auto margin detection', 'Occlusion analysis', 'Milling path export', 'Multi-material support'],
    },
    color: '#7C3AED',
    borderColor: 'border-[#7C3AED]',
    tagZh: '補綴科',
    tagEn: 'Prosthodontics',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

// Comparison table data
const comparisonRows = [
  { featureZh: '適用科別', featureEn: 'Specialty', values: ['通用', '矯正科', '植牙科', '補綴科'] },
  { featureZh: '中文介面', featureEn: 'Chinese UI', values: [true, true, true, true] },
  { featureZh: 'CBCT 整合', featureEn: 'CBCT Integration', values: [false, false, true, false] },
  { featureZh: '雲端病歷', featureEn: 'Cloud Records', values: [false, true, false, false] },
  { featureZh: '加工路徑輸出', featureEn: 'Milling Path Export', values: [false, false, false, true] },
  { featureZh: '3D 模擬預覽', featureEn: '3D Simulation', values: [true, true, true, true] },
  { featureZh: '年費訂閱', featureEn: 'Annual Subscription', values: [true, true, true, true] },
];

export default function SoftwarePage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Dental Software Solutions' : '牙科專用軟體'}
        subtitle={isEn
          ? 'Complete dental software for slicing, orthodontics, implants, and dentures — all in one ecosystem.'
          : '涵蓋切層、矯正、植牙、假牙的完整牙科軟體生態系，助您全面數位化。'}
        breadcrumbs={[{ label: isEn ? 'Dental Software' : '牙科專用軟體' }]}
      />

      {/* Software cards */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Software Suite' : '軟體套件'}
            title={isEn ? 'Four Specialized Solutions' : '四款專科軟體'}
            subtitle={isEn
              ? 'Each solution is purpose-built for its dental specialty, with full Chinese UI and professional support included.'
              : '每款軟體專為對應牙科專科設計，全中文介面，附完整技術支援服務。'}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {softwareItems.map(item => (
              <Link
                key={item.id}
                to={item.href}
                className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="h-0.5" style={{ backgroundColor: item.color }} />
                <div className="p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-[#00AEEF] transition-colors">
                          {isEn ? item.titleEn : item.titleZh}
                        </h3>
                        <span
                          className="px-2 py-0.5 text-xs font-semibold rounded"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          {isEn ? item.tagEn : item.tagZh}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {isEn ? item.descEn : item.descZh}
                      </p>
                      <ul className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                        {(isEn ? item.features.en : item.features.zh).map(f => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-gray-600">
                            <svg className="w-3 h-3 shrink-0" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{isEn ? 'Annual subscription · Support included' : '年費訂閱・含技術支援'}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold transition-all" style={{ color: item.color }}>
                      {isEn ? 'Learn More' : '了解詳情'}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Comparison' : '功能比較'}
            title={isEn ? 'Software Feature Comparison' : '軟體功能對照'}
            subtitle={isEn
              ? 'Select the solution that matches your clinic or lab specialty.'
              : '依照您的診所或牙技所專科需求，選擇最適合的方案。'}
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B2545]">
                  <th className="text-left px-6 py-4 text-white/60 font-medium text-xs uppercase tracking-wider w-48">
                    {isEn ? 'Feature' : '功能'}
                  </th>
                  {softwareItems.map(item => (
                    <th key={item.id} className="px-6 py-4 text-center">
                      <div className="text-white font-semibold text-sm">{isEn ? item.titleEn : item.titleZh}</div>
                      <div className="text-xs mt-0.5" style={{ color: item.color }}>
                        {isEn ? item.tagEn : item.tagZh}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                    <td className="px-6 py-4 text-gray-600 font-medium text-sm border-b border-gray-100">
                      {isEn ? row.featureEn : row.featureZh}
                    </td>
                    {row.values.map((val, j) => (
                      <td key={j} className="px-6 py-4 text-center border-b border-gray-100">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <svg className="w-5 h-5 mx-auto text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="w-4 h-px bg-gray-300 inline-block align-middle" />
                          )
                        ) : (
                          <span className="text-[#0B2545] font-medium text-xs">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-5">
              {isEn
                ? 'Not sure which software fits your workflow? Contact our team for a consultation.'
                : '不確定哪款軟體最符合您的工作流程？歡迎聯繫我們的專業團隊諮詢。'}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#123B6E] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isEn ? 'Request a Consultation' : '申請專業諮詢'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
