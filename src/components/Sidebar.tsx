import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FOCUS_RING } from "../styles";

const NAV = [
  { to: "/", label: "Home", num: "00" },
  { to: "/projects", label: "Projects", num: "01" },
  { to: "/publications", label: "Publications", num: "02" },
  { to: "/experience", label: "Experience", num: "03" },
  { to: "/contact", label: "Contact", num: "04" },
];

function navLinkClass(active: boolean) {
  return [
    "flex items-center justify-between rounded-md px-2 py-1.5 font-mono text-sm transition-colors duration-150",
    FOCUS_RING,
    active ? "text-accent" : "text-muted hover:text-fg",
  ].join(" ");
}

// code-review: Layout renders this twice (mobile top bar + desktop fixed
// rail) and the mobile copy sits inside the collapsible menu panel -- a nav
// click has to be able to close that panel, which only the mobile instance
// needs, hence the optional prop rather than wiring every caller.
export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="flex h-full flex-col justify-between border-r border-line px-6 py-8">
      <div>
        <div className="font-display text-lg font-semibold">Jon Goohs</div>
        <p className="mt-1 max-w-[20ch] text-xs text-muted">
          Navy cyber officer &amp; NPS graduate researcher &mdash; SUMO / ontologyportal
        </p>

        <nav className="mt-10 flex flex-col gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={onNavigate}
              className={({ isActive }) => navLinkClass(isActive)}
            >
              <span>{item.label}</span>
              <span className="text-muted">{item.num}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-4">
        <dl className="space-y-1.5 border-t border-line pt-4 font-mono text-xs">
          <div className="flex justify-between gap-3">
            <dt className="text-muted">Program</dt>
            <dd>M.S., NPS</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-muted">Since</dt>
            <dd>Oct 2025</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-muted">Focus</dt>
            <dd>Formal ontology, ATP</dd>
          </div>
        </dl>
        <ThemeToggle />
      </div>
    </aside>
  );
}
