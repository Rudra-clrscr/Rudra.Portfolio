import Section from "./Section";
import Reveal from "./Reveal";
import { siteContent } from "@/content";

export default function Experience() {
  const { experience } = siteContent;

  return (
    <Section id="experience" eyebrow="Journey" watermark="07" title="Education">
      <div className="timeline relative pl-8">
        {experience.map((item, i) => (
          <Reveal key={`${item.title}-${item.org}`} delay={i * 70}>
            <div className="relative pb-10 last:pb-0">
              <span className="absolute -left-[2.6rem] top-1 flex h-4 w-4 items-center justify-center">
                <span className="timeline-dot h-3 w-3 rounded-full bg-gradient-to-r from-accent to-accent-2" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="font-mono text-sm text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-0.5 flex items-center gap-2 text-accent-2">
                {item.org}
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                  {item.kind}
                </span>
              </p>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
