---
title: "Install Pulsar OS"
description: "Everything you need to flash the ISO to a USB drive, plus notes about Secure Boot and dual boot."
order: 1
---

Installing Pulsar OS is a task a thousand times easier than installing Windows or macOS.

All you need is a USB drive (or storage memory) and a disk image flashing tool.

- If you come from another Linux distribution, we recommend that you **do not use Balena Etcher**. Use `gnome-disk-utility` instead.
- For Windows users or anything else, use dd


## Secure Boot

Our great friend Secure Boot, a Microsoft invention to prevent the installation of Linux at the hardware level. Obviously it has a security component too, but it is a big pain for Linux.

We are trying to implement support for Secure Boot. In the meantime, you will need to go into your device's BIOS and disable it. It is not a virus or danger: the only thing your computer will not do is check the integrity of your operating system before starting it, to avoid viruses. But Linux has fewer viruses than Windows, and Pulsar OS is 100% auditable.

**Search Google for specific instructions to know how to disable Secure Boot on your device model.** You can use the AI we have already prepared for you [here, thanks to Google AI Mode](https://www.google.com/search?q=vas+a+hacer+de+asistente+que+buscar%C3%A1+en+internet+y+explicar%C3%A1+al+usuario+como+desactivar+secure+boot+en+su+ordenador).

## Dual boot

