import { relations } from "drizzle-orm";
import { boolean, integer, pgEnum, pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("imageSrc").notNull(),
})

export const coursesRelations = relations(courses, ({ many }) => ({
    UserProgress: many(UserProgress),
    units: many(units),
}))

export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("title").notNull(),
    courseId: integer("course_id").notNull().references(() => courses.id, { onDelete: 'cascade' }),
    order: integer("order").notNull(),
})

export const unitsRelations = relations(units, ({ many, one }) => ({
    course: one(courses, {
        fields: [units.courseId],
        references: [courses.id],
    }),
    lessons: many(lessons),
}))


export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    unitId: integer("unit_id").notNull().references(() => units.id, { onDelete: 'cascade' }),
    order: integer("order").notNull(),
})


export const lessonsRelations = relations(lessons, ({ one, many }) => ({
    unit: one(units, {
        fields: [lessons.unitId],
        references: [units.id],
    }),
    challenges: many(challenges),
}))

export const challengesEnum = pgEnum("type", ["SELECT", "ASSET"]);

export const challenges = pgTable("lessons", {
    id: serial("id").primaryKey(),
    lessonId: integer("lesson_id").notNull().references(() => lessons.id, { onDelete: 'cascade' }),
    type: challengesEnum("type").notNull(),
    question: text("question").notNull(),
    order: integer("order").notNull(),
})

export const challengeRelations = relations(challenges, ({ one, many }) => ({
    lesson: one(lessons, {
        fields: [challenges.lessonId],
        references: [lessons.id],
    }),
    challengeOptions: many(challengeOptions),
    challengeProgress: many(challengeProgress),
}))


export const challengeOptions = pgTable("challenge_options", {
    id: serial("id").primaryKey(),
    chalengeId: integer("chalenge_id").notNull().references(() => challenges.id, { onDelete: 'cascade' }),
    text: text("text").notNull(),
    correct: boolean("isCorrect").notNull(),
    imageSrc: text("imageSrc"),
    audioSrc: text("audioSrc"),
})

export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeOptions.chalengeId],
        references: [challenges.id],
    }),
}))


export const challengeProgress = pgTable("challenge_progress", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    challengeId: integer("challenge_id").notNull().references(() => challenges.id, { onDelete: 'cascade' }),
    completed: boolean("completed").notNull(),
})


export const challengeProgressReslations = relations(challengeProgress, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeProgress.challengeId],
        references: [challenges.id],
    }),
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