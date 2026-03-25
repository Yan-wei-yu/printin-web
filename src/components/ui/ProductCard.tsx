import { Link } from 'react-router-dom';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  accent?: string;
}

export default function ProductCard({ icon, title, description, href, linkLabel = '了解更多', accent = '#00AEEF' }: ProductCardProps) {
  return (
    <Link
      to={href}
      className="group block bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${accent}18` }}
      >
        <span style={{ color: accent }}>{icon}</span>
      </div>
      <h3 className="text-[#0B2545] font-semibold text-lg mb-2 group-hover:text-[#00AEEF] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <span
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
        style={{ color: accent }}
      >
        {linkLabel}
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
