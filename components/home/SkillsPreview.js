import Link from "next/link";
import Container from "../layout/Container";
import { skills } from "@/data/skills";

export default function SkillsPreview() {
  return (
    <section className="section skills-preview">
      <Container>
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-label">مهارت‌ها</p>

            <h2 className="section-title">
              فناوری‌هایی که با آن‌ها کار می‌کنم.
            </h2>
          </div>

          <Link href="/skills" className="text-link">
            مشاهده همه مهارت‌ها ←
          </Link>
        </div>

        <div className="skills-box">
          {skills.map((skill) => (
            <div className="skill-box" key={skill.name}>
              <span className="skill-title">{skill.name}</span>

              <div className="skill-bar">
                <div
                  className={`skill-per ${skill.className}`}
                  style={{ "--skill-level": `${skill.level}%` }}
                >
                  <span className="tooltip">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
