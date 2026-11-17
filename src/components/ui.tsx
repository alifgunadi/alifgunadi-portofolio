import { profile } from "../data";
import { Clock, ThemeToggle } from "./client";

export function Tags({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Architecture strip used instead of screenshots, since client work can't be shown. */
export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol aria-label="Architecture" className="flex flex-wrap items-center gap-y-2 font-mono text-xs">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center">
          <span className="border border-border bg-bg px-2.5 py-1 text-heading">{s}</span>
          {i < steps.length - 1 && (
            <span aria-hidden className="px-1.5 text-accent">
              ──▶
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export function SectionHeading({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <h2 className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-accent">{String(index).padStart(2, "0")}</span>
      <span>/ {children}</span>
      <span aria-hidden className="h-px flex-1 bg-border" />
    </h2>
  );
}

export function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
      {external && <span aria-hidden> ↗</span>}
    </a>
  );
}

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider">
      <li>
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
      </li>
      <li>
        <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
      </li>
      <li>
        <ExternalLink href={profile.resume}>Résumé</ExternalLink>
      </li>
    </ul>
  );
}

/** Top status bar shared by both pages. */
export function StatusBar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-30 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-5 py-3 font-mono text-[11px] uppercase tracking-wider text-muted md:px-8">
        <div className="flex items-center gap-3">
          <span aria-hidden className="status-dot inline-block h-2 w-2 bg-ok" />
          <span>Jakarta, ID</span>
          <span aria-hidden>·</span>
          <Clock />
        </div>
        <div className="flex items-center gap-5">
          {children}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
