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
- **Services:** For abstracting complex business logic away from the controllers.

### Agent Directives for Backend
- Use native Adonis tools (Lucid, VineJS/Validators).
- Ensure generated code aligns with AdonisJS standard class-based syntax and ES modules.
- Do NOT introduce dependencies or structural patterns that conflict with the standard AdonisJS framework ecosystem.
