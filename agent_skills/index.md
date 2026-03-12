# Agent Skills Registry

This is the main entry point for all specialized agent skills. **DO NOT** read these skills unless the current task explicitly matches the "Case of Use" described below. 

## Mandatory Rules
- **[rules.md](./rules.md)**: **REQUIRED**. Always read this file first. It contains core execution rules and system constraints.

## Specialized Skills

| Skill | Path | Description | Case of Use (Read when...) |
| :--- | :--- | :--- | :--- |
| **Architecture** | [architecture/index.md](./architecture/index.md) | Defines layers and boundaries. | Implementing new entities, API routes, or changing project structure. |
| **Domain Rules** | [domain/index.md](./domain/index.md) | Business invariants and soft-delete logic. | Creating/Updating clients, routines, or exercises. |
| **Refactoring** | [refactoring/index.md](./refactoring/index.md) | Protocols for code cleanup and optimization. | The task explicitly asks for cleanup, refactor, or optimization. |
| **Security** | [security/index.md](./security/index.md) | OWASP Top 10 and vulnerability audit. | Performing a security audit or handling sensitive data (auth/tokens). |

## External & Global Framework Skills
Additional specialized skills for frameworks (**Nuxt**, **Vue**, etc.) are available in the system-level `skills/` directory.

- **Note**: Only consult these external skills if the task involves complex framework-specific patterns or troubleshooting.
- **Access**: Check the global environment if specialized framework knowledge is required beyond the local rules.

---

### How to use this registry:
1. Identify if your task falls into one of the specialized categories.
2. Only `view_file` the specific `index.md` for that category if necessary.
3. If the task is a simple bugfix or UI tweak, `rules.md` is usually enough.
