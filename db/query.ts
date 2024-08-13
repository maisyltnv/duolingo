import db from '@/db/drizzle';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { cache } from "react";
import { UserProgress } from '@/db/schema';

export const getUserProgress = cache(async () => {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    const data = await db.query.UserProgress.findFirst({
        where: eq(UserProgress.userId, userId),
        with: {
            activeCourse: true
        }
    });
    return data
})

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();
    return data;
})

