import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { about, profile } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {about.heading}
        </h2>
      </Reveal>
      <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
        <Reveal className="shrink-0">
          <Image
            src="/images/avatar.JPG"
            alt={profile.name}
            width={160}
            height={160}
            className="h-40 w-40 rounded-full border border-border object-cover"
            priority
          />
        </Reveal>
        <div className="flex max-w-2xl flex-col gap-4">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 * (index + 1)}>
              <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
