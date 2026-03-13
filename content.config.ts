import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    yeargroups: defineCollection({
      type: "page",
      source: "yeargroups/*.md",
      schema: z.object({
        year: z.number(),
        title: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
        groupPhoto: z.string().optional(),
        highlights: z.array(z.string()).default([]),
      }),
    }),
    members: defineCollection({
      type: "data",
      source: "records/members.yml",
      schema: z.object({
        members: z
          .array(
            z.object({
              firstName: z.string(),
              tussenvoegsel: z.string().optional().default(""),
              lastName: z.string(),
              year: z.number(),
              bakTime: z.number().optional().default(0),
              role: z.string().optional(),
              awards: z.array(z.string()).optional().default([]),
            }),
          )
          .default([]),
      }),
    }),
    siteStats: defineCollection({
      type: "data",
      source: "records/stats.yml",
      schema: z.object({
        totalActivities: z.number().default(0),
        totalBakken: z.number().default(0),
      }),
    }),
    siteNavigation: defineCollection({
      type: "data",
      source: "records/navigation.yml",
      schema: z.object({
        mainNav: z
          .array(
            z.object({
              to: z.string(),
              label: z.string(),
            }),
          )
          .default([]),
        footerNav: z
          .array(
            z.object({
              to: z.string(),
              label: z.string(),
            }),
          )
          .default([]),
      }),
    }),
  },
});
