# Web Portfolio - Claude Code Rules

## Project Overview

This is a personal portfolio website for Jorge Vergara, a UX/UI Designer and 3D Artist based in Colombia. The project is built from the Figma design at:

**Figma Design**: https://www.figma.com/design/W7cfmGZUw4uoD8mTszuaXU/Web-Portafolio?node-id=73-2

---

## Design System Architecture

### Base Unit: rem @ 10px

All tokens use **rem as the base unit (10px = 1rem)**. This ensures proper responsiveness and accessibility (respects user font settings).

---

## 1. Design Tokens

### 1.1 Color Tokens (with Dark Mode)

**Light Mode** (default - from Figma):
```css
:root, [data-theme="light"] {
  /* Brand Colors */
  --color-primary: #264027;
  --color-primary-hover: #1e3020;
  --color-secondary: #55251d;
  --color-secondary-hover: #4a2a1f;

  /* Backgrounds */
  --color-background: #dce0d9;
  --color-surface: #f0f2ee;
  --color-surface-raised: #ffffff;

  /* Text */
  --color-text: #1a1a1a;
  --color-text-secondary: #4a4a4a;
  --color-text-muted: #6b6b6b;
  --color-text-inverse: #ffffff;

  /* Borders & Dividers */
  --color-border: #c4c8c1;
  --color-divider: #b8bcb5;

  /* State Colors */
  --color-hover: rgba(38, 64, 39, 0.06);
  --color-focus: rgba(38, 64, 39, 0.12);

  /* Semantic (functional colors - same in both themes) */
  --color-success: #2d7a4a;
  --color-error: #c44536;
  --color-warning: #c98812;
  --color-info: #2d6d8a;
}
```

**Dark Mode** (harmonious inversions):
```css
[data-theme="dark"] {
  /* Brand Colors - Lighter, desaturated */
  --color-primary: #5a9a5f;
  --color-primary-hover: #6eab72;
  --color-secondary: #c4855a;
  --color-secondary-hover: #d4986e;

  /* Backgrounds - True dark with warmth */
  --color-background: #121212;
  --color-surface: #1a1a1a;
  --color-surface-raised: #252525;

  /* Text - High contrast */
  --color-text: #e8e8e8;
  --color-text-secondary: #a8a8a8;
  --color-text-muted: #787878;
  --color-text-inverse: #121212;

  /* Borders & Dividers - Subtle warm */
  --color-border: #2d2d2d;
  --color-divider: #3a3a3a;

  /* State Colors */
  --color-hover: rgba(90, 154, 95, 0.12);
  --color-focus: rgba(90, 154, 95, 0.2);
}
```

### 1.2 Typography Tokens

```css
:root {
  /* Font Family */
  --font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  /* Base - 10px = 1rem */
  --font-base: 1rem;

  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-snug: 1.4;
  --line-height-body: 1.6;
  --line-height-relaxed: 1.8;

  /* Type Scale - Mobile First */
  --font-size-xs: 0.8rem;    /* 8px - labels, captions */
  --font-size-sm: 1rem;       /* 10px - small text */
  --font-size-base: 1.2rem;   /* 12px - body mobile */
  --font-size-md: 1.4rem;     /* 14px - intro text */
  --font-size-lg: 1.8rem;     /* 18px - h3 mobile */
  --font-size-xl: 2.4rem;     /* 24px - h2 mobile */
  --font-size-2xl: 3.2rem;   /* 32px - h1 mobile */
  --font-size-3xl: 4.8rem;   /* 48px - display */

  /* Display sizes for hero */
  --font-size-hero: 3.2rem;
  --font-size-name: 5.6rem;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
}

/* Desktop breakpoint (1024px+) */
@media (min-width: 102.4rem) {
  :root {
    --font-size-base: 1.6rem;  /* 16px - body desktop */
    --font-size-md: 1.8rem;    /* 18px */
    --font-size-lg: 2.4rem;    /* 24px - h3 */
    --font-size-xl: 3.6rem;    /* 36px - h2 */
    --font-size-2xl: 4.8rem;   /* 48px - h1 */
    --font-size-3xl: 7.2rem;  /* 72px - display */
    --font-size-hero: 7.2rem;
    --font-size-name: 9.6rem;
  }
}
```

### 1.3 Spacing Tokens

```css
:root {
  /* Core spacing - 10px base with 4px rhythm */
  --space-1: 0.4rem;    /* 4px */
  --space-2: 0.8rem;    /* 8px */
  --space-3: 1.2rem;    /* 12px */
  --space-4: 1.6rem;    /* 16px - base */
  --space-5: 2rem;     /* 20px */
  --space-6: 2.4rem;    /* 24px */
  --space-8: 3.2rem;    /* 32px */
  --space-10: 4rem;     /* 40px */
  --space-12: 4.8rem;  /* 48px */
  --space-16: 6.4rem;   /* 64px */
  --space-20: 8rem;     /* 80px */
  --space-24: 10rem;    /* 100px - large sections */

  /* Semantic */
  --space-section: var(--space-20);
  --space-subsection: var(--space-12);
  --space-component: var(--space-6);
  --space-element: var(--space-4);
  --space-inline: var(--space-2);
}
```

### 1.4 Animation Tokens

```css
:root {
  /* Duration */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-page: 500ms;

  /* Easing */
  --ease-out: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  /* Transitions */
  --transition-fast: var(--duration-fast) var(--ease-out);
  --transition-normal: var(--duration-normal) var(--ease-out);
  --transition-slow: var(--duration-slow) var(--ease-in-out);
  --transition-spring: var(--duration-normal) var(--ease-spring);

  /* Animation keyframes */
  --animate-fade-in: fade-in var(--duration-normal) var(--ease-out);
  --animate-slide-up: slide-up var(--duration-normal) var(--ease-out);
  --animate-slide-down: slide-down var(--duration-normal) var(--ease-out);
  --animate-scale-in: scale-in var(--duration-normal) var(--ease-spring);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --duration-slow: 0ms;
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(1rem); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-down {
  from { opacity: 0; transform: translateY(-1rem); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### 1.5 Elevation & Radius Tokens

```css
:root {
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 8px 32px rgba(0, 0, 0, 0.16);
  --shadow-modal: 0 12px 48px rgba(0, 0, 0, 0.2);

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.4rem;
  --radius-md: 0.8rem;
  --radius-lg: 1.2rem;
  --radius-xl: 1.6rem;
  --radius-full: 99.9rem;

  /* Z-Index Scale */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

---

## 2. Interaction Standards

### 2.1 Touch Targets

```css
:root {
  /* Interactive Heights */
  --interactive-height-xs: 3.2rem;  /* 32px - icon buttons */
  --interactive-height-sm: 4rem;     /* 40px - small button */
  --interactive-height: 4.4rem;    /* 44px - min iOS touch */
  --interactive-height-lg: 4.8rem;  /* 48px - primary CTA */
  --interactive-height-xl: 5.6rem;  /* 56px - large button */

  /* Min tap size */
  --tap-size-min: 4.4rem;

  /* Touch spacing */
  --touch-gap: 0.8rem;
}
```

### 2.2 Focus & States

```css
:root {
  /* Focus ring - visible keyboard focus */
  --focus-ring: 0 0 0 2px var(--color-background), 0 0 0 4px var(--color-primary);
  --focus-ring-offset: 0 0 0 2px var(--color-background);

  /* Disabled state */
  --opacity-disabled: 0.38;
  --cursor-disabled: not-allowed;

  /* Hover */
  --scale-hover: 1.02;

  /* Press */
  --scale-pressed: 0.98;
  --opacity-pressed: 0.9;
}
```

---

## 3. Layout Standards

### 3.1 Breakpoints (rem-based)

```css
:root {
  /* Breakpoints - from mobile up */
  --breakpoint-xs: 37.5rem;    /* 375px - small phone */
  --breakpoint-sm: 40rem;       /* 400px - phone */
  --breakpoint-md: 48rem;      /* 480px - phablet */
  --breakpoint-lg: 64rem;     /* 640px - tablet portrait */
  --breakpoint-xl: 80rem;     /* 800px - tablet landscape */
  --breakpoint-2xl: 102.4rem; /* 1024px - desktop */
  --breakpoint-3xl: 128rem;   /* 1280px - large desktop */
  --breakpoint-4xl: 144rem;   /* 1440px - wide */

  /* Max content width */
  --content-max: 102rem;      /* 1020px - matches Figma 1620 scaled */
  --content-narrow: 64rem;   /* 640px - for text-heavy sections */
}
```

### 3.2 Content Padding

```css
:root {
  /* Site padding - adjusts by breakpoint */
  --site-padding-x: 1.6rem;
  --site-padding-y: 2.4rem;
}

@media (min-width: 64rem) {
  :root {
    --site-padding-x: 2.4rem;
  }
}

@media (min-width: 102.4rem) {
  :root {
    --site-padding-x: 4rem;
  }
}
```

### 3.3 Safe Areas (for mobile)

```css
:root {
  --safe-area-top: env(safe-area-inset-top, 0);
  --safe-area-bottom: env(safe-area-inset-bottom, 0);
  --safe-area-left: env(safe-area-inset-left, 0);
  --safe-area-right: env(safe-area-inset-right, 0);
}
```

---

## 4. Component Patterns

### 4.1 Button Component

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  loading
}: ButtonProps) {
  const height = {
    sm: 'var(--interactive-height-sm)',
    md: 'var(--interactive-height)',
    lg: 'var(--interactive-height-lg)'
  }[size];

  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled || loading}
      style={{ height }}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}
```

### 4.2 Section Component

```tsx
interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="section">
      {title && <h2 className="section__title">{title}</h2>}
      <div className="section__content">{children}</div>
    </section>
  );
}
```

---

## 5. Dark Mode Implementation

### 5.1 CSS-Only Approach (Recommended)

Best for portfolios - no JavaScript needed:

```css
/* Auto-detect system preference */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #5a9a5f;
    --color-primary-hover: #6eab72;
    /* ... all dark tokens */
  }
}

/* Manual override via data-theme attribute */
[data-theme="light"] {
  --color-primary: #264027;
  /* ... light tokens */
}

[data-theme="dark"] {
  --color-primary: #5a9a5f;
  /* ... dark tokens */
}
```

### 5.2 Theme Toggle (JavaScript)

```tsx
// Simple theme toggle hook
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = theme === 'dark' || (theme === 'system' && systemDark);
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

/* To show toggle in UI */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 🌙 : ☀️}
    </button>
  );
}
```

---

## 6. Getting Started

### 6.1 Quick CSS Setup

Create `src/styles/tokens.css`:

```css
/* 1. Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px; /* 10px = 1rem base */
}

body {
  font-family: var(--font-family);
  background-color: var(--color-background);
  color: var(--color-text);
  line-height: var(--line-height-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

/* 2. Dark mode - auto detect */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #5a9a5f;
    --color-primary-hover: #6eab72;
    --color-secondary: #c4855a;
    --color-secondary-hover: #d4986e;
    --color-background: #121212;
    --color-surface: #1a1a1a;
    --color-surface-raised: #252525;
    --color-text: #e8e8e8;
    --color-text-secondary: #a8a8a8;
    --color-text-muted: #787878;
    --color-text-inverse: #121212;
    --color-border: #2d2d2d;
    --color-divider: #3a3a3a;
    --color-hover: rgba(90, 154, 95, 0.12);
    --color-focus: rgba(90, 154, 95, 0.2);
  }
}

/* 3. Manual override support */
:root[data-theme="light"],
[data-theme="light"] {
  --color-primary: #264027;
  --color-primary-hover: #1e3020;
  --color-secondary: #55251d;
  --color-secondary-hover: #4a2a1f;
  --color-background: #dce0d9;
  --color-surface: #f0f2ee;
  --color-surface-raised: #ffffff;
  --color-text: #1a1a1a;
  --color-text-secondary: #4a4a4a;
  --color-text-muted: #6b6b6b;
  --color-text-inverse: #ffffff;
  --color-border: #c4c8c1;
  --color-divider: #b8bcb5;
  --color-hover: rgba(38, 64, 39, 0.06);
  --color-focus: rgba(38, 64, 39, 0.12);
}

:root[data-theme="dark"],
[data-theme="dark"] {
  --color-primary: #5a9a5f;
  --color-primary-hover: #6eab72;
  --color-secondary: #c4855a;
  --color-secondary-hover: #d4986e;
  --color-background: #121212;
  --color-surface: #1a1a1a;
  --color-surface-raised: #252525;
  --color-text: #e8e8e8;
  --color-text-secondary: #a8a8a8;
  --color-text-muted: #787878;
  --color-text-inverse: #121212;
  --color-border: #2d2d2d;
  --color-divider: #3a3a3a;
  --color-hover: rgba(90, 154, 95, 0.12);
  --color-focus: rgba(90, 154, 95, 0.2);
}

/* 4. Responsive typography */
@media (max-width: 102.3rem) {
  :root {
    --font-size-hero: 3.2rem;
    --font-size-name: 5.6rem;
  }
}

/* 5. Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6.2 Project Init

```bash
# Create Vite + React project
npm create vite@latest portafolio -- --template react-ts

# Install
cd portafolio
npm install

# Install font
npm install @fontsource/instrument-sans

# Start
npm run dev
```

---

## Key Conventions

1. **rem Base**: Always use rem (10px base) for all spacing/sizing - NOT px
2. **Dark Mode**: Supports auto (prefers-color-scheme) + manual toggle via `data-theme`
3. **Mobile First**: Base styles are mobile, desktop via `@media (min-width: 102.4rem)`
4. **Semantic Colors**: Use `var(--color-text)`, NOT `#000000` - enables dark mode
5. **Touch Targets**: Minimum 44px height (4.4rem) for interactive elements
6. **Reduced Motion**: Respects `prefers-reduced-motion` automatically
7. **Accessibility**: 4.5:1 contrast ratios for text in both themes