import Link from "next/link";
import { nav, profile } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="cursor-pointer font-display text-sm font-bold tracking-tight text-foreground"
        >
          {profile.handle}
        </Link>
        <nav className="flex gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
