import { PROJECTS } from "../lib/projects";
import { FILTERS } from "../lib/filters";
import ProjectCard from "./ProjectCard.jsx";

export default function Work({ t, loc, filter, setFilter, onOpen }) {
  const list = PROJECTS.filter((p) => filter === "all" || p.filters.includes(filter));

  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">{t("work.tag")}</span>
          <h2>{t("work.h2")}</h2>
          <p>{t("work.p")}</p>
        </div>
        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-chip${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {loc(f.label)}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {list.length ? (
            list.map((p) => (
              <ProjectCard key={p.id} project={p} t={t} loc={loc} onOpen={onOpen} />
            ))
          ) : (
            <div className="empty-state" style={{ gridColumn: "1 / -1" }}>—</div>
          )}
        </div>
      </div>
    </section>
  );
}
