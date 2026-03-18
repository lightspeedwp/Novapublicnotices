# Figma Make Prompt — CSS Guidelines and Variables Alignment

Paste this into Figma Make when refining the Nova Public Notices prototype.

```md
You are working on the `lightspeedwp/Novapublicnotices` prototype.

Your job is to align the prototype with the repository's CSS variables system and final implementation standards.

## First principles

- Use the existing token layer in `src/styles/theme.css` as the foundation.
- Extend tokens in CSS, not in TSX.
- Do not use inline styles for visual presentation.
- Do not use arbitrary hex colours in TSX.
- Do not use Tailwind utility sprawl for final custom styling.
- Use BEM naming for all custom CSS.
- Prefer separate CSS files for pages and major components.
- Use semantic helper classes and WordPress-aligned naming where useful.

## Required styling architecture

Keep or move styling into this shape:

- `src/styles/theme.css` — global tokens and semantic helper classes
- `src/styles/base.css` — reset and global base rules
- `src/app/components/<component>/<component>.css` — component CSS using BEM
- `src/app/pages/<page>/<page>.css` — page CSS using BEM

## Token rules

Use these token families consistently:

### Brand colours
- `--nova-primary`
- `--nova-primary-hover`
- `--nova-accent`
- `--nova-accent-hover`
- `--nova-blue`

### Semantic colours
- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--muted`
- `--muted-foreground`
- `--border`
- `--input-background`
- `--ring`

### Typography
- `--font-family-heading`
- `--font-family-body`
- `--text-xs`
- `--text-sm`
- `--text-base`
- `--text-lg`
- `--text-xl`
- `--text-2xl`
- `--text-3xl`

### Spacing
- `--space-1`
- `--space-2`
- `--space-3`
- `--space-4`
- `--space-5`
- `--space-6`
- `--space-8`
- `--space-12`
- `--space-16`

### Radius
- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--radius-pill`

### Shadows
- `--shadow-sm`
- `--shadow-md`
- `--shadow-lg`

### Buttons
- `--button-height-sm`
- `--button-height-md`
- `--button-height-lg`
- `--button-padding-sm`
- `--button-padding-md`
- `--button-padding-lg`

## Required classes

Create or use semantic classes such as:

- `.has-nova-primary-color`
- `.has-nova-accent-color`
- `.has-nova-primary-background-color`
- `.has-nova-accent-background-color`
- `.has-heading-font-family`
- `.has-body-font-family`
- `.wpn-button`
- `.wpn-button--primary`
- `.wpn-button--accent`
- `.wpn-button--outline`
- `.wpn-button--sm`
- `.wpn-button--md`
- `.wpn-button--lg`

## Page styling rules

Refactor page styling so custom components use BEM classes instead of arbitrary utility strings.

Examples:
- `home-hero`, `home-hero__title`, `home-hero__actions`
- `search-results`, `search-results__grid`, `search-results__sidebar`
- `notice-card`, `notice-card__meta`, `notice-card__title`
- `notice-single`, `notice-single__body`, `notice-single__sidebar`
- `filter-bar`, `filter-bar__row`, `filter-bar__actions`
- `site-header`, `site-header__link`, `site-header__locale-switch`

## Buttons

Increase button padding and use preset sizes.
Primary CTA buttons should feel more generous than the current implementation.
Do not restyle buttons per page using arbitrary colour classes.

## Search and legal-content priority

The site is content-heavy and compliance-sensitive.
Styles must favour:
- strong readability
- calm surfaces
- clear metadata hierarchy
- clear filters and search controls
- stable notice card structure
- restrained motion

## Language rules

English and Afrikaans share the same visual system.
Do not create separate visual token systems for each language.
Only content and route mappings change.

## Output

1. Audit current styling against these rules.
2. Refactor arbitrary colour and spacing usage into semantic token classes.
3. Create missing BEM classes and CSS files where needed.
4. Keep the design aligned to the Nova News identity.
5. Report which files were updated and which token/helper classes were added.
```
