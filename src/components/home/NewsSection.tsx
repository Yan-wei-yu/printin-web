import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import SectionTitle from '../ui/SectionTitle';
import { newsItems } from '../../data/news';

const categoryColors: Record<string, { bg: string; text: string }> = {
  '展覽活動': { bg: '#F0F9FF', text: '#00AEEF' },
  '產品發布': { bg: '#F0FDF4', text: '#059669' },
  '軟體更新': { bg: '#FFF7ED', text: '#D97706' },
  '合作消息': { bg: '#F5F3FF', text: '#7C3AED' },
  '平台更新': { bg: '#FFF1F2', text: '#E11D48' },
  '獎項榮譽': { bg: '#FFFBEB', text: '#B45309' },
};

export default function NewsSection() {
  const { isEn } = useLang();

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <SectionTitle
            tag={isEn ? 'News' : '最新消息'}
            title={isEn ? 'Latest Updates' : '最新動態'}
            center={false}
          />
          <Link
            to="/support"
            className="hidden sm:inline-flex items-center gap-1.5 text-[#00AEEF] text-sm font-medium hover:gap-2.5 transition-all"
          >
            {isEn ? 'View All' : '查看全部'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.slice(0, 6).map((item, i) => {
            const color = categoryColors[item.category] ?? { bg: '#F0F9FF', text: '#00AEEF' };
            return (
              <article
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold"
                    style={{ backgroundColor: color.bg, color: color.text }}
                  >
                    {item.category}
                  </span>
                  <time className="text-gray-400 text-xs">{item.date}</time>
                </div>
                <h3 className="text-[#0B2545] font-semibold text-base leading-snug group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                  {isEn ? item.titleEn : item.title}
                </h3>
                <div className="mt-4 flex items-center gap-1.5 text-[#00AEEF] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {isEn ? 'Read more' : '閱讀更多'}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/support"
            className="inline-flex items-center gap-1.5 text-[#00AEEF] text-sm font-medium"
          >
            {isEn ? 'View All News' : '查看所有消息'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
