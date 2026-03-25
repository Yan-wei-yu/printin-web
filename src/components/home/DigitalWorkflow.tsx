import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import SectionTitle from '../ui/SectionTitle';

const steps = [
  {
    numZh: '01', numEn: '01',
    titleZh: '口內掃描', titleEn: 'Intraoral Scan',
    descZh: '使用高精度口內掃描儀取代傳統印模，3–5 分鐘完成口腔數位建模。',
    descEn: 'Replace traditional impressions with a high-precision intraoral scanner — complete 3D oral modeling in 3–5 minutes.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: '#00AEEF',
    bg: 'from-[#E0F4FD] to-[#F0F9FF]',
    href: '/equipment',
  },
  {
    numZh: '02', numEn: '02',
    titleZh: '數位設計', titleEn: 'Digital Design',
    descZh: '透過專業牙科軟體進行矯正、植牙、假牙或導板設計，精準高效。',
    descEn: 'Use professional dental software for orthodontic, implant, prosthetic or guide design with precision.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: '#059669',
    bg: 'from-[#DCFCE7] to-[#F0FDF4]',
    href: '/software',
  },
  {
    numZh: '03', numEn: '03',
    titleZh: '3D 列印 / 加工', titleEn: '3D Print / Mill',
    descZh: '透過 3D 列印機或切削機製作牙套、手術導板、修復體，精度達微米級。',
    descEn: 'Fabricate aligners, surgical guides and prosthetics via 3D printer or mill to micron-level accuracy.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    color: '#D97706',
    bg: 'from-[#FEF3C7] to-[#FFFBEB]',
    href: '/equipment',
  },
  {
    numZh: '04', numEn: '04',
    titleZh: '後處理 / 完成', titleEn: 'Post-process & Deliver',
    descZh: '清洗、固化、拋光後交件，全流程品質可追溯，大幅縮短製作時間。',
    descEn: 'Wash, cure and polish before delivery — full traceability throughout, dramatically shorter turnaround.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#7C3AED',
    bg: 'from-[#EDE9FE] to-[#F5F3FF]',
    href: '/platform',
  },
];

const partners = [
  { name: 'Formlabs', abbr: 'FL' },
  { name: 'Phrozen', abbr: 'PH' },
  { name: 'Imetric', abbr: 'IM' },
  { name: 'Straumann', abbr: 'ST' },
  { name: 'Nobel Biocare', abbr: 'NB' },
  { name: 'Osstem', abbr: 'OS' },
];

export default function DigitalWorkflow() {
  const { isEn } = useLang();

  return (
    <>
      {/* Workflow Section */}
      <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #0B2545 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={isEn ? 'Digital Workflow' : '數位化流程'}
            title={isEn ? 'From Scan to Smile in 4 Steps' : '四步驟完成數位牙科全流程'}
            subtitle={isEn
              ? 'Our integrated ecosystem connects every step of the digital dental workflow — eliminating guesswork and manual errors.'
              : '品印三維的整合生態系連結數位牙科的每個環節，消除猜測與人為誤差，讓每個步驟精準可控。'}
          />

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#00AEEF] via-[#059669] via-[#D97706] to-[#7C3AED] opacity-20 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {steps.map((step, i) => (
                <Link
                  key={step.numZh}
                  to={step.href}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Step number + icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.bg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm`}
                    >
                      <span style={{ color: step.color }}>{step.icon}</span>
                    </div>
                    <span
                      className="text-4xl font-black opacity-10 leading-none select-none"
                      style={{ color: step.color }}
                    >
                      {isEn ? step.numEn : step.numZh}
                    </span>
                  </div>

                  {/* Step label */}
                  <span className="text-[11px] font-bold uppercase tracking-widest mb-1.5" style={{ color: step.color }}>
                    Step {i + 1}
                  </span>

                  <h3 className="text-lg font-bold text-[#0B2545] mb-2 group-hover:text-[#00AEEF] transition-colors">
                    {isEn ? step.titleEn : step.titleZh}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {isEn ? step.descEn : step.descZh}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                    style={{ backgroundColor: step.color }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands Strip */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {isEn ? 'Trusted Brands & Partners' : '合作品牌與夥伴'}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {partners.map(p => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  {/* Logo placeholder — styled letter badge */}
                  <div className="w-8 h-8 rounded-lg bg-[#0B2545] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{p.abbr}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
