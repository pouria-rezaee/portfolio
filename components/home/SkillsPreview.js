"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import styles from "./SkillsPreview.module.css";

const reveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SkillsPreview() {
  return (
    <section className={styles.section} id="skills">
      <div className="container">
        {/* ================= HEADER ================= */}

        <motion.div
          className={styles.header}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.headerLeft}>
            <h2>
              ابزارهایی که
              <br />
              <em>با آن‌ها می‌سازم.</em>
            </h2>
          </div>

          <p className={styles.headerDescription}>
            تکنولوژی‌هایی که در مسیر توسعه وب با آن‌ها کار کرده‌ام و در حال
            گسترش دانش خود در آن‌ها هستم.
          </p>
        </motion.div>

        {/* ================= MAIN ================= */}

        <div className={styles.skillsLayout}>
          {/* ================= LEFT INFO ================= */}

          <motion.div
            className={styles.intro}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.introTop}>
              {/* <span>01</span> */}
              <span>TECHNOLOGY</span>
            </div>

            <div className={styles.introContent}>
              <div className={styles.bigSymbol}>{"</>"}</div>

              <h3>
                ساختن،
                <br />
                <span>یاد گرفتن،</span>
                <br />
                بهتر شدن.
              </h3>

              <p>
                برای من یادگیری تکنولوژی فقط جمع کردن اسم‌ها نیست؛ مهم این است
                که بتوانم از هر ابزار برای حل یک مسئله واقعی استفاده کنم.
              </p>
            </div>

            <div className={styles.introFooter}>
              <span className={styles.liveDot}></span>
              درحال یادگیری
            </div>
          </motion.div>

          {/* ================= SKILLS ================= */}

          <motion.div
            className={styles.skillsPanel}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className={styles.panelHeader}>
              <div>
                {/* <span>02</span> */}
                <strong>ابزار و مهارت ها</strong>
              </div>

              <small>{skills.length.toString().padStart(2, "0")} Skills</small>
            </div>

            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <motion.div
                  className={styles.skill}
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.45,
                  }}
                >
                  <div className={styles.skillIdentity}>
                    <span className={styles.skillNumber}>
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <div
                      className={`${styles.icon} ${styles[skill.className]}`}
                    >
                      {skill.name.substring(0, 2)}
                    </div>

                    <div className={styles.skillName}>
                      <strong>{skill.name}</strong>

                      <span>
                        {skill.level >= 85
                          ? "Advanced"
                          : skill.level >= 70
                            ? "Intermediate"
                            : "Learning"}
                      </span>
                    </div>
                  </div>

                  <div className={styles.skillProgress}>
                    <div className={styles.progressMeta}>
                      <span>PROFICIENCY</span>
                      <b>{skill.level}%</b>
                    </div>

                    <div className={styles.track}>
                      <motion.div
                        className={`${styles.bar} ${styles[skill.className]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: index * 0.06 + 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>

                  <span className={styles.arrow}>↗</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
