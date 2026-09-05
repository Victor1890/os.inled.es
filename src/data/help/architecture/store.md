---
title: "Pulsar Store Ecosystem & Security Pipeline"
description: "Architecture of Pulsar Store: Issue-Ops, OpenCode AI Security Shield, VirusTotal, and Universal CLI Helper."
order: 3
---

# 🌌 Pulsar Store & Security Shield Architecture

The **Pulsar Store** is the unified software distribution platform for Pulsar OS, hosting **Flatpak Applications**, **GNOME Shell Extensions**, and **Sayri AI Skills & Plugins**.

---

## 🚀 1. Issue-Ops Submission Workflow

Developers submit packages by simply opening an Issue on GitHub:
- **`submit-app.yml`**: Flatpak applications (`.flatpak` / `.flatpakref`).
- **`submit-extension.yml`**: GNOME Shell extensions (`.zip` with `metadata.json` and `extension.js`).
- **`submit-skill.yml`**: Sayri AI Skills (`.zip` with `SKILL.md`, `scripts/`, `requirements.txt`).
- **`submit-plugin.yml`**: Sayri Gateways (`.zip` with `plugin.yaml`).

---

## 🛡️ 2. OpenCode + VirusTotal Security Pipeline

When an Issue is opened, GitHub Actions launches `scripts/audit.js`:

```mermaid
sequenceDiagram
    participant Dev as Developer / Contributor
    participant GH as GitHub Issue
    participant VT as VirusTotal API v3
    participant OC as OpenCode (Groq Llama 3.3 70B)
    participant Cat as Pulsar Catalog (index.json)

    Dev->>GH: Opens Issue with package archive & metadata
    GH->>GH: Posts live interactive progress table
    GH->>VT: Scans binary / package hash
    alt VirusTotal Detection >= 1
        VT-->>GH: ❌ Malicious detected -> Auto-reject & close
    else VirusTotal Clean (0 detections)
        VT-->>GH: ✅ Verified Clean
        GH->>OC: Semantic AI code audit with official guidelines
        alt OpenCode flags malicious behavior
            OC-->>GH: ❌ Security violation -> Auto-reject & close
        else OpenCode Approves (Score >= 70)
            OC-->>GH: ✅ Verified Safe & Compatible
            GH->>Cat: Commits package & updates schema/index.json + CATALOG.md
            GH-->>Dev: 🎉 Auto-published with full Security Report!
        end
    end
```

---

## ⚡ 3. Universal CLI Helper (`pulsar-store`)

Users can manage all 4 ecosystems with a single CLI command:

```bash
# Check updates across Flatpaks, GNOME Extensions, and Sayri Skills/Plugins
pulsar-store check

# Batch update all packages
pulsar-store update

# 1-Click install
pulsar-store install <package-id>
```
