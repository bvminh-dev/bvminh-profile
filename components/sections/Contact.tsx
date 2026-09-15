import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20 sm:py-28">
      <Reveal>
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            Open to interesting projects and conversations. Reach out anytime.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-colors duration-200 hover:opacity-90"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
