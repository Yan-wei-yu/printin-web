import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import SectionTitle from '../ui/SectionTitle';

const SoftwareIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const EquipmentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const PlatformIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const ConsumablesIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

export default function ProductHighlight() {
  const { isEn } = useLang();

  const categories = [
    {
      icon: <SoftwareIcon />,
      title: isEn ? 'Dental Software' : '牙科專用軟體',
      description: isEn
        ? 'Slicing, orthodontic, implant & denture design software — full workflow digitization.'
        : '切層、矯正、植牙、假牙設計四合一，從設計到輸出全流程數位化。',
      href: '/software',
      accent: '#00AEEF',
      bg: '#F0F9FF',
      items: isEn
        ? ['Slicing Software', 'Orthodontic Software', 'Implant Software', 'Denture Software']
        : ['切層軟體', '矯正軟體', '植牙軟體', '假牙軟體'],
    },
    {
      icon: <EquipmentIcon />,
      title: isEn ? 'Digital Dental Equipment' : '數位牙科設備',
      description: isEn
        ? 'Scanning, 3D printing, and milling systems — complete hardware ecosystem.'
        : '口掃、列印、銑切設備一站到位，打造完整的硬體解決方案。',
      href: '/equipment',
      accent: '#059669',
      bg: '#F0FDF4',
      items: isEn
        ? ['Scanning Devices', '3D Printers', 'Milling Machines', 'Accessories']
        : ['掃描設備', '3D 列印機', '加工設備', '週邊配件'],
    },
    {
      icon: <PlatformIcon />,
      title: isEn ? 'Digital Dental Platform' : '數位牙科平台',
      description: isEn
        ? 'Cloud-based collaboration, implant OEM & orthodontic OEM services.'
        : '雲端協作平台，植牙手術代工與數位矯正代工服務。',
      href: '/platform',
      accent: '#D97706',
      bg: '#FFFBEB',
      items: isEn
        ? ['Digital Design', 'Implant OEM', 'Orthodontic OEM', 'Cloud Platform']
        : ['數位設計', '植牙代工', '矯正代工', '雲端平台'],
    },
    {
      icon: <ConsumablesIcon />,
      title: isEn ? 'Consumables' : '耗材',
      description: isEn
        ? 'Print resins, implant accessories & thermoforming films — all in one place.'
        : '列印樹脂、植牙配件、熱壓膜片，一站式耗材採購服務。',
      href: '/consumables',
      accent: '#7C3AED',
      bg: '#F5F3FF',
      items: isEn
        ? ['Print Resins', 'Implant Accessories', 'Thermoforming Films', 'Tools']
        : ['列印樹脂', '植牙配件', '熱壓膜片', '相關工具'],
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag={isEn ? 'Our Products' : '產品服務'}
          title={isEn ? 'Complete Digital Dental Solutions' : '完整數位牙科解決方案'}
          subtitle={isEn
            ? 'From software to hardware, from platform to consumables — everything you need in one place.'
            : '從軟體到硬體，從平台到耗材，一站式滿足您所有數位牙科需求。'}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.href}
              to={cat.href}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: cat.bg }}
              >
                <span style={{ color: cat.accent }}>{cat.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-[#0B2545] mb-2 group-hover:text-[#00AEEF] transition-colors">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {cat.description}
              </p>

              {/* Sub-items */}
              <ul className="space-y-1.5 mb-5">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: cat.accent }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: cat.accent }}>
                {isEn ? 'Learn More' : '了解更多'}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
