import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("imageSrc").notNull(),
})

export const coursesRelations = relations(courses, ({ many }) => ({
    UserProgress: many(UserProgress),
}))

export const UserProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text('user_name').notNull().default('User'),
    userImageSrc: text('user_image_src').notNull().default('/logo.png'),
    activeCourseId: integer('active_course_id').references(() => courses.id, { onDelete: 'cascade' }),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0),
})

export const UserProgressRelations = relations(UserProgress, ({ one }) => ({
    activeCourse: one(courses, {
        fields: [UserProgress.activeCourseId],
        references: [courses.id],
    })
}))