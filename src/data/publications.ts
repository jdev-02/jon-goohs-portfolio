export interface Publication {
  title: string;
  venue: string;
  year: string;
  href: string | null; // null only when no direct link could be verified
}

// Every href here was independently verified (web search + the publisher's
// own page), not copied from a resume unchecked -- e.g. IEEE Xplore for the
// MILCOM paper, arXiv's own abstract page, ACM's DL, USNA's own research
// archive for the undergraduate paper. The WEIS paper has no direct URL I
// could verify, so it's listed without a link rather than guessing one.
export const PUBLICATIONS: Publication[] = [
  {
    title: "A Game Theory for Resource-Constrained Tactical Cyber Operations",
    venue: "IEEE MILCOM",
    year: "2024",
    href: "https://ieeexplore.ieee.org/document/10773898/",
  },
  {
    title: "Adversarial Knapsack and Secondary Effects of Common Information for Cyber Operations",
    venue: "arXiv",
    year: "2024",
    href: "https://arxiv.org/abs/2403.10789",
  },
  {
    title: "Battle Ground: Data Collection and Labeling of CTF Games to Understand Human Cyber Operators",
    venue: "CSET",
    year: "2023",
    href: "https://dl.acm.org/doi/fullHtml/10.1145/3607505.3607524",
  },
  {
    title: "Reducing Attack Surface by Learning Adversarial Bag of Tricks",
    venue: "WEIS",
    year: "2022",
    href: null,
  },
  {
    title: "Reasonable Expectation of Privacy in an IP Address",
    venue: "USNA Midshipman Research",
    year: "2021",
    href: "https://www.usna.edu/AcResearch/MidResearch/virtual-posters/pdfs/CY_31.pdf",
  },
];
