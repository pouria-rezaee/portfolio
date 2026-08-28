"use client";

import Link from "next/link";
import styles from "./AboutPreview.module.css";

const highlights = [
  {
    number: "01",
    title: "توسعه وب",
    description: "تمرکز اصلی من روی ساخت رابط‌های کاربری مدرن و سریع است.",
  },
  {
    number: "02",
    title: "UI / UX",
    description: "به جزئیات طراحی و تجربه کاربری در کنار کدنویسی اهمیت می‌دهم.",
  },
  {
    number: "03",
    title: "یادگیری مداوم",
    description: "در کنار وب، در مسیر یادگیری Python و Machine Learning هستم.",
  },
];

export default function AboutPreview() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>درباره من</span>

            <h2 className={styles.title}>
              ترکیب <span>تکنولوژی</span>، طراحی و یادگیری
            </h2>
          </div>

          <p className={styles.intro}>
            من پوریا هستم؛ توسعه‌دهنده وب با تمرکز روی ساخت تجربه‌های دیجیتال
            مدرن، کاربردی و چشم‌نواز.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.story}>
            <span className={styles.storyNumber}>01</span>

            <div>
              <h3>مسیر من</h3>

              <p>
                مسیر من از علوم کامپیوتر شروع شد و به توسعه وب و طراحی رابط
                کاربری رسید. چیزی که برای من جذاب است، تبدیل یک ایده خام به
                محصولی است که هم از نظر فنی درست باشد و هم تجربه خوبی برای کاربر
                ایجاد کند.
              </p>

              <p>
                در کنار توسعه فرانت‌اند، در حال گسترش دانش خود در زمینه Python،
                Machine Learning و حوزه‌های مرتبط با داده هستم.
              </p>

              <Link href="/about" className={styles.moreLink}>
                بیشتر درباره من
                <span>←</span>
              </Link>
            </div>
          </div>

          <div className={styles.highlights}>
            {highlights.map((item) => (
              <div className={styles.highlight} key={item.number}>
                <span className={styles.highlightNumber}>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
