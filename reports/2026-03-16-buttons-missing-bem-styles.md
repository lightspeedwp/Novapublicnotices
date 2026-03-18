# Buttons Missing BEM Styles — Audit Report

**Date:** 2026-03-16  
**Issue:** Buttons using variant props without proper wpn-button BEM classes  
**Impact:** Inconsistent styling not controlled by CSS design system

---

## Summary

**Total buttons found:** 102+  
**Buttons with proper BEM classes:** ~50  
**Buttons missing BEM classes:** ~52  

---

## Categories of Issues

### 1. **Buttons with `variant="outline"` only** (Most Common)

These buttons rely on Shadcn variant styling instead of design system BEM classes.

**Should be:** `className="wpn-button wpn-button--outline"`

#### Affected Files (33 instances):

1. **Home.tsx** (line 122)
   ```tsx
   <Button variant="outline" asChild>
   ```

2. **HomeAF.tsx** (line 122)
   ```tsx
   <Button variant="outline" asChild>
   ```

3. **SingleNotice.tsx** (lines 115, 119)
   ```tsx
   <Button variant="outline" size="sm">
   ```

4. **SingleNoticeAF.tsx** (lines 66, 70)
   ```tsx
   <Button variant="outline" size="sm">
   ```

5. **CategoryArchive.tsx** (line 146)
   ```tsx
   <Button variant="outline" asChild>
   ```

6. **CategoryArchiveAF.tsx** (line 146)
   ```tsx
   <Button variant="outline" asChild>
   ```

7. **Sales.tsx** (lines 173, 176, 389, 466, 581)
   ```tsx
   <Button variant="outline" asChild>
   <Button variant="outline" className="w-full" asChild>
   ```

8. **Dashboard.tsx** (lines 201, 204, 207)
   ```tsx
   <Button variant="outline" asChild>
   ```

9. **DashboardAF.tsx** (lines 19, 28, 37, 46, 71)
   ```tsx
   <Button variant="outline" size="sm" asChild>
   <Button variant="outline" size="sm">
   <Button variant="outline" className="w-full" asChild>
   ```

10. **MyNotices.tsx** (lines 172, 179, 185)
    ```tsx
    <Button variant="outline" size="sm">
    ```

11. **Profile.tsx / ProfileAF.tsx** (lines 114)
    ```tsx
    <Button type="button" variant="outline">
    ```

12. **Settings.tsx / SettingsAF.tsx** (lines 387, 403)
    ```tsx
    <Button variant="outline" size="sm" type="button">
    ```

13. **Advertise.tsx / AdvertiseAF.tsx** (line 201)
    ```tsx
    <Button size="lg" variant="outline" asChild>
    ```

---

### 2. **Buttons with incomplete BEM classes** (Missing base class)

These have modifier classes but are missing the base `wpn-button` class.

**Should be:** `className="wpn-button wpn-button--accent"`

#### Affected Files (4 instances):

14. **SavedSearches.tsx** (lines 115, 303)
    ```tsx
    <Button className="wpn-button--accent gap-2">
    ```
    **Missing:** `wpn-button` base class

15. **SavedSearchesAF.tsx** (lines 114, 302)
    ```tsx
    <Button className="wpn-button--accent gap-2">
    ```
    **Missing:** `wpn-button` base class

---

### 3. **Destructive/Warning buttons with inline color classes**

These use hard-coded Tailwind color classes instead of BEM classes.

**Should be:** `className="wpn-button wpn-button--destructive"`

#### Affected Files (4 instances):

16. **Settings.tsx** (lines 437, 451)
    ```tsx
    <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
    <Button variant="outline" size="sm" className="border-red-400 text-red-700 hover:bg-red-100">
    ```

17. **SettingsAF.tsx** (lines 437, 451)
    ```tsx
    <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
    <Button variant="outline" size="sm" className="border-red-400 text-red-700 hover:bg-red-100">
    ```

---

### 4. **Mixed inline styles** (Partial adherence)

These have some wpn-button classes but also include inline Tailwind overrides.

#### Affected Files (6 instances):

18. **Sales.tsx** (line 606)
    ```tsx
    <Button size="lg" variant="outline" className="bg-white wpn-text--primary hover:bg-muted" asChild>
    ```
    **Should be:** Pure BEM with no inline bg/hover classes

19. **SalesAF.tsx** (lines 114, 117)
    ```tsx
    <Button size="lg" variant="outline" className="bg-white wpn-text--primary hover:bg-muted" asChild>
    ```

20. **Advertise.tsx / AdvertiseAF.tsx** (lines 24, 24)
    ```tsx
    <Button size="lg" variant="outline" className="bg-white wpn-text--primary hover:bg-[var(--muted)]" asChild>
    ```

---

### 5. **Non-BEM button elements** (Using plain button tag)

These use plain `<button>` tags instead of the Button component.

#### Affected Files (1 instance):

21. **Dashboard.tsx** (line 72)
    ```tsx
    <button onClick={handleLogout} className="wpn-link--accent">
    ```
    **Note:** This is a link-styled button, acceptable pattern

---

## ✅ **Examples of CORRECT Usage**

These buttons follow the design system properly:

```tsx
// ✅ CORRECT - Primary accent button
<Button type="submit" className="wpn-button wpn-button--accent">
  Submit
</Button>

// ✅ CORRECT - Large accent button
<Button size="lg" className="wpn-button wpn-button--lg wpn-button--accent" asChild>
  <Link to="/submit">Start Publishing</Link>
</Button>

// ✅ CORRECT - White button on dark background
<Button size="lg" className="wpn-button wpn-button--lg wpn-button--white" asChild>
  <Link to="/sales">Learn More</Link>
</Button>

// ✅ CORRECT - Primary button
<Button className="w-full wpn-button wpn-button--primary" asChild>
  <Link to="/contact">Contact Team</Link>
</Button>

// ✅ CORRECT - Outline button with BEM
<Button variant="outline" className="wpn-button wpn-button--outline" asChild>
  <Link to="/sales">Learn More</Link>
</Button>
```

---

## ❌ **Examples of INCORRECT Usage**

```tsx
// ❌ WRONG - Missing wpn-button classes entirely
<Button variant="outline" asChild>
  <Link to="/search">Browse All Categories</Link>
</Button>

// ❌ WRONG - Missing base wpn-button class
<Button className="wpn-button--accent gap-2">
  <Plus className="size-5" />
  Create Alert
</Button>

// ❌ WRONG - Using inline Tailwind color classes
<Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
  Delete Account
</Button>

// ❌ WRONG - Mixed inline styles with BEM
<Button size="lg" variant="outline" className="bg-white wpn-text--primary hover:bg-muted" asChild>
  <Link to="/pricing">View Pricing</Link>
</Button>
```

---

## 🔧 **Recommended Fix Pattern**

### For outline buttons:
```tsx
// Before
<Button variant="outline" asChild>
  <Link to="/search">Browse</Link>
</Button>

// After
<Button variant="outline" className="wpn-button wpn-button--outline" asChild>
  <Link to="/search">Browse</Link>
</Button>
```

### For small outline buttons:
```tsx
// Before
<Button variant="outline" size="sm">
  <Download className="size-4 mr-2" />
  Download
</Button>

// After
<Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--outline">
  <Download className="size-4 mr-2" />
  Download
</Button>
```

### For buttons with incomplete classes:
```tsx
// Before
<Button className="wpn-button--accent gap-2">
  Create Alert
</Button>

// After
<Button className="wpn-button wpn-button--accent gap-2">
  Create Alert
</Button>
```

### For destructive buttons:
```tsx
// Before
<Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
  Delete Account
</Button>

// After
<Button variant="outline" size="sm" className="wpn-button wpn-button--sm wpn-button--destructive">
  Delete Account
</Button>
```

---

## 📋 **Priority Files to Fix**

### **High Priority** (Most visible pages):
1. Home.tsx / HomeAF.tsx
2. Sales.tsx / SalesAF.tsx
3. Dashboard.tsx / DashboardAF.tsx
4. SingleNotice.tsx / SingleNoticeAF.tsx

### **Medium Priority** (Account pages):
5. MyNotices.tsx
6. Profile.tsx / ProfileAF.tsx
7. SavedSearches.tsx / SavedSearchesAF.tsx
8. Settings.tsx / SettingsAF.tsx

### **Lower Priority** (Supporting pages):
9. CategoryArchive.tsx / CategoryArchiveAF.tsx
10. Advertise.tsx / AdvertiseAF.tsx
11. Pricing.tsx / PricingAF.tsx

---

## 🎯 **Next Steps**

1. **Create wpn-button--destructive variant** in utility-classes.css
2. **Systematically update all 52 buttons** to use proper BEM classes
3. **Remove all inline Tailwind color/background classes** from buttons
4. **Test visual consistency** across all pages after migration
5. **Document button variants** in design system guidelines

---

## 📊 **Impact**

**Before:**
- 52 buttons controlled by Shadcn variant props and inline Tailwind
- Inconsistent styling across pages
- Changes require updating individual components
- Not aligned with CSS design system

**After:**
- All buttons controlled by centralized BEM classes
- Consistent styling across portal
- Changes made via CSS variable updates
- Full design system compliance

---

**Status:** Audit complete, ready for systematic migration
