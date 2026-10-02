/** A small bespoke divider: a chain of premises collapsing to a conclusion
 *  (∴), standing in for the reference site's domain-specific "signal line"
 *  graphic -- this site's own domain is formal proof, not electrical
 *  signals, so the motif is a proof chain rather than a literal copy. */
export default function ProofDivider() {
  return (
    <svg
      viewBox="0 0 320 24"
      className="h-6 w-full max-w-xs text-accent-2"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="12" r="3" fill="currentColor" />
      <line x1="20" y1="12" x2="60" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" />
      <circle cx="70" cy="12" r="3" fill="currentColor" />
      <line x1="80" y1="12" x2="120" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4" />
      <circle cx="130" cy="12" r="3" fill="currentColor" />
      <line x1="145" y1="12" x2="185" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <text x="195" y="17" fontFamily="JetBrains Mono, monospace" fontSize="14" fill="currentColor">
        &#8756;
      </text>
      <line x1="215" y1="12" x2="310" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
