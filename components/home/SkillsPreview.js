import Container from "../layout/Container";
import { skills } from "@/data/skills";
import styles from "./SkillsPreview.module.css";

export default function SkillsPreview() {
  return (
    <section className={styles.section} id="skills">
      <Container>
        <div className={styles.heading}>
          <div>
            <p className={styles.label}>مهارت‌ها</p>

            <h2 className={styles.title}>
              فناوری‌هایی که با آن‌ها کار می‌کنم.
            </h2>

            <p className={styles.description}>
              مجموعه‌ای از تکنولوژی‌ها و ابزارهایی که در توسعه پروژه‌های وب
              استفاده می‌کنم.
            </p>
          </div>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div className={styles.skillCard} key={skill.name}>
              <div className={styles.skillHeader}>
                <div className={`${styles.icon} ${styles[skill.className]}`}>
                  {skill.name.substring(0, 2)}
                </div>

                <div className={styles.skillInfo}>
                  <h3>{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
              </div>

              <div className={styles.progressTrack}>
                <div
                  className={`${styles.progressBar} ${styles[skill.className]}`}
                  style={{ "--skill-level": `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
