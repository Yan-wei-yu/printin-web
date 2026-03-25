import HeroBanner from '../components/home/HeroBanner';
import ProductHighlight from '../components/home/ProductHighlight';
import WhyChooseUs from '../components/home/WhyChooseUs';
import DigitalWorkflow from '../components/home/DigitalWorkflow';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsSection from '../components/home/NewsSection';
import { useLang } from '../context/LangContext';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { isEn } = useLang();

  return (
    <>
      <HeroBanner />
      <ProductHighlight />
      <WhyChooseUs />
      <DigitalWorkflow />

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#123B6E] to-[#00AEEF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isEn ? 'Ready to Go Digital?' : '準備好數位化了嗎？'}
          </h2>
          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            {isEn
              ? 'Contact our team today and get a free consultation for your clinic\'s digital transformation.'
              : '立即聯繫我們的專業團隊，取得免費的診所數位化諮詢服務。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#123B6E] font-semibold px-8 py-3.5 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {isEn ? 'Get Free Consultation' : '免費諮詢'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/equipment"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              {isEn ? 'Browse Products' : '瀏覽產品'}
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <NewsSection />
    </>
  );
}
