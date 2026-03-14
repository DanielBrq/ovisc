# Skill: Architecture (Frontend)

## Description
Nuxt frontend architecture: structure, composables, services, UI performance, and form validation practices.

## Cases of Use
- **READ WHEN**: Working on Nuxt pages, composables, services, or performance/UI concerns.
- **DO NOT READ WHEN**: Only touching backend/API or infrastructure.

---

# Implementation Protocol

The frontend is a Nuxt application.

## Project Structure Principles
- **Separation by Entity:** Pages and composables are structured and grouped by business entity (e.g., `users`, `routines`).
- **Nesting:** Nested structures are used within entity folders to group related functionalities contextually.

## Composables Layer (`/composables`)
- **Role:** Handles purely frontend-specific functionality, reactivity, state, and UI logic.
- **Import Strategy:**
  - Composables MUST ALWAYS export their contents through an `index.ts` file at their respective folder level. This ensures clean and easy imports across the app.

## Services Layer (`/services`)
- **Role:** A new dedicated layer (similar to Angular and purely separated from Composables) strictly to manage interaction with the AdonisJS Backend.
- **Responsibilities:**
  - HTTP definitions and API fetching.
  - Parsing backend responses.
- **Rule:** Composables and Pages must use `/services` to get external data, never directly using raw fetch in UI components.

## Presentation (`/pages`)
- **Role:** Pages structure follows the same entity-based and nested separation as the composables.

## Interactive UI & Performance Best Practices

### 1. Correct Use of Composables
- **Stateless vs Stateful:** Use composables for logic that is either pure utility (stateless) or manages lifecycle-bound state (stateful). Avoid global side effects inside composables unless explicitly designed for shared state.
- **Cleanup:** Always use `onUnmounted` or `onScopeDispose` to clean up timers, event listeners, or manual DOM references to prevent memory leaks in long-lived sessions.

### 2. Pinia vs. ref
- **Pinia:** Reserved for **Global Application State** that must persist across routes or be accessed by detached components (e.g., User Session, Global Notifications, Cart).
- **Ref/Reactive:** Preferred for **UI/Local State** (e.g., `isModalOpen`, `searchQuery`, `formErrors`). If the state dies with the component, use `ref`.

### 3. shallowRef vs. ref
- **shallowRef:** Use for large immutable datasets or complex objects where you only replace the top-level value (e.g., API responses for lists, chart instances). This avoids the heavy proxy overhead of deep reactivity.
- **ref:** Use when you need to mutate nested properties and have the UI react automatically.

### 4. Hydration & Islands
- **Deferred Hydration:** Prioritize initial content. Use Nuxt `Lazy` prefix (`<Lazy... />`) or third-party hydration delayers for heavy components below the fold or non-critical for SEO (e.g., complex dashboards, feedback forms).
- **Island Architecture:** Use `Nuxt Islands` for static content that requires no JS on the client, isolating interactivity only where needed to reduce the final bundle size.

### 5. SSR, Caching & Performance Modus Operandi
- **Default SSR in Production:** Use SSR for fast first render and SEO. Interactivity is preserved via hydration. Avoid SSR only for routes/components that are explicitly client-only.
- **Dev vs Prod SSR:** It is acceptable to disable SSR in development to avoid hydration mismatch noise. In production, SSR should be enabled for performance and perceived speed.
- **Route Rules (Caching):**
  - **Frequent routes:** Use `swr` (stale-while-revalidate) to serve cached HTML quickly and refresh in the background.
  - **Infrequent routes:** Avoid prefetch, and consider SSR-only without prefetch or even CSR if truly non-critical.
- **Selective Hydration:**
  - Use `Lazy` components and `v-if` to load interactive pieces only when needed (e.g., modals, admin tools).
  - Wrap browser-only components in `<ClientOnly>` or use `.client.vue` suffix.
- **Prefetch Strategy:**
  - **High-frequency routes:** Enable `prefetch` on visible links.
  - **Low-frequency routes:** Do not prefetch to reduce initial bandwidth.
- **LCP Focus:** The LCP element should be lightweight and avoid expensive CSS (e.g., heavy blur) on first paint.

### 6. Formularios (Vee-Validate + Valibot)
- **Fuente única de validación:** define esquemas con Valibot en un lugar central (por ejemplo `schemas/` o `composables/validators`) y reutilízalos en Vee-Validate mediante el adaptador oficial de Valibot. No dupliques reglas en el template.
- **Coherencia de UI:** mantén la misma estructura de `values`/`errors` en todo el flujo del formulario y evita transformar datos en medio de la validación.
- **Validación UX:** valida en `onBlur`/`onChange` para campos críticos y en `onSubmit` para el resto. Evita validar todo en cada keystroke si el formulario es grande.
- **Mensajes y mapeo:** centraliza mensajes y mapea errores de backend a campos con `setFieldError`/`setErrors`. No muestres mensajes crudos del API sin normalizar.
- **Async checks:** para validaciones remotas, usa reglas async con `debounce` para no saturar el backend.