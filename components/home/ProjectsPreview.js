import Link from "next/link";
import Container from "../layout/Container";
import { projects } from "@/data/projects";
import styles from "./ProjectsPreview.module.css";

export default function ProjectsPreview() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className={styles.section} id="projects">
      <Container>
        <div className={styles.heading}>
          <div>
            <p className={styles.label}>پروژه‌ها</p>

            <h2 className={styles.title}>بعضی از کارهایی که ساخته‌ام.</h2>

            <p className={styles.description}>
              مجموعه‌ای از پروژه‌های شخصی و کاربردی که در مسیر یادگیری و توسعه
              نرم‌افزار ساخته‌ام.
            </p>
          </div>

          <Link href="/projects" className={styles.moreLink}>
            مشاهده همه پروژه‌ها
            <span>←</span>
          </Link>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <article
              className={`${styles.projectCard} ${
                project.id === 1 ? styles.featured : ""
              }`}
              key={project.id}
            >
              <Link
                href={`/projects/${project.slug}`}
                className={styles.projectImage}
              >
                <img src={project.image} alt={project.title} />

                <div className={styles.imageOverlay}>
                  <span>مشاهده پروژه</span>
                  <span>←</span>
                </div>
              </Link>

              <div className={styles.projectContent}>
                <div className={styles.projectTop}>
                  <span className={styles.category}>{project.category}</span>

                  <span className={styles.projectNumber}>0{project.id}</span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span className={styles.technology} key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.projectLink}
                >
                  جزئیات پروژه
                  <span>←</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
