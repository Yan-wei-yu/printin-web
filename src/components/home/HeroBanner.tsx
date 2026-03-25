import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';

export default function HeroBanner() {
  const { isEn } = useLang();

  const workflow = isEn
    ? [
        { step: '01', label: 'Intraoral Scan', icon: '🦷', color: '#00AEEF' },
        { step: '02', label: 'Digital Design', icon: '⚙️', color: '#059669' },
        { step: '03', label: '3D Printing', icon: '🖨️', color: '#D97706' },
        { step: '04', label: 'Fitting & Done', icon: '✓', color: '#7C3AED' },
      ]
    : [
        { step: '01', label: '口內掃描', icon: '🦷', color: '#00AEEF' },
        { step: '02', label: '數位設計', icon: '⚙️', color: '#059669' },
        { step: '03', label: '3D 列印', icon: '🖨️', color: '#D97706' },
        { step: '04', label: '完成交件', icon: '✓', color: '#7C3AED' },
      ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B2545]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071A38] via-[#0B2545] to-[#0D3056]" />

      {/* Medical cross pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Crect x='26' y='20' width='8' height='20'/%3E%3Crect x='20' y='26' width='20' height='8'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#123B6E]/50 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-20 left-0 w-60 h-60 bg-[#00AEEF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/15 border border-[#00AEEF]/35 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse shrink-0" />
              <span className="text-[#66D4F5] text-sm font-medium tracking-wide">
                {isEn ? 'Digital Dental Integration Solution' : '數位牙科整合解決方案'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              {isEn ? (
                <>
                  <span className="text-[#00AEEF]">Precision</span>{' '}
                  Dental<br />
                  Innovation
                </>
              ) : (
                <>
                  <span className="text-[#00AEEF]">精準</span>牙科<br />
                  數位整合
                </>
              )}
            </h1>

            {/* Sub */}
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              {isEn
                ? 'Complete digital dental equipment, software & consumables — build your fully digital clinic workflow.'
                : '提供完整的數位牙科設備、專業軟體與優質耗材，協助診所建立高效率的全數位化工作流程。'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/software"
                className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#00AEEF]/25 hover:-translate-y-0.5"
              >
                {isEn ? 'Explore Products' : '探索產品'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/15 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                {isEn ? 'Contact Us' : '立即聯繫'}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 pt-7 border-t border-white/10 max-w-md">
              {[
                { num: '10+', label: isEn ? 'Years Exp.' : '年業界經驗' },
                { num: '500+', label: isEn ? 'Clinics' : '合作診所' },
                { num: '24/7', label: isEn ? 'Support' : '全天支援' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.num}</div>
                  <div className="text-white/45 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dental workflow visual */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            {/* Center badge */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-[#00AEEF]/10 scale-125 blur-2xl" />

              {/* Main circle */}
              <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-[#123B6E] to-[#0B2545] border border-[#00AEEF]/30 flex items-center justify-center shadow-2xl">
                {/* Inner decorative ring */}
                <div className="absolute inset-3 rounded-full border border-[#00AEEF]/15" />
                <div className="absolute inset-6 rounded-full border border-white/5" />

                {/* Medical cross icon */}
                <div className="flex flex-col items-center gap-1">
                  <svg className="w-16 h-16 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Digital</span>
                  <span className="text-[#00AEEF] text-xs font-bold tracking-widest uppercase">Dental</span>
                </div>
              </div>

              {/* Orbiting workflow cards */}
              {workflow.map((w, i) => {
                const angle = (i / workflow.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const r = 155;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <div
                    key={w.step}
                    className="absolute flex flex-col items-center gap-1"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/15"
                      style={{ backgroundColor: w.color + '33', borderColor: w.color + '50' }}
                    >
                      <span className="text-xl">{w.icon}</span>
                    </div>
                    <span className="text-[10px] text-white/60 font-medium whitespace-nowrap">{w.label}</span>
                  </div>
                );
              })}

              {/* Connecting dots on circle */}
              <svg className="absolute inset-0 w-full h-full" style={{ width: '224px', height: '224px', top: 0, left: 0, overflow: 'visible' }}>
                <circle
                  cx="112" cy="112" r="155"
                  fill="none"
                  stroke="rgba(0,174,239,0.15)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
              </svg>
            </div>

            {/* Certification badge below */}
            <div className="mt-16 flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
              <div className="w-8 h-8 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">{isEn ? 'ISO Certified Products' : 'ISO 認證設備'}</div>
                <div className="text-white/40 text-[11px]">{isEn ? 'Medical grade quality' : '醫療級品質保證'}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
