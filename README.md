# Portfolio

A modern, recruiter-facing personal portfolio built with **Next.js 16**, **React 19**,
and **Tailwind CSS v4**. Dark theme, gradient accents, and scroll-in animations.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing your content

**All text and data lives in one file:** [`src/content.ts`](src/content.ts).

Edit the `siteContent` object there — profile, bio, skills, projects, case studies
(project deep dives), experience/education timeline, and contact info. You never need to
touch the components. Placeholder values are clearly marked (e.g. `"Your Name"`).

## Résumé download

Drop your PDF at `public/resume.pdf` (delete the `resume.pdf.README.txt` placeholder).
The "Download résumé" buttons link to `/resume.pdf`.

## Contact form

The form posts to **Formspree** (no backend/secrets needed):

1. Create a free form at [formspree.io](https://formspree.io) and copy its form id.
2. Copy `.env.local.example` to `.env.local` and set:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=yourFormId
   ```
3. Restart `npm run dev`. Until this is set, the form shows a friendly notice and the
   `mailto:` link still works.

> **Alternative (self-hosted email):** swap Formspree for [Resend](https://resend.com)
> by adding an API route at `src/app/api/contact/route.ts` that calls the Resend SDK with
> a `RESEND_API_KEY`, and point the form's `fetch` in `src/components/Contact.tsx` at
> `/api/contact`.

## Deploying to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in the Vercel project settings.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |
