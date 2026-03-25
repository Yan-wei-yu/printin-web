import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import { navItems } from '../../data/navigation';

export default function Footer() {
  const { isEn } = useLang();

  return (
    <footer className="bg-[#0B2545] text-white">
      {/* Top accent */}
      <div className="h-0.5 bg-gradient-to-r from-[#00AEEF] via-[#0090CC] to-[#0B2545]" />
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.svg" alt="品印三維" className="w-10 h-10" />
              <div>
                <div className="text-white font-semibold text-base leading-tight">品印三維</div>
                <div className="text-[#00AEEF] text-xs font-bold tracking-widest">PRINTIN3D</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {isEn
                ? 'Providing comprehensive digital dental equipment, software & consumables.'
                : '提供完整的數位牙科設備、軟體與耗材，打造全數位化診所流程。'}
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/PrintIn3DTech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCpByqBB6LZnVdz7tUpcbmzw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
              <a
                href="https://line.me/R/ti/p/@511zoexi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#06C755] transition-colors"
                aria-label="LINE"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {isEn ? 'Products' : '產品服務'}
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: '牙科專用軟體', labelEn: 'Dental Software', href: '/software' },
                { label: '數位牙科設備', labelEn: 'Equipment', href: '/equipment' },
                { label: '數位牙科平台', labelEn: 'Platform', href: '/platform' },
                { label: '耗材', labelEn: 'Consumables', href: '/consumables' },
              ].map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="text-white/60 text-sm hover:text-white transition-colors">
                    {isEn ? item.labelEn : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software sub-pages */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {isEn ? 'Dental Software' : '牙科軟體'}
            </h3>
            <ul className="space-y-2.5">
              {navItems[0].children?.map(child => (
                <li key={child.href}>
                  <Link to={child.href} className="text-white/60 text-sm hover:text-white transition-colors">
                    {isEn ? child.labelEn : child.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/support" className="text-white/60 text-sm hover:text-white transition-colors">
                  {isEn ? 'Support' : '服務支援'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              {isEn ? 'Contact Us' : '聯絡我們'}
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-white/60 text-sm">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{isEn ? '11F-3, No.146, Wenxing Rd., Guishan Dist., Taoyuan City' : '桃園市龜山區文興路 146 號 11 樓之 3'}</span>
              </li>
              <li className="flex gap-2.5 text-white/60 text-sm">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>03-3978506 / 0908-683-091</span>
              </li>
              <li className="flex gap-2.5 text-white/60 text-sm">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#00AEEF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info.printin3d@gmail.com" className="hover:text-white transition-colors">
                  info.printin3d@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © 2024 品印三維科技股份有限公司 版權所有 · PrintIn3D Technology Co., Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {['隱私權政策', 'Cookie 政策', '使用條款'].map(l => (
              <a key={l} href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
