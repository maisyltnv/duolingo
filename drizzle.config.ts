import "dotenv/config";
import type { Config } from "drizzle-kit";

const config: Config = {
    schema: "./db/schema.ts",  // Path to your schema definition
    out: "./drizzle",          // Output folder for generated files (e.g., migrations)
    driver: "pg",              // The database driver for PostgreSQL
    dialect: "pg",             // Database dialect for PostgreSQL
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!, // Connection string from environment variables
    }
};

export default config;
