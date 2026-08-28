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

const techs = [
  { name: "React", className: "react", icon: "⚛️" },
  { name: "Next.js", className: "next", icon: "▲" },
  { name: "Python", className: "python", icon: "🐍" },
  { name: "Tailwind", className: "tailwind", icon: "🎨" },
];

const interests = [
  "🎨 طراحی UI/UX",
  "🤖 هوش مصنوعی",
  "🌐 توسعه وب",
  "🎵 موسیقی",
  "🎮 بازی",
  "📖 مطالعه",
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
          {/* =========================
              Right Side
          ========================= */}
          <div className={styles.rightSide}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              در دسترس همکاری
            </div>

            <h1 className={styles.title}>
              سلام، من
              <strong>پوریا رضایی</strong>
              هستم
            </h1>

            <div className={styles.typewriter}>
              <span>{text}</span>
              <i></i>
            </div>

            <p className={styles.description}>
              یک توسعه‌دهنده وب با تمرکز روی ساخت رابط‌های کاربری مدرن، سریع و
              تجربه‌محور؛ علاقه‌مند به ترکیب طراحی، تکنولوژی و تجربه کاربری برای
              ساخت محصولات دیجیتال بهتر.
            </p>
          </div>

          {/* =========================
              Center
          ========================= */}
          <div className={styles.centerVisual}>
            <div className={styles.glow}></div>

            <div className={styles.imageWrapper}>
              <Image
                src="/images/profile/myself2.jpg"
                alt="پوریا رضایی - توسعه‌دهنده فرانت‌اند"
                fill
                priority
                sizes="(max-width: 700px) 70vw, 420px"
                className={styles.profileImage}
              />

              <div className={styles.imageOverlay}></div>
            </div>

            {techs.map((tech, index) => (
              <div
                key={tech.name}
                className={`${styles.techBadge} ${styles[tech.className]}`}
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {tech.icon} {tech.name}
              </div>
            ))}
          </div>

          {/* =========================
              Left Side
          ========================= */}
          <div className={styles.leftSide}>
            {/* Buttons */}
            <div className={styles.buttons}>
              <Link href="#projects" className={styles.primaryButton}>
                مشاهده پروژه‌ها
                <span>←</span>
              </Link>

              <Link href="#contact" className={styles.secondaryButton}>
                ارتباط با من
              </Link>
            </div>

            {/* Interests */}
            <div className={styles.interests}>
              <div className={styles.sectionHeader}>
                <span>01</span>
                <div></div>
                <h3>علاقه‌مندی‌ها</h3>
              </div>

              <div className={styles.interestList}>
                {interests.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>

            {/* Tech Skills */}
            <div className={styles.techSection}>
              <div className={styles.sectionHeader}>
                <span>02</span>
                <div></div>
                <h3>تخصص‌های فنی</h3>
              </div>

              <div className={styles.techList}>
                {techs.map((tech) => (
                  <span
                    key={tech.name}
                    className={`${styles.techItem} ${styles[tech.className]}`}
                  >
                    {tech.icon} {tech.name}
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
