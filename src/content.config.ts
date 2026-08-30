import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const community = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/community" }),
    schema: z.object({
        type: z.enum(["error", "idea", "help", "roadmap", "task", "suggestion"]),
        title: z.string(),
        status: z.string().default("Open"),
        priority: z
            .enum(["low", "medium", "high", "critical"])
            .default("medium"),
        date: z.coerce.date().default(() => new Date()),
        url: z.string().url().optional(),
        difficulty: z.enum(["Easy", "Medium", "Hard", "Expert"]).optional(),
        roadmapPhase: z
            .enum(["Bitten Fruit Stable", "Tube OS", "Wintux", "General"])
            .optional(),
        benefit: z.string().optional(),
        cost: z.enum(["Low", "Medium", "High"]).optional(),
    }),
});

const people = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/people" }),
    schema: z.object({
        name: z.string(),
        note: z.string().default(""),
        date: z.coerce.date().default(() => new Date()),
    }),
});

const help = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/help" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        order: z.number().default(0),
        date: z.coerce.date().default(() => new Date()),
    }),
});

export const collections = { community, people, help };
