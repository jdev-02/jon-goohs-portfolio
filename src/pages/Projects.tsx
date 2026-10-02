import { FLAGSHIP_PROJECTS, COURSEWORK } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ExternalLink from "../components/ExternalLink";
import { FOCUS_RING } from "../styles";

export default function Projects() {
  return (
    <div>
      <p className="font-mono text-xs text-muted">// 01 projects</p>
      <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
        Selected projects
      </h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {FLAGSHIP_PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <h2 className="mt-14 font-display text-xl font-semibold">NPS coursework</h2>
      <p className="mt-2 text-sm text-muted">
        Graduate CS curriculum at the Naval Postgraduate School, each one a real repo, not a grade.
      </p>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {COURSEWORK.map((c) => (
          <ExternalLink
            key={c.title}
            href={c.href}
            className={`flex items-baseline justify-between gap-4 py-3.5 transition-colors duration-150 hover:text-accent ${FOCUS_RING}`}
          >
            <span>
              <span className="font-medium">{c.title}</span>
              <span className="ml-2 text-sm text-muted">{c.description}</span>
            </span>
          </ExternalLink>
        ))}
      </div>
    </div>
  );
}
