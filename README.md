# Banking Where You Are — Mobile Journalism Campaign

An independent student-created academic campaign website for the course **Mobile Journalism & Digital Media Production (H2612CJ)**, University of Namibia, Windhoek Campus.

## Campaign Identity

- **Campaign:** Banking Where You Are
- **Tagline:** Your bank. Your life. Your way.
- **Subject Institution:** Bank Windhoek (academic subject only — not affiliated)
- **Student:** Willemina T. Alfons (Student No: 200965085)
- **Academic Year:** 2026

## Purpose

This website is a digital communication campaign microsite exploring digital banking awareness, customer safety, convenience and human support. It presents campaign visuals, an asset inventory, and a 45-second mobile video storyboard.

## Important Disclaimer

This is an **independent educational prototype**. It is not an official Bank Windhoek website or service, is not affiliated with or endorsed by Bank Windhoek Limited, and does not provide banking services. All campaign concepts, visuals and scripts are student-produced educational content.

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)

## Campaign Sections

1. **Campaign Overview** — Hero with campaign identity and CTAs
2. **Strategy & Audience** — Campaign aim, target audience segments
3. **Campaign Objectives** — Ten objectives with icons and descriptions
4. **Key Messages** — Key message, supporting messages, core campaign lines, tone
5. **Visual Identity** — Brand colours, typography, visual principles
6. **Creative Assets** — Gallery of 12 campaign visuals with detail modals
7. **Asset Inventory** — Full specification table (desktop) and cards (mobile)
8. **Video Storyboard** — 45-second vertical video concept, scene-by-scene timeline, production notes
9. **Safety & Trust** — Digital banking safety education
10. **About the Project** — Academic attribution and disclaimer
11. **Contact** — Student email link

## Components

- `src/App.tsx` — Application entry, section scroll navigation, active-section tracking
- `src/components/Header.tsx` — Sticky campaign header with section-based navigation
- `src/components/Footer.tsx` — Campaign footer with academic attribution and disclaimer
- `src/components/CampaignAssetCard.tsx` — Reusable asset card with modal detail view
- `src/pages/CampaignPage.tsx` — Main single-page campaign experience
- `src/data/campaign.ts` — Source of truth for campaign data, assets, and storyboard

## Development Commands

```bash
npm ci          # Install dependencies
npm run dev     # Start development server
npm run build   # Build for production
npm run typecheck  # Type-check with TypeScript
npm run lint    # Run ESLint
npm run preview # Preview production build
```

## Limitations

- The gallery previews 12 campaign designs from a combined portfolio image; individual exported PNG/PDF files are not included in the website repository.
- The 45-second video is a production storyboard and concept preview, not a filmed or playable video.
- No backend, database, or form submission service is connected.
- No banking services, transactions, or account features are available.
- The contact section provides a student email link only — no form submission.
