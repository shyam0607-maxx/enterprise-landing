export default function TutorIllustration() {
  return (
    <svg
      viewBox="0 0 360 400"
      role="img"
      aria-label="Illustration of a practitioner instructor presenting to a team"
      className="h-auto w-full max-w-sm"
    >
      <defs>
        <linearGradient id="tutor-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" />
          <stop offset="100%" stopColor="var(--surface-2)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="360" height="400" rx="24" fill="url(#tutor-bg)" />

      {/* board */}
      <rect x="40" y="48" width="150" height="96" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
      <path d="M56 74 H154" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      <path d="M56 92 H134" stroke="var(--text-muted)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M56 110 H150" stroke="var(--text-muted)" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

      {/* instructor figure */}
      <g>
        <circle cx="130" cy="230" r="34" fill="var(--navy)" />
        <path
          d="M92 320c0-30 17-58 38-58s38 28 38 58v18H92v-18Z"
          fill="var(--navy)"
        />
        <rect x="118" y="200" width="24" height="12" rx="4" fill="var(--accent)" />
      </g>

      {/* pointer arm */}
      <path d="M158 236 L188 210" stroke="var(--navy)" strokeWidth="10" strokeLinecap="round" />

      {/* seated learners */}
      <g opacity="0.9">
        <circle cx="252" cy="256" r="20" fill="var(--accent)" />
        <path d="M226 320c0-20 12-38 26-38s26 18 26 38v14h-52v-14Z" fill="var(--accent)" />
      </g>
      <g opacity="0.7">
        <circle cx="304" cy="266" r="17" fill="var(--navy)" />
        <path d="M282 322c0-17 10-32 22-32s22 15 22 32v10h-44v-10Z" fill="var(--navy)" />
      </g>

      {/* floor line */}
      <path d="M40 338 H320" stroke="var(--border)" strokeWidth="2" />
    </svg>
  );
}
