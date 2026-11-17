import { about, experience, profile, projects, skills, stats } from "../data";
import { CopyEmail, SectionNav } from "../components/client";
import { ExternalLink, Flow, SectionHeading, SocialLinks, StatusBar, Tags } from "../components/ui";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const section = "scroll-mt-20 py-14 md:py-20";

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="absolute left-0 top-0 z-50 -translate-y-full bg-accent px-4 py-3 font-mono text-sm text-accent-ink focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <StatusBar>
        <SectionNav sections={sections} />
      </StatusBar>

      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <header className="border-b border-border pb-14 pt-16 md:pb-20 md:pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{profile.role}</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-heading md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </header>

        <main id="content">
          <section id="about" aria-label="About me" className={section}>
            <SectionHeading index={1}>About</SectionHeading>
            <div className="grid gap-10 md:grid-cols-[1fr_15rem]">
              <div className="space-y-4 leading-relaxed">
                {about.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <dl className="divide-y divide-border self-start border border-border bg-surface">
                {stats.map((s) => (
                  <div key={s.value} className="flex flex-col gap-1 px-4 py-4">
                    <dt className="text-xs leading-snug text-muted">{s.label}</dt>
                    <dd className="order-first font-mono text-2xl font-medium text-heading">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section id="experience" aria-label="Work experience" className={section}>
            <SectionHeading index={2}>Experience</SectionHeading>
            <ol className="border-l border-border">
              {experience.map((job) => (
                <li
                  key={job.title + job.period}
                  className="relative grid gap-2 border-l-2 border-transparent py-6 pl-6 transition-colors hover:border-accent md:grid-cols-[10rem_1fr] md:gap-8 md:pl-8"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-muted md:pt-1">{job.period}</p>
                  <div>
                    <h3 className="font-semibold text-heading">{job.title}</h3>
                    <p className="text-sm text-muted">{job.org}</p>
                    {job.description && <p className="mt-3 text-sm leading-relaxed">{job.description}</p>}
                    {job.highlights && (
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                        {job.highlights.map((h) => (
                          <li key={h.slice(0, 24)} className="flex gap-3">
                            <span aria-hidden className="font-mono text-accent">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Tags items={job.tags} />
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 font-mono text-xs uppercase tracking-wider">
              <ExternalLink href={profile.resume}>Full résumé (PDF)</ExternalLink>
            </p>
          </section>

          <section id="projects" aria-label="Selected projects" className={section}>
            <SectionHeading index={3}>Projects</SectionHeading>
            <ul className="space-y-6">
              {projects.map((p, i) => (
                <li key={p.name} className="border border-border bg-surface transition-colors hover:border-accent">
                  <div className="flex items-center justify-between border-b border-border px-5 py-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                    <span>PRJ-{String(i + 1).padStart(2, "0")}</span>
                    <span>{p.note ?? "Personal project"}</span>
                  </div>
                  <div className="space-y-4 p-5">
                    <div>
                      <h3 className="text-lg font-semibold text-heading">{p.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
                    </div>
                    <Flow steps={p.flow} />
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <Tags items={p.tags} />
                      {p.links?.map((l) => (
                        <ExternalLink key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-wider">
                          {l.label}
                        </ExternalLink>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-xs uppercase tracking-wider">
              <a href="/archive/" className="underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent">
                All projects →
              </a>
            </p>

            <div className="mt-16">
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">Toolbox</h3>
              <dl className="divide-y divide-border border-y border-border">
                {skills.map((s) => (
                  <div key={s.group} className="grid gap-1 py-3 md:grid-cols-[10rem_1fr] md:gap-8">
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted md:pt-0.5">{s.group}</dt>
                    <dd className="text-sm text-heading">{s.items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section id="contact" aria-label="Contact" className={section}>
            <SectionHeading index={4}>Contact</SectionHeading>
            <p className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-heading md:text-4xl">
              Have a backend problem worth solving? Let&apos;s talk.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              Based in {profile.location}. The fastest way to reach me is email; I&apos;m also on{" "}
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>.
            </p>
            <div className="mt-8">
              <CopyEmail email={profile.email} />
            </div>
          </section>
        </main>

        <footer className="flex flex-wrap justify-between gap-2 border-t border-border py-8 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" onClick={(e) => (e.preventDefault(), window.scrollTo({ top: 0 }))} className="hover:text-accent">
            Back to top ↑
          </a>
        </footer>
      </div>
    </>
  );
}
