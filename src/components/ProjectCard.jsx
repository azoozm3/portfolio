function firstTechs(p) {
  const all = Object.values(p.stack || {}).flat();
  return all.slice(0, 5);
}

export default function ProjectCard({ project, t, loc, onOpen }) {
  const open = () => onOpen(project.id);
  return (
    <article
      className="project-card"
      style={{ "--cat-color": project.catColor }}
      tabIndex={0}
      role="button"
      aria-label={loc({ en: project.title, ar: project.title_ar })}
      onClick={open}
      onKeyPress={(e) => {
        if (e.key === "Enter") open();
      }}
    >
      <div className="pc-top">
        <h3>{loc({ en: project.title, ar: project.title_ar })}</h3>
        <span className="pc-status mono">{loc(project.status)}</span>
      </div>
      <p className="pc-desc">{loc(project.oneLiner)}</p>
      <span className="pc-meta">{loc(project.type)}</span>
      <div className="pc-tags">
        {firstTechs(project).map((tag) => (
          <span className="pc-tag" key={tag}>{tag}</span>
        ))}
      </div>
      <div className="pc-foot">
        <span className="pc-view">
          {t("viewcase")}{" "}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </article>
  );
}
