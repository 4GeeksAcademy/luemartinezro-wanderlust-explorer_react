# Wanderlust Explorer

A travel experience discovery platform built with **React** and **Next.js 16 (App Router)**. Users can explore, search, filter, and save unique travel experiences from around the world.

## Design References

These real-world UIs inspired the visual design and layout of this project:

1. **Airbnb Experiences** ([airbnb.com](https://www.airbnb.com/experiences))
   - Grid layout of experience cards with clear visual hierarchy
   - Heart icon toggle for wishlisting
   - Category badges overlaid on images
   - Clean, whitespace-heavy design with rounded corners

2. **GetYourGuide** ([getyourguide.com](https://www.getyourguide.com))
   - Search bar + filter pattern for travel activities
   - Price-per-person display on cards
   - Star ratings with review counts
   - Responsive grid that adapts from 1 to 4 columns

3. **Atlas Obscura** ([atlasobscura.com](https://www.atlasobscura.com))
   - Hero section with strong CTA for discovery
   - Category-based filtering (Adventure, Food, Culture, etc.)
   - Card-based content with destinations prominently displayed
   - Clean typography and generous spacing

## Tech Stack

- **Framework**: Next.js 16.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

| Route | Description |
|---|---|
| `/` | Home page with hero section and CTA |
| `/experiences` | Explorer with search, filters, and card grid |
| `/experiences/[id]` | Full detail view of an experience |
| `/favorites` | User's saved favorite experiences |
| `/profile` | Simulated user profile with stats |

## Features

- 🔍 **Search & Filters** — Search by title (case-insensitive regex), filter by category and destination
- 🔗 **URL-Synced State** — All search terms and filters are stored as URL query parameters (shareable links)
- ❤️ **Favorites** — Toggle heart icon on any experience card; favorites managed via React Context
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop
- 🧭 **Active Navigation** — Navbar highlights the current page using `usePathname`
- 💨 **No External State Libraries** — All state uses native React (`useState`, `useContext`, custom hooks)
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
