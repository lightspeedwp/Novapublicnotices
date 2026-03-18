# Animation Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

Motion should support clarity and affordance, not visual novelty. This is a legal-publication product.

---

## Existing Motion Base

The repo already includes duration, easing, and hover transform variables. Keep using them, but reduce decorative use.

---

## Approved Motion Tokens

```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --hover-translate-y-sm: -1px;
  --hover-translate-y: -2px;
}
```

---

## Approved Uses

- button hover background transitions
- card hover lift
- accordion expand/collapse
- drawer and modal entry transitions
- search filter reveal states

---

## Avoid

- pulsing glows
- infinite decorative animations
- aggressive scaling
- long easing on routine actions

---

## Reduced Motion

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

---

## Usage Examples

### Button Hover

```css
.wpn-button {
  transition: background-color var(--duration-fast) var(--ease-out),
              border-color var(--duration-fast) var(--ease-out),
              color var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.wpn-button:hover {
  background-color: var(--nova-primary-hover);
}
```

### Card Hover Lift

```css
.notice-card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.notice-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(var(--hover-translate-y-sm));
}
```

### Accordion

```css
.accordion__content {
  overflow: hidden;
  transition: max-height var(--duration-normal) var(--ease-in-out);
}

.accordion__content--collapsed {
  max-height: 0;
}

.accordion__content--expanded {
  max-height: 500px; /* Or use JavaScript for dynamic height */
}
```

### Modal Entry

```css
.modal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}

.modal--is-open {
  opacity: 1;
  transform: translateY(0);
}
```

### Drawer Slide

```css
.drawer {
  transform: translateX(-100%);
  transition: transform var(--duration-normal) var(--ease-out);
}

.drawer--is-open {
  transform: translateX(0);
}
```

### Filter Panel Reveal

```css
.filter-panel {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity var(--duration-fast) var(--ease-out),
              max-height var(--duration-normal) var(--ease-in-out);
}

.filter-panel--is-open {
  opacity: 1;
  max-height: 800px;
}
```

---

## Loading States

### Skeleton Loaders

```css
@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.skeleton {
  animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-color: var(--muted);
}
```

### Spinner

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

---

## Focus States

```css
.focusable-element:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  transition: outline-offset var(--duration-fast) var(--ease-out);
}
```

---

## Smooth Scroll

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

---

## Page Transitions (React Router)

```css
/* Fade transition for route changes */
.page-transition-enter {
  opacity: 0;
}

.page-transition-enter-active {
  opacity: 1;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.page-transition-exit {
  opacity: 1;
}

.page-transition-exit-active {
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-in);
}
```

---

## Anti-Patterns

❌ **Do not:**
- Use long durations (>350ms) for UI feedback
- Create infinite pulsing animations on static content
- Use aggressive transforms (scale > 1.1)
- Apply easing that feels "bouncy" or playful
- Animate legal notice body text
- Use different animation timing between EN and AF

✅ **Do:**
- Keep animations subtle and purposeful
- Respect `prefers-reduced-motion`
- Use consistent easing functions
- Animate transform and opacity primarily
- Test with reduced motion enabled
- Document complex animation sequences

---

## Performance Best Practices

### Prefer GPU-Accelerated Properties

Animate these properties (GPU-accelerated):
- `transform`
- `opacity`

Avoid animating these (causes repaints):
- `width`/`height`
- `top`/`left`/`right`/`bottom`
- `padding`/`margin`
- `background-color` (acceptable for hover states)

### Use `will-change` Sparingly

```css
/* Only for complex animations that need optimization */
.complex-animation {
  will-change: transform, opacity;
}

/* Remove after animation completes */
.complex-animation--complete {
  will-change: auto;
}
```

---

## Accessibility Checklist

- [ ] All animations respect `prefers-reduced-motion`
- [ ] Hover states have transition durations ≤ 150ms
- [ ] No flashing content (3 flashes per second)
- [ ] Animated content has pause mechanism if > 5 seconds
- [ ] Focus indicators are clearly visible
- [ ] Loading states provide feedback within 1 second

---

## Related Documentation

- `/guidelines/design-tokens/shadows.md` — Shadow transitions
- `/guidelines/design-tokens/buttons.md` — Button hover states
- `/guidelines/Guidelines.md` — Accessibility requirements
