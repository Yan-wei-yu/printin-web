import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang, LANGS } from '../../context/LangContext';
import { navItems } from '../../data/navigation';
import { translations } from '../../i18n';

export default function Navbar() {
  const { lang, setLang, isEn } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDropdownEnter = (id: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const isNavItemActive = (item: typeof navItems[0]) => {
    if (item.href && isActive(item.href)) return true;
    if (item.children?.some(c => isActive(c.href))) return true;
    if (item.groups?.some(g => g.items.some(c => isActive(c.href)))) return true;
    return false;
  };

  const mainItems = navItems.filter(i => !i.alignRight);
  const rightItems = navItems.filter(i => i.alignRight);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B2545] shadow-lg shadow-black/25' : 'bg-[#0B2545]/95 backdrop-blur-sm'}`}>
        {/* Top accent bar */}
        <div className="h-0.5 bg-gradient-to-r from-[#00AEEF] via-[#0090CC] to-[#0B2545]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 relative">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="品印三維首頁">
              <img src="/logo-icon.svg" alt="品印三維" className="w-9 h-9" />
              <div className="leading-tight">
                <div className="text-white font-bold text-base tracking-wide">品印三維</div>
                <div className="text-[#00AEEF] text-[10px] font-bold tracking-widest -mt-0.5">PRINTIN3D</div>
              </div>
            </Link>

            {/* Desktop Nav — absolutely centered in viewport */}
            <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 gap-0.5">
              {mainItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => (item.children || item.groups) ? handleDropdownEnter(item.label) : undefined}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 whitespace-nowrap flex items-center gap-1
                        ${isNavItemActive(item)
                          ? 'text-[#00AEEF]'
                          : 'text-white/80 hover:text-white hover:bg-white/8'
                        }`}
                    >
                      {isEn ? item.labelEn : item.label}
                      {(item.children || item.groups) && (
                        <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  ) : (
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 whitespace-nowrap flex items-center gap-1
                        ${isNavItemActive(item) ? 'text-[#00AEEF]' : 'text-white/80 hover:text-white hover:bg-white/8'}`}
                    >
                      {isEn ? item.labelEn : item.label}
                      <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Standard dropdown */}
                  {item.children && !item.groups && activeDropdown === item.label && (
                    <div
                      className="dropdown-menu absolute top-full left-0 mt-1.5 bg-white rounded-xl shadow-2xl shadow-black/15 border border-gray-100 overflow-hidden min-w-[200px] z-50"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-1.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150
                              ${isActive(child.href)
                                ? 'bg-[#F0F9FF] text-[#00AEEF] font-medium'
                                : 'text-gray-700 hover:bg-[#F0F9FF] hover:text-[#00AEEF]'
                              }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shrink-0 opacity-70" />
                            {isEn ? child.labelEn : child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mega dropdown */}
                  {item.groups && activeDropdown === item.label && (
                    <div
                      className="dropdown-menu absolute top-full left-0 mt-1.5 bg-white rounded-xl shadow-2xl shadow-black/15 border border-gray-100 z-50"
                      style={{ minWidth: '560px' }}
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {/* Mega header */}
                      <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-semibold text-[#00AEEF] tracking-widest uppercase mb-0.5">
                            {isEn ? item.labelEn : item.label}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {isEn ? 'Professional dental equipment solutions' : '專業牙科設備解決方案'}
                          </div>
                        </div>
                        <Link
                          to={item.href || '/equipment'}
                          className="text-xs text-[#00AEEF] hover:text-[#0090CC] font-medium flex items-center gap-1 transition-colors"
                        >
                          {isEn ? 'View All' : '查看全部'}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      {/* Columns */}
                      <div className="grid grid-cols-4 gap-0 p-4">
                        {item.groups.map((group) => (
                          <div key={group.groupZh} className="px-2">
                            <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2.5 pb-1.5 border-b border-gray-100">
                              {isEn ? group.groupEn : group.groupZh}
                            </div>
                            <ul className="space-y-0.5">
                              {group.items.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    to={child.href}
                                    className="flex items-center gap-1.5 py-1.5 text-xs text-gray-600 hover:text-[#00AEEF] transition-colors duration-150 group/link"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/link:bg-[#00AEEF] transition-colors shrink-0" />
                                    {isEn ? child.labelEn : child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

            </div>{/* end nav items */}

            {/* Right section — Contact + Language Toggle */}
            <div className="hidden lg:flex items-center gap-2 ml-auto">

              {/* Contact button */}
              {rightItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold border transition-all duration-150 whitespace-nowrap
                    ${isActive(item.href)
                      ? 'bg-[#00AEEF] text-white border-[#00AEEF]'
                      : 'text-white border-white/30 hover:bg-[#00AEEF] hover:border-[#00AEEF] hover:text-white'
                    }`}
                >
                  {isEn ? item.labelEn : item.label}
                </Link>
              ))}

              {/* Language Toggle */}
              <div className="flex items-center rounded-md overflow-hidden border border-white/20 bg-white/5">
                {LANGS.map((l, i) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 text-[11px] font-medium transition-colors duration-150
                      ${lang === l ? 'bg-[#00AEEF] text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}
                      ${i < LANGS.length - 1 ? 'border-r border-white/20' : ''}`}
                  >
                    {translations[l].langLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden flex items-center gap-3 ml-auto">
              <button
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileOpen(v => !v)}
                aria-label="開啟選單"
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-[calc(16px+2px+64px)] left-0 right-0 z-40 bg-[#0B2545] lg:hidden overflow-y-auto max-h-[calc(100vh-82px)] transition-all duration-300 border-t border-white/10
          ${mobileOpen ? 'block' : 'hidden'}`}
      >
        {/* Language toggle mobile top */}
        <div className="px-4 py-3 bg-[#0A1F3E] flex items-center gap-3 border-b border-white/10">
          <span className="text-white/40 text-xs font-medium tracking-wider uppercase">Lang</span>
          <div className="flex items-center rounded-md overflow-hidden border border-white/20">
            {LANGS.map((l, i) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors
                  ${lang === l ? 'bg-[#00AEEF] text-white' : 'text-white/60 hover:text-white'}
                  ${i < LANGS.length - 1 ? 'border-r border-white/20' : ''}`}
              >
                {translations[l].langLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-2">
          {[...mainItems, ...rightItems].map((item) => (
            <div key={item.label} className="border-b border-white/8 last:border-0">
              {!item.children && !item.groups ? (
                <Link
                  to={item.href!}
                  className={`flex items-center justify-between py-3.5 text-sm font-medium transition-colors
                    ${item.alignRight ? 'text-[#00AEEF]' : isActive(item.href) ? 'text-[#00AEEF]' : 'text-white/85 hover:text-white'}`}
                >
                  {isEn ? item.labelEn : item.label}
                  <svg className="w-4 h-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <>
                  <button
                    className={`w-full flex items-center justify-between py-3.5 text-sm font-medium transition-colors
                      ${isNavItemActive(item) ? 'text-[#00AEEF]' : 'text-white/85'}`}
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {isEn ? item.labelEn : item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {mobileExpanded === item.label && (
                    <div className="pb-3 pl-3">
                      {/* Standard children */}
                      {item.children?.map((child) => (
                        <Link
                          key={child.href + child.label}
                          to={child.href}
                          className={`flex items-center gap-2 py-2.5 text-sm transition-colors
                            ${isActive(child.href) ? 'text-[#00AEEF]' : 'text-white/60 hover:text-white'}`}
                        >
                          <span className="w-1 h-1 rounded-full bg-current" />
                          {isEn ? child.labelEn : child.label}
                        </Link>
                      ))}
                      {/* Groups (mega) */}
                      {item.groups?.map((group) => (
                        <div key={group.groupZh} className="mb-3">
                          <div className="text-[11px] font-bold text-[#00AEEF]/70 uppercase tracking-wider mb-1.5 mt-2">
                            {isEn ? group.groupEn : group.groupZh}
                          </div>
                          {group.items.map((child) => (
                            <Link
                              key={child.href + child.label}
                              to={child.href}
                              className="flex items-center gap-2 py-2 text-sm text-white/60 hover:text-white transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-current" />
                              {isEn ? child.labelEn : child.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
