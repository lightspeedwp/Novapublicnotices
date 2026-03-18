# Light and Dark Mode — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

The product can support both light and dark mode, but light mode should remain the default and primary implementation focus.

---

## Principle

- light mode is primary
- dark mode must remain readable and calm
- long-form notice content must never become low-contrast
- the language switch does not affect colour mode

---

## Token Pattern

```css
:root {
  --background: #ffffff;
  --foreground: #090909;
  --card: #ffffff;
  --card-foreground: #090909;
}

.dark {
  --background: #090909;
  --foreground: #ffffff;
  --card: #2c2c2c;
  --card-foreground: #ffffff;
}
```

---

## Rules

- never invert brand colours carelessly in dark mode
- keep red accent accessible on dark surfaces
- keep form fields visibly distinct from page background
- long legal text must remain comfortable to read in both modes

---

## Implementation Notes

### Light Mode (Default)

Light mode should use the full Nova brand color palette:

```css
:root {
  --background: #ffffff;
  --foreground: var(--nova-primary); /* #09082f */
  --card: #ffffff;
  --card-foreground: var(--nova-primary);
  --muted: #f5f5f5;
  --muted-foreground: #666666;
  --border: #e0e0e0;
  --input-background: #ffffff;
}
```

### Dark Mode

Dark mode should maintain readability while respecting the Nova brand:

```css
.dark {
  --background: #090909;
  --foreground: #f5f5f5;
  --card: #1a1a1a;
  --card-foreground: #f5f5f5;
  --muted: #2c2c2c;
  --muted-foreground: #a0a0a0;
  --border: #3a3a3a;
  --input-background: #1a1a1a;
  
  /* Brand colors remain unchanged */
  --nova-primary: #09082f;
  --nova-accent: #d70025;
}
```

---

## Content Readability Rules

### Long-form Legal Notice Content

```css
.notice-single__body {
  background: var(--card);
  color: var(--card-foreground);
  /* Never use low-contrast grey text for body content */
}
```

### Metadata and Secondary Text

```css
.notice-meta,
.notice-card__date {
  color: var(--muted-foreground);
  /* This can be softer but must remain readable */
}
```

---

## Accessibility Requirements

- Minimum contrast ratio: 4.5:1 for body text
- Minimum contrast ratio: 3:1 for large text (18px+)
- Accent red (#d70025) must pass WCAG AA on both light and dark backgrounds
- Never use light grey text on white backgrounds for legal content
- Never use dark grey text on black backgrounds for legal content

---

## Testing Checklist

- [ ] Notice body text is highly readable in both modes
- [ ] Metadata remains distinguishable from body text
- [ ] Form fields have clear boundaries
- [ ] Buttons maintain proper contrast
- [ ] Brand accent red is accessible on all surfaces
- [ ] Language switcher works independently of color mode
- [ ] Status badges (published, pending, draft) remain clear

---

## Anti-Patterns

❌ **Do not:**
- Invert brand primary and accent colors in dark mode
- Use purely grey surfaces without considering readability
- Make legal notice text low-contrast in either mode
- Hide important metadata in dark mode
- Use different color schemes for EN vs AF content

✅ **Do:**
- Keep legal text high-contrast in both modes
- Maintain brand colors consistently
- Test all text elements for readability
- Ensure form fields are clearly distinguishable
- Provide clear mode switching if implemented

---

## Related Documentation

- `/guidelines/design-tokens/colors.md` — Color token definitions
- `/guidelines/design-tokens/typography.md` — Typography and readability
- `/guidelines/Guidelines.md` — Main project guidelines
