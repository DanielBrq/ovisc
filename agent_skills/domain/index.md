# Skill: Domain Rules & Invariants

## Description
Specifies non-negotiable business rules, data life cycles (soft-delete), and relational integrity constraints unique to this domain.

## Cases of Use
- **READ WHEN**: Modifying entity state (Client, Routine, Exercise), handling deletions, or creating complex relationships.
- **DO NOT READ WHEN**: Fixing UI bugs, styling components, or updating technical configuration.

---

# Domain Invariants

## 1. Routine Exclusivity
- **Rule**: A client can have multiple routines, but only **one** can be active.
- **Action**: Finalize the previous routine before activating a new one.

## 2. Metric Constraints
- **Rule**: `height` and `weight` are mandatory, positive numeric values.

## 3. Soft Delete Pattern
- **Rule**: Never use physical delete for business entities.
- **Action**: Set `isActive: false` and update `updatedBy`/`updatedAt`.

## 4. Audit Traceability
- **Entities**: All must have `createdBy`, `updatedBy`, `createdAt`, `updatedAt`.
- **Constraint**: Never modify without a valid `userId` or an entity `id`.
