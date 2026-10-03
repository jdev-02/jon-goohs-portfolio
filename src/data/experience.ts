export interface ExperienceEntry {
  dateRange: string;
  title: string;
  org: string;
  bullets: string[];
  placeholder?: boolean;
}

// Pulled from Jon's resume where the content is appropriate for a public,
// unauthenticated, search-indexed page -- education, publications-adjacent
// work, open-source/academic record, general leadership. Deliberately
// excludes clearance level, named military units, specific OCONUS
// assignments, and anything that reads as describing a specific operation:
// that content exists in his resume for direct, vetted submission to an
// employer, which is a different exposure model than a permanent public
// page. The Navy entry stays a flagged placeholder rather than guessing at
// what's safe to generalize -- that's his call, not mine.
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
      "[Placeholder — I don't have your verified service history (commissioning date, prior tours, rank progression) to write this accurately, and your resume's specifics (unit, clearance, named operations) aren't appropriate for a public page regardless. Fill in only what you'd want a stranger to read, in general terms.]",
    ],
    placeholder: true,
  },
  {
    dateRange: "May — Jun 2019",
    title: "Intern",
    org: "Microsoft Garage",
    bullets: [
      "Developed an interactive VR/AR 3D blueprint for integrating a Garage-style innovation space into Navy education and training facilities.",
      "Interviewed 20+ technologists and stakeholders to capture requirements.",
    ],
  },
];

export interface LeadershipEntry {
  role: string;
  org: string;
}

export const LEADERSHIP: LeadershipEntry[] = [
  { role: "Founding Member", org: "NPS Entrepreneurship Club" },
  { role: "Founding Member", org: "Naval Academy Information Warfare Club" },
];
