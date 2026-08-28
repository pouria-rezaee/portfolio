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
            <h2 className={styles.title}>بعضی از کارهایی که ساخته‌ام.</h2>

            <p className={styles.description}>
              مجموعه‌ای از پروژه‌های شخصی و کاربردی که در مسیر یادگیری و توسعه
              نرم‌افزار ساخته‌ام.
            </p>
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <article
              className={`${styles.projectCard} ${
                project.id === 1 ? styles.featured : ""
              }`}
              key={project.id}
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectImage}
                aria-label={project.title}
              >
                <div
                  className={`${styles.projectImagePlaceholder} ${
                    styles[`tone${(project.id % 3) + 1}`]
                  }`}
                  aria-hidden="true"
                >
                  <span>{project.title.slice(0, 1)}</span>
                </div>

                <div className={styles.imageOverlay}>
                  <span>مشاهده پروژه</span>
                </div>
              </a>

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

                <div className={styles.projectActions}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    مشاهده دمو
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    کد پروژه
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
