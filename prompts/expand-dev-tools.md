# Expand Dev Tools — Development Workflow Recommendations

**Category:** Utility  
**Version:** 1.0.0  
**Last Updated:** 2026-03-18  
**Trigger Word:** `expand dev-tools` or `expand dev tools`  
**Status:** Active  
**Parent:** expand-orchestrator.md

---

## Purpose

Analyze conversation history and current workflows to identify missing development tools, scripts, utilities, and automation opportunities that would improve developer productivity.

---

## Scope

Identifies opportunities for:
- Helper scripts
- Development utilities
- Code generation tools
- Validation scripts
- Build optimizations
- Developer experience improvements

---

## Analysis Areas

### 1. Repetitive Manual Tasks

**Scan conversation for:**
- Tasks performed multiple times manually
- Copy-paste workflows
- File creation patterns
- Data transformations
- Multi-step processes

**Examples:**
- Creating bilingual data file pairs
- Scaffolding new pages
- Generating TypeScript interfaces
- Updating route configurations
- Validating data structures

### 2. Missing Utilities

**Common dev tool categories:**

**File Generation:**
- `create-bilingual-page.sh` — Scaffold page + EN/AF data files
- `create-category-data.sh` — Generate category data files
- `create-component.sh` — Scaffold component with types

**Validation Scripts:**
- `validate-bilingual.sh` — Check all EN files have AF pairs
- `validate-types.sh` — Run TypeScript compiler
- `validate-routes.sh` — Check route configuration
- `validate-data-structure.sh` — Validate data file formats

**Data Tools:**
- `generate-sample-data.js` — Create sample notice data
- `migrate-data-structure.js` — Update data file formats
- `extract-content.js` — Extract hardcoded content to data files

**Build Tools:**
- `analyze-bundle.sh` — Bundle size analysis
- `check-unused-exports.sh` — Find unused code
- `optimize-images.sh` — Compress images
- `generate-sitemap.sh` — Generate sitemap.xml

**Documentation Tools:**
- `generate-component-docs.sh` — Document components
- `update-changelog.sh` — Update CHANGELOG.md from reports
- `generate-api-docs.sh` — Generate API documentation

### 3. Git Hooks & Automation

**Pre-commit hooks:**
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Run validation
npm run validate:types
npm run validate:bilingual
npm run validate:data

# Run audits
npm run audit:styling
npm run audit:accessibility

# Prevent commit if errors
if [ $? -ne 0 ]; then
  echo "❌ Validation failed. Fix errors before committing."
  exit 1
fi
```

**Pre-push hooks:**
```bash
#!/bin/bash
# .git/hooks/pre-push

# Run full audit suite
npm run audit:all

# Run tests
npm run test

# Check bundle size
npm run build:analyze
```

### 4. NPM Scripts

**Recommended package.json scripts:**

```json
{
  "scripts": {
    "// --- Validation ---": "",
    "validate:types": "tsc --noEmit",
    "validate:bilingual": "node scripts/validate-bilingual.js",
    "validate:routes": "node scripts/validate-routes.js",
    "validate:data": "node scripts/validate-data.js",
    "validate:all": "npm run validate:types && npm run validate:bilingual && npm run validate:routes && npm run validate:data",
    
    "// --- Audits ---": "",
    "audit:locale": "node scripts/run-audit.js locale",
    "audit:styling": "node scripts/run-audit.js styling",
    "audit:accessibility": "node scripts/run-audit.js accessibility",
    "audit:all": "node scripts/run-audit.js orchestrator",
    
    "// --- Generators ---": "",
    "generate:page": "node scripts/generate-page.js",
    "generate:category": "node scripts/generate-category-data.js",
    "generate:component": "node scripts/generate-component.js",
    
    "// --- Utilities ---": "",
    "analyze:bundle": "vite-bundle-visualizer",
    "analyze:unused": "ts-prune",
    "optimize:images": "node scripts/optimize-images.js",
    "extract:content": "node scripts/extract-hardcoded-content.js",
    
    "// --- Documentation ---": "",
    "docs:components": "node scripts/generate-component-docs.js",
    "docs:api": "node scripts/generate-api-docs.js",
    "docs:changelog": "node scripts/update-changelog.js"
  }
}
```

### 5. VS Code Extensions & Settings

**Recommended extensions:**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "csstools.postcss",
    "ms-vscode.vscode-typescript-next",
    "streetsidesoftware.code-spell-checker"
  ]
}
```

**Workspace settings:**
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "css.validate": false,
  "tailwindCSS.experimental.classRegex": [
    ["className=\"([^\"]*)\"", "([a-zA-Z0-9\\-:]+)"]
  ]
}
```

### 6. Developer Documentation

**Missing docs to create:**
- `/docs/development-setup.md` — Getting started guide
- `/docs/creating-pages.md` — How to create new pages
- `/docs/creating-components.md` — Component creation guide
- `/docs/data-architecture.md` — Data file patterns
- `/docs/bilingual-workflow.md` — Working with EN/AF content
- `/docs/troubleshooting.md` — Common issues and solutions

---

## Report Format

Generate: `/reports/YYYY-MM-DD-dev-tools-recommendations.md`

```markdown
# Development Tools Recommendations — YYYY-MM-DD

**Analysis Date:** YYYY-MM-DD  
**Conversation Period:** {start - end}  
**Manual Tasks Identified:** {number}  
**Tools Recommended:** {number}

---

## Executive Summary

Analyzed development workflows and identified {N} repetitive manual tasks that could be automated with {N} new scripts and tools.

**Top Opportunities:**
1. {Tool} — Would save {estimated time}
2. {Tool} — Would eliminate {pain point}
3. {Tool} — Would prevent {error type}

---

## Repetitive Task Analysis

### Task: Creating Bilingual Pages

**Frequency:** Identified {N} times in conversation

**Current Manual Process:**
1. Create `/src/app/pages/{PageName}.tsx`
2. Create `/src/app/data/{page-name}/{page-name}.en.ts`
3. Create `/src/app/data/{page-name}/{page-name}.af.ts`
4. Update `/src/app/routes.tsx`
5. Update navigation data
6. Update sitemap

**Proposed Tool:** `create-bilingual-page.sh`

```bash
#!/bin/bash
# scripts/create-bilingual-page.sh

PAGE_NAME=$1
PAGE_ROUTE=$2

# Create page component
cat > "src/app/pages/${PAGE_NAME}.tsx" << EOF
import { pageData } from '../data/${PAGE_NAME}/${PAGE_NAME}.en';

export function ${PAGE_NAME}() {
  return (
    <div>
      <h1>{pageData.title}</h1>
    </div>
  );
}
EOF

# Create EN data file
mkdir -p "src/app/data/${PAGE_NAME}"
cat > "src/app/data/${PAGE_NAME}/${PAGE_NAME}.en.ts" << EOF
export const pageData = {
  title: '${PAGE_NAME}',
  // Add more data fields
};
EOF

# Create AF data file
cat > "src/app/data/${PAGE_NAME}/${PAGE_NAME}.af.ts" << EOF
export const pageData = {
  title: '${PAGE_NAME}',
  // Add Afrikaans translations
};
EOF

echo "✅ Created bilingual page: ${PAGE_NAME}"
```

**Usage:**
```bash
npm run generate:page AboutUs /about
```

**Benefit:** Reduces 15-minute manual process to single command

---

{Additional tool recommendations...}

---

## Recommended Scripts

### Critical Priority

1. **validate-bilingual.js**
   - Checks all .en.ts files have matching .af.ts
   - Validates structure matches between pairs
   - Reports missing translations

2. **generate-category-data.js**
   - Scaffolds new category data files
   - Generates sample notices
   - Updates category index

3. **extract-hardcoded-content.js**
   - Scans TSX files for string literals
   - Identifies content to migrate
   - Suggests data file structure

### High Priority

4. **validate-routes.js**
   - Checks route configuration
   - Validates bilingual route pairs
   - Detects missing routes

5. **optimize-images.js**
   - Compresses images
   - Generates responsive variants
   - Updates imports

### Medium Priority

6. **analyze-bundle.js**
   - Bundle size analysis
   - Identifies large dependencies
   - Suggests optimizations

7. **generate-component-docs.js**
   - Extracts component props
   - Generates usage examples
   - Creates markdown docs

---

## Git Hooks Implementation

### Setup Instructions

1. **Install husky:**
```bash
npm install --save-dev husky
npx husky init
```

2. **Create pre-commit hook:**
```bash
#!/bin/bash
# .husky/pre-commit

npm run validate:types
npm run validate:bilingual
npm run audit:styling

if [ $? -ne 0 ]; then
  echo "❌ Validation failed"
  exit 1
fi
```

3. **Create pre-push hook:**
```bash
#!/bin/bash
# .husky/pre-push

npm run audit:all
npm run test
```

**Benefit:** Catches errors before they reach repository

---

## NPM Scripts to Add

Add to `/package.json`:

```json
{
  "scripts": {
    "validate:all": "npm run validate:types && npm run validate:bilingual",
    "audit:all": "node scripts/run-audit.js",
    "generate:page": "bash scripts/create-bilingual-page.sh",
    "analyze:bundle": "vite-bundle-visualizer",
    "docs:update": "node scripts/generate-docs.js"
  }
}
```

---

## VS Code Configuration

### Create `.vscode/extensions.json`:
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}
```

### Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

---

## Documentation to Create

### Critical
- `/docs/development-setup.md`
- `/docs/creating-pages.md`
- `/docs/bilingual-workflow.md`

### High Priority
- `/docs/troubleshooting.md`
- `/docs/contributing.md`
- `/docs/code-style-guide.md`

---

## Implementation Roadmap

### Week 1: Critical Tools
- [ ] Create validation scripts
- [ ] Setup git hooks
- [ ] Add NPM scripts

### Week 2: Generation Tools
- [ ] Create page generator
- [ ] Create component generator
- [ ] Create category data generator

### Week 3: Documentation & Optimization
- [ ] Write developer docs
- [ ] Create bundle analyzer
- [ ] Setup VS Code config

---

## Next Steps

1. Review tool recommendations
2. Prioritize based on pain points
3. Create scripts in `/scripts/`
4. Update package.json
5. Document usage
6. Test automation

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
```

---

## Success Criteria

✅ Repetitive tasks identified  
✅ Tool recommendations provided  
✅ Script examples included  
✅ Git hooks proposed  
✅ NPM scripts defined  
✅ VS Code config provided  
✅ Documentation needs identified  
✅ Implementation roadmap created  
✅ Report generated

---

## Related Documentation

- **[expand-orchestrator.md](./expand-orchestrator.md)** — Parent orchestrator
- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[expand-prompts.md](./expand-prompts.md)** — Prompt recommendations

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-18 | Initial dev tools expansion analysis prompt |
