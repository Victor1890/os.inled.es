---
title: "Developer Environment Setup"
description: "How to set up your environment to develop apps, build the ISO, or test packages for Pulsar OS."
order: 2
---

This guide covers everything you need to start contributing code to Pulsar OS — from setting up your dev environment to building packages and the ISO.

## Prerequisites

Before you begin, make sure you have:

- **Git** installed
- **GitHub account** with [2FA enabled](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa)
- **Discord account** (for community communication)
- Basic knowledge of Debian packaging (`.deb`) or Arch packaging (`PKGBUILD`)

## Repository structure

Pulsar OS is organized across several repositories:

| Repository | Purpose |
|---|---|
| [PKG](https://github.com/Inled-Pulsar-OS/PKG) | All packages (Debian `.deb` + Arch `PKGBUILD`) |
| [ISO](https://github.com/Inled-Pulsar-OS/ISO) | ISO builder and boot assets |
| [DOCS](https://github.com/Inled-Pulsar-OS/DOCS/wiki) | User-facing documentation wiki |

The **PKG** repository is where most development happens. Each package lives in its own directory.

## Setting up the PKG development environment

### On Debian/Ubuntu

```bash
# Install build dependencies
sudo apt update
sudo apt install git dpkg-dev fakeroot python3

# Clone the repository
git clone https://github.com/Inled-Pulsar-OS/PKG.git
cd PKG
```

### On Arch Linux

```bash
# Install build dependencies
sudo pacman -S git base-devel python

# Clone the repository
git clone https://github.com/Inled-Pulsar-OS/PKG.git
cd PKG
```

## Package structure

Every package in PKG follows this structure:

```
pulsaros-<name>/
├── DEBIAN/
│   └── control          # Package metadata (name, version, dependencies)
├── prepare-assets.sh    # Optional: build hook run before packaging
├── usr/                 # Files installed to /usr
│   ├── bin/             # Executables
│   ├── share/           # Data files, themes, icons
│   └── lib/             # Libraries
└── etc/                 # System configuration files
```

The `DEBIAN/control` file is the most important. Example:

```
Package: pulsaros-example
Version: 1.0.0
Architecture: all
Maintainer: Jaime <info@inled.es>
Description: Example package for Pulsar OS
Depends: gnome-shell (>= 45)
Replaces: some-old-package
Conflicts: conflicting-package
```

### Arch Linux packages

Arch packages live in `arch/pkgbuilds/` and follow standard `PKGBUILD` format:

```
arch/pkgbuilds/pulsaros-<name>/
└── PKGBUILD
```

## Building a package locally

### Debian (.deb)

```bash
# From the PKG root directory
./package-and-deploy.sh pulsaros-<name>
```

This will:
1. Run `prepare-assets.sh` if it exists
2. Build the `.deb` with `dpkg-deb`
3. Output to `build/pulsaros-<name>.deb`

### Arch (.pkg.tar.zst)

```bash
cd arch/pkgbuilds/pulsaros-<name>
makepkg -sf
```

## Testing packages

### Quick test with scripts

```bash
# Test apps in a simulated environment
./test-apps.sh

# Test the welcome app in a chroot
./test-in-chroot.sh

# Test boot sound
./test-bootsound.sh
```

### Full test with QEMU

The ISO repository includes a QEMU runner for fast testing without building a full ISO:

```bash
cd ../ISO

# Build a minimal rootfs (much faster than full ISO)
./build-iso.sh --local

# Boot it in QEMU
./run-qemu.sh
```

This boots the rootfs using 9pfs, so changes are instant — no need to rebuild the ISO every time.

## Building the ISO

Building a full ISO takes longer but gives you a bootable image:

```bash
cd ../ISO

# Debian with GRUB
./build-iso.sh --arch amd64 --grub

# Arch with rEFInd
./build-iso.sh --arch amd64 --refind --branch rolling

# With NVIDIA drivers
./build-iso.sh --arch amd64 --grub --nvidia
```

Build outputs go to `build/` and are uploaded to GitHub Releases by CI.

## Submitting a pull request

### Workflow

1. **Fork** the PKG repository on GitHub
2. **Create a branch** for your changes:
   ```bash
   git checkout -b fix/spotlight-css-loading
   ```
3. **Make your changes** following the package structure above
4. **Test locally** using the scripts above
5. **Commit** with a descriptive message:
   ```bash
   git commit -m "fix(spotlight): CSS loading on Wayland"
   ```
6. **Push** and open a Pull Request

### PR requirements

- **Bilingual comments**: All code comments must be in both English and Spanish
- **Tested**: Every PR must pass testing before submission
- **Single package per PR**: Keep PRs focused on one package
- **Version bump**: If you changed functionality, bump the version in `DEBIAN/control`

### Code review

All PRs are reviewed by a maintainer before merging. Be responsive to feedback — we're here to help, not to gatekeep.

## Picking up community tasks

Check the [Project Board](https://github.com/orgs/Inled-Pulsar-OS/projects/1) for tasks marked for the community. Each task has:

- **Difficulty**: Easy, Medium, Hard, or Expert
- **Roadmap Phase**: Which phase it belongs to (Bitten Fruit, Tube OS, Wintux)
- **Acceptance Criteria**: What "done" looks like

To pick up a task:
1. Find a task in the **Community Tasks** view
2. Comment on the issue saying you'd like to work on it
3. A maintainer will assign it to you
4. Start working and submit a PR when ready

## Getting help

- **Discord**: [link.inled.es/discord](https://link.inled.es/discord) — best for quick questions
- **GitHub Issues**: For bug reports and feature requests
- **Project Board**: [github.com/orgs/Inled-Pulsar-OS/projects/1](https://github.com/orgs/Inled-Pulsar-OS/projects/1)

We are a friendly community. Don't be afraid to ask questions — there are no stupid questions, only the ones you don't ask.
