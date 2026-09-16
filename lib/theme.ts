export type Theme = "light" | "dark";

const EVENT = "themechange";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

export function getTheme(): Theme {
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored) return stored;
  return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
}

export function getServerTheme(): Theme {
  return "light";
}

export function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document.dispatchEvent(new CustomEvent(EVENT));
}

export function subscribeTheme(callback: () => void) {
  const media = window.matchMedia(MEDIA_QUERY);
  document.addEventListener(EVENT, callback);
  media.addEventListener("change", callback);
  return () => {
    document.removeEventListener(EVENT, callback);
    media.removeEventListener("change", callback);
  };
}
