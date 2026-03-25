import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import Layout from './components/layout/Layout';

import HomePage from './pages/HomePage';
import SoftwarePage from './pages/SoftwarePage';
import SlicingPage from './pages/software/SlicingPage';
import OrthodonticPage from './pages/software/OrthodonticPage';
import ImplantPage from './pages/software/ImplantPage';
import DenturePage from './pages/software/DenturePage';
import EquipmentPage from './pages/EquipmentPage';
import PlatformPage from './pages/PlatformPage';
import ConsumablesPage from './pages/ConsumablesPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';

const notFoundLinks = [
  { href: '/software', labelZh: '牙科軟體', labelEn: 'Dental Software' },
  { href: '/equipment', labelZh: '數位設備', labelEn: 'Equipment' },
  { href: '/platform', labelZh: '數位平台', labelEn: 'Platform' },
  { href: '/consumables', labelZh: '耗材', labelEn: 'Consumables' },
  { href: '/support', labelZh: '服務支援', labelEn: 'Support' },
  { href: '/contact', labelZh: '聯絡我們', labelEn: 'Contact' },
];

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F8FAFC] flex items-center justify-center py-20">
      <div className="max-w-2xl w-full mx-auto px-6">
        {/* Error code */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-[120px] font-bold leading-none text-[#0B2545]/8 select-none">404</span>
          <div className="pb-4">
            <div className="w-1 h-12 bg-[#00AEEF] mb-2" />
            <span className="text-xs font-bold text-[#00AEEF] tracking-[0.15em] uppercase">Page Not Found</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#0B2545] mb-3">
          找不到此頁面
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          您要找的頁面可能已移除、更名，或暫時無法使用。請確認網址是否正確，或從以下連結繼續瀏覽。
        </p>

        {/* Quick nav */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
          {notFoundLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-[#0B2545] font-medium hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all"
            >
              <svg className="w-3.5 h-3.5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {link.labelZh}
            </a>
          ))}
        </div>

        <a
          href="/"
          className="inline-flex items-center gap-2 bg-[#0B2545] hover:bg-[#123B6E] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          返回首頁
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="/software/slicing" element={<SlicingPage />} />
            <Route path="/software/orthodontic" element={<OrthodonticPage />} />
            <Route path="/software/implant" element={<ImplantPage />} />
            <Route path="/software/denture" element={<DenturePage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/consumables" element={<ConsumablesPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LangProvider>
  );
}
