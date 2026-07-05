import Image from "next/image";
import Reveal from "./Reveal";
import Typewriter from "./Typewriter";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";
import { siteContent } from "@/content";

export default function Hero() {
  const { profile } = siteContent;

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <ParticleField />

      <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
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

        <Reveal delay={200} className="shrink-0 self-center md:self-auto">
          <div className="hero-portrait">
            <div className="hero-portrait-ring">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={320}
                height={320}
                priority
                className="h-40 w-40 rounded-full object-cover sm:h-52 sm:w-52 md:h-64 md:w-64"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
