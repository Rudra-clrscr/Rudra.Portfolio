import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

/** A consistent section wrapper with an optional heading. */
export default function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl px-6 py-20 sm:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <Reveal className="mb-12">
          {eyebrow && (
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent-2">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
              <span className="section-underline" aria-hidden="true" />
            </h2>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
