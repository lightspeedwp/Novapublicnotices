# Animation Tokens — Nova Public Notices

## Purpose

Motion should support clarity and affordance, not visual novelty. This is a legal-publication product.

## Existing Motion Base

The repo already includes duration, easing, and hover transform variables. Keep using them, but reduce decorative use.

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

## Approved Uses

- button hover background transitions
- card hover lift
- accordion expand/collapse
- drawer and modal entry transitions
- search filter reveal states

## Avoid

- pulsing glows
- infinite decorative animations
- aggressive scaling
- long easing on routine actions

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
