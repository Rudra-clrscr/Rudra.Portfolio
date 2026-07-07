import Section from "./Section";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import Parallax from "./Parallax";
import { siteContent } from "@/content";

// Distinct gradient per card, cycled by index.
const banners = [
  "from-accent/30 via-accent-2/20 to-transparent",
  "from-accent-2/30 via-accent-3/20 to-transparent",
  "from-accent-3/30 via-accent/20 to-transparent",
];

function monogram(title: string) {
  return title.replace(/[^A-Za-z ]/g, "").trim().charAt(0).toUpperCase() || "•";
}

export default function Projects() {
  const { projects } = siteContent;

  return (
    <Section id="projects" eyebrow="Work" jp="実績" title="Featured projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80} className="h-full">
            <Parallax speed={i % 2 === 0 ? 14 : 34} className="h-full">
            <Tilt className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated/60 transition-colors duration-300 hover:border-accent/50">
              <div
                className={`card-shine relative flex h-28 items-center justify-center overflow-hidden bg-gradient-to-br ${
                  banners[i % banners.length]
                }`}
              >
                <span className="text-6xl font-black text-foreground/10 transition-transform duration-500 group-hover:scale-110">
                  {monogram(project.title)}
                </span>
              </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 flex-1 text-muted">{project.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-4 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-2 transition hover:text-foreground"
                  >
                    Live ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition hover:text-foreground"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </div>
            </article>
            </Tilt>
            </Parallax>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
