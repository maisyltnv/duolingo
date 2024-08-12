import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",  // Path to your schema definition
    out: "./drizzle",          // Output folder for generated files (e.g., migrations)
    // driver: "pg",   
    dialect: "postgresql",         // Database dialect for PostgreSQL
    dbCredentials: {
        url: process.env.DATABASE_URL!, // Connection string from environment variables
    }
} satisfies Config;


