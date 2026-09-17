export default function Hero({ t, lang }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="dot"></span>
            <span>{t("hero.eyebrow")}</span>
          </span>

          <h1 className="hero-bigname">
            <span>{lang === "ar" ? "عبدالعزيز غنيم" : "Abdalaziz Ghunaim"}</span>
            <i className="dot-accent">.</i>
          </h1>

          <p className="hero-role">{t("nav.role")}</p>
          <p className="hero-tagline">{t("hero.h1")}</p>
          <p className="lead">{t("hero.lead")}</p>

          <div className="hero-ctas">
            <a href="#work" className="btn primary">{t("hero.cta1")}</a>
            <a href="#credentials" className="btn">{t("hero.cta2")}</a>
            <a href="#contact" className="btn">{t("hero.cta3")}</a>
          </div>
          <div className="hero-proof">
            <div className="proof-item"><strong>5 roles</strong><span>{t("hero.proof1")}</span></div>
            <div className="proof-item"><strong>100+</strong><span>{t("hero.proof2")}</span></div>
            <div className="proof-item"><strong>AWS + Cisco</strong><span>{t("hero.proof3")}</span></div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="systems-panel systems-panel-strip" aria-label="Portfolio systems overview">
          <div>
            <span className="hero-eyebrow">
              <span className="dot"></span>
              <span>{t("hero.panel.eyebrow")}</span>
            </span>
            <h2>{t("hero.panel.h2")}</h2>
          </div>
          <div className="capability-grid">
            <div className="capability-item"><strong>{t("hero.cap1.k")}</strong><span>{t("hero.cap1.v")}</span></div>
            <div className="capability-item"><strong>{t("hero.cap2.k")}</strong><span>{t("hero.cap2.v")}</span></div>
            <div className="capability-item"><strong>{t("hero.cap3.k")}</strong><span>{t("hero.cap3.v")}</span></div>
            <div className="capability-item"><strong>{t("hero.cap4.k")}</strong><span>{t("hero.cap4.v")}</span></div>
          </div>
          <div className="systems-proof">
            <span>{t("hero.proofA")}</span>
            <span>{t("hero.proofB")}</span>
            <span>{t("hero.proofC")}</span>
            <span>{t("hero.proofD")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
