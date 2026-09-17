export default function Header({ t, lang, setLang, theme, setTheme, menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site">
      <div className="wrap nav-row">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">AG</span>
          <span>
            <span className="brand-name">
              {lang === "ar" ? "عبدالعزيز غنيم" : "Abdalaziz Ghunaim"}
            </span>
            <span className="brand-role">{t("nav.role")}</span>
          </span>
        </a>
        <nav className={`main-nav${menuOpen ? " open" : ""}`} id="mainNav">
          <a href="#about" onClick={closeMenu}>{t("nav.about")}</a>
          <a href="#skills" onClick={closeMenu}>{t("nav.skills")}</a>
          <a href="#work" onClick={closeMenu}>{t("nav.work")}</a>
          <a href="#credentials" onClick={closeMenu}>{t("nav.credentials")}</a>
          <a href="#contact" onClick={closeMenu}>{t("nav.contact")}</a>
        </nav>
        <div className="nav-controls">
          <button className="ctrl-btn" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
            {lang === "en" ? "EN / AR" : "AR / EN"}
          </button>
          <button className="ctrl-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <span>{theme === "dark" ? "☾" : "☀"}</span>
            <span>
              {theme === "dark" ? (lang === "ar" ? "داكن" : "Dark") : lang === "ar" ? "فاتح" : "Light"}
            </span>
          </button>
          <button
            className="menu-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
