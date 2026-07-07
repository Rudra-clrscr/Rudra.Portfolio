import Section from "./Section";
import Reveal from "./Reveal";
import { siteContent } from "@/content";

export default function ProjectExperience() {
  const { projectExperience } = siteContent;

  return (
    <Section
      id="experience-projects"
      eyebrow="Case Studies"
      jp="事例"
      title="Project deep dives"
    >
      <div className="space-y-6">
        {projectExperience.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="rounded-2xl border border-border bg-background-elevated/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <span className="font-mono text-sm text-muted">
                  {project.period}
                </span>
              </div>
              <p className="mt-1 font-medium text-accent-2">{project.role}</p>

              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Problem
                  </dt>
                  <dd className="mt-1 text-muted">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    What I built
                  </dt>
                  <dd className="mt-1 text-muted">{project.built}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    Impact
                  </dt>
                  <dd className="mt-1 text-muted">{project.impact}</dd>
                </div>
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
