# Qualtech — Corporate Website

Corporate landing page for **Qualtech**, a B2B sales network specializing in industrial packaging, converting, and printing machinery. Built with React 19, TypeScript, Vite, Tailwind CSS 4, and Bootstrap 5.

---

## Overview

Qualtech connects European manufacturers of packaging and converting equipment with end-users across the Italian and Southern European markets. The website is the company's primary digital presence — presenting its services, represented partner manufacturers, target industries, and a direct contact channel.

The site is fully responsive, uses scroll-based animations, and integrates EmailJS for server-less form delivery.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript 5 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 + Bootstrap 5 |
| Routing | React Router DOM 7 |
| Animations | AOS (Animate On Scroll) + Motion |
| Icons | Lucide React + React Icons |
| Email | EmailJS |
| Notifications | React Toastify |

---

## Project Structure

```
qualtech-corporate-site/
├── public/
│   ├── logo.png
│   └── partners/          # Partner logo assets
├── src/
│   ├── components/
│   │   ├── Header.tsx     # Sticky navigation with responsive menu
│   │   └── Footer.tsx     # Footer with quick links and contact info
│   ├── layouts/
│   │   └── MainLayout.tsx # Shared page wrapper
│   ├── pages/
│   │   ├── Home.tsx       # Hero, partners, value props, industry overview
│   │   ├── Services.tsx   # Six service cards + methodology section
│   │   ├── Industries.tsx # Flexo, converting, digital print deep-dives
│   │   ├── About.tsx      # Company story, mission, core values
│   │   ├── Partners.tsx   # Manufacturer directory with product categories
│   │   └── Contact.tsx    # EmailJS form + Google Maps embed
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          # Global CSS variables and utility classes
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Video hero, partner logos, value propositions, CTA |
| `/services` | Services | Six core offerings with step-by-step methodology |
| `/industries` | Industries | Flexographic printing, converting & lamination, digital print |
| `/about` | About | Company background, team profile, values |
| `/partners` | Partners | Six represented manufacturers with product specs |
| `/contact` | Contact | Contact form (EmailJS) and office location map |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Riccardo-Labs/qualtech-corporate-site.git
cd qualtech-corporate-site
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template identifier |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public API key |

### Development

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint      # TypeScript type checking
```

---

## Design System

The UI uses a custom set of CSS variables defined in `src/index.css`:

| Variable | Value | Usage |
|---|---|---|
| `--industrial-blue` | `#0a192f` | Primary backgrounds, header |
| `--accent-blue` | `#0047ab` | Buttons, highlights |
| `--industrial-grey` | `#f8f9fa` | Section backgrounds |
| `--text-dark` | `#1a1a1a` | Body text |
| `--text-muted` | `#6c757d` | Secondary text |

Key utility classes: `.btn-industrial`, `.card-industrial`, `.section-padding`, `.hero-title`.

---

## Deployment

The project builds to a static `dist/` folder and can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
# Deploy the ./dist directory
```

---

## Author

**Riccardo Alliegro**
riccardo.alliegro@libero.it

---

## License

Private — all rights reserved. This codebase is not open source.
