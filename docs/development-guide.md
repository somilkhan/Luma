# Luma Development Guide

Welcome to the Luma contributor's guide. This document provides developers with instructions for building and testing features within the Luma ecosystem.

## Setup Requirements

- **Node.js**: `v18+` or `v20+` is highly recommended.
- **npm**: `v10+`

### Installation

Clone the repository and install project dependencies:

```bash
npm install
```

### Running the Development Server

Start the local server supporting fast updates:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

## Quality Standards

Before committing your work, ensure all checks pass successfully.

### 1. Formatting
Standardize code styles according to the Prettier configuration:

```bash
npm run format
```

### 2. Linting
Verify syntax quality, imports, and component conventions:

```bash
npm run lint
```

### 3. Typechecking
Ensure complete TypeScript strict mode compliance:

```bash
npm run typecheck
```

### 4. Build Validation
Run the full production-level compilation suite:

```bash
npm run build
```

---

## Design Token Quick Reference

### Colors (Tailwind classes)
- Background: `bg-background` (`#000000`)
- Primary Surface: `bg-primary-surface` (`#0A0A0A`)
- Secondary Surface: `bg-secondary-surface` (`#111111`)
- Glass backdrop: `bg-glass-surface` (`rgba(255, 255, 255, 0.05)`)
- Glass border: `border-glass-border` (`rgba(255, 255, 255, 0.08)`)

### Typography
- Display titles: `text-display`
- Normal headings: `text-heading`
- Feature titles: `text-subheading`
- Paragraphs: `text-body`
- Captions / Meta: `text-caption`
