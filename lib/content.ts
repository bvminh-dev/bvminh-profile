export const profile = {
  name: "Bui Van Minh",
  handle: "bvminh",
  role: "Software Engineer",
  tagline: "Building things that work, and understanding why they do.",
  location: "Vietnam",
  email: "bvminh.dev@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/bvminh-dev" },
    // { label: "LinkedIn", href: "https://linkedin.com/in/bvminh" },
  ],
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a software engineer who enjoys turning ambiguous problems into small, well-considered systems.",
    "Replace this paragraph with a couple of sentences about your background, what you work on day to day, and what you're currently exploring.",
  ],
};

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Languages", items: ["TypeScript", "Go", "Python"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis"] },
  { category: "Tools", items: ["Docker", "Git", "CI/CD"] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short, concrete description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short, concrete description of what this project does and the problem it solves.",
    tags: ["Go", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short, concrete description of what this project does and the problem it solves.",
    tags: ["Python", "Automation"],
    href: "#",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
