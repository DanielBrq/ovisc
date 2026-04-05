# Skill: ui-tailwind

## Description
Defines the UI styling rules for the Nuxt frontend, focusing on Tailwind CSS, component design, and responsiveness (mobile-first).

## Cases of Use
- **READ WHEN**: Making UI changes, adding new components, or styling pages.
- **DO NOT READ WHEN**: Modifying backend logic or database schemas.

---

# UI Styling Rules

## 1. Tailwind CSS & Design System
- **Framework**: Use **Tailwind CSS** for all styling.
- **Design Philosophy**: "Clean & Modern". Avoid heavy shadows, excessive borders, or outdated UI patterns.
- **Spacing**: Use `gap-x` and `gap-y` for consistent spacing between elements.
- **Responsiveness**:
  - Mobile-first approach: Define mobile styles first, then override for larger screens (`md:`, `lg:`).
  - Use `flex-col` for vertical layouts on mobile and `flex-row` for horizontal layouts on desktop.

## 2. Component Design
- **Reusability**: Create components in `/components/ui` for generic UI elements (Buttons, Inputs, Cards).
- **Entity Grouping**: Create components in `/components/{entity}` for entity-specific UI.
- **Props**: Use `defineProps` with TypeScript interfaces.
- **Events**: Use `defineEmits` for component communication.

## 3. Styling Patterns
- **Buttons**:
  - Primary: `bg-blue-600 hover:bg-blue-700 text-white`
  - primary: `bg-gray-200 hover:bg-gray-300 text-gray-800`
- **Inputs**:
  - `border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent`
- **Cards**:
  - `bg-white rounded-lg shadow-sm border border-gray-200 p-4`
- **mobile-first**:
  - format classes in groups ordered by screen size (more than one line): 
    - base (mobile)
    - md (tablet)
    - lg (desktop)
    - xl (large desktop)
    - 2xl (extra large desktop)
    - hovers
    - focus
    - active
    - disabled
  - exception: 
    - If the class is short (one line), it can be written grouped from left to right.

## 4. Components optimization
- If some component or page behavior could be solved by tailwind classes (like animations, transitions, etc), we'll prefer to use them instead of javascript logic.
- Also could use transition provided by nuxt.

## 5. Forbidden Patterns
- **Do NOT** use inline styles (`style="..."`).
- **Do NOT** use global CSS files for component-specific styles.
- **Do NOT** use `!important` tags.
- **Do NOT** use outdated CSS frameworks (Bootstrap, Foundation, etc.).