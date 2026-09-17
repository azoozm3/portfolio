export default function Credentials({ t }) {
  return (
    <section id="credentials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">{t("credentials.tag")}</span>
          <h2>{t("credentials.h2")}</h2>
          <p>{t("credentials.p")}</p>
        </div>
        <div className="credential-strip">
          <article className="credential-card">
            <span className="mono">AWS Academy</span>
            <h3>{t("credentials.c1h")}</h3>
            <p>{t("credentials.c1p")}</p>
          </article>
          <article className="credential-card">
            <span className="mono">AWS Academy</span>
            <h3>{t("credentials.c2h")}</h3>
            <p>{t("credentials.c2p")}</p>
          </article>
          <article className="credential-card">
            <span className="mono">Cisco NetAcad</span>
            <h3>{t("credentials.c3h")}</h3>
            <p>{t("credentials.c3p")}</p>
          </article>
          <article className="credential-card">
            <span className="mono">Udemy</span>
            <h3>{t("credentials.c4h")}</h3>
            <p>{t("credentials.c4p")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
