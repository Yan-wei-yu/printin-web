import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import PageHero from '../../components/ui/PageHero';
import SectionTitle from '../../components/ui/SectionTitle';

const features = [
  {
    titleZh: '自動支撐生成', titleEn: 'Auto Support Generation',
    descZh: '智慧演算法分析模型幾何，自動生成最佳支撐結構，大幅減少手動調整時間。',
    descEn: 'Smart algorithm analyzes geometry to auto-generate optimal supports, reducing manual adjustment.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    titleZh: '多材料設定檔', titleEn: 'Multi-Material Profiles',
    descZh: '內建主流牙科樹脂設定檔，一鍵套用，確保列印品質一致性，省去參數調校時間。',
    descEn: 'Built-in profiles for major dental resins — one-click apply for consistent print quality.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    titleZh: '列印時間預估', titleEn: 'Print Time Estimation',
    descZh: '精準預估列印時間與樹脂用量，協助您有效管理生產排程，降低廢料浪費。',
    descEn: 'Accurately estimate print time and resin consumption to manage production scheduling and reduce waste.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titleZh: '高精度切層演算法', titleEn: 'High-Precision Slice Algorithm',
    descZh: '達到微米級切層精度，確保牙科元件的高精準度與表面光潔度，滿足臨床需求。',
    descEn: 'Micron-level slicing precision ensures high accuracy and surface finish for dental components.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    titleZh: '批次排版管理', titleEn: 'Batch Nesting Management',
    descZh: '智慧排版多個模型，最大化列印平台使用率，一次列印最大化產能。',
    descEn: 'Smart nesting of multiple models maximizes build plate utilization for maximum output per run.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    titleZh: '即時 3D 預覽', titleEn: 'Real-Time 3D Preview',
    descZh: '列印前即時預覽每一層切片，確認支撐結構與整體列印品質，避免失敗列印。',
    descEn: 'Preview every slice layer before printing to confirm support structure and prevent failed prints.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

const compatiblePrinters = ['PrintInDLP+', 'Lumii DLP', 'SONIC XL 4K PLUS', 'SOL PLUS', 'Form 4', 'Phrozen Sonic'];

const specRows = [
  { labelZh: '支援列印技術', labelEn: 'Supported Tech', valueZh: 'DLP / LCD / SLA', valueEn: 'DLP / LCD / SLA' },
  { labelZh: '最小層厚', labelEn: 'Min Layer Height', valueZh: '25 μm', valueEn: '25 μm' },
  { labelZh: '內建材料設定檔', labelEn: 'Built-in Profiles', valueZh: '50+ 種', valueEn: '50+ profiles' },
  { labelZh: '授權方式', labelEn: 'Licensing', valueZh: '年費訂閱', valueEn: 'Annual subscription' },
  { labelZh: '作業系統', labelEn: 'OS Support', valueZh: 'Windows 10/11', valueEn: 'Windows 10/11' },
  { labelZh: '技術支援', labelEn: 'Tech Support', valueZh: '工作日 09:00–18:00', valueEn: 'Weekdays 09:00–18:00' },
];

export default function SlicingPage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Slicing Software' : '切層軟體'}
        subtitle={isEn
          ? 'Professional dental slicing software with auto-optimization — maximum precision, minimum setup time.'
          : '專業牙科切層軟體，自動化優化流程，確保最高精度，大幅縮短設置時間。'}
        breadcrumbs={[
          { label: isEn ? 'Dental Software' : '牙科專用軟體', href: '/software' },
          { label: isEn ? 'Slicing Software' : '切層軟體' },
        ]}
        tag={isEn ? 'Software' : '軟體'}
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Key Features' : '核心功能'}
            title={isEn ? 'Everything for Perfect Prints' : '完美列印所需的一切功能'}
            subtitle={isEn
              ? 'Every feature is purpose-built for dental professionals, from single crowns to full-arch models.'
              : '每項功能專為牙科專業人員打造，適用從單顆冠到全口模型的各種需求。'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map(f => (
              <div key={f.titleZh} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#00AEEF]/30 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="w-12 h-12 bg-[#F0F9FF] rounded-2xl flex items-center justify-center text-[#00AEEF] mb-4 group-hover:scale-105 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#0B2545] mb-2">{isEn ? f.titleEn : f.titleZh}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{isEn ? f.descEn : f.descZh}</p>
              </div>
            ))}
          </div>

          {/* Compatible printers */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 mb-12">
            <h3 className="font-bold text-[#0B2545] text-lg mb-2 text-center">
              {isEn ? 'Compatible Printers' : '支援列印機型'}
            </h3>
            <p className="text-gray-500 text-sm text-center mb-5">
              {isEn ? 'Works seamlessly with all major dental 3D printers' : '與所有主流牙科 3D 列印機無縫相容'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {compatiblePrinters.map(p => (
                <span key={p} className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-[#0B2545] shadow-sm">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Specs table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-12">
            <div className="px-6 py-4 bg-[#0B2545]">
              <h3 className="font-bold text-white text-base">
                {isEn ? 'Technical Specifications' : '技術規格'}
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {specRows.map(row => (
                <div key={row.labelZh} className="flex items-center px-6 py-3.5">
                  <span className="text-sm text-gray-500 w-40 shrink-0">{isEn ? row.labelEn : row.labelZh}</span>
                  <span className="text-sm font-medium text-[#0B2545]">{isEn ? row.valueEn : row.valueZh}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#00AEEF]/30 hover:-translate-y-0.5"
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
