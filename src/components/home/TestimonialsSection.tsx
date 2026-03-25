import { useLang } from '../../context/LangContext';

export default function TestimonialsSection() {
  const { t, isEn } = useLang();

  return (
    <section className="py-24 bg-[#0B2545]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#00AEEF]" />
              <span className="text-[#00AEEF] text-xs font-bold tracking-[0.18em] uppercase">
                {isEn ? 'Client Testimonials' : '客戶評價'}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white leading-tight">
              {isEn ? 'Trusted by Dental Professionals' : '深受牙科專業人士信賴'}
            </h2>
          </div>
          <div className="md:text-right">
            <div className="text-4xl font-bold text-white mb-1">200<span className="text-[#00AEEF]">+</span></div>
            <div className="text-white/40 text-sm">{isEn ? 'clinics & labs across Taiwan' : '全台診所及牙技所'}</div>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="bg-[#0B2545] p-8 hover:bg-[#0f2f5c] transition-colors duration-300"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-[#00AEEF] opacity-30 mb-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-white/70 text-sm leading-[1.9] mb-6">
                {item.text}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-white/[0.08]">
                <div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-[#00AEEF]/70 text-xs mt-0.5">{item.role}</div>
                </div>
                <div className="w-9 h-9 rounded bg-[#00AEEF]/10 border border-[#00AEEF]/20 flex items-center justify-center">
                  <span className="text-[#00AEEF] font-bold text-sm">{item.name[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
