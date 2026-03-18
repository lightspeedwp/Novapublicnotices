# Status — Nova Public Notices Project Health Dashboard

**Type:** Utility  
**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Trigger Word:** `status`  
**Project:** Nova Public Notices Portal

---

## Prompt Purpose

**Objective:** Generate quick health check of Nova Public Notices Portal — file counts, bilingual compliance, open tasks, CSS variable usage, and recent activity.

**When to Use:** Start of session, before planning work, or for project snapshot.

---

## Workflow Steps

### Step 1: Codebase Metrics

Count files in `/src/app/`:

**Components:**
- Templates (pages)
- Components (NoticeCard, NoticeGrid, SearchFilterBar, etc.)
- UI components

**Data Files:**
- Bilingual pairs (`.en.ts` / `.af.ts`)
- Notice data files
- Category definitions

**Routes:**
- English routes
- Afrikaans routes
- Total route pairs

**Styles:**
- CSS files in `/src/styles/`
- CSS variable definitions

**Guidelines:**
- Files in `/guidelines/`
- Active vs deprecated

### Step 2: Bilingual Health Check

**Critical for Nova:**

1. **Route pairs:**
   - Count EN routes
   - Count AF routes
   - Check EN ↔ AF equivalence

2. **Data file pairs:**
   - Count `.en.ts` files
   - Count `.af.ts` files
   - Flag missing pairs

3. **Navigation data:**
   - `navigation.en.ts` exists?
   - `navigation.af.ts` exists?

### Step 3: Task Status

Read `/tasks/`:

- **Master task list** status
- Open tasks `[ ]` count
- Completed tasks `[x]` count
- Critical vs high vs low priority
- Next 3 actionable tasks

### Step 4: Design System Compliance Spot-Check

Check 5 random `.tsx` files for:

**Nova Compliance:**
- ✅ / ❌ No `style={{ color: '#09082f' }}`
- ✅ / ❌ No `style={{ color: '#d70025' }}`
- ✅ / ❌ Uses `var(--nova-primary)`
- ✅ / ❌ Uses `var(--nova-accent)`
- ✅ / ❌ Fonts from `/src/styles/fonts.css` only
- ✅ / ❌ No Tailwind utility classes

### Step 5: Recent Activity

Read `/CHANGELOG.md` `[Unreleased]` section:
- Last 5 changes
- Date of last update

### Step 6: Output Dashboard

```markdown
## Nova Public Notices Portal — Project Status

**Date:** YYYY-MM-DD

---

### 📊 Codebase Metrics

| Category | Count |
|----------|-------|
| **Components** ||
| Page templates | {N} |
| Notice components | {N} |
| UI components | {N} |
| **Data Files** ||
| English data files (.en.ts) | {N} |
| Afrikaans data files (.af.ts) | {N} |
| Unpaired files | {N} ⚠️ |
| **Routes** ||
| English routes | {N} |
| Afrikaans routes | {N} |
| Route equivalence | {%} |
| **Styles** ||
| CSS files | {N} |
| CSS variables defined | {N} |
| **Documentation** ||
| Active guidelines | {N} |
| Prompts | {N} |
| Reports (current month) | {N} |

---

### 🌍 Bilingual Compliance

| Check | Status |
|-------|--------|
| Route pairs complete | ✅ / ❌ {N}/{N} |
| Navigation data paired | ✅ / ❌ |
| Category data paired | ✅ / ❌ |
| All .en.ts have .af.ts | ✅ / ❌ |

**Issues:**
- {Missing pair 1}
- {Missing pair 2}

---

### ✅ Tasks

**Total:** {open} open, {completed} completed

**By Priority:**
- Critical (P1): {N} open
- High (P2): {N} open
- Low (P3): {N} open

**Next Priority Tasks:**
1. {Task 1 from critical}
2. {Task 2 from critical or high}
3. {Task 3}

---

### 🎨 Design System Compliance

**Spot Check (5 files):**

| Rule | Compliance |
|------|------------|
| No hard-coded #09082f | {5}/5 ✅ or {N}/5 ❌ |
| No hard-coded #d70025 | {5}/5 ✅ or {N}/5 ❌ |
| Uses var(--nova-*) | {5}/5 ✅ or {N}/5 ❌ |
| Defined fonts only | {5}/5 ✅ or {N}/5 ❌ |
| No Tailwind utilities | {5}/5 ✅ or {N}/5 ❌ |

**Status:** {Pass / Needs Attention / Critical Issues}

---

### 📝 Recent Activity

From CHANGELOG.md [Unreleased]:
1. {Recent change 1}
2. {Recent change 2}
3. {Recent change 3}
4. {Recent change 4}
5. {Recent change 5}

---

### 🎯 Recommendations

**Immediate Actions:**
- {Action based on findings}

**This Week:**
- {Suggested work}

**Maintenance:**
- {Ongoing tasks}

---

**Health Score:** {A / B / C / D} based on compliance and task completion
```

---

## Success Criteria

- [ ] All metrics gathered and reported
- [ ] Bilingual compliance checked
- [ ] Next priority task identified
- [ ] Design system spot-check completed
- [ ] No files modified (read-only operation)
- [ ] Dashboard output generated

---

## Related Documentation

- **[Guidelines.md](../guidelines/Guidelines.md)** — Project standards
- **[locale-architecture.md](../guidelines/locale-architecture.md)** — Bilingual requirements
- **[/tasks/master-task-list.md](../tasks/master-task-list.md)** — Task tracking

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0.0 | 2026-03-16 | Initial status dashboard for Nova Public Notices Portal |
