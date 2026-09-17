export default function About({ t }) {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">{t("about.tag")}</span>
          <h2>{t("about.h2")}</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
          <dl className="about-facts">
            <div className="fact"><dt>{t("about.f1k")}</dt><dd>{t("about.f1v")}</dd></div>
            <div className="fact"><dt>{t("about.f2k")}</dt><dd>{t("about.f2v")}</dd></div>
            <div className="fact"><dt>{t("about.f3k")}</dt><dd>{t("about.f3v")}</dd></div>
            <div className="fact"><dt>{t("about.f4k")}</dt><dd>{t("about.f4v")}</dd></div>
            <div className="fact"><dt>{t("about.f5k")}</dt><dd>{t("about.f5v")}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
