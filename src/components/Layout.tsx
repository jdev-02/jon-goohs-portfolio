import { useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import { FOCUS_RING } from "../styles";

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen md:flex">
      <div className="flex items-center justify-between border-b border-line px-4 py-3 md:hidden">
        <span className="font-display text-lg font-semibold">Jon Goohs</span>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          className={`rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-fg ${FOCUS_RING}`}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* grid-rows 0fr/1fr is the no-JS way to transition to/from auto
          height; duration collapses under prefers-reduced-motion (index.css) */}
      <div
        className={`grid border-b border-line transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Sidebar onNavigate={() => setMenuOpen(false)} />
        </div>
      </div>

      <div className="hidden md:block md:w-72 md:shrink-0">
        <div className="fixed h-screen w-72">
          <Sidebar />
        </div>
      </div>

      <main className="min-w-0 flex-1 px-6 py-10 md:px-16 md:py-16">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
