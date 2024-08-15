import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

// Initialize the drizzle instance with schema
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding the database");

        // Delete all existing records in the tables
        await db.delete(schema.courses);
        await db.delete(schema.UserProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        // Insert new records into the courses table
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Vietnamese",
                imageSrc: "/vietFlag.png"
            },
            {
                id: 2, // Ensure unique ID is provided
                title: "Lao",
                imageSrc: "/laoFlag.png"
            },
            {
                id: 3, // Ensure unique ID is provided
                title: "English",
                imageSrc: "/engFlag.png"
            },
        ]);

        // Insert new records into the units table
        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "test unit",
                description: "Learn the basics of the Vietnamese",
                order: 1,
            },
        ]);

        console.log("Seeding finished successfully");

    } catch (error) {
        console.error("Error occurred during seeding:", error);
        throw new Error("Failed to seed the database");
    }
};

main().catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1); // Exit with a failure code
});
