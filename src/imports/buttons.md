# Button Tokens — Nova Public Notices

## Purpose

The current repo button sizing is too tight for the product direction. Buttons need more horizontal padding, clearer hierarchy, and stronger presets.

## Button Principles

- generous padding
- strong readability
- consistent icon spacing
- consistent height per size
- WordPress-aligned semantic classes
- BEM modifiers for final styling

## Required Button Sizes

```css
:root {
  --button-height-sm: 44px;
  --button-height-md: 48px;
  --button-height-lg: 56px;
  --button-padding-sm: 0 var(--space-4);
  --button-padding-md: 0 var(--space-5);
  --button-padding-lg: 0 var(--space-6);
  --button-gap: var(--space-2);
}
```

## Required Button Variants

```css
.wpn-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--button-gap);
  min-width: 44px;
  border-radius: var(--radius-md);
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: background-color var(--duration-fast) var(--ease-out),
              border-color var(--duration-fast) var(--ease-out),
              color var(--duration-fast) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.wpn-button--sm {
  min-height: var(--button-height-sm);
  padding: var(--button-padding-sm);
  font-size: var(--text-sm);
}

.wpn-button--md {
  min-height: var(--button-height-md);
  padding: var(--button-padding-md);
  font-size: var(--text-base);
}

.wpn-button--lg {
  min-height: var(--button-height-lg);
  padding: var(--button-padding-lg);
  font-size: var(--text-lg);
}

.wpn-button--primary {
  background-color: var(--nova-primary);
  color: #ffffff;
}

.wpn-button--primary:hover {
  background-color: var(--nova-primary-hover);
}

.wpn-button--accent {
  background-color: var(--nova-accent);
  color: #ffffff;
}

.wpn-button--accent:hover {
  background-color: var(--nova-accent-hover);
}

.wpn-button--outline {
  background-color: transparent;
  color: var(--nova-primary);
  border: 1px solid var(--border-color-default);
}

.wpn-button--ghost {
  background-color: transparent;
  color: var(--nova-primary);
}
```

## Recommended Mapping

- hero CTA: `wpn-button wpn-button--accent wpn-button--lg`
- secondary hero CTA: `wpn-button wpn-button--outline wpn-button--lg`
- filter submit: `wpn-button wpn-button--primary wpn-button--md`
- pagination / small actions: `wpn-button wpn-button--outline wpn-button--sm`

## Do Not

- do not restyle button colours per page with arbitrary classes
- do not use `bg-[#d70025] px-8` in TSX
- do not mix Radix/CVA button variants with unrelated page overrides without mapping them back to token classes
