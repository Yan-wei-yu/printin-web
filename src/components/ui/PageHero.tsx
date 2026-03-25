import { Link } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  tag?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, tag }: PageHeroProps) {
  return (
    <section className="relative bg-[#0B2545] pt-28 pb-14 overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071A38] via-[#0B2545] to-[#0E3460]" />

      {/* Medical cross pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Crect x='17' y='10' width='6' height='20'/%3E%3Crect x='10' y='17' width='20' height='6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/12 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#00AEEF]/8 rounded-full translate-y-1/3 blur-2xl pointer-events-none" />

      {/* Decorative right element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block pointer-events-none overflow-hidden">
        <div className="absolute right-16 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[#00AEEF]/20 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full border border-[#00AEEF]/15 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#00AEEF]/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-[#00AEEF]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-8 w-6 h-6 border border-[#00AEEF]/25 rounded-md rotate-12" />
        <div className="absolute right-32 bottom-10 w-4 h-4 bg-[#00AEEF]/15 rounded-full" />
        <div className="absolute right-52 top-12 w-3 h-3 bg-white/5 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-5 font-medium tracking-wide">
            <Link to="/" className="hover:text-white/70 transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {/* text omitted intentionally, icon only for home */}
            </Link>
            <span className="text-white/20">›</span>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-white/70 transition-colors uppercase tracking-wider">{crumb.label}</Link>
                ) : (
                  <span className="text-white/60 uppercase tracking-wider">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="text-white/20">›</span>}
              </span>
            ))}
          </nav>
        )}

        {/* Tag */}
        {tag && (
          <span className="inline-block px-3 py-1 bg-[#00AEEF]/15 border border-[#00AEEF]/30 text-[#66D4F5] text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            {tag}
          </span>
        )}

        {/* Left accent bar + title */}
        <div className="flex items-start gap-4">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#00AEEF] to-[#0090CC] shrink-0 mt-1" />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">{title}</h1>
            {subtitle && (
              <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30V15C360 0 720 30 1080 15C1260 7.5 1380 22.5 1440 15V30H0Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
