import { useEffect, useState, useCallback } from "react";
import { I18N } from "./lib/i18n";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Credentials from "./components/Credentials.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";

export default function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const t = useCallback(
    (key) => (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key,
    [lang]
  );
  const loc = useCallback(
    (field) => (lang === "ar" && field && field.ar !== undefined ? field.ar : field ? field.en : ""),
    [lang]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeModal = useCallback(() => {
    setOpenId(null);
    document.body.style.overflow = "";
  }, []);

  const openModal = useCallback((id) => {
    setOpenId(id);
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main id="home">
        <Hero t={t} lang={lang} />
        <hr className="section-divider" />
        <About t={t} />
        <hr className="section-divider" />
        <Skills t={t} loc={loc} />
        <hr className="section-divider" />
        <Credentials t={t} />
        <hr className="section-divider" />
        <Work t={t} loc={loc} filter={filter} setFilter={setFilter} onOpen={openModal} />
        <hr className="section-divider" />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <Modal openId={openId} lang={lang} onClose={closeModal} />
    </>
  );
}
