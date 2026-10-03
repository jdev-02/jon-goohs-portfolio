import { PUBLICATIONS } from "../data/publications";
import ExternalLink from "../components/ExternalLink";
import { FOCUS_RING } from "../styles";

export default function Publications() {
  return (
    <div>
      <p className="font-mono text-xs text-muted">// 02 publications</p>
      <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
        Publications
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        No Google Scholar profile is live under this name yet; linking it here once it exists.
      </p>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {PUBLICATIONS.map((p) => (
          <li key={p.title} className="py-4">
            {p.href ? (
              <ExternalLink
                href={p.href}
                className={`font-medium transition-colors duration-150 hover:text-accent ${FOCUS_RING}`}
              >
                {p.title}
              </ExternalLink>
            ) : (
              <span className="font-medium">{p.title}</span>
            )}
            <div className="mt-1 font-mono text-xs text-muted">
              {p.venue} &middot; {p.year}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
