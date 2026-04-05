# Antigravity (Gemini) Execution Rules

This file contains rules specifically prioritized for Antigravity context.
It must be read alongside the shared rules in `AGENTS.md`.

## System Stability & UTF-8 Safety (CRITICAL)
The system has UTF-8 encoding instability.
You MUST:
- Avoid accented characters (á, é, í, ó, ú) IF they cause corruption. However, project language is Spanish, so use correct spelling when confident in encoding.
- Avoid ñ when it corrupts.
- Avoid special typographic characters.
- Do not introduce emojis.
- Do not use smart quotes.
If existing code contains UTF-8 characters, do not modify those lines unless required. Avoid outputting `` or any corrupted utf-8 character.

## Memory
You have access to Engram persistent memory via MCP tools (mem_save, mem_search, mem_session_summary, etc.).
- Save proactively after significant work — don't wait to be asked.
- After any compaction or context reset, call `mem_context` to recover session state before continuing.

## AI Agent Ecosystem
- Refer to `.agents/skills/` for specialized context before executing complex tasks.
- Refer to `.agents/rules/` for project-wide structural norms.
- Refer to `.agents/workflows/` for automated instructions and repeatable tasks.
