import Link from "next/link";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <p className="hero-eyebrow">سلام، من پوریا هستم</p>

          <h1 className="hero-title">
            ایده‌ها را به
            <span>تجربه‌های دیجیتال تبدیل می‌کنم.</span>
          </h1>

          <p className="hero-description">
            توسعه‌دهنده‌ای علاقه‌مند به ساخت وب‌سایت‌ها و اپلیکیشن‌های مدرن،
            کاربردی و کاربرپسند.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="btn btn-primary">
              مشاهده پروژه‌ها
            </Link>

            <Link href="/contact" className="btn btn-secondary">
              تماس با من
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
