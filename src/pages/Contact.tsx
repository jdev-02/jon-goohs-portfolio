import ExternalLink from "../components/ExternalLink";
import { FOCUS_RING } from "../styles";

interface ContactLink {
  label: string;
  href: string | null; // null = not filled in yet, renders as a disabled placeholder, never a broken href
}

// code-review: the old literal "REPLACE_WITH_..." strings had no protocol,
// so under BrowserRouter they resolved as same-origin relative paths and
// 404'd instead of visibly failing. `href: null` can't ever render an <a>.
const LINKS: ContactLink[] = [
  { label: "GitHub", href: "https://github.com/jdev-02" },
  { label: "Email", href: null }, // Jon: your public contact email
  { label: "LinkedIn", href: null }, // Jon: your LinkedIn URL
];

const GOOSELINE_URL: string | null = null; // Jon: Gooseline Solutions' live URL

export default function Contact() {
  return (
    <div>
      <p className="font-mono text-xs text-muted">// 04 contact</p>
      <h1 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        For research, collaboration, or questions about SUMO/ontologyportal work.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {LINKS.map((l) =>
          l.href ? (
            <ExternalLink
              key={l.label}
              href={l.href}
              className={`rounded-md border border-line px-4 py-2 font-mono text-sm transition-colors duration-150 hover:border-accent ${FOCUS_RING}`}
            >
              {l.label}
            </ExternalLink>
          ) : (
            <span
              key={l.label}
              title="Not filled in yet"
              className="cursor-not-allowed rounded-md border border-dashed border-line px-4 py-2 font-mono text-sm text-muted/60"
            >
              {l.label}
            </span>
          ),
        )}
      </div>

      <div className="mt-14 rounded-lg border border-line p-5">
        <p className="font-mono text-xs text-muted">Consulting</p>
        <p className="mt-2 text-sm leading-relaxed">
          For software consulting work, see{" "}
          {GOOSELINE_URL ? (
            <ExternalLink
              href={GOOSELINE_URL}
              className={`text-accent underline underline-offset-2 ${FOCUS_RING}`}
            >
              Gooseline Solutions
            </ExternalLink>
          ) : (
            <span title="Not filled in yet" className="cursor-not-allowed underline decoration-dashed">
              Gooseline Solutions
            </span>
          )}
          , my consulting practice.
        </p>
      </div>
    </div>
  );
}
