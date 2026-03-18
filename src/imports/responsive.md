# Responsive Tokens — Nova Public Notices

## Purpose

This product needs strong desktop search and single-notice layouts while remaining usable on mobile. Responsive behaviour should follow content priority, not arbitrary device styling.

## Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;
}
```

## Layout Rules

### Mobile
- single-column stacks
- sticky search/filter entry point allowed
- details sidebar must move below body content
- all targets min 44px

### Tablet
- two-column where useful
- archive filters may become horizontal or drawer-based

### Desktop
- search/archive can use a sidebar or top filter bar depending on template
- single notice should support content + metadata sidebar

## Container Rules

```css
.page-shell {
  width: min(100%, var(--container-max-width));
  padding-inline: var(--page-gutter);
}
```

## Do Not

- do not hide critical legal metadata on mobile
- do not rely on Tailwind-only breakpoint classes for final page styling
