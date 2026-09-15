import { Reveal } from "@/components/motion/Reveal";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={0.06 * index}>
            <h3 className="font-display text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-base text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
