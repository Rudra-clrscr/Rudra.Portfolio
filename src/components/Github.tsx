import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import { siteContent } from "@/content";

/**
 * GitHub activity section — shows the live contribution graph (via the
 * open ghchart service) plus a call-to-action to the profile. The graph is a
 * plain image, so there's no runtime JS cost.
 */
export default function Github() {
  const { profile } = siteContent;
  const user = profile.githubUser;
  const profileUrl = `https://github.com/${user}`;

  return (
    <Section id="github" eyebrow="Activity" watermark="05" title="On GitHub">
      <Reveal>
        <div className="rounded-2xl border border-border bg-background-elevated/60 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-lg font-semibold">@{user}</p>
              <p className="mt-1 text-sm text-muted">
                Where I build in the open — projects, experiments, and data
                analysis.
              </p>
            </div>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium transition hover:bg-accent/20"
            >
              View profile ↗
            </a>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-background/60 p-4">
            {/* Contribution heat-map rendered as an image by ghchart. */}
            <Image
              src={`https://ghchart.rshah.org/7c5cff/${user}`}
              alt={`${user}'s GitHub contribution graph`}
              width={880}
              height={130}
              unoptimized
              className="min-w-[640px]"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
