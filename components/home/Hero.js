"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const typingTexts = [
  "توسعه‌دهنده فرانت‌اند",
  "طراح رابط کاربری",
  "توسعه‌دهنده React",
  "توسعه‌دهنده Next.js",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));

        if (text.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setText(currentText.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setTextIndex((previous) => (previous + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, textIndex, isDeleting]);

  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span>توسعه‌دهنده فرانت‌اند</span>
          </div>

          <h1 className={styles.heroTitle}>
            سلام، من <span>پوریا رضایی</span> هستم
          </h1>

          <div className={styles.typewriterContainer}>
            <p className={styles.typewriterText}>{text}</p>
            <span className={styles.cursor}></span>
          </div>

          <p className={styles.heroDescription}>
            یک توسعه‌دهنده وب با تمرکز بر ساخت رابط‌های کاربری مدرن، سریع و
            کاربرپسند؛ با علاقه به طراحی تجربه‌های دیجیتال زیبا و کاربردی.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/projects" className={styles.btnPrimary}>
              مشاهده پروژه‌ها
            </Link>

            <Link href="/contact" className={styles.btnOutline}>
              تماس با من
            </Link>
          </div>

          <div className={styles.socialIcons}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="گیت‌هاب"
            >
              GH
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="لینکدین"
            >
              in
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="ایکس"
            >
              X
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="اینستاگرام"
            >
              IG
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <div className={styles.profileImage}></div>

            <div className={styles.floatingTech}>
              <div className={`${styles.techIcon} ${styles.react}`}>⚛</div>

              <div className={`${styles.techIcon} ${styles.javascript}`}>
                JS
              </div>

              <div className={`${styles.techIcon} ${styles.next}`}>N</div>

              <div className={`${styles.techIcon} ${styles.python}`}>Py</div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/about"
        className={styles.scrollDown}
        aria-label="رفتن به بخش درباره من"
      >
        ↓
      </Link>
    </section>
  );
}
