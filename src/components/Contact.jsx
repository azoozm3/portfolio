export default function Contact({ t }) {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-panel">
          <div>
            <h2>{t("contact.h2")}</h2>
            <p className="lead">{t("contact.p")}</p>
          </div>
          <div className="contact-list">
            <a className="contact-item" href="mailto:abdalazizghunaim@gmail.com">
              <span>{t("contact.email")}</span>
              <span>abdalazizghunaim@gmail.com</span>
            </a>
            <a className="contact-item" href="tel:+962781788741">
              <span>{t("contact.phone")}</span>
              <span>+962 78 178 8741</span>
            </a>
            <a
              className="contact-item"
              href="https://linkedin.com/in/abdalazizghunaim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span>/in/abdalazizghunaim</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
