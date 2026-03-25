import { useState } from 'react';
import { useLang } from '../context/LangContext';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';

const faqItems = [
  {
    q: { zh: '如何開始使用品印三維的軟體？', en: 'How do I get started with PrintIn3D software?' },
    a: { zh: '購買後我們會安排專人到府安裝與教育訓練，通常需要半天至一天的時間，確保您能熟練操作所有功能。', en: 'After purchase, we arrange on-site installation and training, typically half to one day, to ensure you can proficiently operate all features.' },
  },
  {
    q: { zh: '軟體的授權方式是怎樣的？', en: 'How is software licensing structured?' },
    a: { zh: '軟體採年費訂閱制，包含所有版本更新與技術支援服務。我們也提供多授權優惠方案供連鎖診所選擇。', en: 'Software uses annual subscription licensing, including all version updates and technical support. Multi-license packages are available for dental chains.' },
  },
  {
    q: { zh: '設備出問題時可以怎麼聯繫技術支援？', en: 'How do I reach technical support when equipment has issues?' },
    a: { zh: '我們提供電話、LINE、Email 多管道技術支援，工作日 09:00–18:00 保證 2 小時內回覆，緊急情況可申請當日到府維修服務。', en: 'We provide multi-channel support via phone, LINE, and email. Guaranteed 2-hour response during weekdays 09:00–18:00; same-day on-site repair requests available for emergencies.' },
  },
  {
    q: { zh: '耗材是否需要向品印三維購買？', en: 'Must consumables be purchased from PrintIn3D?' },
    a: { zh: '我們的設備支援多數市售耗材，但使用品印三維認證耗材能確保最佳列印品質與設備壽命，並維持原廠保固效力。', en: 'Our equipment supports most commercial consumables, but PrintIn3D certified consumables ensure the best print quality, equipment longevity, and warranty validity.' },
  },
  {
    q: { zh: '是否提供教育訓練服務？', en: 'Do you offer training services?' },
    a: { zh: '是的，我們提供到府訓練、線上課程，以及定期工作坊活動，協助您的團隊快速掌握數位牙科技術。', en: 'Yes, we offer on-site training, online courses, and regularly held workshops to help your team master digital dental technology.' },
  },
  {
    q: { zh: '設備保固期限是多久？', en: 'What is the equipment warranty period?' },
    a: { zh: '所有設備提供一年原廠保固，保固期內硬體故障免費維修或更換零件。保固期後可簽訂年度維護合約，享有優先排程與零件折扣。', en: 'All equipment comes with a one-year manufacturer warranty covering hardware failures with free repair or part replacement. Annual maintenance contracts are available after the warranty period.' },
  },
  {
    q: { zh: '是否可以在購買前申請試用或演示？', en: 'Can I request a demo or trial before purchasing?' },
    a: { zh: '當然可以。我們提供軟體試用版申請與設備到府演示服務，讓您在正式採購前完整評估產品的適用性。', en: 'Absolutely. We offer software trial versions and on-site equipment demonstrations so you can fully evaluate the product before committing to a purchase.' },
  },
];

const downloads = [
  { nameZh: '品印三維 2024 年度型錄', nameEn: 'PrintIn3D 2024 Annual Catalog', size: '8.2 MB', type: 'PDF' },
  { nameZh: '切層軟體使用手冊', nameEn: 'Slicing Software User Manual', size: '3.1 MB', type: 'PDF' },
  { nameZh: '矯正軟體快速上手指南', nameEn: 'Orthodontic Software Quick Start', size: '1.8 MB', type: 'PDF' },
  { nameZh: '植牙軟體技術規格書', nameEn: 'Implant Software Technical Spec', size: '2.4 MB', type: 'PDF' },
  { nameZh: 'PrintInDLP+ 操作手冊', nameEn: 'PrintInDLP+ Operation Manual', size: '5.6 MB', type: 'PDF' },
  { nameZh: 'PrintInMill 五軸加工機規格書', nameEn: 'PrintInMill 5-Axis Mill Spec Sheet', size: '3.8 MB', type: 'PDF' },
];

const supportChannels = [
  {
    labelZh: '電話技術支援',
    labelEn: 'Phone Support',
    valueZh: '03-3978506',
    valueEn: '03-3978506',
    noteZh: '工作日 09:00–18:00，2 小時內回覆',
    noteEn: 'Weekdays 09:00–18:00, response within 2 hours',
    href: 'tel:033978506',
    color: '#00AEEF',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    labelZh: 'LINE 即時諮詢',
    labelEn: 'LINE Instant Support',
    valueZh: '@printin3d',
    valueEn: '@printin3d',
    noteZh: '搜尋 @511zoexi 加入好友',
    noteEn: 'Search @511zoexi on LINE',
    color: '#06C755',
    href: 'https://line.me/R/ti/p/@511zoexi',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
  },
  {
    labelZh: 'Email 技術信箱',
    labelEn: 'Technical Email',
    valueZh: 'info.printin3d@gmail.com',
    valueEn: 'info.printin3d@gmail.com',
    noteZh: '1–2 個工作天內回覆，適合詳細問題',
    noteEn: 'Response within 1–2 business days',
    href: 'mailto:info.printin3d@gmail.com',
    color: '#7C3AED',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    labelZh: '到府技術服務',
    labelEn: 'On-Site Service',
    valueZh: '緊急當日到府',
    valueEn: 'Emergency Same-Day',
    noteZh: '北台灣地區，需提前電話申請',
    noteEn: 'Northern Taiwan, advance call required',
    color: '#D97706',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function SupportPage() {
  const { isEn } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        title={isEn ? 'Support & Resources' : '服務支援'}
        subtitle={isEn
          ? 'Find answers, download resources, and get the help you need to maximize your digital dental workflow.'
          : '尋找解答、下載資源，獲取完整技術支援服務。'}
        breadcrumbs={[{ label: isEn ? 'Support' : '服務支援' }]}
      />

      {/* Support channels strip */}
      <section className="bg-[#0B2545] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportChannels.map((ch, i) => {
              const inner = (
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${ch.color}20`, color: ch.color }}
                  >
                    {ch.icon}
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">
                      {isEn ? ch.labelEn : ch.labelZh}
                    </div>
                    <div className="text-white font-semibold text-sm">
                      {isEn ? ch.valueEn : ch.valueZh}
                    </div>
                    <div className="text-white/40 text-xs mt-1 leading-snug">
                      {isEn ? ch.noteEn : ch.noteZh}
                    </div>
                  </div>
                </div>
              );
              return ch.href ? (
                <a key={i} href={ch.href}
                  className="p-4 border border-white/10 rounded-xl hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200 block">
                  {inner}
                </a>
              ) : (
                <div key={i} className="p-4 border border-white/10 rounded-xl">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* FAQ */}
            <div>
              <SectionTitle
                tag={isEn ? 'FAQ' : '常見問題'}
                title={isEn ? 'Frequently Asked Questions' : '常見問題解答'}
                center={false}
              />
              <div className="space-y-2">
                {faqItems.map((item, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${openFaq === i ? 'border-[#00AEEF]/40 shadow-sm' : 'border-gray-200'}`}
                  >
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-semibold text-[#0B2545] text-sm pr-4">
                        {isEn ? item.q.en : item.q.zh}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#00AEEF] shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5">
                        <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                          {isEn ? item.a.en : item.a.zh}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Downloads */}
            <div>
              <SectionTitle
                tag={isEn ? 'Downloads' : '資料下載'}
                title={isEn ? 'Product Catalogs & Manuals' : '產品型錄與技術手冊'}
                center={false}
              />
              <div className="space-y-2.5">
                {downloads.map(d => (
                  <div key={d.nameZh} className="bg-white rounded-xl px-5 py-4 border border-gray-200 flex items-center justify-between hover:border-gray-300 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#F0F4F8] rounded-lg flex items-center justify-center text-[#00AEEF] shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#0B2545]">{isEn ? d.nameEn : d.nameZh}</div>
                        <div className="text-xs text-gray-400">{d.type} · {d.size}</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-[#00AEEF] transition-colors p-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 bg-[#0B2545] rounded-xl p-6">
                <h3 className="font-bold text-white mb-1.5">
                  {isEn ? 'Need On-Site Training?' : '需要到府教育訓練？'}
                </h3>
                <p className="text-white/60 text-sm mb-5">
                  {isEn
                    ? 'Our specialists provide hands-on training for all software and equipment.'
                    : '我們的專業人員提供軟體及設備的實地操作訓練服務。'}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0090CC] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  {isEn ? 'Request Training' : '申請訓練服務'}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
