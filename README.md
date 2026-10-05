# Dr. Maya Reynolds, PsyD — Santa Monica Therapy Website

A responsive, SEO-focused homepage for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist in Santa Monica, CA.

> **Note:** Dr. Maya Reynolds is a fictional therapist. This project is a practical assignment for the Grow My Therapy Front-End Developer internship. All copy is based on the supplied practice profile, and the address ("123th Street 45 W") is part of that profile.

**Live site:** https://maya-reynolds-therapy-website-psi.vercel.app

## Assignment overview

1. **Clone** the homepage of [conejovalleycounseling.com/home](https://www.conejovalleycounseling.com/home): layout, section order, grid, spacing, typography and responsiveness.
2. **Redesign** it with a new theme, copy and images, using Dr. Reynolds' profile as the single source of truth.
3. **Add a new section:** "Our Office", using the office photos from the profile.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) with theme tokens in CSS variables
- `next/font` (Cormorant Garamond, Mulish, Mrs Saint Delafield) · `next/image`

## How the clone was built

The original homepage is laid out on a fluid grid: 26 columns on desktop (24 content columns plus a flexible gutter on each side), 10 on mobile, with row heights that scale with the viewport. I measured every block's position on that grid at desktop and mobile widths and rebuilt the same system in `app/globals.css` (`.fe`) with two small components in `components/Grid.tsx`:

- `<Section rows={[mobile, desktop]} pad={[px, vw]}>` sets the row count and vertical padding of a section.
- `<Cell m="row/col/row/col" d="row/col/row/col">` places a block on the same grid lines as the original, separately for mobile and desktop.

The result keeps the original's section order, proportions and staggered, edge-bleeding images at every screen size, while all content is new.

**Fonts:** the original uses Beaufort Pro (a paid Adobe font), Muli and a custom script. The closest free equivalents are used: Cormorant Garamond (headings), Mulish (the current name of Muli, body) and Mrs Saint Delafield (script accent words). Heading sizes follow the original's viewport-based scale.

## Sections

Hero → intro → who I help → statement band → areas of expertise → about Dr. Reynolds → heading band → specialties → **Our Office (new)** → **FAQs (new)** → closing call to action → footer.

## Design concept — "Clay & Sage"

The palette is taken from Dr. Reynolds' own office photos: exposed brick, sage-grey upholstery, warm oak and natural light.

| Role | Token | Colour |
| --- | --- | --- |
| Primary (terracotta / brick) | `--clay` | `#a84f35` |
| Secondary (deep sage) | `--sage-deep` | `#2d4a3e` |
| Accent (golden hour) | `--gold` | `#d9a45b` |
| Backgrounds | `--cream` / `--paper` / `--sand` | `#f7f2ea` / `#fffcf7` / `#eadfce` |
| Text | `--ink` | `#2b2825` |

Change any token in `app/globals.css` to re-theme the whole site.

## SEO

- Keyword-led title, meta description and H1 ("Anxiety, trauma & burnout therapy in Santa Monica")
- Canonical URL, Open Graph and Twitter tags
- `Psychologist` + `LocalBusiness` JSON-LD with address and service area
- Location terms used naturally in headings and body copy, descriptive image alt text, a single `h1`

## Accessibility

Skip-to-content link, keyboard-accessible mobile menu (closes with `Esc`), native `<details>` FAQ accordion, visible focus states, `prefers-reduced-motion` support and AA colour contrast.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

Optional: set `NEXT_PUBLIC_SITE_URL` so canonical, Open Graph and JSON-LD URLs are absolute (see `.env.example`). On Vercel the production URL is detected automatically.

## Image credits

- **Portrait and office photos** (`maya.jpg`, `office-1.jpg`, `office-2.jpg`, `detail-shelf.jpg`) come from the practice profile supplied with the assignment.
- All other photos are from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license):

| File | Photographer |
| --- | --- |
| `hero-tea-window.jpg` | Daiga Ellaby |
| `texture-linen.jpg` | Daniella (DMRACREATOR) |
| `intro-window.jpg` | Roxana Zerni |
| `help-professional.jpg` | Vitaly Gariev |
| `help-creative.jpg` | Earl Wilcox |
| `help-journaling.jpg` | Marcos Paulo Prado |
| `band-sunset-palms.jpg` | Bobby Thapa |
| `session-conversation.jpg` | Christina @ wocintechchat.com |
| `cta-mug.jpg` | Marie G. |
| `cta-beach-walk.jpg` | Ivan Lapyrin |

## Project structure

```
app/            layout (fonts, metadata, JSON-LD), page sections, theme tokens and grid
components/     Grid (Section / Cell / Photo), Header (mobile menu), Faq (accordion)
public/images/  optimised photography
```
