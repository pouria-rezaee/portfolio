"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import styles from "./ContactPreview.module.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("پیام شما با موفقیت ثبت شد.");
  }

  return (
    <section className={`${styles.contact} section`} id="contact">
      <Container>
        <div className={styles.contactCard}>
          <div className={styles.contactContent}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <div className={styles.infoContact}>
                <div className={styles.infoIcon}>⌖</div>

                <h3>موقعیت</h3>

                <span>ایران، شهرکرد</span>
                <span>چهارمحال و بختیاری</span>
              </div>

              <div className={styles.infoContact}>
                <div className={styles.infoIcon}>☎</div>

                <h3>تلفن</h3>

                <span>+98 900 000 0000</span>
                <span>شنبه تا پنجشنبه</span>
              </div>

              <div className={styles.infoContact}>
                <div className={styles.infoIcon}>✉</div>

                <h3>ایمیل</h3>

                <span>your@email.com</span>
                <span>در اسرع وقت پاسخ می‌دهم</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>
                بیایید با هم یک <span>چیز فوق‌العاده</span> بسازیم.
              </h2>

              <p className={styles.formDescription}>
                اگر ایده‌ای برای یک پروژه دارید، درباره همکاری صحبت کنیم یا
                سوالی دارید، پیام خود را برای من ارسال کنید.
              </p>

              <form onSubmit={handleSubmit}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    name="name"
                    placeholder="نام شما"
                    required
                  />
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="email"
                    name="email"
                    placeholder="ایمیل شما"
                    required
                  />
                </div>

                <div className={`${styles.inputBox} ${styles.textareaBox}`}>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="پیام شما..."
                    required
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  ارسال پیام
                  <span>←</span>
                </button>

                {status && <p className={styles.successMessage}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
