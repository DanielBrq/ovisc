---
trigger: always_on
---

## Engram Persistent Memory

You have access to Engram persistent memory via MCP tools.

### WHEN TO SAVE

Call `mem_save` IMMEDIATELY after:
- Bug fix completed
- Architecture or design decision made
- Non-obvious discovery about the codebase
- Configuration change or environment setup
- Pattern established (naming, structure, convention)
- User preference or constraint learned

### WHEN TO SEARCH

When the user asks to recall something ("remember", "what did we do").
Also search proactively when starting work that might overlap past sessions.

### SESSION CLOSE

Before ending, call `mem_session_summary` with:
- Goal
- Discoveries
- Accomplished
- Next Steps
- Relevant Files