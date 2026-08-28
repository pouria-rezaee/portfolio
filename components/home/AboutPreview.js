import Link from "next/link";
import Container from "../layout/Container";

export default function AboutPreview() {
  return (
    <section className="section about-preview">
      <Container>
        <div className="section-heading">
          <p className="section-label">درباره من</p>

          <h2 className="section-title">
            توسعه‌دهنده‌ای علاقه‌مند به ساخت و خلق ایده‌های جدید.
          </h2>
        </div>

        <div className="about-preview-content">
          <p>
            من پوریا هستم و به توسعه وب، ساخت اپلیکیشن‌های مدرن و یادگیری
            فناوری‌های جدید علاقه دارم.
          </p>

          <p>
            همیشه سعی می‌کنم ایده‌ها را به پروژه‌های واقعی و کاربردی تبدیل کنم و
            در مسیر هر پروژه مهارت‌های فنی خودم را ارتقا بدهم.
          </p>

          <Link href="/about" className="text-link">
            بیشتر درباره من ←
          </Link>
        </div>
      </Container>
    </section>
  );
}
