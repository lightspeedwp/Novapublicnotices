# Login State Toggle — Development Feature

## Overview

A global authentication state toggle has been added to the Nova Public Notices Portal prototype for development and demonstration purposes. This allows testers to quickly switch between logged-in and logged-out states to view different UI variations.

---

## Implementation Details

### 1. Auth Context (`/src/app/contexts/AuthContext.tsx`)

A React Context provides global authentication state management:

```typescript
interface AuthContextType {
  isLoggedIn: boolean;
  toggleLoginState: () => void;
  login: () => void;
  logout: () => void;
}
```

**Features:**
- State persisted to `localStorage` (key: `nova-logged-in-state`)
- Accessible throughout the app via `useAuth()` hook
- Provides toggle, login, and logout functions

### 2. Integration in App.tsx

The app is wrapped with `AuthProvider` at the root level:

```typescript
<AuthProvider>
  <RouterProvider router={router} />
</AuthProvider>
```

### 3. UI Toggle in Top Bar

A prominent toggle button appears in the top bar next to the language switcher:

**Location:** Top bar (desktop only on tablet+)

**States:**
- **Logged Out**: Hollow user icon + "Logged Out" label
- **Logged In**: Filled user icon + "Logged In" label

**Behavior:**
- Click to toggle between states instantly
- State persists across page navigations and browser reloads
- Hover effect with subtle lift animation

---

## Conditional Navigation

Based on `isLoggedIn` state, the top bar shows different navigation:

### Logged Out State
- "Login" link → `/login` or `/af/login`
- "Register" button (red accent) → `/register` or `/af/register`

### Logged In State
- "My Account" link with user icon → `/my-account` or `/af/my-account`
- No Register button shown

---

## Using Auth State in Components

Any component can access the auth state using the `useAuth` hook:

```typescript
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
  const { isLoggedIn, toggleLoginState, login, logout } = useAuth();
  
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}
```

---

## CSS Styling

### Auth Toggle Button (`.wpn-layout__topbar-auth-toggle`)

**Design:**
- Semi-transparent white background (10% opacity)
- White border (20% opacity)
- Navy blue container with white text
- Smooth hover transitions
- Subtle lift effect on hover

**Responsive:**
- Desktop: Icon + label visible
- Mobile (<768px): Icon only, label hidden

**CSS Variables Used:**
```css
--space-2, --space-3
--border-width-1
--radius-md
--text-xs
--font-family-body
--font-weight-medium
--icon-size-sm
--duration-fast
--ease-out
--hover-translate-y-sm
```

---

## Future Considerations

### For Production:
1. **Remove Dev Toggle**: The auth toggle button should be hidden or removed in production
2. **Real Authentication**: Replace with actual auth logic (OAuth, JWT, session cookies, etc.)
3. **Protected Routes**: Add route guards based on real auth state
4. **WordPress Integration**: Map to WordPress user roles and capabilities

### For Prototype:
- ✅ Quick testing of logged-in vs logged-out UX
- ✅ Demonstrates My Account dashboard integration
- ✅ Shows conditional UI states throughout the app
- ✅ Persists state across navigation for realistic testing

---

## Example Use Cases

### 1. Search Results Page
```typescript
const { isLoggedIn } = useAuth();

if (!isLoggedIn) {
  return <LoginWall message="Sign in to view full notices" />;
}

return <NoticeSearchResults results={results} />;
```

### 2. Submit Notice Flow
```typescript
const { isLoggedIn, login } = useAuth();

if (!isLoggedIn) {
  return <SubmitNoticeTeaser onLogin={login} />;
}

return <SubmitNoticeForm />;
```

### 3. Notice Detail Page
```typescript
const { isLoggedIn } = useAuth();

return (
  <div>
    <NoticeHeader notice={notice} />
    {isLoggedIn ? (
      <NoticeFullContent notice={notice} />
    ) : (
      <NoticeExcerpt notice={notice} loginRequired />
    )}
  </div>
);
```

---

## API Reference

### `useAuth()` Hook

Returns an object with:

| Property | Type | Description |
|----------|------|-------------|
| `isLoggedIn` | `boolean` | Current authentication state |
| `toggleLoginState` | `() => void` | Toggle between logged in/out |
| `login` | `() => void` | Set state to logged in |
| `logout` | `() => void` | Set state to logged out |

### LocalStorage Key

- **Key**: `nova-logged-in-state`
- **Value**: `"true"` or `"false"` (string)
- **Purpose**: Persist login state across sessions

---

## Testing Checklist

When testing with the auth toggle:

- [ ] Toggle appears in top bar (desktop only)
- [ ] Icon changes between filled/hollow
- [ ] Label updates correctly
- [ ] State persists on page reload
- [ ] Top bar navigation changes based on state
- [ ] Login link shows when logged out
- [ ] My Account link shows when logged in
- [ ] Register button only shows when logged out
- [ ] Mobile view hides label but keeps icon
- [ ] Hover effect works smoothly
- [ ] State accessible via `useAuth()` in all components

---

**Last Updated**: March 17, 2026  
**Status**: ✅ Implemented and ready for testing
