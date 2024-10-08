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
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);


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


        await db.insert(schema.units).values([
            {
                id: 1,
                title: "Unit 1",
                description: "Unit 1 description",
                courseId: 1,
                order: 1,
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id: 1,
                title: "Noun1",
                unitId: 1,
                order: 1,
            },
            {
                id: 2,
                title: "Verbs",
                unitId: 1,
                order: 2,
            },
            {
                id: 3,
                title: "Pronouns",
                unitId: 1,
                order: 3,
            },
            {
                id: 4,
                title: "Adverbials",
                unitId: 1,
                order: 4,
            },
            {
                id: 5,
                title: "Adjectives",
                unitId: 1,
                order: 5,
            },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man"',
            },

        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imageSrc: "/man.png",
                correct: true,
                text: "The man",
                audioSrc: "/man.mp3",
            },
            {
                id: 2,
                challengeId: 1,
                imageSrc: "/woman.png",
                correct: true,
                text: "The Woman",
                audioSrc: "/woman.mp3",
            },
            {
                id: 3,
                challengeId: 1,
                imageSrc: "/robot.png",
                correct: true,
                text: "The robot",
                audioSrc: "/robot.mp3",
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
