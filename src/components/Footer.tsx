import { siteContent } from "@/content";
import Hanko from "./Hanko";

export default function Footer() {
  const { profile } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <Hanko glyph="R" />
          <p className="text-sm text-muted">
            © {year} {profile.name}. Built with Next.js & Tailwind.
          </p>
        </div>
        <div className="flex gap-5">
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
      </div>
    </footer>
  );
}
