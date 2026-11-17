import { archive, profile } from "../data";
import { ExternalLink, StatusBar } from "../components/ui";

export default function Archive() {
  return (
    <>
      <StatusBar>
        <a href="/" className="hover:text-accent">
          ← {profile.name}
        </a>
      </StatusBar>

      <div className="mx-auto max-w-4xl px-5 pb-20 md:px-8">
        <header className="border-b border-border pb-12 pt-16 md:pt-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Archive</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-heading md:text-6xl">All projects</h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed">
            Client systems are listed without links because the code belongs to the client.
          </p>
        </header>

        <table className="mt-10 w-full border-collapse text-left">
          <thead className="font-mono text-[11px] uppercase tracking-wider text-muted">
            <tr className="border-b border-border">
              <th className="py-3 pr-4 font-normal">Year</th>
              <th className="py-3 pr-4 font-normal">Project</th>
              <th className="hidden py-3 pr-4 font-normal md:table-cell">Made at</th>
              <th className="hidden py-3 pr-4 font-normal lg:table-cell">Built with</th>
              <th className="py-3 font-normal">Link</th>
            </tr>
          </thead>
          <tbody>
            {archive.map((p) => (
              <tr key={p.name} className="border-b border-border transition-colors hover:bg-surface">
                <td className="py-4 pr-4 align-top font-mono text-xs text-muted">{p.year}</td>
                <td className="py-4 pr-4 align-top font-medium text-heading">{p.name}</td>
                <td className="hidden py-4 pr-4 align-top text-sm md:table-cell">{p.madeAt}</td>
                <td className="hidden py-4 pr-4 align-top text-sm text-muted lg:table-cell">{p.tags.join(" · ")}</td>
                <td className="py-4 align-top font-mono text-xs">
                  {p.href ? <ExternalLink href={p.href}>{new URL(p.href).hostname.replace("www.", "")}</ExternalLink> : <span className="text-muted">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
