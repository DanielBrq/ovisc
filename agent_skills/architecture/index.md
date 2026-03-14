# Skill: Architecture & Boundaries

## Description
Defines the project structure and communication rules between the Nuxt Frontend and the AdonisJS Backend. This skill is optimized for AI Agents (Gemini, Codex, etc.).

## Cases of Use
- **READ WHEN**: Adding a new module, creating an API route, or if unsure about where to put business logic.
- **DO NOT READ WHEN**: Making minor UI changes or simple bugfixes in existing logic.

---

# Implementation Protocol

The architecture is divided into two separate stacks: Frontend (Nuxt) and Backend (AdonisJS - API only). Agents must strictly adhere to the patterns specific to each stack.

## 1. Frontend: Nuxt Architecture

The frontend is a Nuxt application.

### Project Structure Principles
- **Separation by Entity:** Pages and composables are structured and grouped by business entity (e.g., `users`, `routines`).
- **Nesting:** Nested structures are used within entity folders to group related functionalities contextually.

### Composables Layer (`/composables`)
- **Role:** Handles purely frontend-specific functionality, reactivity, state, and UI logic.
- **Import Strategy:** 
  - Composables MUST ALWAYS export their contents through an `index.ts` file at their respective folder level. This ensures clean and easy imports across the app.

### Services Layer (`/services`)
- **Role:** A new dedicated layer (similar to Angular and purely separated from Composables) strictly to manage interaction with the AdonisJS Backend.
- **Responsibilities:** 
  - HTTP definitions and API fetching.
  - Parsing backend responses.
- **Rule:** Composables and Pages must use `/services` to get external data, never directly using raw fetch in UI components.

### Presentation (`/pages`)
- **Role:** Pages structure follows the same entity-based and nested separation as the composables.

### Interactive UI & Performance Best Practices

#### 1. Correct Use of Composables
- **Stateless vs Stateful:** Use composables for logic that is either pure utility (stateless) or manages lifecycle-bound state (stateful). Avoid global side effects inside composables unless explicitly designed for shared state.
- **Cleanup:** Always use `onUnmounted` or `onScopeDispose` to clean up timers, event listeners, or manual DOM references to prevent memory leaks in long-lived sessions.

#### 2. Pinia vs. ref
- **Pinia:** Reserved for **Global Application State** that must persist across routes or be accessed by detached components (e.g., User Session, Global Notifications, Cart).
- **Ref/Reactive:** Preferred for **UI/Local State** (e.g., `isModalOpen`, `searchQuery`, `formErrors`). If the state dies with the component, use `ref`.

#### 3. shallowRef vs. ref
- **shallowRef:** Use for large immutable datasets or complex objects where you only replace the top-level value (e.g., API responses for lists, chart instances). This avoids the heavy proxy overhead of deep reactivity.
- **ref:** Use when you need to mutate nested properties and have the UI react automatically.

#### 4. Hydration & Islands
- **Deferred Hydration:** Prioritize initial content. Use Nuxt `Lazy` prefix (`<Lazy... />`) or third-party hydration delayers for heavy components below the fold or non-critical for SEO (e.g., complex dashboards, feedback forms).
- **Island Architecture:** Use `Nuxt Islands` for static content that requires no JS on the client, isolating interactivity only where needed to reduce the final bundle size.

---

## 2. Backend: AdonisJS (API Only)

The backend is built with **AdonisJS** and functions purely as an API. 

### Core Philosophy
- **AdonisJS Native Architecture:** Fully adopt the framework's native backend tools and its own native architecture. 
- Do not use custom complex hexagonal setups; rely on Adonis patterns.

### Key Tools & Standard Layers
- **Models & Database:** ALWAYS use **Lucid ORM** for database interactions and schema definitions.
  - **Reference:** [Lucid ORM Documentation](https://lucid.adonisjs.com/docs/introduction)
- **Controllers:** Responsible for handling routes, extracting requests, and returning JSON.
- **Services Layer (`/app/service`) & Repository Layer (`/app/repository`):**
  - **Services:** For abstracting complex business logic away from the controllers.
  - **Repositories:** Abstract database access and keep services focused purely on business logic.
  - **Import Strategy:** Both layers MUST export their contents through an `index.ts` file within their respective folders (e.g., `/app/service/index.ts` and `/app/repository/index.ts`) to facilitate and keep imports clean across the application.

### Routing & API Documentation
- **RESTful Standards:** Register controller routes following RESTful best practices (semantic HTTP verbs, pluralized resources, and clear path hierarchy).
- **Swagger Documentation:** All routes must be registered and documented in Swagger. Ensure `adonis-autoswagger` is utilized to maintain an up-to-date API contract.
- **Type-Safety:** Strictly follow AdonisJS type-safety patterns by using `#generated/controllers` to reference controller actions. Avoid using string-based controller references to benefit from compile-time checks.

### Agent Directives for Backend
- Use native Adonis tools (Lucid, VineJS/Validators).
- Ensure generated code aligns with AdonisJS standard class-based syntax and ES modules.
- Do NOT introduce dependencies or structural patterns that conflict with the standard AdonisJS framework ecosystem.
