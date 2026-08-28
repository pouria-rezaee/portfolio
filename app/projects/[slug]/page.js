import Link from "next/link";
import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section">
        <Container>
          <h1 className="section-title">پروژه مورد نظر پیدا نشد.</h1>

          <Link href="/projects" className="text-link">
            بازگشت به پروژه‌ها ←
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="section project-details">
      <Container>
        <div className="project-details-header">
          <Link href="/projects" className="back-link">
            ← بازگشت به پروژه‌ها
          </Link>

          <span className="project-category">{project.category}</span>

          <h1 className="project-details-title">{project.title}</h1>

          <p className="project-details-description">{project.description}</p>
        </div>

        <div className="project-details-image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-image-placeholder">تصویر پروژه</div>
          )}
        </div>

        <div className="project-details-grid">
          <div className="project-details-content">
            <h2>درباره پروژه</h2>

            <p>{project.longDescription}</p>
          </div>

          <aside className="project-details-sidebar">
            <h3>فناوری‌های استفاده‌شده</h3>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology} className="technology-tag">
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                مشاهده کد
              </a>

              <a
                href={project.demo}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                مشاهده پروژه
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
