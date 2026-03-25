import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';

const services = [
  {
    titleZh: '植牙手術代工',
    titleEn: 'Implant Surgery OEM',
    tagZh: '熱門服務',
    tagEn: 'Popular',
    descZh: '由具備 CBCT 分析資歷的專業工程師團隊負責手術導板設計與製作，24 小時急件處理，品質符合 ISO 13485 標準。',
    descEn: 'Expert engineers with CBCT credentials handle surgical guide design and fabrication. 24-hour rush service available. ISO 13485 quality compliant.',
    color: '#D97706',
    bg: '#FFFBEB',
    borderColor: '#FDE68A',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: {
      zh: ['CBCT 影像分析', '植體位置設計', '手術導板製作', '24小時急件', '品質追蹤報告'],
      en: ['CBCT image analysis', 'Implant position design', 'Surgical guide fabrication', '24-hr rush orders', 'QC traceability report'],
    },
  },
  {
    titleZh: '數位矯正代工',
    titleEn: 'Digital Orthodontic OEM',
    tagZh: '快速交件',
    tagEn: 'Fast Delivery',
    descZh: '提供從矯正計畫設計到隱形牙套製作的完整代工服務，讓診所專注於臨床，我們負責所有製作流程。',
    descEn: 'Full OEM from treatment plan design to aligner fabrication. Let clinics focus on clinical care — we handle every production step.',
    color: '#059669',
    bg: '#F0FDF4',
    borderColor: '#A7F3D0',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: {
      zh: ['矯正計畫設計', '數位排牙模擬', '隱形牙套製作', '快速出貨', '全程售後服務'],
      en: ['Treatment plan design', 'Digital tooth simulation', 'Aligner fabrication', 'Fast shipping', 'Full after-sales'],
    },
  },
  {
    titleZh: '雲端牙科平台',
    titleEn: 'Cloud Dental Platform',
    tagZh: '新功能',
    tagEn: 'New',
    descZh: '安全的雲端協作平台，支援診所與技工所之間的案件管理、進度追蹤與即時溝通，隨時隨地掌握每個案件。',
    descEn: 'Secure cloud collaboration for case management, progress tracking and real-time communication between clinics and labs — accessible anytime.',
    color: '#00AEEF',
    bg: '#F0F9FF',
    borderColor: '#BAE6FD',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    items: {
      zh: ['案件即時追蹤', '安全雲端儲存', '多裝置存取', '即時訊息溝通', '電子發票整合'],
      en: ['Real-time case tracking', 'Secure cloud storage', 'Multi-device access', 'Instant messaging', 'E-invoice integration'],
    },
  },
];

const howItWorks = [
  {
    stepZh: '上傳案件資料',
    stepEn: 'Upload Case Files',
    descZh: '透過平台上傳 CBCT、口掃或石膏模型掃描檔',
    descEn: 'Upload CBCT, intraoral scan, or plaster scan files via the platform',
    icon: '📤',
  },
  {
    stepZh: '確認設計規格',
    stepEn: 'Confirm Specifications',
    descZh: '我們的工程師審閱並確認案件規格，必要時會聯繫溝通',
    descEn: 'Our engineers review and confirm specs, contacting you if needed',
    icon: '📋',
  },
  {
    stepZh: '數位設計製作',
    stepEn: 'Design & Fabricate',
    descZh: '專業團隊進行設計、列印與後處理，嚴格品質把關',
    descEn: 'Expert team handles design, printing and post-processing with strict QC',
    icon: '⚙️',
  },
  {
    stepZh: '交件與追蹤',
    stepEn: 'Deliver & Track',
    descZh: '物流配送或平台下載，可全程追蹤案件進度與品質報告',
    descEn: 'Logistics delivery or platform download, with full progress and QC report tracking',
    icon: '✅',
  },
];

const stats = [
  { numZh: '1,000+', numEn: '1,000+', labelZh: '每月完成案件', labelEn: 'Cases / Month' },
  { numZh: '< 24h', numEn: '< 24h', labelZh: '急件交件時間', labelEn: 'Rush Turnaround' },
  { numZh: '99.2%', numEn: '99.2%', labelZh: '案件合格率', labelEn: 'Case Pass Rate' },
  { numZh: '200+', numEn: '200+', labelZh: '合作診所', labelEn: 'Partner Clinics' },
];

export default function PlatformPage() {
  const { isEn } = useLang();

  return (
    <>
      <PageHero
        title={isEn ? 'Digital Dental Platform' : '數位牙科平台'}
        subtitle={isEn
          ? 'Cloud-based OEM services and collaboration platform — extend your clinic\'s capabilities without extra equipment.'
          : '雲端代工服務與協作平台，不需添購設備，即可擴展您診所的數位牙科能力。'}
        breadcrumbs={[{ label: isEn ? 'Platform' : '數位牙科平台' }]}
        tag={isEn ? 'Platform Services' : '平台服務'}
      />

      {/* Stats bar */}
      <section className="bg-[#0B2545] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.labelZh} className="text-center">
                <div className="text-3xl font-bold text-[#00AEEF]">{isEn ? s.numEn : s.numZh}</div>
                <div className="text-white/55 text-sm mt-1">{isEn ? s.labelEn : s.labelZh}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Our Services' : '服務項目'}
            title={isEn ? 'Professional Digital Platform Services' : '專業數位平台服務'}
            subtitle={isEn
              ? 'Whether you need OEM manufacturing or a cloud management platform, we have the solution for your clinic.'
              : '無論您需要代工製作服務或雲端管理平台，我們都有適合您診所的解決方案。'}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map(s => (
              <div
                key={s.titleZh}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                style={{ borderColor: s.borderColor }}
              >
                {/* Card header */}
                <div className="p-6 border-b" style={{ borderColor: s.borderColor, backgroundColor: s.bg }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/70 flex items-center justify-center shadow-sm">
                      <span style={{ color: s.color }}>{s.icon}</span>
                    </div>
                    <span
                      className="text-[11px] font-bold px-2.5 py-1 rounded-full border"
                      style={{ color: s.color, borderColor: s.color + '40', backgroundColor: s.color + '15' }}
                    >
                      {isEn ? s.tagEn : s.tagZh}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2545] mb-2">{isEn ? s.titleEn : s.titleZh}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{isEn ? s.descEn : s.descZh}</p>
                </div>

                {/* Feature list */}
                <div className="p-6">
                  <ul className="space-y-2.5 mb-6">
                    {(isEn ? s.items.en : s.items.zh).map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <svg className="w-4 h-4 shrink-0" style={{ color: s.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5"
                    style={{ color: s.color, borderColor: s.color + '40' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = s.color;
                      (e.currentTarget as HTMLElement).style.color = '#fff';
                      (e.currentTarget as HTMLElement).style.borderColor = s.color;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '';
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.borderColor = s.color + '40';
                    }}
                  >
                    {isEn ? 'Inquire Now' : '立即詢問'}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'How It Works' : '服務流程'}
            title={isEn ? 'Simple, Transparent Process' : '簡單透明的服務流程'}
            subtitle={isEn
              ? 'From case submission to delivery — every step is traceable and communicated clearly.'
              : '從案件提交到交件，每個步驟都清晰可追蹤，讓您完全掌握進度。'}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div key={step.stepZh} className="relative">
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gray-200 z-0 -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full" />
                  </div>
                )}
                <div className="relative z-10 text-center p-6 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full border-2 border-[#00AEEF]/30 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#00AEEF] uppercase tracking-widest mb-2">
                    Step {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-bold text-[#0B2545] mb-2">{isEn ? step.stepEn : step.stepZh}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{isEn ? step.descEn : step.descZh}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0B2545] to-[#123B6E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Crect x='17' y='10' width='6' height='20'/%3E%3Crect x='10' y='17' width='20' height='6'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isEn ? 'Start Your Digital Journey Today' : '立即開啟數位牙科之旅'}
          </h2>
          <p className="text-white/65 text-lg mb-8">
            {isEn
              ? 'Contact us for a free consultation and discover how our platform can transform your practice.'
              : '聯繫我們進行免費諮詢，了解我們的平台如何提升您診所的競爭力。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#00AEEF]/25 hover:-translate-y-0.5"
            >
              {isEn ? 'Free Consultation' : '免費諮詢'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/software"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              {isEn ? 'Explore Software' : '探索軟體'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
