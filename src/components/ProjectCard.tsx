import type { Project } from "../data/projects";
import ExternalLink from "./ExternalLink";
import { FOCUS_RING } from "../styles";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <ExternalLink
      href={project.href}
      className={`block rounded-lg border border-line p-5 transition-colors duration-150 hover:border-accent ${FOCUS_RING}`}
    >
      <div className="font-mono text-xs text-muted">{project.category}</div>
      <h3 className="mt-2 font-display text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
    </ExternalLink>
  );
}
