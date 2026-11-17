# Muhammad Alif Gunadi — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS v4. Fully static: two pages, no server.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + build into dist/
npm run preview   # serve the built dist/ locally
```

## Structure

| Path | What it is |
| --- | --- |
| `src/data.ts` | All copy: profile, about, experience, projects, skills, archive |
| `src/pages/Home.tsx` | Main page (`/`) |
| `src/pages/Archive.tsx` | Project archive (`/archive/`) |
| `src/components/` | Shared UI (tags, architecture flow, nav, theme toggle, copy email) |
| `src/index.css` | Theme colors as CSS variables (dark default, light via toggle) |
| `index.html`, `archive/index.html` | Page entries with their own title and meta tags |
| `public/Muhammad-Alif-Gunadi-CV.pdf` | Résumé served by the site |

## Deploy

`netlify.toml` builds with `npm run build` and publishes `dist/`.
