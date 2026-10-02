import type { AnchorHTMLAttributes, ReactNode } from "react";

// Centralizes target="_blank" + rel="noopener noreferrer" -- code-review
// flagged this pattern as hand-copied everywhere, one miss away from a
// tabnabbing-vulnerable link.
export default function ExternalLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
