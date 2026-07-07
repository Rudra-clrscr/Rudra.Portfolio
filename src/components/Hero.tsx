import Reveal from "./Reveal";
import Typewriter from "./Typewriter";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";
import HeroPortrait from "./HeroPortrait";
import Parallax from "./Parallax";
import { siteContent } from "@/content";

export default function Hero() {
  const { profile } = siteContent;

  return (
    <section
      id="top"
      className="scanlines relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <ParticleField />

      {/* Neo-Tokyo vertical (tategaki) accent down the left margin */}
      <span
        aria-hidden="true"
        className="jp-vertical absolute left-4 top-1/2 hidden -translate-y-1/2 font-mono text-sm lg:block"
      >
        ポートフォリオ<span className="jp-vertical-accent"> 二〇二六</span>
      </span>

      {/* Huge faint kanji — "create/build" — drifts on scroll for depth */}
      <Parallax
        aria-hidden="true"
        speed={60}
        className="jp-watermark pointer-events-none absolute -right-2 top-16 select-none font-bold"
      >
        創
      </Parallax>

      <div className="relative z-[1] flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <Reveal>
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent-2">
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-4 text-2xl font-semibold text-muted sm:text-3xl md:text-4xl">
              <Typewriter
                words={[...profile.roles]}
                className="text-foreground"
              />
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton
                href="#projects"
                className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-medium text-white transition-[opacity,transform] hover:opacity-90"
              >
                View my work
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="rounded-full border border-border px-6 py-3 font-medium transition-[background-color,transform] hover:bg-background-elevated"
              >
                Get in touch
              </MagneticButton>
              <MagneticButton
                href={profile.resumeUrl}
                external
                className="rounded-full border border-border px-6 py-3 font-medium transition-[background-color,transform] hover:bg-background-elevated"
              >
                Download résumé
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex gap-5">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative z-[1] shrink-0 self-center md:self-auto">
          <Parallax speed={26} tilt={6} zoom={0.05}>
            <HeroPortrait src={profile.photo} alt={profile.name} />
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
