/**
 * Hanko (判子) — a Japanese vermilion seal. Used as a signature mark.
 * Pure SVG, no dependencies. The glyph defaults to ル ("Ru", for Rudra).
 */
export default function Hanko({
  glyph = "ル",
  size = 44,
  className = "",
}: {
  glyph?: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`hanko ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Personal seal"
    >
      <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="14"
          fill="var(--accent-vermilion)"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="56"
          fontWeight="700"
          fill="var(--background)"
          fontFamily="var(--font-sans), sans-serif"
        >
          {glyph}
        </text>
      </svg>
    </span>
  );
}
