import Container from "@/components/layout/Container";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="section projects-page">
      <Container>
        <div className="section-heading">
          <p className="section-label">پروژه‌ها</p>

          <h1 className="section-title">پروژه‌های من</h1>

          <p className="page-description">
            مجموعه‌ای از پروژه‌هایی که در مسیر یادگیری و توسعه ساخته‌ام.
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </Container>
    </section>
  );
}
