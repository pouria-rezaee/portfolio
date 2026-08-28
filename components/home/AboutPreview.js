import Link from "next/link";
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
    year: "01",
    title: "علوم کامپیوتر",
    description: "شروع مسیر با یادگیری مبانی برنامه‌نویسی و توسعه نرم‌افزار.",
  },
  {
    year: "02",
    title: "توسعه وب",
    description: "تمرکز روی Frontend، React و ساخت محصولات وب مدرن.",
  },
  {
    year: "03",
    title: "مسیر جدید",
    description: "گسترش دانش در Python، داده و Machine Learning.",
  },
];

export default function AboutPreview() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.heading}>
            <h2 className={styles.title}>
              من فقط کد نمی‌زنم،
              <br />
              <span>محصول می‌سازم.</span>
            </h2>
          </div>

          <div className={styles.intro}>
            <p>
              من پوریا هستم؛ توسعه‌دهنده وب با تمرکز روی ساخت رابط‌های کاربری
              مدرن، سریع و کاربردی.
            </p>

            <p>
              چیزی که برای من اهمیت دارد، ترکیب تکنولوژی، طراحی و تجربه کاربری
              برای تبدیل یک ایده به یک محصول واقعی است.
            </p>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.identity}>
            <div className={styles.identityTop}>
              <span className={styles.identityLabel}>SOFTWARE DEVELOPER</span>

              <span className={styles.identityNumber}>01</span>
            </div>

            <div className={styles.identityVisual}>
              <div className={styles.codeSymbol}>&lt;/&gt;</div>

              <div className={`${styles.orbit} ${styles.orbitOne}`}></div>
              <div className={`${styles.orbit} ${styles.orbitTwo}`}></div>

              <span className={`${styles.tech} ${styles.techReact}`}>
                React
              </span>

              <span className={`${styles.tech} ${styles.techNext}`}>
                Next.js
              </span>

              <span className={`${styles.tech} ${styles.techJs}`}>JS</span>

              <span className={`${styles.tech} ${styles.techPy}`}>Py</span>
            </div>

            <div className={styles.identityBottom}>
              <div>
                <span>تمرکز فعلی</span>
                <strong>Web Development</strong>
              </div>

              <div className={styles.status}>
                <span></span>
                در حال یادگیری
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div className={styles.stat} key={stat.label}>
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.journey}>
              <div className={styles.journeyHeader}>
                <span>مسیر من</span>

                <span className={styles.journeyLine}></span>
              </div>

              <div className={styles.journeyItems}>
                {journey.map((item) => (
                  <div className={styles.journeyItem} key={item.year}>
                    <span className={styles.journeyNumber}>{item.year}</span>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="#contact" className={styles.cta}>
              <span>اگر پروژه‌ای در ذهن داری، صحبت کنیم</span>
              <span className={styles.ctaArrow}>←</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
