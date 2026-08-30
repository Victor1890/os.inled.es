const SITE_URL = "https://os.inled.es";
const LOGO_URL = "https://hosted.inled.es/pulsar-logo-simple-sf.png";
const OG_IMAGE = "https://os.inled.es/demopear1.png";

export const SEO = {
  site: {
    name: "Pulsar OS",
    url: SITE_URL,
    logo: LOGO_URL,
    image: OG_IMAGE,
  },
  pages: {
    index: {
      title: "Pulsar OS — The True Replacement for Mac, Windows and much more!",
      description:
        "The Linux distribution that includes editions to replicate the UI and UX of each of the most famous operating systems. You will feel at home.",
      keywords:
        "linux, macos replacement, windows alternative, open source operating system, pulsar os, Bitten Fruit, wintux, auditable linux, pear os, winux, linuxfx, zorin os, gnome, elementary os",
      og: {
        title: "Discover Pulsar OS! The True Replacement for your operative systems",
        description:
          "And join our community, together we can make the best Linux operating system.",
      },
    },
    "bitten-fruit": {
      title: "PulsarOS Bitten Fruit | It's time to replace Mac | Linux Distro",
      description:
        "It is like Mac in everything: from the appearance to the flow of use. This really is an alternative!",
      keywords:
        "macos linux, macos clone, Bitten Fruit, arch linux desktop, debian desktop, linux macos alternative, auditable linux, pear os, pear os nicec0re, elementary os",
      og: {
        title: "Switch from MacOS to Linux the easy way | Discover Bitten Fruit from Pulsar OS",
        description:
          "It is like Mac in everything: from the appearance to the flow of use. This really is an alternative!",
      },
    },
    iso: {
      title: "Download the ISO — Pulsar OS",
      description:
        "Minimum requirements, editions, boot variants, installers and flashing instructions for Pulsar OS. Read this before downloading the ISO.",
      keywords:
        "pulsar os iso, download linux iso, pulsar os download, Bitten Fruit iso, linux flash usb, pulsar os requirements",
      og: {
        title: "It's time to download! Here are the ISO's for Pulsar OS",
        description:
          "Minimum requirements, editions, boot variants, installers and flashing instructions for Pulsar OS. Read this before downloading the ISO.",
      },
    },
    community: {
      title: "We are a community | Meet Pulsar OS",
      description:
        "Join the Pulsar OS community. Report bugs, share ideas, ask for help, and help us build an auditable, community-driven operating system.",
      keywords:
        "pulsar os community, linux community, open source community, report bug linux, linux ideas, contribute to pulsar os",
      og: {
        title: "Join our community and see more | Pulsar OS",
        description:
          "Join the Pulsar OS community. Report bugs, share ideas, ask for help, and help us build an auditable, community-driven operating system.",
      },
    },
    help: {
      title: "Help & Documentation — Pulsar OS",
      description:
        "Guides to install, use and contribute to Pulsar OS. From flashing the ISO to migrating from macOS, everything you need to get started.",
      keywords:
        "pulsar os help, pulsar os docs, pulsar os install, pulsar os guide, linux documentation, install pulsar os",
      og: {
        title: "Help & Documentation — Pulsar OS",
        description:
          "Guides to install, use and contribute to Pulsar OS. From flashing the ISO to migrating from macOS, everything you need to get started.",
      },
    },
    resources: {
      title: "Resources — Pulsar OS",
      description:
        "Download banners, logos and media assets to share Pulsar OS on social media. Tag us and get on the Wall of Fame.",
      keywords:
        "pulsar os resources, pulsar os banners, pulsar os logos, share pulsar os, social media assets",
      og: {
        title: "Resources — Pulsar OS",
        description:
          "Download banners, logos and media assets to share Pulsar OS on social media.",
      },
    },
  },
} as const;

export type PageKey = keyof typeof SEO.pages;
