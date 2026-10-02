import { useTheme } from "../hooks/useTheme";
import { FOCUS_RING } from "../styles";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className={`w-full rounded-md border border-line px-3 py-2 text-left font-mono text-xs text-muted transition-colors duration-150 hover:border-accent hover:text-fg ${FOCUS_RING}`}
    >
      {theme === "dark" ? "◑ Light mode" : "◑ Dark mode"}
    </button>
  );
}
