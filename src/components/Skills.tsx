"use client";

import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import TechIcon from "./TechIcon";
import { siteContent } from "@/content";

export default function Skills() {
  const { skills } = siteContent;
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...skills.map((g) => g.category)];
  const visible =
    filter === "All" ? skills : skills.filter((g) => g.category === filter);

  return (
    <Section id="skills" eyebrow="Toolbox" watermark="04" title="Skills & technologies">
      <Reveal className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === cat
                  ? "border-accent bg-accent/15 text-foreground"
                  : "border-border text-muted hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-3">
        {visible.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="h-full rounded-2xl border border-border bg-background-elevated/60 p-6 transition-colors hover:border-accent/40">
              <h3 className="font-mono text-sm uppercase tracking-widest text-accent-2">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group/chip flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm transition-colors hover:border-accent/50 hover:bg-accent/5"
                  >
                    <TechIcon
                      name={item}
                      className="h-4 w-4 text-muted transition-colors group-hover/chip:text-accent-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
