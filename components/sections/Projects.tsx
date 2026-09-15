import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={0.08 * index}>
            <a
              href={project.href}
              className="group block h-full cursor-pointer rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-accent"
            >
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
