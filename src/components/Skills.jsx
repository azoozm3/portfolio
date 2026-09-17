import { SKILLS } from "../lib/skills";

export default function Skills({ t, loc }) {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">{t("skills.tag")}</span>
          <h2>{t("skills.h2")}</h2>
          <p>{t("skills.p")}</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div className="skill-cat" key={group.cat.en}>
              <h3>{loc(group.cat)}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag mono" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
