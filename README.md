# AMDARPreneur Engineering Website

A responsive corporate website built with React, Vite, TypeScript, Tailwind CSS, Lucide React, and React Router.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Content locations

- Projects: `src/data/projects.ts`
- Services: `src/data/services.ts`
- FAQs: `src/data/faq.ts`
- Company profile, team, testimonials, and contact details: `src/data/site.ts` and `src/data/company.ts`
- Brand colors and fonts: `tailwind.config.js` and `src/styles/globals.css`

The contact form currently validates submissions locally and does not send messages. Connect an email service, form backend, or CRM before production use.
