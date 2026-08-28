import Link from "next/link";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I'm Pouria</p>

          <h1 className="hero-title">
            I build modern
            <span> digital experiences.</span>
          </h1>

          <p className="hero-description">
            I'm a developer focused on building modern, functional and
            user-friendly web applications.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="btn btn-primary">
              View My Work
            </Link>

            <Link href="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
