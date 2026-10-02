export interface ExperienceEntry {
  dateRange: string;
  title: string;
  org: string;
  bullets: string[];
  placeholder?: boolean;
}

// Verified entries only, except the one explicitly marked `placeholder`.
// Dates/roles here come from standing session memory, not invention --
// the Navy entry's specifics are Jon's to fill in, not mine to guess.
export const EXPERIENCE: ExperienceEntry[] = [
  {
    dateRange: "Oct 2025 — Present",
    title: "Graduate Researcher, SUMO / ontologyportal",
    org: "Naval Postgraduate School, with Professor Adam Pease",
    bullets: [
      "Author formal SUMO ontology extensions (Cyber.kif) under Strict-authorship PR discipline: KifFileChecker validation, jUnit tests, and a transcript of passing tests on every PR.",
      "Designed and built The Logic Project, a patent-pending Socratic-dialogue wizard for ontology term authoring, with a deterministic checking pipeline against a Vampire theorem prover.",
      "Contribute directly to sigma-rs (Rust/WASM SigmaKEE engine) and the SUMO/SigmaKEE/SUMOjEdit tooling ecosystem.",
    ],
  },
  {
    dateRange: "— Present",
    title: "Founder",
    org: "Gooseline Solutions LLC",
    bullets: [
      "Independent software consulting practice.",
      "[Jon: fill in scope/clients you want public here.]",
    ],
  },
  {
    dateRange: "[dates]",
    title: "[Role/title]",
    org: "U.S. Navy",
    bullets: [
      "[Placeholder — I don't have your verified service history (commissioning date, prior tours, rank progression) to write this accurately. Next tour (~March 2027) is a cyber protection-team lead role in San Diego per your own notes, but I'm not filling in specifics I haven't confirmed with you.]",
    ],
    placeholder: true,
  },
];
