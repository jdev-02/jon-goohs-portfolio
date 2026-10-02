# jon-goohs-portfolio

Personal portfolio. Vite + React + TypeScript + Tailwind CSS v4, deployed to Vercel.

## Before this goes live

A few things are deliberately left as placeholders rather than guessed at:

- `src/pages/Contact.tsx` — public contact email, LinkedIn URL, and the live Gooseline Solutions URL
- `src/data/experience.ts` — the Navy experience entry (marked `placeholder: true`)
- `src/pages/Home.tsx` — the hero/about copy is a drafted framing, edit to taste

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build (tsc -b && vite build)
npm run preview  # serve the production build locally
```

## Deployment

Vercel, via `vercel deploy --prod`. `vercel.json` has the SPA rewrite rule
client-side routing needs on static hosting.
