@AGENTS.md

# Dillo Uniforms

Next.js 15 marketing website + admin panel for Dillo Uniforms (B2B uniform manufacturer).

## Stack
- Next.js 15 (App Router, TypeScript), no Tailwind
- Supabase (PostgreSQL + auth + Storage)
- Design system: `components/ds/` — 16 React components using inline styles + CSS custom properties
- Styling: `styles/globals.css` imports token CSS files from `project/tokens/`
- Icons: lucide-react

## Key paths
- `project/` — original Claude Design export (reference only, don't modify)
- `components/ds/` — ported design system components
- `components/site/` — marketing page client components (tabs, filters, forms)
- `components/admin/` — admin UI components
- `lib/queries.ts` — typed Supabase query functions
- `lib/types.ts` — TypeScript types for all DB tables
- `supabase/schema.sql` + `supabase/seed.sql` — run in Supabase Dashboard

## Dev
```bash
npm run dev
```
Requires `.env.local` with NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY.
