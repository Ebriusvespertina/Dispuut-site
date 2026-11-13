import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

const partnerItemSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

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
    partners: defineCollection({
      type: "data",
      source: "records/partners.yml",
      schema: z.object({
        hero: z.object({
          title: z.string(),
          subtitle: z.string(),
        }),
        benefits: z.object({
          title: z.string(),
          intro: z.string(),
          items: z.array(partnerItemSchema).default([]),
        }),
        lookingFor: z.object({
          title: z.string(),
          intro: z.string(),
          items: z.array(partnerItemSchema).default([]),
        }),
        partnersSection: z.object({
          title: z.string(),
          emptyState: z.object({
            title: z.string(),
            text: z.string(),
            link: z.string(),
            linkText: z.string(),
          }),
          items: z
            .array(
              z.object({
                name: z.string(),
                logo: z.string().optional(),
                url: z.string().optional(),
                description: z.string().optional(),
              }),
            )
            .default([]),
        }),
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
