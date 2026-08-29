"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HeroPreview.module.css";

const typingTexts = [
  "توسعه‌دهنده فرانت‌اند",
  "طراح رابط کاربری",
  "توسعه‌دهنده React",
  "توسعه‌دهنده Next.js",
];

const languages = ["Next.js", "React", "Javascript", "tailwind", "mongodb"];

const hobbies = ["UI / UX", "volleyball", "coding", "music", "game", "reading"];

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
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, textIndex, isDeleting]);

  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.heroLayout}>
          {/* ==================================================
              RIGHT — INTRO
          ================================================== */}
          <div className={styles.rightSide}>
            {/* <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              توسعه‌دهنده فرانت‌اند
            </div> */}

            <h1 className={styles.title}>
              سلام، من
              <strong>پوریا رضایی</strong>
              هستم
            </h1>

            <div className={styles.typewriter}>
              <span className={styles.typewriterRole}>
                {text}
                <i></i>
              </span>
            </div>

            <p className={styles.description}>
              یک توسعه‌دهنده وب با تمرکز روی ساخت رابط‌های کاربری مدرن، سریع و
              کاربردی؛ علاقه‌مند به ترکیب تکنولوژی، طراحی و تجربه کاربری.
            </p>

            <div className={styles.buttons}>
              <Link href="#projects" className={styles.primaryButton}>
                مشاهده پروژه‌ها
                <span>←</span>
              </Link>

              <Link href="#contact" className={styles.secondaryButton}>
                ارتباط با من
              </Link>
            </div>
          </div>

          {/* ==================================================
              CENTER — PROFILE IMAGE
          ================================================== */}
          <div className={styles.centerVisual}>
            <div className={styles.glow}></div>

            <div className={styles.imageWrapper}>
              <Image
                src={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/images/profile/myself2.jpg`}
                alt="پوریا رضایی"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.photo}
              />

              <div className={styles.imageOverlay}></div>
            </div>
          </div>

          {/* ==================================================
              LEFT — BADGE / HOBBIES / LANGUAGES
          ================================================== */}
          <div className={styles.leftSide}>
            {/* Badge */}
            <div className={styles.infoBlock}>
              <h2 className={styles.blockTitle}>معرفی کوتاه</h2>

              <p className={styles.blockText}>
                توسعه‌دهنده وب و علاقه‌مند به طراحی رابط کاربری. تمرکز من روی
                ساخت تجربه‌های مدرن، سریع و کاربردی است.
              </p>
            </div>

            {/* Hobbies */}
            <div className={styles.infoBlock}>
              <h2 className={styles.blockTitle}>سرگرمی ها</h2>

              <div className={styles.pillGrid}>
                {hobbies.map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className={styles.infoBlock}>
              <h2 className={styles.blockTitle}>ابزار کار</h2>

              <div className={styles.pillGrid}>
                {languages.map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
