import { EXPERIENCE, LEADERSHIP } from "../data/experience";
import TimelineEntry from "../components/TimelineEntry";

export default function Experience() {
  return (
    <div>
      <p className="font-mono text-xs text-muted">// 03 experience</p>
      <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
        Experience
      </h1>
      <div className="mt-8">
        {EXPERIENCE.map((entry) => (
          <TimelineEntry key={entry.title} entry={entry} />
        ))}
      </div>

      <h2 className="mt-14 font-display text-xl font-semibold">Leadership</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {LEADERSHIP.map((l) => (
          <li key={l.org} className="flex gap-2">
            <span className="text-accent-2">&bull;</span>
            <span>
              <span className="font-medium">{l.role}</span>
              <span className="text-muted">, {l.org}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
