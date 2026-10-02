export interface Project {
  category: string;
  title: string;
  description: string;
  href: string;
}

// Flagship work, each independently verified against the live repo/PR
// before writing the description (gh repo view / gh pr list), not
// paraphrased from memory.
export const FLAGSHIP_PROJECTS: Project[] = [
  {
    category: "Ontology authoring tool · Patent pending",
    title: "The Logic Project",
    description:
      "A Socratic-dialogue wizard for authoring SUMO ontology terms, backed by a deterministic vocabulary/syntax/proof checking pipeline against a Vampire theorem prover running in-browser via WASM, not a single-shot LLM output.",
    href: "https://github.com/ontologyportal/Thelogicproject",
  },
  {
    category: "Reasoning engine · Rust/WASM",
    title: "sigma-rs contributions",
    description:
      "Search-ranking and UI fixes, a loading-screen feature, and CI label automation shipped against Teddy Kim's Rust rewrite of SigmaKEE, the native theorem-proving engine behind the SUMO ecosystem's in-browser tooling.",
    href: "https://github.com/ontologyportal/sigma-rs/pulls?q=is%3Apr+author%3Ajdev-02",
  },
  {
    category: "Formal ontology · Open source",
    title: "SUMO / SigmaKEE / SUMOjEdit",
    description:
      "Direct contributions to the Suggested Upper Merged Ontology and its tooling: new domain terms with formal axioms (Cyber.kif), KifFileChecker-validated PRs, and jEdit plugin integration work.",
    href: "https://github.com/ontologyportal/sumo",
  },
  {
    category: "National Security Hackathon 2026",
    title: "TERA — Tactical Edge Route Agent",
    description:
      "Offline AI route planning for ATAK, built with Team TruePoint — operates with zero connectivity, a constraint that rules out any cloud-dependent planning approach.",
    href: "https://github.com/jdev-02/tera",
  },
];

export interface CourseworkEntry {
  title: string;
  description: string;
  href: string;
}

// NPS coursework (CS curriculum) -- grouped rather than given flagship-size
// cards, same two-tier pattern as the reference site's "earlier research."
export const COURSEWORK: CourseworkEntry[] = [
  {
    title: "Computer vision progression",
    description: "Pixel operations through CNN and YOLOv8 detection/tracking (CS4330)",
    href: "https://github.com/jdev-02/computer-vision-labs",
  },
  {
    title: "AI search & agents",
    description: "Agent architectures, BFS/DFS search, maze solver, MIU formal system solver (CS3310)",
    href: "https://github.com/jdev-02/ai-search-and-agents",
  },
  {
    title: "Network socket programming",
    description: "TCP/UDP, message framing, multi-client server design (CS3502)",
    href: "https://github.com/jdev-02/network-socket-programming",
  },
  {
    title: "x86-64 assembly",
    description: "RC4 cipher, bubble sort, syscall utilities, a C-compatible assembly library (CS3140)",
    href: "https://github.com/jdev-02/x86-assembly-programming",
  },
  {
    title: "OS concurrency: ATM simulation",
    description: "Multi-process simulation using semaphores to solve the lost-update race condition (CS3070)",
    href: "https://github.com/jdev-02/os-concurrency-atm-simulation",
  },
  {
    title: "Database systems / SQL",
    description: "Schemas, ER diagrams, JDBC integration, an ADS-B aviation tracking database (CS3060)",
    href: "https://github.com/jdev-02/database-systems-sql",
  },
  {
    title: "Discrete math",
    description: "Recursive algorithms, set theory, propositional and first-order logic, in Python (CS3001)",
    href: "https://github.com/jdev-02/discrete-math-python",
  },
  {
    title: "Nand2Tetris",
    description: "Jack-language programs built for the classic build-a-computer-from-scratch course (CS2001)",
    href: "https://github.com/jdev-02/nand2tetris-jack-programs",
  },
];
