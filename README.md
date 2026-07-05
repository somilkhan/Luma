# Luma

Luma initial project setup.

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Luma Design System (Task 2)

Luma is styled with a permanent premium theme. This project uses Tailwind v4 with design token integration.

### Color Palette
- **Background**: `#000000` (Tailwind Class: `bg-background`)
- **Primary Surface**: `#0A0A0A` (Tailwind Class: `bg-primary-surface`)
- **Secondary Surface**: `#111111` (Tailwind Class: `bg-secondary-surface`)
- **Glass Surface**: `rgba(255, 255, 255, 0.05)` (Tailwind Class: `bg-glass-surface`)
- **Glass Border**: `rgba(255, 255, 255, 0.08)` (Tailwind Class: `border-glass-border`)
- **Primary Text**: `#FFFFFF` (Tailwind Class: `text-primary-text`)
- **Secondary Text**: `#B3B3B3` (Tailwind Class: `text-secondary-text`)
- **Muted Text**: `#7A7A7A` (Tailwind Class: `text-muted-text`)
- **Divider**: `rgba(255, 255, 255, 0.06)` (Tailwind Class: `border-divider`)
- **Focus Ring**: `rgba(255, 255, 255, 0.35)` (Tailwind Class: `outline-focus-ring`)
- **Success**: `#22C55E` (Tailwind Class: `text-success` / `bg-success`)
- **Warning**: `#FACC15` (Tailwind Class: `text-warning` / `bg-warning`)
- **Error**: `#EF4444` (Tailwind Class: `text-error` / `bg-error`)

### Glass Style Utilities
Every glass component shares a transparent background, backdrop-blur, subtle border, and soft shadow.
- **glass**: Normal glass styled element (`bg-glass-surface backdrop-blur-md border-glass-border shadow-soft-md`)
- **glass-sm**: Smaller glass styled element (`bg-glass-surface backdrop-blur-sm border-glass-border shadow-soft-sm`)
- **glass-lg**: Large glass styled element (`bg-glass-surface backdrop-blur-lg border-glass-border shadow-soft-lg`)

### Border Radius
- **Small**: `0.25rem` (`rounded-small`)
- **Medium**: `0.5rem` (`rounded-medium`)
- **Large**: `0.75rem` (`rounded-large`)
- **Extra Large**: `1rem` (`rounded-extra-large`)
- **Pill**: `9999px` (`rounded-pill`)

### Spacing Scale
Never hardcode spacing later. Use these Tailwind spacing classes:
- **xxs**: `0.125rem` (`p-xxs`, `m-xxs`, etc.)
- **xs**: `0.25rem` (`p-xs`, `m-xs`, etc.)
- **sm**: `0.5rem` (`p-sm`, etc.)
- **md**: `1rem` (`p-md`, etc.)
- **lg**: `1.5rem` (`p-lg`, etc.)
- **xl**: `2rem` (`p-xl`, etc.)
- **xxl**: `3rem` (`p-xxl`, etc.)
- **xxxl**: `4rem` (`p-xxxl`, etc.)
- **4xl**: `6rem` (`p-4xl`, etc.)
- **5xl**: `8rem` (`p-5xl`, etc.)

### Typography
- **Display**: `text-display`
- **Heading**: `text-heading`
- **Subheading**: `text-subheading`
- **Body**: `text-body`
- **Small**: `text-small`
- **Caption**: `text-caption`

### Shadows & Blur
- **Shadows (Soft)**: `shadow-soft-sm`, `shadow-soft-md`, `shadow-soft-lg`
- **Blurs**: `blur-small` (`4px`), `blur-medium` (`8px`), `blur-large` (`16px`)

### Motion Tokens (Variables Only)
- **Fast**: `150ms` (`duration-fast` / `--animate-fast`)
- **Normal**: `300ms` (`duration-normal` / `--animate-normal`)
- **Slow**: `500ms` (`duration-slow` / `--animate-slow`)

### Z-Index Scale
- `z-dropdown` (1000)
- `z-sticky` (1020)
- `z-fixed` (1030)
- `z-modal` (1040)
- `z-popover` (1050)
- `z-toast` (1060)

---

## Getting Started

First, run the development server:

```bash
npm run dev
```
