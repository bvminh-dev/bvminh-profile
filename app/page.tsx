import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} bvminh. Built with Next.js.
      </footer>
    </div>
  );
}
