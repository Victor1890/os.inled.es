---
title: "Sayri Subagents Specification (JSON Profiles)"
description: "How to define, configure, and manage autonomous subagent profiles and their sandbox isolation policies in Sayri."
order: 4
---

# Sayri Subagents Specification

In Sayri, a **Subagent** is an autonomous AI worker instance configured with its own system prompt, isolated model parameters, fine-grained **Bubblewrap sandbox policy**, and allowed tools/skills.

Subagent profiles are stored persistently as JSON files under:
```text
~/.config/sayri/agents/<agent-id>.json
```

---

## 1. Agent Profile JSON Schema

Below is the complete specification for a subagent definition:

```json
{
  "id": "code-debugger",
  "name": "Code Debugger & Tester",
  "description": "Autonomous Python and Rust code analyzer running in isolated Bubblewrap sandbox.",
  "system_prompt": "You are a code debugging subagent. When given code or error tracebacks, isolate issues, generate tests, and verify outputs inside your sandbox.",
  "model": {
    "provider": "default",
    "model_name": "mistral-small-latest",
    "base_url": null,
    "api_key": null,
    "temperature": 0.2,
    "max_tokens": 4096
  },
  "sandbox": {
    "level": "LEVEL_2_ISOLATED_DEV",
    "timeout_seconds": 30,
    "isolated_dir": "~/.local/share/sayri/sandboxes/code-debugger",
    "allow_network": false,
    "allowed_binaries": ["python3", "pytest", "rustc", "cargo"],
    "blocked_binaries": ["dd", "mkfs", "shutdown", "reboot", "rm"]
  },
  "allowed_skills": [
    "sayri-skill-web-search"
  ],
  "allowed_tools": [
    "bash",
    "read_file",
    "write_file"
  ],
  "is_builtin": false
}
```

---

## 2. Configuration Fields Reference

### Model Settings (`model`)
- **`provider`**: Model provider client (`default`, `openai`, `groq`, `ollama`, `openrouter`).
- **`model_name`**: LLM identifier (e.g. `mistral-small-latest`, `llama-3.3-70b-versatile`, `gpt-4o`).
- **`temperature`**: Sampling temperature (`0.0` to `1.0`). Use lower values (`0.1`–`0.3`) for deterministic code generation.

### Sandbox Isolation Settings (`sandbox`)
- **`level`**:
  - `LEVEL_0_NO_EXEC`: Total prohibition of commands.
  - `LEVEL_1_READONLY`: Read-only host filesystem (`/`), ephemeral `/tmp`.
  - `LEVEL_2_ISOLATED_DEV`: Read-only system root, private read-write workspace in `~/.local/share/sayri/sandboxes/<id>`.
  - `LEVEL_3_HOST_USER`: Host user permissions (`$HOME`).
  - `LEVEL_4_HOST_ROOT`: Elevated via Polkit graphical confirmation (`pkexec`).
- **`allow_network`**: `true` or `false` (uses `--unshare-net` in Bubblewrap).
- **`timeout_seconds`**: Maximum process execution runtime before automatic SIGKILL.
- **`blocked_binaries`**: Array of banned command names intercepted prior to execution.

---

## 3. Managing Subagents via UI Cajita

You can manage agents graphically from the Sayri Cajita widget:
1. Press the Sayri hotkey or tray indicator to open **Cajita**.
2. Switch to the **Agents** tab.
3. Click **+ New Subagent** to declare its name, system prompt, model, and sandbox level.
4. Existing subagents can be inspected, tested, or deleted with one click.
