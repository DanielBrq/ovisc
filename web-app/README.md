# Ovis Web App

This is the Nuxt 4 client for Ovis. It is mobile-first, wired to the modules defined in `docs/DEVELOPMENT-PLAN.ES.md`, and built with PrimeVue, @nuxt/ui, and the upcoming Tailwind 4 design system so Leaders, Admins, and Players share a consistent interface.

## Stack
- `Nuxt 4` with file-based routing inside `app/`.
- `@nuxt/ui` and PrimeVue for composables, layouts, and data-heavy controls.
- `@nuxtjs/tailwindcss`, `tailwindcss@4`, and `@tailwindcss/vite` for the design tokens referenced in the roadmap.
- `@vite-pwa/nuxt` to keep the experience installable and offline-capable once the modules surface realtime events.

## Setup
Install Node.js 20+ or Bun (Bun is preferred because the repository already tracks `bun.lock`). The repo leans on per-app `.env` files, so copy `web-app/.env.example` to `.env` and adjust API endpoints before running.

```bash
cd web-app

# Install dependencies (bun is fastest)
bun install
```

## Running commands

```bash
# Development server (reloads on file changes)
bun run dev

# Production build
bun run build

# Preview the production build
bun run preview
```

Open `http://localhost:3000` after `dev` starts; the default layout already includes the player dashboards and the mission board scaffolding noted in the roadmap.
