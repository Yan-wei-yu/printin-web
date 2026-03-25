// pages/ProductDetail.tsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ProductDetail({ lang, setLang, t }) {
  return (
    <>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        {/* 這頁的內容 */}
      </main>
      <Footer t={t} />
    </>
  );
}