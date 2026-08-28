import Link from "next/link";
import Container from "../layout/Container";
import ProjectGrid from "../projects/ProjectGrid";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="section projects-preview">
      <Container>
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-label">پروژه‌ها</p>

            <h2 className="section-title">بعضی از پروژه‌هایی که ساخته‌ام.</h2>
          </div>

          <Link href="/projects" className="text-link">
            مشاهده همه پروژه‌ها ←
          </Link>
        </div>

        <ProjectGrid projects={featuredProjects} />
      </Container>
    </section>
  );
}
