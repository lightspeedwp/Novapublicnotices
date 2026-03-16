# Design Tokens — Animations and Transitions

## Purpose

This document defines the animation and transition design tokens for the Nova Public Notices Portal.
All interactive elements must use these standardized tokens to ensure consistent motion design across the application.

---

## Principles

1. **Subtle and purposeful** — Animations should enhance usability, not distract
2. **Performance-first** — Prefer transforms and opacity over layout-shifting properties
3. **Accessible** — Respect `prefers-reduced-motion` for all non-essential animations
4. **Consistent timing** — Use standardized duration and easing values

---

## CSS Custom Properties

### Timing Duration

```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
}
```

**Usage guidelines:**
- `--duration-instant` — For immediate state changes (focus rings, toggles)
- `--duration-fast` — For hover effects, dropdowns, tooltips
- `--duration-normal` — For modals, drawers, accordions
- `--duration-slow` — For page transitions, complex animations
- `--duration-slower` — For loading states, skeleton screens

### Easing Functions

```css
:root {
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**Usage guidelines:**
- `--ease-linear` — For continuous animations (spinners, progress bars)
- `--ease-in` — For elements exiting the viewport
- `--ease-out` — For elements entering the viewport (preferred for most cases)
- `--ease-in-out` — For elements that move within the viewport
- `--ease-bounce` — For playful interactions (use sparingly)

### Hover Transforms

```css
:root {
  --hover-scale: 1.02;
  --hover-scale-sm: 1.01;
  --hover-scale-lg: 1.05;
  --hover-translate-y: -2px;
  --hover-translate-y-sm: -1px;
  --hover-translate-y-lg: -4px;
}
```

---

## Standard Transition Patterns

### Hover Effects

**Button hover:**
```css
.btn-hover {
  transition-property: background-color, border-color, color, transform, box-shadow;
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-out);
}

.btn-hover:hover {
  transform: translateY(var(--hover-translate-y-sm));
}
```

**Card hover:**
```css
.card-hover {
  transition-property: transform, box-shadow, border-color;
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-out);
}

.card-hover:hover {
  transform: translateY(var(--hover-translate-y));
  box-shadow: var(--elevation-md);
}
```

**Link hover:**
```css
.link-hover {
  transition-property: color, opacity;
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-out);
}
```

**Icon hover:**
```css
.icon-hover {
  transition-property: transform, color;
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-out);
}

.icon-hover:hover {
  transform: scale(var(--hover-scale));
}
```

### Focus States

```css
.focus-ring {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  transition: outline-offset var(--duration-instant) var(--ease-out);
}
```

### Fade Effects

**Fade in:**
```css
.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

**Fade in up:**
```css
.fade-in-up {
  animation: fadeInUp var(--duration-normal) var(--ease-out);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Loading States

**Pulse:**
```css
.pulse {
  animation: pulse var(--duration-slower) var(--ease-in-out) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

**Spinner:**
```css
.spinner {
  animation: spin var(--duration-slower) var(--ease-linear) infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

## Component-Specific Patterns

### Navigation Items

```css
.nav-item {
  position: relative;
  transition: color var(--duration-fast) var(--ease-out);
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width var(--duration-fast) var(--ease-out);
}

.nav-item:hover::after {
  width: 100%;
}
```

### Dropdown Menus

```css
.dropdown-enter {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.dropdown-exit {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-exit-active {
  opacity: 0;
  transform: translateY(-8px);
  transition: opacity var(--duration-fast) var(--ease-in),
              transform var(--duration-fast) var(--ease-in);
}
```

### Modals and Overlays

```css
.modal-overlay-enter {
  opacity: 0;
}

.modal-overlay-enter-active {
  opacity: 1;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.modal-content-enter {
  opacity: 0;
  transform: scale(0.95);
}

.modal-content-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: opacity var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}
```

### Accordion

```css
.accordion-content {
  overflow: hidden;
  transition: height var(--duration-normal) var(--ease-in-out);
}
```

---

## Accessibility

### Reduced Motion

All non-essential animations must respect the user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Essential animations** (those that communicate state) should use instant transitions:
```css
@media (prefers-reduced-motion: reduce) {
  .essential-animation {
    animation-duration: var(--duration-instant);
    transition-duration: var(--duration-instant);
  }
}
```

---

## Implementation Rules

### Do's

✅ Use CSS custom properties for all timing and easing values  
✅ Keep hover effects subtle (prefer 1-2px transforms)  
✅ Animate transforms and opacity for best performance  
✅ Add transitions to interactive elements by default  
✅ Use appropriate easing for enter/exit animations  
✅ Test all animations with `prefers-reduced-motion: reduce`  

### Don'ts

❌ Don't hard-code animation values in component files  
❌ Don't animate width, height, top, left (use transforms instead)  
❌ Don't create jarring or excessive motion  
❌ Don't use animations longer than 500ms for UI feedback  
❌ Don't forget to handle loading and disabled states  
❌ Don't animate elements that cause layout shift  

---

## Required CSS Variable Additions to theme.css

Add these variables to `/src/styles/theme.css`:

```css
:root {
  /* Animation durations */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
  
  /* Easing functions */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Hover transforms */
  --hover-scale: 1.02;
  --hover-scale-sm: 1.01;
  --hover-scale-lg: 1.05;
  --hover-translate-y: -2px;
  --hover-translate-y-sm: -1px;
  --hover-translate-y-lg: -4px;
  
  /* Additional elevation shadows */
  --elevation-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --elevation-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --elevation-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

---

## Examples

### Primary CTA Button

```tsx
// Component with proper animation classes
<Button className="wp-button-primary">
  Submit Notice
</Button>
```

```css
/* In theme.css or component styles */
.wp-button-primary {
  transition-property: background-color, transform, box-shadow;
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-out);
}

.wp-button-primary:hover:not(:disabled) {
  transform: translateY(var(--hover-translate-y-sm));
  box-shadow: var(--elevation-md);
}

.wp-button-primary:active:not(:disabled) {
  transform: translateY(0);
}
```

### Notice Card

```tsx
<div className="wp-notice-card">
  {/* Card content */}
</div>
```

```css
.wp-notice-card {
  transition-property: transform, box-shadow, border-color;
  transition-duration: var(--duration-fast);
  transition-timing-function: var(--ease-out);
}

.wp-notice-card:hover {
  transform: translateY(var(--hover-translate-y));
  box-shadow: var(--elevation-md);
  border-color: var(--border-hover, var(--border));
}
```

### Social Media Icons

```tsx
<a href="..." className="wp-social-link">
  <Facebook />
</a>
```

```css
.wp-social-link {
  transition: color var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.wp-social-link:hover {
  color: var(--primary);
  transform: scale(var(--hover-scale));
}
```

---

## Testing Checklist

Before shipping any animated component:

- [ ] All animations use CSS custom properties from theme.css
- [ ] Hover states are visible and subtle
- [ ] Focus states are clearly visible for keyboard navigation
- [ ] Animations work correctly with `prefers-reduced-motion: reduce`
- [ ] No layout shift during animations
- [ ] Animations perform smoothly on lower-end devices
- [ ] Loading and disabled states are properly handled
- [ ] Transitions are applied consistently across related components

---

## References

- Parent guide: `/guidelines/Guidelines.md`
- Related: `/guidelines/design-tokens/colors.md`
- Related: `/guidelines/design-tokens/spacing.md`
- Related: `/guidelines/design-tokens/typography.md`
