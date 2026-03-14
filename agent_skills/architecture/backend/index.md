# Skill: Architecture (Backend)

## Description
AdonisJS backend architecture: layers, routing, and API standards.

## Cases of Use
- **READ WHEN**: Working on AdonisJS controllers, services, repositories, models, or routing.
- **DO NOT READ WHEN**: Only touching frontend/UI or Nuxt composables.

---

# Implementation Protocol

The backend is built with **AdonisJS** and functions purely as an API.

## Core Philosophy
- **AdonisJS Native Architecture:** Fully adopt the framework's native backend tools and its own native architecture.
- Do not use custom complex hexagonal setups; rely on Adonis patterns.

## Key Tools & Standard Layers
- **Models & Database:** ALWAYS use **Lucid ORM** for database interactions and schema definitions.
  - **Reference:** [Lucid ORM Documentation](https://lucid.adonisjs.com/docs/introduction)
- **Controllers:** Responsible for handling routes, extracting requests, and returning JSON.
- **Services Layer (`/app/service`) & Repository Layer (`/app/repository`):**
  - **Services:** For abstracting complex business logic away from the controllers.
  - **Repositories:** Abstract database access and keep services focused purely on business logic.
  - **Import Strategy:** Both layers MUST export their contents through an `index.ts` file within their respective folders (e.g., `/app/service/index.ts` and `/app/repository/index.ts`) to facilitate and keep imports clean across the application.

## Routing & API Documentation
- **RESTful Standards:** Register controller routes following RESTful best practices (semantic HTTP verbs, pluralized resources, and clear path hierarchy).
- **Swagger Documentation:** All routes must be registered and documented in Swagger. Ensure `adonis-autoswagger` is utilized to maintain an up-to-date API contract.
- **Type-Safety:** Strictly follow AdonisJS type-safety patterns by using `#generated/controllers` to reference controller actions. Avoid using string-based controller references to benefit from compile-time checks.

## Agent Directives for Backend
- Use native Adonis tools (Lucid, VineJS/Validators).
- Ensure generated code aligns with AdonisJS standard class-based syntax and ES modules.
- Do NOT introduce dependencies or structural patterns that conflict with the standard AdonisJS framework ecosystem.