# Continue Prompt

Use this prompt to resume development work on the Nova Public Notices project.

## Project Context

This is a **Public Notices Portal** for Nova News / Novus Media, built as a prototype for future WordPress + WooCommerce implementation.

### Key Requirements
- Bilingual (English/Afrikaans)
- Legal notice discovery and submission
- Self-serve and sales-assisted workflows
- Moderation before publication
- WooCommerce-aligned account and checkout UX
- Ad support on all pages except checkout

### Tech Stack
- Vite + React + TypeScript
- React Router (data mode)
- Tailwind CSS
- CSS custom properties in `/src/styles/theme.css`

## Before You Continue

1. **Read the guidelines first:**
   - `/guidelines/Guidelines.md` — primary governance document

2. **Check current state:**
   - Review recent commits or `/CHANGELOG.md`
   - Check `/tasks/task-list.md` for pending work
   - Review `/reports/` for latest status

3. **Understand the rules:**
   - ❌ No inline visual styles
   - ❌ No hard-coded colors, spacing, or fonts
   - ❌ No page data inside components
   - ✅ Use dynamic data files
   - ✅ Use semantic CSS classes
   - ✅ Support EN/AF bilingual structure
   - ✅ Keep root directory clean

## Development Workflow

### Starting a New Feature

1. **Check if data files exist** for the page/component
   - Look in `/src/app/data/`
   - Create bilingual `.en.ts` and `.af.ts` files if needed

2. **Create TypeScript interfaces** first
   - Define types before implementation
   - Use shared types from `/src/app/data/types.ts`

3. **Use semantic classes** for styling
   - Extend `/src/styles/theme.css` if needed
   - Use WordPress-aligned class names
   - Reference existing design tokens

4. **Implement bilingual support** from day one
   - Create EN/AF data file pairs
   - Use language context/props
   - Test language switching

5. **Add to routes** if it's a new page
   - Update `/src/app/routes.tsx`
   - Follow React Router data mode patterns

### Modifying Existing Features

1. **Read the current implementation** thoroughly
2. **Check for related data files** in `/src/app/data/`
3. **Preserve bilingual structure** in any changes
4. **Update both EN and AF** versions
5. **Test authentication flows** if relevant
6. **Verify ad placements** remain correct

### Testing Checklist

- [ ] Test in both English and Afrikaans
- [ ] Verify responsive layouts (mobile, tablet, desktop)
- [ ] Check logged-in and logged-out states
- [ ] Test keyboard navigation
- [ ] Verify no console errors
- [ ] Check that ads appear (except on checkout)

## Common Tasks

### Adding a New Page

```bash
# 1. Create data files
/src/app/data/[section]/[page].en.ts
/src/app/data/[section]/[page].af.ts

# 2. Create page component
/src/app/pages/[PageName].tsx

# 3. Update routes
/src/app/routes.tsx

# 4. Test and verify
```

### Adding a New Component

```bash
# 1. Create component
/src/app/components/[ComponentName].tsx

# 2. Add styling if needed
/src/styles/components.css

# 3. Create types if needed
/src/app/data/types.ts

# 4. Import and use
```

### Updating Content

```bash
# 1. Locate data files
/src/app/data/[section]/

# 2. Update both .en.ts and .af.ts files
# 3. Verify types match
# 4. Test in UI
```

## File Naming Conventions

- **Pages:** `PascalCase.tsx` (e.g., `SingleNotice.tsx`)
- **Components:** `PascalCase.tsx` (e.g., `CategoryBadge.tsx`)
- **Data files:** `kebab-case.en.ts` or `kebab-case.af.ts`
- **Types:** `types.ts`, `interfaces.ts`, or `schema.ts`
- **Utilities:** `kebab-case.ts` or `camelCase.ts`

## Where Things Live

### Source Code
```
/src/
  app/
    components/     # Reusable UI components
    pages/          # Route/page components
    data/           # All content and data
    lib/            # Utilities and helpers
    routes.tsx      # Route configuration
  styles/           # Global CSS and tokens
    theme.css       # Design tokens (colors, fonts, spacing)
    fonts.css       # Font imports
```

### Documentation
```
/guidelines/        # Project standards
/docs/              # Reference documentation
/prompts/           # Reusable prompts
/reports/           # Work reports and audits
/tasks/             # Task tracking
/scripts/           # Helper scripts
```

## What NOT to Do

1. **Don't** create files in project root (except README, CHANGELOG, ATTRIBUTIONS)
2. **Don't** use inline styles for visual properties
3. **Don't** hard-code content strings in components
4. **Don't** use hard-coded colors, fonts, or spacing values
5. **Don't** create English-only content (always include Afrikaans)
6. **Don't** add ads to checkout or order confirmation pages
7. **Don't** use infinite scroll (use pagination)
8. **Don't** skip TypeScript types

## Getting Unstuck

### If you're unsure about styling:
- Check `/src/styles/theme.css` for available tokens
- Look at existing components for patterns
- Follow WordPress-aligned class naming

### If you're unsure about data structure:
- Review `/guidelines/Guidelines.md` section 7.2
- Check existing data files in `/src/app/data/`
- Ensure bilingual structure is maintained

### If you're unsure about routing:
- Review React Router documentation
- Check `/src/app/routes.tsx` for patterns
- Follow data mode patterns

### If you're unsure about bilingual implementation:
- Check existing bilingual data file pairs
- Ensure both `.en.ts` and `.af.ts` are updated
- Test language switching functionality

## Next Steps Reference

After completing work:
1. Update `/CHANGELOG.md`
2. Update `/tasks/task-list.md`
3. Run cleanup audit if needed
4. Document any decisions in `/docs/`

## Quick Reference Links

- Main guidelines: `/guidelines/Guidelines.md`
- Cleanup audit: `/prompts/cleanup.md`
- Task list: `/tasks/task-list.md`
- Change log: `/CHANGELOG.md`
