"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./AboutPreview.module.css";

const stats = [
  {
    number: "03+",
    label: "سال تجربه",
  },
  {
    number: "10+",
    label: "پروژه شخصی",
  },
  {
    number: "07",
    label: "فناوری اصلی",
  },
];

const journey = [
  {
    number: "01",
    title: "رابط کاربری",
    text: "ساخت رابط‌های تمیز، مدرن و responsive با تمرکز روی جزئیات بصری.",
  },
  {
    number: "02",
    title: "تجربه کاربری",
    text: "تلاش برای اینکه محصول فقط زیبا نباشد؛ استفاده از آن هم ساده و منطقی باشد.",
  },
  {
    number: "03",
    title: "توسعه محصول",
    text: "تبدیل ایده‌های اولیه به محصولات واقعی با تکنولوژی‌های مدرن وب.",
  },
];

const tools = ["React", "Next.js", "JavaScript", "Python", "MongoDB"];

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutPreview() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        {/* ================= HEADER ================= */}

        <motion.div
          className={styles.header}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <div className={styles.eyebrow}>
            <span></span>
            درباره من
          </div> */}

          <div className={styles.headerContent}>
            <h2>
              توسعه‌دهنده‌ای که
              <br />
              <em>با کد فکر می‌کند.</em>
            </h2>

            <p>
              برای من توسعه وب فقط نوشتن کد نیست. هدفم ساخت محصولاتی است که ظاهر
              خوب، عملکرد مناسب و تجربه کاربری درست را همزمان داشته باشند.
            </p>
          </div>
        </motion.div>

        {/* ================= MAIN FEATURE ================= */}

        <div className={styles.featureGrid}>
          {/* IMAGE */}

          <motion.div
            className={styles.photoCard}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/images/profile/myself2.jpg"
              alt="پوریا رضایی"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className={styles.photo}
            />

            <div className={styles.photoOverlay}></div>

            <div className={styles.photoTop}>
              <span>Pouria Rezaee</span>
              {/* <span>01 / 03</span> */}
            </div>

            <div className={styles.photoBottom}>
              <span>Frontend Developer</span>

              <span className={styles.available}>
                <i></i>
                Available
              </span>
            </div>
          </motion.div>

          {/* INTRO */}

          <motion.div
            className={styles.introCard}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.cardNumber}>01</div>

            <h3>
              ساختن چیزهایی که
              <span> ارزش استفاده کردن دارند.</span>
            </h3>

            <div className={styles.introText}>
              <p>
                من پوریا هستم؛ یک توسعه‌دهنده وب با تمرکز روی{" "}
                <strong>Frontend</strong> و ساخت رابط‌های کاربری مدرن.
              </p>

              <p>
                در پروژه‌ها سعی می‌کنم بین <strong>طراحی</strong>،{" "}
                <strong>تجربه کاربری</strong> و تکنولوژی تعادل ایجاد کنم و
                ایده‌ها را به
                <strong> محصولات واقعی</strong> تبدیل کنم.
              </p>
            </div>

            <div className={styles.tools}>
              {tools.map((tool, index) => (
                <span key={tool}>
                  <small>0{index + 1}</small>
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}

        {/* <motion.div
          className={styles.stats}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div className={styles.stat} key={stat.label}>
              <span className={styles.statIndex}>0{index + 1}</span>

              <strong>{stat.number}</strong>

              <span>{stat.label}</span>
            </div>
          ))}

          <div className={styles.statStatement}>
            <span>FOCUS</span>
            <strong>Web / UI / UX</strong>
          </div>
        </motion.div> */}

        {/* ================= JOURNEY ================= */}

        <motion.div
          className={styles.journey}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className={styles.journeyIntro}>
            <span>02</span>

            <div>
              <small>MY JOURNEY</small>

              <h3>مسیر من تا اینجا</h3>
            </div>
          </div>

          <div className={styles.journeyList}>
            {journey.map((item) => (
              <div className={styles.journeyItem} key={item.number}>
                <div className={styles.journeyNumber}>{item.number}</div>

                <div className={styles.journeyContent}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>

                <span className={styles.journeyArrow}>↗</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          className={styles.bottomCta}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <span>03 / NEXT STEP</span>

            <h3>
              ایده‌ای داری؟
              <br />
              <em>بیایید بسازیمش.</em>
            </h3>
          </div>

          <Link href="#contact" className={styles.ctaButton}>
            شروع گفتگو
            <span>↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
