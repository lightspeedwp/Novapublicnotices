# Cleanup Prompt

Use this prompt to audit and clean the codebase against project standards.

## Purpose

Enforce the rules defined in `/guidelines/Guidelines.md` across the entire codebase.

## Prerequisites

**ALWAYS run archive orchestrator first:**

Before running cleanup checks, execute:

```
archive
```

This ensures:
- Deprecated prompts are archived
- Old reports are moved to archive
- Completed tasks are archived
- Deprecated guidelines are archived
- Active directories contain only current files

**Then proceed with cleanup checks below.**

---

## Checklist

### 1. Root Cleanliness
- [ ] Check root directory for unauthorized `.md` files
- [ ] Verify only `README.md`, `CHANGELOG.md`, and `ATTRIBUTIONS.md` exist in root
- [ ] Move any task files to `/tasks/`
- [ ] Move any prompt files to `/prompts/`
- [ ] Move any reports to `/reports/`
- [ ] Move any documentation to `/docs/`

### 2. Inline Styles Audit
Search for and remove inline visual styling:
- [ ] Search for `style={{` in all `.tsx` files
- [ ] Check for hard-coded colors (hex, rgb, rgba)
- [ ] Check for hard-coded spacing values
- [ ] Check for hard-coded font families
- [ ] Replace with semantic CSS classes or CSS variables

### 3. Data File Structure
- [ ] Verify all pages use external data files
- [ ] Check that no page has hard-coded content strings
- [ ] Ensure bilingual data structure (`.en.ts` and `.af.ts` pairs)
- [ ] Verify all data files have proper TypeScript types

### 4. Component Classes
- [ ] Replace Tailwind color classes with semantic classes
- [ ] Ensure all custom colors use CSS variables from `/src/styles/theme.css`
- [ ] Check that spacing uses gap/padding, not margin
- [ ] Verify WordPress-aligned class naming where applicable

### 5. File Organization
- [ ] Verify `/src/app/data/` structure matches recommended format
- [ ] Check that components are properly organized in `/src/app/components/`
- [ ] Ensure pages are in `/src/app/pages/`
- [ ] Verify routes configuration in `/src/app/routes/`

### 6. Accessibility
- [ ] Check all interactive elements have proper ARIA labels
- [ ] Verify keyboard navigation works
- [ ] Ensure focus states are visible
- [ ] Check color contrast meets WCAG AA standards

### 7. Performance
- [ ] Check for oversized files (>500 lines)
- [ ] Verify lazy loading is implemented where appropriate
- [ ] Ensure ad placeholders have reserved space

## Commands to Run

```bash
# Find inline styles
grep -r "style={{" src/app/

# Find hard-coded colors
grep -r "#[0-9a-fA-F]\{6\}" src/app/ --include="*.tsx"

# Find hard-coded spacing
grep -r "padding:\|margin:" src/app/ --include="*.tsx"

# Check for unauthorized root files
ls -la | grep "\.md$"

# List large files
find src/ -type f -name "*.tsx" -o -name "*.ts" | xargs wc -l | sort -rn | head -20
```

## Automated Fixes

Where possible, use automated refactoring:
- Replace hex colors with CSS variable references
- Convert inline styles to className references
- Move hard-coded strings to data files
- Standardize import paths

## Validation

After cleanup:
1. Run TypeScript compiler to check for errors
2. Test all routes and interactions
3. Verify bilingual switching works
4. Check responsive layouts
5. Test authentication flows
6. Verify ad placements

## Notes

- Document any exceptions to rules with code comments
- Update `/CHANGELOG.md` with cleanup actions taken
- Create issue tickets for items that require design decisions