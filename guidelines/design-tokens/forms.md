# Form Tokens — Nova Public Notices

**Version:** 1.0.0  
**Created:** 2026-03-16  
**Status:** Active  
**Project:** Nova Public Notices Portal

---

## Purpose

Forms are central to self-serve submissions, contact, login, registration, and checkout. They must feel stable, editorial, and trustworthy.

---

## Form Tokens

```css
:root {
  --form-field-height: 48px;
  --form-field-padding-x: var(--space-4);
  --form-field-padding-y: var(--space-3);
  --form-field-radius: var(--radius-md);
  --form-field-border: var(--border-color-default);
  --form-field-background: var(--input-background);
  --form-field-text: var(--foreground);
  --form-field-placeholder: var(--muted-foreground);
  --form-field-focus-ring: var(--ring);
  --form-field-error: var(--destructive);
  --form-label-gap: var(--space-2);
}
```

---

## Base Form Field Styles

```css
.form__input,
.form__select,
.form__textarea {
  width: 100%;
  min-height: var(--form-field-height);
  padding: var(--form-field-padding-y) var(--form-field-padding-x);
  border: 1px solid var(--form-field-border);
  border-radius: var(--form-field-radius);
  background-color: var(--form-field-background);
  color: var(--form-field-text);
  font-family: var(--font-family-body);
  font-size: var(--text-base);
  line-height: var(--line-height-normal);
  transition: border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}

.form__input::placeholder,
.form__textarea::placeholder {
  color: var(--form-field-placeholder);
}

.form__input:focus-visible,
.form__select:focus-visible,
.form__textarea:focus-visible {
  outline: 2px solid var(--form-field-focus-ring);
  outline-offset: 2px;
  border-color: var(--nova-primary);
}

.form__input:disabled,
.form__select:disabled,
.form__textarea:disabled {
  background-color: var(--muted);
  color: var(--muted-foreground);
  cursor: not-allowed;
  opacity: 0.6;
}
```

---

## Form Field Structure

### Field Group

```css
.form__field-group {
  display: flex;
  flex-direction: column;
  gap: var(--form-label-gap);
}

.form__label {
  display: block;
  font-family: var(--font-family-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--foreground);
  line-height: var(--line-height-normal);
}

.form__label--required::after {
  content: '*';
  color: var(--form-field-error);
  margin-left: var(--space-1);
}

.form__help-text {
  font-size: var(--text-sm);
  color: var(--muted-foreground);
  line-height: var(--line-height-normal);
  margin-top: var(--space-1);
}

.form__error-message {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--form-field-error);
  line-height: var(--line-height-normal);
  margin-top: var(--space-1);
}
```

### Error State

```css
.form__input--error,
.form__select--error,
.form__textarea--error {
  border-color: var(--form-field-error);
}

.form__input--error:focus-visible,
.form__select--error:focus-visible,
.form__textarea--error:focus-visible {
  outline-color: var(--form-field-error);
}
```

---

## Textarea

```css
.form__textarea {
  min-height: 120px;
  resize: vertical;
  line-height: var(--line-height-relaxed);
}
```

---

## Select Dropdown

```css
.form__select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23666' d='M4 6l4 4 4-4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  background-size: 16px;
  padding-right: var(--space-8);
  cursor: pointer;
}
```

---

## Checkbox and Radio

```css
.form__checkbox,
.form__radio {
  width: 20px;
  height: 20px;
  border: 1px solid var(--form-field-border);
  background-color: var(--form-field-background);
  cursor: pointer;
  flex-shrink: 0;
}

.form__checkbox {
  border-radius: var(--radius-sm);
}

.form__radio {
  border-radius: 50%;
}

.form__checkbox:checked,
.form__radio:checked {
  background-color: var(--nova-primary);
  border-color: var(--nova-primary);
}

.form__checkbox:focus-visible,
.form__radio:focus-visible {
  outline: 2px solid var(--form-field-focus-ring);
  outline-offset: 2px;
}

/* Checkbox/Radio with Label */
.form__checkbox-group,
.form__radio-group {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
}

.form__checkbox-label,
.form__radio-label {
  font-size: var(--text-base);
  color: var(--foreground);
  line-height: var(--line-height-normal);
  cursor: pointer;
}
```

---

## File Upload

```css
.form__file-input {
  display: none;
}

.form__file-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: var(--form-field-height);
  padding: var(--button-padding-md);
  border: 1px dashed var(--form-field-border);
  border-radius: var(--form-field-radius);
  background-color: var(--muted);
  color: var(--foreground);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-out),
              background-color var(--duration-fast) var(--ease-out);
}

.form__file-label:hover {
  border-color: var(--nova-primary);
  background-color: var(--card);
}

.form__file-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-3);
}

.form__file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3);
  border: 1px solid var(--form-field-border);
  border-radius: var(--radius-sm);
  background-color: var(--card);
}
```

---

## Search Input

```css
.form__search-input {
  padding-left: var(--space-10);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23666' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: var(--space-3) center;
  background-size: 20px;
}
```

---

## Form Layout

### Vertical Form (Default)

```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 600px;
}
```

### Two-Column Form (Desktop)

```css
.form--two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6) var(--space-4);
}

.form__field-group--full-width {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .form--two-column {
    grid-template-columns: 1fr;
  }
}
```

---

## Form Actions

```css
.form__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-4);
}

.form__actions--end {
  justify-content: flex-end;
}

.form__actions--space-between {
  justify-content: space-between;
}
```

---

## Search and Filter Controls

Search and filter controls are part of the same form system. Do not build separate one-off filter appearances.

### Filter Bar

```css
.filter-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-4);
  padding: var(--space-6);
  background: var(--card);
  border: 1px solid var(--border-color-default);
  border-radius: var(--radius-lg);
}

.filter-bar__actions {
  display: flex;
  align-items: flex-end;
  gap: var(--space-3);
  grid-column: 1 / -1;
}
```

### Filter Chips (Selected Filters)

```css
.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: var(--muted);
  border: 1px solid var(--border-color-default);
  border-radius: var(--radius-pill);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--foreground);
}

.filter-chip__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--foreground);
  color: var(--card);
  cursor: pointer;
}
```

---

## Accessibility Rules

### Required Fields

- Labels must always be visible (never placeholder-only)
- Required state must not rely on color alone
- Use `aria-required="true"` or native `required` attribute
- Mark required fields visually with asterisk

### Error Messages

- Error messages must be inline and associated to the field
- Use `aria-describedby` to link error messages
- Error icon should accompany error text

```tsx
<div className="form__field-group">
  <label htmlFor="email" className="form__label form__label--required">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    className="form__input form__input--error"
    aria-required="true"
    aria-describedby="email-error"
    aria-invalid="true"
  />
  <div id="email-error" className="form__error-message" role="alert">
    <AlertCircle size={16} />
    Please enter a valid email address
  </div>
</div>
```

### Help Text

```tsx
<div className="form__field-group">
  <label htmlFor="reference" className="form__label">
    Reference Number
  </label>
  <input
    id="reference"
    type="text"
    className="form__input"
    aria-describedby="reference-help"
  />
  <div id="reference-help" className="form__help-text">
    Enter the reference number from your notice
  </div>
</div>
```

---

## Bilingual Forms

English and Afrikaans forms share layout and token rules:

```tsx
// English
<label htmlFor="name" className="form__label form__label--required">
  Full Name
</label>

// Afrikaans
<label htmlFor="name" className="form__label form__label--required">
  Volledige Naam
</label>
```

---

## Anti-Patterns

❌ **Do not:**
- Hide labels (placeholder-only forms)
- Use help text as placeholders
- Rely on color alone for required/error states
- Use custom form controls without proper accessibility
- Build different visual systems for filters vs forms
- Use inline styles for form field colors or spacing

✅ **Do:**
- Always show visible labels
- Provide clear error messages
- Use semantic HTML form elements
- Ensure 44px minimum touch targets
- Keep consistent spacing with tokens
- Associate errors with fields using ARIA

---

## Related Documentation

- `/guidelines/design-tokens/colors.md` — Form color tokens
- `/guidelines/design-tokens/spacing.md` — Form spacing
- `/guidelines/design-tokens/typography.md` — Form typography
- `/guidelines/design-tokens/buttons.md` — Form action buttons
