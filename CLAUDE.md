# CLAUDE.md

## Project

Next.js 16 (App Router) + React 19, Tailwind v4, Supabase for data, Jotai for state, animejs for animation. Package manager is **bun**.

`AGENTS.md` warns this Next.js version has breaking changes from what you may know — read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code.

## Commands

```bash
bun i                  # install
bun run dev            # next dev (http://localhost:3000)
bun run build          # next build
bun run lint           # biome check
bun run format         # biome format --write
bun test               # bun's test runner (see below)
bun test src/__tests__/search.test.tsx   # single test file
bun run comp           # scaffold a component (utils/create-component)
```

## Architecture

- `next.config.ts` enables `cacheComponents`, `partialPrefetching`, `inlineCss`, and the React Compiler (`reactCompiler: true`) — avoid manual `useMemo`/`useCallback` unless needed. Tailwind is wired through a Turbopack `*.css` loader (`@tailwindcss/turbopack`), not PostCSS. Remote images are only allowed from `f4.bcbits.com` (Bandcamp).
- `src/app/` — routes (`page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`). The home page renders `<Search />`.
- `src/components/` — app components (`search`, `shero`, `blob`). `src/components/ui/` is shadcn (style `base-lyra`, built on `@base-ui/react`, lucide icons); it is excluded from Biome, so don't hand-format it. Add shadcn components via the `shadcn` CLI per `components.json`.
- `src/content/` — site constants (`meta.ts` holds `MetaData`, `AppData`, `Url`; `labels.ts`). Pull site name/URLs from here rather than hardcoding.
- `utils/supabase/` — Supabase client and band queries (`client.ts`, `bands.ts`). `utils/create-component/` is the generator behind `bun run comp` (templates in `partials/`).
- `src/lib/utils.ts` — `cn` helper. Path alias `@/*` → `src/*`.

## Testing

Tests live in `src/__tests__/` (bun test, configured in `bunfig.toml`): happy-dom is registered globally and Testing Library + jest-dom matchers are preloaded from `src/__tests__/setup/`. Matcher types are in `src/types/matchers.d.ts`. Test timeout is 4s.

## Style

Biome handles formatting and linting: 2-space indent, 100-col width, arrow functions without parens for single args (`x => ...`), organized imports. `useExhaustiveDependencies` is off. New words that trip the spellchecker go in `cspell.json`.
