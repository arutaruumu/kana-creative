import { projects } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 w-full overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none select-none">
        <h2 className="text-[14vw] font-bold text-neutral-800/10 whitespace-nowrap">
          PROJECTS
        </h2>
      </div>

      <div className="relative z-10 mx-20">
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Selected Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
        </div>
      </div>
    </section>
  );
}
