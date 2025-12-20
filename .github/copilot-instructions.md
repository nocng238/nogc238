# Copilot Instructions for nogc238 Portfolio

## Project Overview

Personal portfolio website for Noah - a fullstack engineer. This is a **Next.js 16 App Router** project with React 19, TypeScript, and Tailwind CSS 4. Focus: modern animations, interactive UI components, and AI-powered chat.

## Tech Stack & Core Dependencies

- **Framework**: Next.js 16 (App Router) with React 19
- **Styling**: Tailwind CSS 4 with custom CSS variables, `tw-animate-css`, Framer Motion for animations
- **UI Components**: Radix UI primitives (Dialog, Label, Slot), custom motion components in `components/ui/`
- **AI Integration**: Google Gemini 2.5 Flash API (`@google/genai`) for chat widget functionality
- **Package Manager**: pnpm (note: `pnpm-lock.yaml` present)

## Development Workflows

- **Dev server**: `pnpm dev` (runs on http://localhost:3000)
- **Build**: `pnpm build` (Next.js optimized production build)
- **Linting**: `pnpm lint` (ESLint with Next.js config)
- **Path aliases**: `@/*` maps to project root (see [tsconfig.json](tsconfig.json))

## Architecture & Structure

### Page Structure (Single-Page Portfolio)

[app/page.tsx](app/page.tsx) is the main entry point, rendering a single-page layout with section components:

```tsx
<Navbar /> → <Hero /> → <Skills /> → <Portfolio /> → <Contact /> → <Footer />
```

- ChatWidget is currently commented out but exists in codebase
- All sections are in [components/](components/) directory

### Component Patterns

1. **Client Components**: Most interactive components use `'use client'` directive
   - Example: [components/navbar.tsx](components/navbar.tsx) has scroll detection, mobile menu, smooth scrolling
   - Framer Motion animations require client-side rendering
2. **UI Components**: Reusable animated primitives in [components/ui/](components/ui/)

   - [moving-border.tsx](components/ui/moving-border.tsx): Animated gradient border effect using Framer Motion
   - [typewriter-effect.tsx](components/ui/typewriter-effect.tsx): Character-by-character text animation
   - [background-lines.tsx](components/ui/background-lines.tsx): Decorative background patterns
   - Import from `motion/react` (not `framer-motion/react`)

3. **Utility Function**: [lib/utils.ts](lib/utils.ts) exports `cn()` helper for conditional className merging with `clsx` and `tailwind-merge`

### Styling Conventions

- **CSS Variables**: All colors/spacing defined in [app/globals.css](app/globals.css) as CSS custom properties
  - Primary color: `--primary: #22d3ee` (cyan)
  - Dark theme only (no light mode toggle)
  - Use semantic tokens: `bg-background`, `text-foreground`, `border-border`, etc.
- **Tailwind Directives**: `@import "tailwindcss"` and `@import "tw-animate-css"` at top of globals.css
- **Custom variant**: `@custom-variant dark (&:is(.dark *))` for dark mode utilities

### AI Service Integration

[services/gemini.service.ts](services/gemini.service.ts) handles Google Gemini API:

- Requires `API_KEY` environment variable
- `createChatSession()`: Initializes chat with custom system instruction
- `sendMessageToGemini()`: Sends messages and handles errors
- System instruction emphasizes Noah's "kind and funny" persona over pure technical skills

### Type Definitions

[types/index.ts](types/index.ts) contains:

- `ChatMessage`: Shape for AI chat messages (role: 'user' | 'model')
- `Project`, `Service`: Portfolio data structures

## Key Conventions

1. **Imports**: Use `@/` alias for all internal imports (e.g., `import { cn } from '@/lib/utils'`)
2. **Component Declaration**: Use `React.FC` type annotation
3. **Event Handlers**: Prefix with `handle` (e.g., `handleSmoothScroll`, `handleSend`)
4. **Animations**: Prefer Framer Motion `motion.div` with variants for enter/exit animations
5. **Smooth Scroll**: Custom implementation in Navbar accounts for 80px fixed nav height offset
6. **Image Optimization**: Next.js `<Image>` component with remote patterns configured for `picsum.photos`

## Current State & Known Issues

- ChatWidget exists but is commented out in [app/page.tsx](app/page.tsx#L18)
- ChatWidget references "Tomasz" in initial greeting (should be "Noah") - see [components/chat-widget.tsx](components/chat-widget.tsx#L10)
- Environment variable `API_KEY` needed for Gemini functionality

## When Adding Features

- **New components**: Place in `components/`, use TypeScript with proper typing
- **New animations**: Check existing motion components in `components/ui/` for reusable patterns
- **Styling**: Use Tailwind utility classes with `cn()` for conditional logic
- **AI features**: Extend `gemini.service.ts` with new functions, maintain error handling pattern
- **Images**: Add remote domains to [next.config.ts](next.config.ts) `remotePatterns` array
