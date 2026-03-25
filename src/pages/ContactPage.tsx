import { useState } from 'react';
import { useLang } from '../context/LangContext';
import PageHero from '../components/ui/PageHero';

export default function ContactPage() {
  const { isEn } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: isEn ? 'Address' : '地址',
      value: isEn ? '11F-3, No.146, Wenxing Rd., Guishan Dist., Taoyuan City' : '桃園市龜山區文興路 146 號 11 樓之 3',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: isEn ? 'Phone / Mobile' : '電話 / 手機',
      value: '03-3978506 / 0908-683-091',
      href: 'tel:033978506',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: isEn ? 'Email' : '電子郵件',
      value: 'info.printin3d@gmail.com',
      href: 'mailto:info.printin3d@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      label: isEn ? 'Fax' : '傳真',
      value: '03-3978507',
    },
  ];

  const quickChannels = [
    {
      nameZh: 'LINE 官方帳號',
      nameEn: 'LINE Official Account',
      descZh: '搜尋 @511zoexi 加入好友，即時諮詢',
      descEn: 'Search @511zoexi on LINE to add us as a friend',
      color: '#06C755',
      href: 'https://line.me/R/ti/p/@511zoexi',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      ),
    },
    {
      nameZh: '電話諮詢',
      nameEn: 'Phone Consultation',
      descZh: '工作日 09:00–18:00，週六 09:00–12:00',
      descEn: 'Weekdays 09:00–18:00, Saturday 09:00–12:00',
      color: '#00AEEF',
      href: 'tel:033978506',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      nameZh: 'Email 信箱',
      nameEn: 'Email',
      descZh: '1–2 個工作天內回覆，適合詳細技術諮詢',
      descEn: 'Response within 1–2 business days, ideal for detailed queries',
      color: '#7C3AED',
      href: 'mailto:info.printin3d@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <PageHero
        title={isEn ? 'Contact Us' : '聯絡方式'}
        subtitle={isEn
          ? 'Our professional team is ready to assist with equipment selection, software demos, and technical support.'
          : '我們的專業團隊提供設備選購、軟體演示與技術支援服務，歡迎隨時聯繫。'}
        breadcrumbs={[{ label: isEn ? 'Contact' : '聯絡方式' }]}
      />

      {/* Quick contact channels */}
      <section className="py-12 bg-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickChannels.map((ch, i) => {
              const inner = (
                <>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shrink-0"
                    style={{ backgroundColor: `${ch.color}20`, color: ch.color }}>
                    {ch.icon}
                  </div>
                  <div className="font-semibold text-white mb-1">{isEn ? ch.nameEn : ch.nameZh}</div>
                  <div className="text-white/50 text-sm leading-relaxed">{isEn ? ch.descEn : ch.descZh}</div>
                </>
              );
              return ch.href ? (
                <a key={i} href={ch.href}
                  className="flex flex-col p-6 border border-white/10 rounded-xl hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200">
                  {inner}
                </a>
              ) : (
                <div key={i} className="flex flex-col p-6 border border-white/10 rounded-xl">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
                {isEn ? 'Contact Information' : '聯絡資訊'}
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                {isEn
                  ? 'Reach out through any of the channels below.'
                  : '歡迎透過以下任何方式與我們聯繫。'}
              </p>

              <div className="space-y-5 mb-8">
                {contactInfo.map(info => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-[#00AEEF] shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5 uppercase tracking-wide">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-[#0B2545] text-sm font-medium hover:text-[#00AEEF] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-[#0B2545] text-sm font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business hours */}
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-4">
                  {isEn ? 'Business Hours' : '服務時間'}
                </h3>
                <div className="space-y-2.5">
                  {[
                    { day: isEn ? 'Monday – Friday' : '週一 至 週五', hours: '09:00 – 18:00' },
                    { day: isEn ? 'Saturday' : '週六', hours: '09:00 – 12:00' },
                    { day: isEn ? 'Sunday & Holidays' : '週日及國定假日', hours: isEn ? 'Closed' : '公休' },
                  ].map(h => (
                    <div key={h.day} className="flex justify-between text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                      <span className="text-gray-500">{h.day}</span>
                      <span className={`font-medium ${h.hours === 'Closed' || h.hours === '公休' ? 'text-gray-400' : 'text-[#0B2545]'}`}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-xl p-10 border border-gray-200 text-center">
                  <div className="w-14 h-14 bg-[#F0FDF4] rounded-xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-7 h-7 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2545] mb-2">
                    {isEn ? 'Message Sent' : '訊息已發送'}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {isEn
                      ? 'Thank you for contacting us. We will respond within 1–2 business days.'
                      : '感謝您的聯繫，我們將在 1–2 個工作天內回覆您。'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[#00AEEF] text-sm font-medium hover:underline"
                  >
                    {isEn ? 'Send another message' : '再次發送'}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl p-8 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-[#0B2545] mb-6">
                    {isEn ? 'Send Us a Message' : '發送訊息'}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        {isEn ? 'Full Name' : '姓名'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder={isEn ? 'Your name' : '您的姓名'}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        {isEn ? 'Email' : '電子郵件'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        {isEn ? 'Phone' : '電話'}
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder={isEn ? 'Your phone number' : '您的電話號碼'}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        {isEn ? 'Subject' : '洽詢主旨'}
                      </label>
                      <select
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-colors bg-white"
                      >
                        <option value="">{isEn ? 'Select a topic' : '請選擇主旨'}</option>
                        <option value="product">{isEn ? 'Product Inquiry' : '產品詢問'}</option>
                        <option value="demo">{isEn ? 'Request Demo' : '申請演示'}</option>
                        <option value="support">{isEn ? 'Technical Support' : '技術支援'}</option>
                        <option value="quote">{isEn ? 'Request Quote' : '詢價'}</option>
                        <option value="other">{isEn ? 'Other' : '其他'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      {isEn ? 'Message' : '訊息內容'} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder={isEn ? 'Describe your requirements or questions...' : '請描述您的需求或問題...'}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/15 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B2545] hover:bg-[#123B6E] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                  >
                    {isEn ? 'Send Message' : '發送訊息'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#00AEEF]" />
                <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest">
                  {isEn ? 'Location' : '公司位置'}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#0B2545] mb-3">
                {isEn ? 'Visit Our Office' : '歡迎蒞臨'}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {isEn
                  ? '11F-3, No.146, Wenxing Rd., Guishan Dist., Taoyuan City, Taiwan 333'
                  : '桃園市龜山區文興路 146 號 11 樓之 3'}
              </p>
              <a
                href="https://maps.google.com/?q=桃園市龜山區文興路146號"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#123B6E] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {isEn ? 'Open in Google Maps' : '在 Google 地圖開啟'}
              </a>
            </div>
            <div className="lg:col-span-2 h-72 bg-[#F0F4F8] rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title={isEn ? 'Company Location' : '公司位置'}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6!2d121.37!3d25.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAzJzM2LjAiTiAxMjHCsDIyJzEyLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1!5m2!1szh-TW!2stw&q=桃園市龜山區文興路146號"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
