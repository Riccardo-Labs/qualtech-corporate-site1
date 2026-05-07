# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Production build to ./dist
npm run preview   # Preview production build
npm run lint      # TypeScript type-check (tsc --noEmit)
npm run clean     # Remove dist/
```

No test suite is configured.

## Environment

Copy `.env.example` to `.env` and set:

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public API key |

These are accessed via `import.meta.env.VITE_*` in `src/pages/Contact.tsx`. The `.env.example` also references `GEMINI_API_KEY` (exposed via `process.env` in `vite.config.ts`) — currently unused in the UI.

## Architecture

Single-page React app. All routes share `MainLayout` (Header + Outlet + Footer). No state management library — all state is local component state.

**Routing** (`src/App.tsx`): React Router v7 with `BrowserRouter` wrapping. AOS is initialised once on mount and refreshed on every route change. `ToastContainer` lives at app root.

**Layout** (`src/layouts/MainLayout.tsx`): Renders `<Header>`, `<Outlet>`, `<Footer>` in a full-height flex column.

**Pages** (`src/pages/`): Each page is a self-contained component with no shared data layer. Content is hardcoded inline.

**Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin) + Bootstrap 5 + React Bootstrap. Custom CSS variables and utility classes (`.btn-industrial`, `.card-industrial`, `.section-padding`, `.hero-title`, `.bg-industrial`) are defined in `src/index.css`. Bootstrap utility classes (`d-flex`, `py-5`, etc.) are used alongside Tailwind — avoid mixing both on the same element.

**Animations**: `data-aos="fade-right"` etc. attributes on JSX elements. AOS config: `duration: 1000, once: true`.

**Path alias**: `@` resolves to the project root (configured in `vite.config.ts`).
