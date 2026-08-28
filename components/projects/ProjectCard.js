import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-image-placeholder">تصویر پروژه</div>
        )}
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology} className="technology-tag">
              {technology}
            </span>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="text-link">
          مشاهده پروژه ←
        </Link>
      </div>
    </article>
  );
}
