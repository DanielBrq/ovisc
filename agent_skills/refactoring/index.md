# Skill: Refactoring Protocol

## Description
Safety-first procedures for improving code quality, removing duplication, and simplifying logic without breaking behavior. Promotes SOLID principles, DRY, and leverages existing Nuxt/Adonis tools and Tailwind CSS styling conventions.

## Cases of Use
- **READ WHEN**: The user explicitly asks for "refactor", "cleanup", "optimize", or "simplify", or when code duplication is evident.
- **DO NOT READ WHEN**: Implementing new features or fixing specific logic bugs without touching surrounding code.

---

# Refactoring Rules

## 1. Behavior Preservation (The Golden Rule)
- External behavior must remain identical. **No logic changes** during a refactor.
- Ensure state, transitions, and API responses match the previous implementation exactly.

## 2. SOLID & DRY Principles
- **DRY (Don't Repeat Yourself)**: Eliminate duplicated code. Extract repeated logic into reusable Nuxt composables, shared Vue components, or AdonisJS services.
- **Single Responsibility (SRP)**: Break down massive components or classes into smaller, focused files. A Vue component should only handle UI and local state, delegating fetch logic to `/services` layer and reactivity logic to `/composables`.
- **Open/Closed**: Refactor logic so it can be extended without modifying the core functionality (e.g., using slots in Vue, or interfaces/abstract classes in backend).
- **Dependency Inversion**: Ensure frontend components rely on the `/services` abstraction layer to communicate with the AdonisJS backend rather than raw `fetch` or `useFetch` calls spread across pages.

## 3. Maximizing Existing Elements
- **Do NOT reinvent the wheel.** Actively search for and reuse existing generic UI components (like Buttons, Inputs, Cards from `/components/ui`).
- Reuse existing utility functions, composables, and services before creating new ones.
- When extracting logic, check if a similar composable or service already exists to integrate with instead of duplicating.

## 4. UI & Tailwind CSS Conventions
- **Class Organization**: When refactoring Vue templates, restructure Tailwind classes following the mobile-first convention (as defined in `ui-styling`):
  - Base classes (mobile)
  - Layout/Screen overrides (`md:`, `lg:`, `xl:`, `2xl:`)
  - State modifiers (`hover:`, `focus:`, `active:`, `disabled:`)
- **Multi-line Formatting**: If the class list is long, break it into multiple lines grouping by screen size to enhance readability.
- **CSS abstraction over JS logic**: Refactor JS-based style toggling or animations into pure Tailwind classes (e.g., using `group-hover`, `peer-checked`, or Nuxt `<Transition>`) to reduce script complexity.

## 5. Incremental & Safe Steps
- Small, focused changes. Avoid "Big Bang" rewrites.
- Make targeted abstractions: extracting one component, composable, or service at a time.
- **Scope Safety**:
  - Do NOT change the DB schema (in AdonisJS).
  - Do NOT introduce new technical patterns or external NPM dependencies.
  - Do NOT reformat strictly unrelated code.

## 6. Key Actions & Clean Code
- **Simplification**: Extract helper methods, use early returns (guard clauses) to avoid deeply nested `if/else` statements.
- **Dead Code Eradication**: Remove unused imports, variables, unused CSS classes, console logs, and commented-out code blocks. 
- **Strong Typing**: Infer or define explicit TypeScript types/interfaces instead of using `any`.
