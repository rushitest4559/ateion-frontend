# ATEION DESIGN SYSTEM

## Overview
The Ateion Design System provides a unified set of design tokens, components, and guidelines to ensure consistency across all pages and platforms.

---

## 🎨 DESIGN TOKENS

### Colors

#### Primary Brand Colors
```css
--color-primary: #fb4444;           /* Red - Primary CTA */
--color-primary-hover: #ff5555;     /* Red hover state */
--color-primary-light: rgba(251, 68, 68, 0.1);
--color-primary-dark: #e03e3e;
```

#### Neutral Colors
```css
--color-neutral-0: #ffffff;         /* White */
--color-neutral-50: #f9f9f9;
--color-neutral-100: #f5f5f5;
--color-neutral-200: #e5e5e5;
--color-neutral-300: #d4d4d4;
--color-neutral-400: #a3a3a3;
--color-neutral-500: #737373;
--color-neutral-600: #525252;
--color-neutral-700: #404040;
--color-neutral-800: #262626;
--color-neutral-900: #171717;
--color-neutral-950: #0a0a0a;       /* Black */
```

#### Background Colors
```css
--color-bg-primary: #f7f3eb;        /* Warm off-white - main background */
--color-bg-secondary: #ffffff;      /* White - cards, surfaces */
--color-bg-dark: #1e1632;           /* Deep navy - footer */
--color-bg-black: #202020;          /* Black cards */
```

#### Text Colors
```css
--color-text-primary: #1a1a1a;      /* Headings */
--color-text-secondary: #292929;    /* Body text */
--color-text-muted: rgba(0, 0, 0, 0.6);
--color-text-subtle: rgba(0, 0, 0, 0.4);
--color-text-inverse: #ffffff;
```

#### Border Colors
```css
--color-border-light: rgba(0, 0, 0, 0.08);
--color-border-medium: rgba(0, 0, 0, 0.15);
--color-border-dark: rgba(0, 0, 0, 0.3);
```

---

### Typography

#### Font Families
```css
--font-heading: 'OV Soge', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'SF Pro Display', monospace;
--font-accent: 'Manrope', sans-serif;
--font-footer: 'Lato', sans-serif;
```

#### Font Sizes
| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 11px | Small labels |
| `--text-sm` | 12px | Nav buttons, captions |
| `--text-base` | 14px | Body text, footer |
| `--text-lg` | 16px | Lead paragraphs |
| `--text-xl` | 18px | Subheadings |
| `--text-2xl` | 20px | Section titles |
| `--text-3xl` | 24px | H3 |
| `--text-4xl` | 32px | H2 |
| `--text-5xl` | 36px | H1 mobile |
| `--text-6xl` | 48px | Display text |
| `--text-7xl` | 61px | Hero titles |
| `--text-8xl` | 72px | Hero titles desktop |

#### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

### Spacing

Based on 4px grid system:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-0` | 0 | No spacing |
| `--space-1` | 4px | Tight spacing |
| `--space-2` | 8px | Icon gaps |
| `--space-3` | 12px | Small gaps |
| `--space-4` | 16px | Component padding |
| `--space-5` | 20px | Medium padding |
| `--space-6` | 24px | Section gaps |
| `--space-8` | 32px | Large gaps |
| `--space-10` | 40px | XL gaps |
| `--space-12` | 48px | Section padding |
| `--space-16` | 64px | Container padding |
| `--space-20` | 80px | Hero sections |

---

### Border Radius

```css
--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 20px;
--radius-full: 9999px;    /* Pill shape */
```

---

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Custom */
--shadow-button: 0 4px 12px rgba(251, 68, 68, 0.25);
--shadow-button-hover: 0 6px 20px rgba(251, 68, 68, 0.35);
--shadow-card: 0 4px 20px rgba(25, 33, 61, 0.04);
--shadow-card-hover: 0 8px 30px rgba(25, 33, 61, 0.08);
```

---

## 🧩 COMPONENTS

### Navigation Bar

**Structure:**
```
┌────────────────────────────────────────────────────┐
│  [Logo]    [Nav Links]              [Get Connected]│
└────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 80px (including padding)
- Logo: 60px height (desktop), 40px (mobile)
- Nav buttons: 36px height, pill-shaped
- CTA button: 36px height, red pill
- Gap between nav items: 12px (mobile), 16px (desktop)
- Padding: 16px (mobile), 24px (desktop)

**Colors:**
- Nav buttons: `rgba(235, 235, 235, 0.8)`
- Nav buttons hover: `rgba(215, 215, 215, 0.95)`
- CTA button: `#fb4444`
- CTA hover: `#ff5555`

---

### Buttons

#### Primary CTA (Get Connected)
```css
height: 36px;
padding: 0 20px;
background: #fb4444;
color: #ffffff;
border-radius: 9999px;
font-family: 'Manrope', sans-serif;
font-size: 13px;
font-weight: 700;
```

#### Secondary (Nav Buttons)
```css
height: 36px;
padding: 0 20px;
background: rgba(235, 235, 235, 0.8);
color: #292929;
border-radius: 9999px;
font-family: 'Manrope', sans-serif;
font-size: 13px;
font-weight: 700;
```

---

### Cards

#### Purple Capability Card
- Background: `#aa9dff` (purple) + `#dadada` (grey)
- Height: 504px (desktop), auto (mobile)
- Border radius: 15px

#### Black Card (Globally Aligned)
- Background: `#202020`
- Height: 377px (desktop), auto (mobile)
- Border radius: 19px

#### Red Card (Education is not broken)
- Background: `#ff6b6b`
- Height: 377px (desktop), auto (mobile)
- Border radius: 19px

---

### Footer

**Structure:**
```
┌─────────────────────────────────────────────────────┐
│  [Brand]     [Contact]        [Legal Links]        │
│  Ateion      PCMC, Pune       Terms of Use         │
│  Social      +91 93569...     Privacy Policy       │
│  Icons       destiny@...      Data Collection      │
├─────────────────────────────────────────────────────┤
│  Copyright ©Ateion 2026. All Rights Reserved.       │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `#f7f3eb`
- Padding: 48px vertical
- Column gap: 64px
- Copyright bar: `#1e1632`, 64px height

**Typography:**
- Brand name: 'Lato', Bold, 18px
- Contact text: 'Lato', Regular, 14px (was 15.78px - FIXED)
- Legal links: 'Lato', Regular, 14px (was 14.85px - FIXED)
- Copyright: 'Lato', Regular, 14px

---

## 📐 LAYOUT

### Container Widths
```css
--max-width-container: 1280px;
--max-width-content: 1024px;
--max-width-narrow: 768px;
```

### Page Backgrounds
- **Homepage:** `#f7f3eb` ✅
- **GCO Page:** `#f7f3eb` ✅ (FIXED)
- **Contact Page:** `#f7f3eb` ✅ (FIXED)

### Section Spacing
- Hero sections: 665px height
- Content sections: 64px padding horizontal
- Between sections: 40-80px gap

---

## 🎭 ANIMATIONS

### Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-slower: 500ms ease;
```

### Hover Effects
- Nav buttons: `scale: 1.05`
- CTA button: `scale: 1.05` + shadow
- Cards: Subtle lift on hover

---

## ♿ ACCESSIBILITY

### Focus States
All interactive elements must have visible focus states:
```css
focus:outline-none focus:ring-2 focus:ring-gray-400
```

### Color Contrast
- Text on backgrounds must meet WCAG AA (4.5:1 for normal text)
- Primary red on white: ✅ Passes
- Grey buttons: ✅ Passes

---

## 📱 RESPONSIVE BREAKPOINTS

| Name | Min Width | Usage |
|------|-----------|-------|
| Mobile | < 768px | Single column, stacked nav |
| Tablet | 768px - 1023px | Two columns, pill nav |
| Desktop | ≥ 1024px | Full layout, all features |

---

## ✅ CONSISTENCY CHECKLIST

### Fixed Issues:
- [x] All pages use `#f7f3eb` background
- [x] Footer text standardized to 14px
- [x] Footer background consistent (`#f7f3eb`)
- [x] Navbar buttons all 36px height
- [x] Navbar buttons all 20px padding
- [x] Navbar centered with equal spacing
- [x] All nav buttons have focus states
- [x] Mobile menu has backdrop blur

### Remaining Tasks:
- [ ] Remove duplicate nav buttons from Homepage.tsx
- [ ] Standardize all section padding to 64px
- [ ] Create component library in `/components/ui`
- [ ] Add Storybook documentation

---

## 📚 USAGE GUIDELINES

### DO:
✅ Use design tokens for all colors, spacing, typography
✅ Follow component specifications exactly
✅ Maintain consistent spacing (4px grid)
✅ Test on mobile, tablet, and desktop
✅ Use semantic HTML with proper heading hierarchy

### DON'T:
❌ Hardcode color values (use CSS variables)
❌ Use arbitrary spacing values
❌ Mix different font families for same element type
❌ Create new components without checking existing ones
❌ Ignore accessibility requirements

---

**Version:** 1.0.0
**Last Updated:** 2026
**Maintained by:** Ateion Development Team
