import Hero from "@/components/home/HeroPreview";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsPreview from "@/components/home/SkillsPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Contact from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <ProjectsPreview />
      <Contact />
    </>
  );
}
