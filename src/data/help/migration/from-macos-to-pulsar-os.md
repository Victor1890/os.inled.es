---
title: "From macOS to Pulsar OS (Bitten Fruit)"
description: "The differences between macOS and Pulsar OS Bitten Fruit — packages, clipboard, settings, menu bar and background apps."
order: 1
---

Leaving macOS to enter Linux, in this case with Pulsar OS, is the best decision you may have made. Below we explain the differences between the two systems.

> [!NOTE]
> This list is not complete, so we suggest you contribute to expanding it.

## Packages

On macOS the installation packages are PKG or DMG. On Pulsar OS, which is based on Debian, the packages are `.deb`. A `.deb` packages a set of files located in an internal structure that replicates the locations the developer wants them to have once installed.

There are also **Flatpaks**, isolated applications agnostic to the distro. Flathub is one of the largest Linux app stores, and Pulsar OS has it integrated into the App Store.

## Cut, copy and paste

On Mac, users are required to drag files to change their location. On Linux this can be done easily with the "cut" command (`Super + X`).

> [!WARNING]
> Keyboard shortcut remapping is not yet implemented.

## Settings app

The Pulsar OS Settings app differs slightly in appearance from that of macOS, but is equally similar and can be quickly adapted to. The most notable differences are the absence of colored icons or the absence of some sections that are not necessary in the environment used by Pulsar OS.

Another issue we are working on is not being able to authenticate with an Apple account (only Google and MS are available). That doesn't mean you can't search the internet for ways to sync with the account, but don't worry — we will add support soon.

## Menu bar

The menu bar is implemented in Pulsar OS, but with differences from the implementation Apple makes in macOS.

By decision of the foundation that develops the GNOME graphical environment and the GTK framework, applications do not export their menus via D-Bus, making it practically impossible to obtain the menus of an app. Likewise, the new Wayland window compositor (which replaces X11) prioritizes isolation and security, which makes the task more difficult.

But, in deference to users, we have added global menus to manage the window, so the adaptation will be simple.

## Apps in the background

When you close an app on Mac, it actually minimizes and stays in the background. On Linux and GNOME that is not normal behavior — when you close an app, it closes completely. This improves device performance while making app management easier.

> [!NOTE]
> Article in development.
