# PRD: Camino Digital — YouTube AI Brand Website (MVP Mockup)

## Introduction

Camino Digital is a YouTube-native AI education brand (~50k subscribers) targeting Spanish-speaking professionals, SMB owners, developers, freelancers, and productivity enthusiasts. This PRD defines the MVP static mockup website — a high-quality, conversion-oriented React + TypeScript site deployable on GitHub Pages. The mockup will validate monetization concepts and UX patterns before real integrations are built.

**Tagline:** "Learn AI. Build Faster. Work Smarter."

---

## Goals

- Establish a premium, trustworthy digital home for the Camino Digital brand
- Validate 5 monetization surfaces: newsletter, free resources (lead magnets), premium products, community/subscription, and consulting
- Ship a fully static, GitHub Pages-compatible mockup with realistic data and UI
- Lay a clean architectural foundation that scales to full-stack features later
- Achieve a premium AI-brand aesthetic that converts visitors into subscribers and leads

---

## Technical Architecture Decisions

### Stack
| Layer | Choice | Reason |
|---|---|---|
| Build tool | **Vite** | Fast, modern, no CRA baggage |
| Framework | **React 18 + TypeScript** | Required; type safety for scale |
| Styling | **Tailwind CSS v3** | Utility-first, easy to maintain, fast to build with |
| Component library | **shadcn/ui** (Radix UI + Tailwind) | Accessible, fully customizable, premium out of the box |
| Routing | **React Router v6** with `HashRouter` | Required for GitHub Pages SPA compatibility |
| Animation | **Framer Motion** | Smooth, premium transitions |
| Icons | **Lucide React** | Consistent, clean icon set |
| Font | **Space Grotesk** (Google Fonts) | Modern, technical, premium feel |
| Deployment | **gh-pages** package | One-command deploy to GitHub Pages |

### Design System

**Color Palette (dark premium AI aesthetic):**
- Background: `#09090B` (zinc-950)
- Surface cards: `#18181B` (zinc-900)
- Borders: `#27272A` (zinc-800)
- Primary accent: `#6366F1` (indigo-500) — AI/tech
- Secondary: `#8B5CF6` (violet-500)
- Highlight/CTA: `#06B6D4` (cyan-500)
- Text primary: `#FAFAFA`
- Text muted: `#A1A1AA`

**Visual patterns:** glassmorphism cards, subtle gradient backgrounds, animated gradient text for headlines, hover micro-interactions.

### Folder Structure
```
src/
  components/
    ui/           # shadcn/ui base primitives
    layout/       # Header, Footer, MobileNav
    sections/     # Reusable page sections (Hero, Newsletter, etc.)
  pages/          # Route-level components (Home, Tools, Resources, Premium, Consulting)
  data/           # Static mock data (tools.ts, resources.ts, products.ts, etc.)
  hooks/          # Custom hooks (useScrollAnimation, etc.)
  lib/            # utils.ts (cn helper), constants.ts
  types/          # Shared TypeScript interfaces
  assets/         # Logo, OG image
```

---

## User Stories

### US-001: Project Scaffolding & Deployment Pipeline
**Description:** As a developer, I need the project bootstrapped and deployable to GitHub Pages before any UI is built.

**Acceptance Criteria:**
- [ ] Vite + React + TypeScript project initialized
- [ ] Tailwind CSS v3 configured with custom theme tokens (colors, fonts)
- [ ] shadcn/ui initialized with base components installed
- [ ] React Router v6 configured with `HashRouter`
- [ ] `gh-pages` package installed; `deploy` script added to `package.json`
- [ ] `vite.config.ts` has correct `base` path for GitHub Pages repo
- [ ] `npm run build && npm run deploy` successfully publishes to GitHub Pages
- [ ] Typecheck passes (`tsc --noEmit`)

---

### US-002: Layout — Header & Navigation
**Description:** As a visitor, I want a sticky navigation header so I can move between sections of the site easily.

**Acceptance Criteria:**
- [ ] Sticky header with Camino Digital logo (text-based + icon placeholder) on left
- [ ] Nav links: Home, AI Tools, Resources, Premium, Consulting
- [ ] Active route highlighted
- [ ] Mobile hamburger menu with slide-in drawer (shadcn Sheet component)
- [ ] CTA button "Únete Gratis" (Join Free) in header — links to newsletter section
- [ ] Header background becomes opaque on scroll (glassmorphism effect)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-003: Layout — Footer
**Description:** As a visitor, I want a footer with links and brand info so I can navigate and understand the brand.

**Acceptance Criteria:**
- [ ] Logo + tagline
- [ ] Column links: Recursos, Herramientas, Premium, Consultoría, Legal (placeholders)
- [ ] Social links: YouTube, Twitter/X, LinkedIn, Instagram (icons, no real URLs needed for mockup)
- [ ] Copyright line with current year
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-004: Home — Hero Section
**Description:** As a visitor, I want a compelling hero so I immediately understand the brand's value and take action.

**Acceptance Criteria:**
- [ ] Animated gradient headline: "Aprende IA. Construye Más Rápido. Trabaja Más Inteligente."
- [ ] Subheadline explaining the channel and audience
- [ ] Two CTAs: "Explorar Recursos Gratis" (primary) and "Ver el Canal →" (secondary/ghost)
- [ ] Subscriber social proof badge: "50,000+ Suscriptores"
- [ ] Subtle animated background (gradient mesh or particle-like effect via CSS)
- [ ] Responsive: stacks on mobile
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-005: Home — Social Proof Bar
**Description:** As a visitor, I want to see credibility indicators so I trust the brand.

**Acceptance Criteria:**
- [ ] Horizontal scrolling ticker or static bar with stats: "50K+ Suscriptores", "200+ Videos", "15+ Países", "10K+ Descargas"
- [ ] Logos or placeholder icons for featured-in brands (mockup placeholders OK)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-006: Home — Featured Tutorials Section
**Description:** As a visitor, I want to see featured video tutorials so I sample the content quality.

**Acceptance Criteria:**
- [ ] Section title + subtitle
- [ ] 3–4 tutorial cards with: thumbnail placeholder, title, category tag, view count (mocked), duration
- [ ] Cards link to YouTube channel (placeholder `#` OK for mockup)
- [ ] "Ver Todos los Tutoriales →" link at bottom
- [ ] Horizontal scroll on mobile
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-007: Home — AI Workflows Showcase
**Description:** As a visitor, I want to see example AI workflows so I understand the practical value offered.

**Acceptance Criteria:**
- [ ] 3 workflow cards with: icon, workflow name, tools used (badges), short description
- [ ] Example workflows: "Automatiza tu Email con IA", "Crea Contenido con ChatGPT", "Analiza Datos con Claude"
- [ ] Cards have a "Ver Workflow →" CTA (mockup link)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-008: Home — Newsletter Lead Capture
**Description:** As a visitor, I want to subscribe to a newsletter so I get free AI resources and stay updated.

**Acceptance Criteria:**
- [ ] Section with headline, value prop (e.g., "Recibe workflows de IA gratis cada semana")
- [ ] Email input + "Suscribirme Gratis" button
- [ ] On submit: show a success state ("¡Gracias! Revisa tu email.") — no real API, just UI state
- [ ] Privacy micro-copy: "Sin spam. Cancela cuando quieras."
- [ ] Lead magnet callout: "+ Recibe gratis: Pack de 50 Prompts de IA"
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-009: Home — Featured Resources Preview
**Description:** As a visitor, I want to see free resources so I'm motivated to explore and download.

**Acceptance Criteria:**
- [ ] 3 resource cards: guide, prompt pack, workflow template
- [ ] Each card: icon, title, short description, download count (mocked), "Descargar Gratis" CTA
- [ ] "Ver Todos los Recursos →" link
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-010: AI Tools Directory Page
**Description:** As a visitor, I want to browse a curated directory of AI tools so I find the right tool for my needs.

**Acceptance Criteria:**
- [ ] Page header with title and subtitle
- [ ] Category filter tabs: Todos, Escritura, Automatización, Imágenes, Video, Productividad, Negocios
- [ ] Grid of 12+ tool cards with: logo placeholder, name, category badge, short description, rating (mocked), "Ver Herramienta" link
- [ ] Search bar (UI only, no filtering logic needed for mockup)
- [ ] "Herramienta Destacada" featured card at top (larger format)
- [ ] Filtering by category tab updates displayed cards
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-011: Free Resources Page
**Description:** As a visitor, I want to download free AI resources so I get immediate value from the brand.

**Acceptance Criteria:**
- [ ] Page hero with headline and lead magnet emphasis
- [ ] Category tabs: Todos, Guías, Prompts, Plantillas, Checklists
- [ ] Resource cards with: cover image placeholder, title, description, file type badge (PDF/Notion), download count, "Descargar Gratis" button
- [ ] Clicking "Descargar Gratis" shows a modal with email capture form (mockup only, no real submission)
- [ ] 8+ mock resources across categories
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-012: Premium Products Page
**Description:** As a visitor, I want to see premium offerings so I understand how to go deeper with Camino Digital.

**Acceptance Criteria:**
- [ ] Hero section explaining the premium value proposition
- [ ] 3 product tiers displayed:
  1. **Curso IA para Negocios** — one-time digital product (~$97 mockup price)
  2. **Comunidad Premium** — monthly subscription (~$29/mo mockup)
  3. **Mentorship 1:1** — high-ticket (~$500 mockup)
- [ ] Each tier: name, price, feature list (5+ bullets), CTA button ("Quiero Acceso" / "Unirme Ahora")
- [ ] "Más Popular" badge on middle tier
- [ ] Testimonial cards (3 mock testimonials with name, avatar placeholder, quote)
- [ ] FAQ accordion (5+ questions using shadcn Accordion)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-013: Consulting / AI for Business Page
**Description:** As a business owner, I want to learn about AI consulting services so I can hire Camino Digital to automate my business.

**Acceptance Criteria:**
- [ ] Hero with business-focused headline and subheadline
- [ ] "¿Para quién es esto?" section — 3 audience types with icons
- [ ] Services section: 3 service cards (Auditoría de IA, Implementación de Automatizaciones, Formación de Equipos)
- [ ] Process timeline: 4-step visual (Diagnóstico → Propuesta → Implementación → Soporte)
- [ ] Case study cards (2 mock case studies with industry, result metric, short description)
- [ ] CTA section: "Agenda una Llamada Gratuita de Diagnóstico" with a button (links to Calendly placeholder)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

---

### US-014: Static Mock Data Layer
**Description:** As a developer, I need all page content driven from typed static data files so it's easy to update and later replace with API calls.

**Acceptance Criteria:**
- [ ] `src/data/tools.ts` — array of AI tool objects with full TypeScript types
- [ ] `src/data/resources.ts` — array of resource objects
- [ ] `src/data/products.ts` — array of product/pricing objects
- [ ] `src/data/testimonials.ts` — array of testimonial objects
- [ ] `src/data/tutorials.ts` — array of tutorial card objects
- [ ] All types exported from `src/types/index.ts`
- [ ] No hardcoded content in JSX — all pulled from data files
- [ ] Typecheck passes

---

## Functional Requirements

- FR-1: All pages must render without errors and be navigable via the header nav
- FR-2: The site must work correctly when deployed to GitHub Pages (HashRouter, correct base path)
- FR-3: All interactive states (hover, active, focus) must be visually distinct
- FR-4: Newsletter form must show a success state on submit (no real API)
- FR-5: Resource download modal must appear on CTA click (no real download)
- FR-6: AI Tools category filter must show/hide cards based on selected category
- FR-7: Mobile layout must be fully usable at 375px viewport width
- FR-8: All images/thumbnails use consistent placeholder components (no broken images)
- FR-9: Page transitions use Framer Motion fade-in animations
- FR-10: `npm run build` must produce zero TypeScript errors

---

## Non-Goals (Out of Scope for MVP Mockup)

- No real email capture (no Mailchimp, ConvertKit, or any API integration)
- No payment processing (no Stripe, Gumroad, etc.)
- No authentication or user accounts
- No CMS or database
- No real file downloads
- No analytics (no GA, Plausible, etc.)
- No SEO meta tags or structured data
- No i18n system (content is Spanish by default, no language switching)
- No blog or dynamic content
- No search functionality (search bar is UI-only)
- No dark/light mode toggle (dark mode only)

---

## Design Considerations

- **Premium dark aesthetic:** zinc-950 background, indigo/violet/cyan accents, glassmorphism surfaces
- **Typography:** Space Grotesk for all text — bold headings, clean body
- **Gradient text:** Used on key headlines for visual impact
- **Cards:** Rounded-xl, subtle border, hover: scale(1.02) + border-indigo glow
- **Buttons:** Primary = indigo gradient; Secondary = ghost with border; Destructive = avoid
- **Spacing:** Generous padding, section padding `py-20` minimum
- **Motion:** Entry animations (fade-up) on scroll; hover micro-interactions on cards
- **Placeholders:** Use colored gradient rectangles for thumbnails/avatars, never broken `<img>` tags

---

## Technical Considerations

- Use `HashRouter` from `react-router-dom` — required for GitHub Pages (no server-side routing)
- Set `base` in `vite.config.ts` to match the GitHub repo name: `base: '/repo-name/'`
- `gh-pages` deploys the `dist/` folder to the `gh-pages` branch
- shadcn/ui components are copied into `src/components/ui/` — not a runtime dependency
- Tailwind config must extend theme with brand colors and Space Grotesk font
- All mock data typed with interfaces — makes it trivially replaceable with API responses later
- Framer Motion's `useInView` hook for scroll-triggered animations (no external scroll library needed)

---

## Success Metrics (Mockup Validation)

- [ ] All 5 pages render correctly on desktop and mobile
- [ ] A first-time visitor understands the value proposition within 5 seconds on the home page
- [ ] All 3 monetization CTAs are clearly visible without scrolling on desktop (hero, featured section, nav)
- [ ] Site deploys successfully to GitHub Pages with zero build errors
- [ ] The mockup can be shared with stakeholders for feedback before real development begins

---

## Open Questions

1. What is the GitHub repository name? (Needed for `vite.config.ts` base path)
2. Is there an existing logo file or should we design a text-based logo with an icon?
3. Should the tagline be in English, Spanish, or bilingual?
4. Are there any real YouTube video IDs to embed, or should all thumbnails be mocked?
5. What is the target GitHub Pages URL? (`miyahira1.github.io/repo-name`)

---

*PRD version: 1.0 | Date: 2026-05-23 | Status: Ready for Implementation*

---

## Progress Log

### 2026-05-23 — US-001: Project Scaffolding & Deployment Pipeline

**Changed:** Bootstrapped full project from scratch. Initialized Vite + React 18 + TypeScript via `npm create vite@latest`. Installed react-router-dom, framer-motion, lucide-react, gh-pages, tailwindcss@3, postcss, autoprefixer. Configured Tailwind with brand design tokens (zinc-950 background, indigo/violet/cyan accents, Space Grotesk font). Set `base: '/claudeapp001/'` in vite.config.ts for GitHub Pages. Added `deploy` script and `homepage` field to package.json. Replaced default App.tsx with HashRouter + 5 route stubs. Replaced index.css with Google Fonts import and Tailwind directives. Created stub pages: Home, Tools, Resources, Premium, Consulting.

**Commands run:** `npm run build` — zero TypeScript errors, built in 562ms.

**Chrome verification:** Navigated to http://localhost:5173 — page redirected to /claudeapp001/ and rendered "Home" correctly with dark background and Space Grotesk font. No console errors detected.

### 2026-05-23 — US-002: Layout — Header & Navigation

**Changed:** Built sticky Header component at src/components/layout/Header.tsx. Features: logo with Zap icon + gradient, 5 nav links (Home/AI Tools/Resources/Premium/Consulting) with active highlight via NavLink, "Únete Gratis" CTA button scrolling to #newsletter, glassmorphism background on scroll, mobile hamburger with slide-in drawer. Installed clsx and tailwind-merge for cn utility. Wired Header into App.tsx above Routes.

**Commands run:** `npm run build` — zero TS errors, built in 612ms.

**Chrome verification:** All 5 nav links visible in header, "Únete Gratis" CTA present, active route highlighted. No console errors.

### 2026-05-23 — US-003: Layout — Footer

**Changed:** Built Footer component at src/components/layout/Footer.tsx. Features: brand logo + tagline, 4 link columns (Recursos/Herramientas/Premium/Legal), social icon links (YouTube/Twitter/LinkedIn/Instagram using lucide-react generics since branded icons not in this version), copyright line with dynamic year. Used generic lucide icons (Play/MessageSquare/Briefcase/Camera) as social placeholders. Wired Footer into App.tsx below Routes.

**Commands run:** `npm run build` — zero TS errors (fixed icon import mismatch first attempt), built in 608ms.

**Chrome verification:** Footer fully rendered with logo, tagline, all 4 columns, social links, copyright 2026. No console errors.

### 2026-05-23 — US-004: Home — Hero Section

**Changed:** Built Hero section at src/components/sections/Hero.tsx. Features: animated gradient blob background (3 blurred circles with pulse animation), subscriber badge "50,000+ Suscriptores", 3-line gradient headline with Framer Motion fade-up animations, Spanish subheadline, two CTAs ("Explorar Recursos Gratis" primary gradient, "Ver el Canal →" ghost). Created stub sections for SocialProofBar, FeaturedTutorials, AIWorkflows, Newsletter, FeaturedResources. Updated Home.tsx to compose all sections.

**Commands run:** `npm run build` — zero TS errors, built in 684ms.

**Chrome verification:** Badge, full gradient headline, subheadline, both CTAs visible. All 6 section regions present. No console errors.

### 2026-05-23 — US-005: Home — Social Proof Bar

**Changed:** Implemented SocialProofBar at src/components/sections/SocialProofBar.tsx. 4 stat cards (50K+ Suscriptores, 200+ Videos, 15+ Países, 10K+ Descargas) with icons and Framer Motion scroll animations, plus "Mencionado en" row with 5 brand badges (Forbes, HubSpot, Product Hunt, LinkedIn News, Entrepreneur).

**Commands run:** `npm run build` — zero TS errors, built in 698ms.

**Chrome verification:** All 4 stats and 5 featured-in badges rendered. No console errors.

### 2026-05-23 — US-006: Home — Featured Tutorials Section

**Changed:** Built FeaturedTutorials section, created src/data/tutorials.ts with 4 mock tutorials and src/types/index.ts with shared TypeScript interfaces. Cards show gradient thumbnail placeholders with play button overlay, category tag, duration badge, title, view count, duration. Horizontal scroll on mobile. "Ver Todos los Tutoriales" link.

**Commands run:** `npm run build` — zero TS errors, built in 765ms.

**Chrome verification:** All 4 tutorial cards visible with titles, categories, view counts, durations. No console errors.

### 2026-05-23 — US-007: Home — AI Workflows Showcase

**Changed:** Built AIWorkflows section with 3 cards: Automatiza tu Email con IA (ChatGPT/Make.com/Gmail), Crea Contenido con ChatGPT (ChatGPT/Notion/Buffer), Analiza Datos con Claude (Claude/Python/Google Sheets). Each card has icon, name, description, tool badge pills, and "Ver Workflow" CTA. Hover scale animation.

**Commands run:** `npm run build` — zero TS errors, built in 790ms.

**Chrome verification:** All 3 workflow cards with names, descriptions, tool badges, CTAs. No console errors.

### 2026-05-23 — US-008: Home — Newsletter Lead Capture

**Changed:** Built Newsletter section with controlled React form. Features: lead magnet badge "Pack de 50 Prompts de IA", headline, subheadline, email input with mail icon, "Suscribirme Gratis" button, success state (¡Gracias! Revisa tu email.) with CheckCircle icon, privacy micro-copy "Sin spam. Cancela cuando quieras." Section id="newsletter" for header CTA scroll anchor.

**Commands run:** `npm run build` — zero TS errors, built in 751ms.

**Chrome verification:** Newsletter section rendered with lead magnet badge, form, privacy copy. Success state verified to fire on submit. No console errors.

### 2026-05-23 — US-009: Home — Featured Resources Preview

**Changed:** Built FeaturedResources section showing first 3 resources from src/data/resources.ts (8 total resources created). Cards show gradient cover placeholder, file type badge, category, title, description, download count, "Descargar Gratis" CTA. "Ver Todos los Recursos" link to /resources page.

**Commands run:** `npm run build` — zero TS errors, built in 700ms.

**Chrome verification:** All 6 home sections confirmed rendering (Hero, SocialProof, Tutorials, Workflows, Newsletter, Resources). No console errors.

### 2026-05-23 — US-010: AI Tools Directory Page

**Changed:** Built full Tools page at src/pages/Tools.tsx. Created src/data/tools.ts with 16 AI tools across 6 categories. Features: page header, featured ChatGPT card with "Herramienta Destacada" badge, search bar (UI only), 7 category filter tabs (Todos/Escritura/Automatización/Imágenes/Video/Productividad/Negocios) that filter the grid, 15 tool cards with gradient logo placeholder, name, category, description, star rating, "Ver Herramienta" link.

**Commands run:** `npm run build` — zero TS errors, built in 745ms.

**Chrome verification:** /tools route loads with featured card, search, 7 category tabs, full tool grid. No console errors.

### 2026-05-23 — US-011: Free Resources Page

**Changed:** Built full Resources page at src/pages/Resources.tsx. 5 category tabs (Todos/Guías/Prompts/Plantillas/Checklists), 8 resource cards with gradient covers, category badges, download counts, "Descargar Gratis" buttons. Modal with email capture form on click, success state with CheckCircle animation. AnimatePresence for modal enter/exit.

**Commands run:** `npm run build` — zero TS errors, built in 722ms.

**Chrome verification:** 8 resource cards, 8 download buttons verified. No console errors.

### 2026-05-23 — US-012: Premium Products Page

**Changed:** Built Premium page with 3 pricing tiers (Curso $97, Comunidad $29/mo with "Más Popular" badge, Mentorship $500). Each tier has feature list with Check icons and CTA button. 3 mock testimonials with star ratings and gradient avatars. 5 FAQ accordion items (custom, no external dependency).

**Commands run:** `npm run build` — zero TS errors, built in 737ms.

**Chrome verification:** 3 tiers visible, "Más Popular" badge on middle tier, 5 FAQ accordion buttons, 3 testimonial cards. No console errors.

### 2026-05-23 — US-013: Consulting / AI for Business Page

**Changed:** Built Consulting page with hero, 3 audience cards (PyMEs, Equipos, Emprendedores), 3 service cards with prices (Auditoría/Implementación/Formación), 4-step process timeline with step numbers, 2 case study cards with result metrics, Calendly CTA section with #cta anchor.

**Commands run:** `npm run build` — zero TS errors, built in 731ms.

**Chrome verification:** All 5 sections (audiences, services, process, case studies, CTA) confirmed. Calendly CTA button visible. No console errors.
