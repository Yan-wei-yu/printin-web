import { useLang } from '../../context/LangContext';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    titleZh: '醫療級精準技術',
    titleEn: 'Medical-Grade Precision',
    descZh: '採用工業級精度設備與演算法，確保每一步數位流程的可靠性與重現性，達到醫療要求的高標準。',
    descEn: 'Industrial-grade equipment and algorithms ensure reliability at every digital workflow step — meeting stringent medical standards.',
    color: '#00AEEF',
    bg: 'from-[#F0F9FF] to-[#E0F4FD]',
    num: '01',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    titleZh: '全方位技術支援',
    titleEn: 'Full-Spectrum Support',
    descZh: '工作日 09:00–18:00 多管道技術支援，從安裝、教育訓練到售後維護，全程陪伴您的診所成長。',
    descEn: 'Multi-channel support weekdays 09:00–18:00 — from on-site installation and training to ongoing after-sales care.',
    color: '#059669',
    bg: 'from-[#F0FDF4] to-[#DCFCE7]',
    num: '02',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titleZh: '牙科專業工程師',
    titleEn: 'Dental Expert Engineers',
    descZh: '擁有牙科數位化專業背景的工程師團隊，提供客製化解決方案、到府服務與專業教育訓練。',
    descEn: 'Engineers with dental digitization expertise deliver customized solutions, on-site service, and professional training.',
    color: '#D97706',
    bg: 'from-[#FFFBEB] to-[#FEF3C7]',
    num: '03',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titleZh: '持續創新研發',
    titleEn: 'Continuous Innovation',
    descZh: '與國際頂尖品牌深度合作，持續投入研發，為台灣牙科診所帶來最前沿的數位科技與解決方案。',
    descEn: 'Deep partnerships with global top brands and continuous R&D bring cutting-edge digital dental technology to Taiwan clinics.',
    color: '#7C3AED',
    bg: 'from-[#F5F3FF] to-[#EDE9FE]',
    num: '04',
  },
];

export default function WhyChooseUs() {
  const { isEn } = useLang();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, #0B2545 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag={isEn ? 'Why Choose Us' : '為何選擇我們'}
          title={isEn ? 'Your Most Trusted Dental Partner' : '您最信賴的數位牙科夥伴'}
          subtitle={isEn
            ? 'From technology to service, comprehensive support for your clinic\'s digital transformation journey.'
            : '從技術到服務，全方位支持您的診所數位轉型之路，讓每位患者都能享有更精準的醫療體驗。'}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.titleZh}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background number */}
              <div
                className="absolute top-3 right-4 text-7xl font-black opacity-5 leading-none select-none"
                style={{ color: f.color }}
              >
                {f.num}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm`}
              >
                <span style={{ color: f.color }}>{f.icon}</span>
              </div>

              {/* Number tag */}
              <span className="text-[11px] font-bold tracking-widest uppercase mb-2 block" style={{ color: f.color }}>
                {f.num}
              </span>

              <h3 className="font-bold text-lg text-[#0B2545] mb-2.5 group-hover:text-[#0B2545] transition-colors">
                {isEn ? f.titleEn : f.titleZh}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {isEn ? f.descEn : f.descZh}
              </p>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ backgroundColor: f.color }}
              />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { label: isEn ? 'ISO 13485 Certified' : 'ISO 13485 認證', icon: '🏆' },
              { label: isEn ? 'FDA Registered Products' : 'FDA 登錄產品', icon: '🇺🇸' },
              { label: isEn ? 'CE Marked Equipment' : 'CE 認證設備', icon: '🇪🇺' },
              { label: isEn ? 'TFDA Approved' : 'TFDA 衛部醫器', icon: '🇹🇼' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2.5 text-gray-400">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
