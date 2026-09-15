import { HeroCanvas } from "@/components/three/HeroCanvas";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 px-6 py-20 sm:py-28 md:flex-row md:gap-16 md:py-36">
      <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <p className="font-display text-sm font-medium tracking-widest text-muted-foreground uppercase">
          {profile.role}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-colors duration-200 hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <HeroCanvas />
      </div>
    </section>
  );
}
