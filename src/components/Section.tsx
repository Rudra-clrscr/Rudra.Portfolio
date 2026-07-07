import Reveal from "./Reveal";
import Parallax from "./Parallax";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  /** Big faint index/word rendered as a parallax watermark behind the heading. */
  watermark?: string;
  children: React.ReactNode;
  className?: string;
};

/** A consistent section wrapper with an optional heading. */
export default function Section({
  id,
  eyebrow,
  title,
  watermark,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden mx-auto w-full max-w-5xl px-6 py-20 sm:py-28 ${className}`}
    >
      {watermark && (
        <Parallax
          aria-hidden="true"
          className="jp-watermark pointer-events-none absolute -top-2 right-2 select-none font-mono font-bold sm:right-4"
          speed={46}
        >
          {watermark}
        </Parallax>
      )}

      {(eyebrow || title) && (
        <Reveal className="relative z-[1] mb-12">
          {eyebrow && (
            <p className="mb-2 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent-2">
              <span className="jp-eyebrow" aria-hidden="true">
                {"//"}
              </span>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="jp-glitch text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
              <span className="section-underline" aria-hidden="true" />
            </h2>
          )}
        </Reveal>
      )}
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}
