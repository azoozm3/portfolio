export default function Footer({ t }) {
  return (
    <footer className="site">
      <div className="wrap footer-row">
        <span>{t("footer.left")}</span>
        <span>{t("footer.right")}</span>
      </div>
    </footer>
  );
}
