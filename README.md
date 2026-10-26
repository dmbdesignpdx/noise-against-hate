# Noise Against Hate

A collection of bands and artists who are against fascism, racism, and discrimination.

## If You're Curious...

### Stack

- React 19
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (on Base UI)
- Supabase
- Bun
- Biome

### Features

Built on the latest React and Next.js primitives:

**React 19**

- **`useActionState` + native form actions:** the band search is a plain `<form action>` that drives
  a Server Action through `useActionState`, giving pending state, error handling, and progressive
  enhancement without hand-rolled `onSubmit` / `useEffect` plumbing.
- **`startTransition`:** non-urgent pagination resets are marked as transitions so typing and
  results stay responsive.
- **React Compiler:** enabled (`reactCompiler: true`), so components are auto-memoized with no
  manual `useMemo` / `useCallback`.

**Next.js 16**

- **Cache Components (`"use cache"`):** the full artist directory is cached at the component level
  with `cacheLife("days")` and tagged via `cacheTag("all-bands")` for targeted invalidation.
- **Partial Prerendering and streaming:** a static shell renders instantly while cached and dynamic
  data streams in through `<Suspense>`. `partialPrefetching` keeps navigation snappy.
- **Server Actions + `server-only`:** Supabase queries run exclusively on the server, so the
  database client can never leak into the client bundle.
- **Typed routes and route-level types:** `typedRoutes` plus the globally generated `LayoutProps`
  helper keep links and layouts type-checked.
- **Turbopack** with a custom `@tailwindcss/turbopack` loader, and `inlineCss` to cut render-blocking
  stylesheet requests.

**Modern web platform and styling**

- **Tailwind CSS v4:** CSS-first config with `@theme` and custom `@utility` classes.
- **CSS `text-box: trim-both`** for precise typographic alignment, plus logical properties
  (`block-*`, `inline-*`, `inset-bs-*`) for writing-mode-aware layout.
- **Semantic HTML:** the native `<search>` landmark, plus `aria-live` / `aria-busy` regions for
  accessible async results.
- **Real-time WebGL background** via `gradflow`, with colors derived from the Tailwind palette.

**Tooling**

- **Bun** for installs and the test runner (happy-dom + Testing Library), and **Biome** for
  linting and formatting.
