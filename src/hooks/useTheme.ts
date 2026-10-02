import { useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme | null {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null; // private mode / blocked storage
  }
}

// Module-level, not component state: Layout mounts <Sidebar> twice (mobile
// top bar + desktop fixed rail), each with its own ThemeToggle. Two
// independent useState()s desync the instant one of them is clicked. A
// single store + useSyncExternalStore keeps every instance in lockstep.
// Falls back to the system preference only -- an explicit choice is never
// inferred and persisted on a visitor's behalf; only toggle() below (a real
// click) writes to localStorage.
let currentTheme: Theme = getStoredTheme() ?? getSystemTheme();
const listeners = new Set<() => void>();

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function setTheme(theme: Theme, persist: boolean) {
  currentTheme = theme;
  applyTheme(theme);
  if (persist) {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* private mode -- per-viewer convenience only, fine if it doesn't persist */
    }
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentTheme;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot);
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark", /* persist */ true);
  return { theme, toggle };
}
