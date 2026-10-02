import { Link } from "react-router-dom";
import ProofDivider from "../components/ProofDivider";
import { FOCUS_RING } from "../styles";

const AGENDA = [
  {
    title: "Formal SUMO term authoring",
    body: "Extending the Suggested Upper Merged Ontology (Cyber.kif) with new terms whose documentation claims are backed by formal axioms, not just prose.",
  },
  {
    title: "The Logic Project",
    body: "A patent-pending wizard that walks a domain expert through Socratic questions and checks the resulting logic deterministically, instead of trusting a single LLM pass.",
  },
  {
    title: "ICSC 2027 paper",
    body: "LLM-assisted ontology engineering with SUMO and automated theorem provers, written up as a methodology paper.",
  },
];

export default function Home() {
  return (
    <div>
      <p className="font-mono text-xs text-muted">// 00 home</p>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
        Formalizing knowledge so machines can prove it, not just predict it.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        {/* Jon: this is a drafted framing, not your own copy — edit freely.
            I'm not asserting your personal narrative on your behalf. */}
        I'm a Navy cyber officer and M.S. candidate at the Naval Postgraduate
        School, working with Professor Adam Pease on the SUMO upper ontology.
        My work sits at the intersection of formal logic, automated theorem
        proving, and human-AI collaboration: tools that let a domain expert
        contribute real, provable knowledge to a shared world model, with a
        deterministic check at every step instead of a model's unverified
        say-so.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/projects"
          className={`rounded-md bg-accent px-4 py-2 font-mono text-sm text-bg transition-opacity duration-150 hover:opacity-90 ${FOCUS_RING}`}
        >
          See the projects
        </Link>
        <Link
          to="/contact"
          className={`rounded-md border border-line px-4 py-2 font-mono text-sm transition-colors duration-150 hover:border-accent ${FOCUS_RING}`}
        >
          Get in touch
        </Link>
      </div>

      <div className="mt-10">
        <ProofDivider />
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold">What I'm working on now</h2>
        <div className="mt-6 space-y-6">
          {AGENDA.map((item) => (
            <div key={item.title} className="border-b border-line pb-6 last:border-0">
              <h3 className="font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
