type CanProps = {
  name: string;
  color: string;
  accent: string;
  className?: string;
};

export default function Can({ name, color, accent, className }: CanProps) {
  const id = name.replace(/\W+/g, "-").toLowerCase();

  return (
    <svg
      viewBox="0 0 120 220"
      className={className}
      role="img"
      aria-label={`Canette ${name}`}
    >
      <defs>
        <linearGradient id={`body-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.35" />
          <stop offset="0.25" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.85" stopColor="#000" stopOpacity="0.15" />
          <stop offset="1" stopColor="#000" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`metal-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#8a8f96" />
          <stop offset="0.3" stopColor="#f2f4f6" />
          <stop offset="0.6" stopColor="#b9bec4" />
          <stop offset="1" stopColor="#6b7077" />
        </linearGradient>
      </defs>

      {/* Couvercle */}
      <path d="M18 22 Q18 12 30 10 L90 10 Q102 12 102 22 Z" fill={`url(#metal-${id})`} />
      <ellipse cx="60" cy="11" rx="30" ry="4" fill="#d8dce0" />
      <rect x="52" y="6" width="16" height="5" rx="2.5" fill="#9aa0a7" />

      {/* Corps */}
      <rect x="14" y="22" width="92" height="172" rx="6" fill={color} />
      <rect x="14" y="22" width="92" height="172" rx="6" fill={`url(#body-${id})`} />

      {/* Étiquette */}
      <text
        x="60"
        y="108"
        textAnchor="middle"
        fill={accent}
        fontSize="22"
        fontWeight="800"
        letterSpacing="1"
        transform="rotate(-90 60 108)"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        PÉTILLE
      </text>
      <text
        x="60"
        y="180"
        textAnchor="middle"
        fill={accent}
        fontSize="7.5"
        fontWeight="600"
        opacity="0.85"
      >
        {name.toUpperCase()}
      </text>
      <text x="60" y="44" textAnchor="middle" fill={accent} fontSize="6" opacity="0.7">
        33 cl · BIO
      </text>

      {/* Fond */}
      <path d="M14 194 L106 194 Q104 210 90 212 L30 212 Q16 210 14 194 Z" fill={`url(#metal-${id})`} />
    </svg>
  );
}
