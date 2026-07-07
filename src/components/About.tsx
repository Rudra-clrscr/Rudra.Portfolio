import Section from "./Section";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { siteContent } from "@/content";

export default function About() {
  const { profile, quickFacts, metrics } = siteContent;

  return (
    <Section id="about" eyebrow="About" watermark="01" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.about}</p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-border bg-background-elevated/60 p-4"
              >
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-background-elevated/60 p-5 text-center"
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="gradient-text text-3xl font-bold sm:text-4xl">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </span>
                <span className="mt-2 block text-xs uppercase tracking-widest text-muted">
                  {metric.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
