# Luma Architecture

Luma is a premium media platform designed for Movies, TV Shows, Anime, and Reading (Manga/Manhwa). Built on the modern Next.js framework, Luma provides a high-performance, accessible, and visually stunning media experience.

## Technology Stack

- **Framework**: Next.js (App Router, React 19)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (with custom utility classes and design tokens)
- **Linter**: ESLint (Next.js config and standard rules)
- **Formatter**: Prettier
- **Assets**: Structured under `public/`, `public/icons/`, `public/images/`, etc.

## Core Architectural Layers

### 1. Reusable Design Foundations (`styles/globals.css`, `constants/design-tokens.ts`)
Luma's UI design system is governed by standardized token configurations:
- **Colors**: OLED-black background (`#000000`), custom surfaces (`#0A0A0A`, `#111111`), frosted glass surfaces, and high-contrast typography colors.
- **Glass System**: Unified frosted glass cards (`glass`, `glass-sm`, `glass-lg`) with transparent overlays, backdrop filters (`backdrop-blur`), subtle borders, and soft shadows.
- **Typography Scale**: Uniform font weights and sizes from display hero elements to captions (`text-display`, `text-heading`, `text-subheading`, `text-body`, `text-small`, `text-caption`).

### 2. Foundational Reusable Component Library (`components/ui/`)
- **Button**: Handles five core visual variants (primary, secondary, glass, outline, ghost) and standard sizes.
- **Input / SearchInput**: Form and search elements supporting errors, focus rings, and custom placeholders.
- **Card**: Structural cards with sub-components for header, title, description, content, and footer.
- **GlassPanel**: Uses the glass styling tokens with varying blur and transparency levels.
- **Modal**: Structural modal overlay container managing scrolling lock and keyboard/backdrop escape.
- **Dropdown**: Uncontrolled custom dropdown with triggers, separators, and clickable menu items.
- **Skeleton**: Pulse animation loading card block.
- **Avatar**: Initials fallback and styling for guest profiles or user accounts.

### 3. Application Shell (`components/ui/AppShell.tsx`, `app/layout.tsx`)
- Coordinates the layout grid spanning all pages.
- Persistent sidebar for desktop layouts with a brand logo, active sections navigation, guest badge, and settings placeholders.
- Top navigation bar for mobile layouts with responsive sidebar drawer slide-out.
- Central main container wrapping pages within standardized spacing and responsiveness boundaries.
- Global footer with minimal licensing, support, and legal information.

### 4. Layout Page Routing (`app/`)
- Layout-only placeholders designed to structure individual modules during Phase 1:
  - **Home** (`/`)
  - **Cinema** (`/cinema`)
  - **Anime** (`/anime`)
  - **Read** (`/read`)
  - **Search** (`/search`)
  - **404 Page** (`/not-found.tsx`)
