import { EXPERIENCE } from "../data/experience";
import TimelineEntry from "../components/TimelineEntry";

export default function Experience() {
  return (
    <div>
      <p className="font-mono text-xs text-muted">// 02 experience</p>
      <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
        Experience
      </h1>
      <div className="mt-8">
        {EXPERIENCE.map((entry) => (
          <TimelineEntry key={entry.title} entry={entry} />
        ))}
      </div>
    </div>
  );
}
