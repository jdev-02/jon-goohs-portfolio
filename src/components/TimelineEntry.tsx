import type { ExperienceEntry } from "../data/experience";

export default function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  // code-review: only the bullets were italicized before, so an unfilled
  // dateRange/title ("[dates]", "[Role/title]") rendered with the same
  // visual weight as real entries -- indistinguishable from a content bug.
  const flag = entry.placeholder ? "italic opacity-70" : undefined;
  return (
    <div className="grid gap-2 border-b border-line py-8 last:border-0 md:grid-cols-[160px_1fr] md:gap-8">
      <div className={`font-mono text-xs text-muted ${flag ?? ""}`}>{entry.dateRange}</div>
      <div>
        <h3 className={`font-display text-lg font-semibold ${flag ?? ""}`}>{entry.title}</h3>
        <div className={`font-mono text-sm text-accent ${flag ?? ""}`}>{entry.org}</div>
        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-accent-2">&bull;</span>
              <span className={flag}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
