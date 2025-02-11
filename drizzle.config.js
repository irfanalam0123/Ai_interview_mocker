import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql" | "turso" | "singlestore"
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_l1OhKstkFeM7@ep-holy-sound-a8l5yhml-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
});
