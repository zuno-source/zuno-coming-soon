# ZUNO — Soon

This repository contains only ZUNO's public coming-soon website and documentation.

## Routes

- `/` — the minimal coming-soon page.
- `/docs` — public documentation.

The site has no API routes, database, worker, or environment variables.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck` and `npm run build` before deployment.

## Vercel

Import this repository as a Next.js project. Use the repository root as the project root and the default build command (`npm run build`). No environment variables or custom Vercel configuration are needed. Connect a remote repository only when ready to publish.
