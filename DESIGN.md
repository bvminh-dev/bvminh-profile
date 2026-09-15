# Design system

Generated via the `ui-ux-pro-max-skill` design-system search for "minimalist personal portfolio,
bold typography, developer", then adapted. Use this as the source of truth when adding or
changing UI — new sections should reuse these tokens rather than introducing new ones.

## Style

**Minimalism & Swiss Style** — clean, spacious, functional, high contrast, geometric,
grid-based, essential. Low visual noise so the content (name, work, projects) carries the page,
not decoration.

**Landing pattern:** Portfolio Grid — `Hero (name/role) → About → Skills → Projects (grid) →
Contact`. Neutral background, minimal accent, fast loading is part of the aesthetic, not just a
performance target.

## Color

Defined as CSS custom properties in `app/globals.css`, mapped to Tailwind tokens via
`@theme inline`. Always use the Tailwind classes (`bg-background`, `text-foreground`, etc.), never
raw hex values in components — the light/dark switch happens automatically via
`prefers-color-scheme`.

| Token | Light | Dark | Tailwind class |
|---|---|---|---|
| `--primary` | `#18181b` | `#f4f4f5` | `bg-primary` / `text-primary` |
| `--on-primary` | `#ffffff` | `#09090b` | `text-on-primary` |
| `--secondary` | `#3f3f46` | `#d4d4d8` | `text-secondary` |
| `--accent` | `#2563eb` | `#3b82f6` | `bg-accent` / `text-accent` / `border-accent` |
| `--on-accent` | `#ffffff` | `#09090b` | `text-on-accent` |
| `--background` | `#fafafa` | `#09090b` | `bg-background` |
| `--foreground` | `#09090b` | `#f4f4f5` | `text-foreground` |
| `--card` | `#ffffff` | `#111113` | `bg-card` |
| `--card-foreground` | `#09090b` | `#f4f4f5` | `text-card-foreground` |
| `--muted` | `#e8ecf0` | `#18181b` | `bg-muted` |
| `--muted-foreground` | `#475569` | `#a1a1aa` | `text-muted-foreground` |
| `--border` | `#e4e4e7` | `#27272a` | `border-border` |
| `--ring` | `#18181b` | `#f4f4f5` | focus ring |

Notes: monochrome (zinc scale) + a single blue accent used sparingly (primary CTA, links,
project-card hover border, wireframe/satellite color in the 3D scene). Don't introduce a second
accent color — the restraint is the point.

## Typography

- **Archivo** (`--font-archivo` / `font-sans`) — body text, UI labels, nav.
- **Space Grotesk** (`--font-space-grotesk` / `font-display`) — headings (`h1`–`h3`), the logo
  mark. Use `font-display` explicitly on headline-level text; everything else inherits `font-sans`
  from `body`.
- Base size 16px, `leading-relaxed` for body copy, tight tracking on large display type
  (`tracking-tight`).
- Both fonts loaded via `next/font/google` with `display: "swap"` — no manual `@font-face`, no
  additional web fonts without updating `app/layout.tsx`.

## Spacing & layout

- Mobile-first Tailwind breakpoints only: verify at 375px, 768px, 1024px, 1440px before shipping
  a layout change.
- Section container: `mx-auto w-full max-w-5xl px-6`, vertical rhythm via `py-20`/`py-28` per
  section — reuse this wrapper for any new section rather than inventing new max-widths.
- Density: standard scale (16–64px), not dashboard-dense. Generous whitespace is intentional.

## Motion

- Global rule: motion should guide the eye, never decorate. No autoplay carousels, no
  scroll-jacking, no infinite looping attention-grabbers.
- Section entrances use `components/motion/Reveal.tsx` — fade + 16px slide-up, 500ms,
  `ease: [0.22, 1, 0.36, 1]`, triggers once via `whileInView`. Wrap new section content in
  `<Reveal>` instead of writing bespoke `motion.div` variants.
- Everything motion-related must resolve to a no-op under `prefers-reduced-motion: reduce`:
  `Reveal` skips its animation via Framer's `useReducedMotion`, the 3D scene stops rotating, and
  `app/globals.css` forces near-zero transition/animation durations as a global safety net.
- Interactive element transitions (hover, color changes): 150–300ms, no custom easing needed.

## 3D scene (`components/three/`)

- Treated as **decorative**, not content — the real information (name, role, tagline) exists as
  real text next to it. The `<Canvas>` is marked `aria-hidden="true"` rather than given a
  descriptive `aria-label`; don't flip this unless the 3D scene becomes the primary content
  (e.g. an interactive viewer with no text equivalent).
- Built from primitive geometry only (icosahedron core + small spheres) — no imported models or
  textures, to keep the chunk small and load fast. Keep it this way; if a future concept needs a
  heavier asset, budget it deliberately and lazy-load it separately from the rest of the scene.
- Loaded via `next/dynamic(..., { ssr: false })` so it never blocks server-rendered HTML or the
  text LCP — any new 3D element should follow the same `Scene.tsx` + `*Canvas.tsx` dynamic-import
  split used for the hero.
- `dpr` capped at `[1, 1.5]`; rotation/orbit speed driven by `delta`, not fixed per-frame
  increments, so motion stays consistent across refresh rates.
- Respects `prefers-reduced-motion` (passed down as a prop, stops rotation/orbiting when true) and
  gives pointer (incl. touch, via R3F's unified pointer events) cursor feedback on hover.

## Anti-patterns (avoid)

- Corporate-template layouts, generic stock-photo hero sections.
- A second accent color, gradients, or drop shadows beyond the existing card/border treatment.
- Emoji used as icons — use SVG icons if icons are ever added.
- Hover-only interactive states (must also work on touch/keyboard).
- Any animation that can't be skipped/short-circuited under reduced motion.

## Pre-delivery checklist

Re-check this whenever a section or component is added:

- [ ] `cursor-pointer` on every clickable element.
- [ ] Visible focus state (handled globally by `:focus-visible` in `app/globals.css` — don't
      remove outlines with `outline-none` without replacing them).
- [ ] Text contrast ≥ 4.5:1 in both light and dark mode.
- [ ] Responsive check at 375px, 768px, 1024px, 1440px.
- [ ] `prefers-reduced-motion` respected for anything animated.
- [ ] No raw hex colors or one-off font-families in component code — use the tokens above.
