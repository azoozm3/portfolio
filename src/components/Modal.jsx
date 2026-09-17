import { useEffect, useRef } from "react";
import { PROJECTS } from "../lib/projects";
import { setCaseStudyLang, buildModalHtml, t, loc } from "../lib/caseStudy";

export default function Modal({ openId, lang, onClose }) {
  const bodyRef = useRef(null);
  const project = PROJECTS.find((p) => p.id === openId) || null;

  useEffect(() => {
    setCaseStudyLang(lang);
  }, [lang]);

  useEffect(() => {
    const el = bodyRef.current;
    if (!project || !el) return;

    el.innerHTML = buildModalHtml(project);

    const tabs = Array.from(el.querySelectorAll(".preview-tab"));
    const views = Array.from(el.querySelectorAll(".source-preview"));
    const onTabClick = (tab) => () => {
      const index = Number(tab.dataset.previewTab);
      tabs.forEach((tb) => tb.classList.remove("active"));
      tab.classList.add("active");
      views.forEach((view, i) => view.classList.toggle("active", i === index));
    };
    const tabHandlers = tabs.map((tab) => {
      const handler = onTabClick(tab);
      tab.addEventListener("click", handler);
      return { tab, handler };
    });

    const copyBtn = el.querySelector(".code-copy");
    let copyHandler;
    if (copyBtn) {
      copyHandler = () => {
        const codeEl = document.getElementById(`codeblock-${project.id}`);
        const text = codeEl ? codeEl.textContent : "";
        navigator.clipboard
          ?.writeText(text)
          .then(() => {
            copyBtn.textContent = t("copied");
            setTimeout(() => {
              copyBtn.textContent = t("copy");
            }, 1500);
          })
          .catch(() => {});
      };
      copyBtn.addEventListener("click", copyHandler);
    }

    return () => {
      tabHandlers.forEach(({ tab, handler }) => tab.removeEventListener("click", handler));
      if (copyBtn && copyHandler) copyBtn.removeEventListener("click", copyHandler);
    };
  }, [project, lang]);

  return (
    <div
      className={`modal-overlay${openId ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="modal-panel" style={{ "--cat-color": project.catColor }}>
          <div className="modal-head" style={{ "--cat-color": project.catColor }}>
            <span className="mono mh-cat">{loc(project.type)}</span>
            <button className="modal-close" aria-label={t("close")} onClick={onClose}>
              ✕
            </button>
          </div>
          <div className="modal-body" ref={bodyRef}></div>
        </div>
      )}
    </div>
  );
}
