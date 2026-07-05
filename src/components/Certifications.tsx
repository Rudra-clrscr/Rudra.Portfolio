import Section from "./Section";
import Reveal from "./Reveal";
import { siteContent } from "@/content";

export default function Certifications() {
  const { certifications } = siteContent;

  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 70}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background-elevated/60 p-6">
              <h3 className="font-semibold leading-snug">{cert.title}</h3>
              <p className="mt-2 font-mono text-sm text-accent-2">{cert.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
