import FeedWrapper from '@/components/feed-wrapper'
import StrickyWrapper from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from '@/db/query'
import { redirect } from 'next/navigation'
import Unit from './unit'
import { lessons, units as unitsChema } from '@/db/schema'


const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitData = getUnits();
    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage
    ] = await Promise.all([
        userProgressData, unitData, courseProgressData, lessonPercentageData
    ]);

    if (!userProgress || !userProgress?.activeCourseId) {
        redirect('/courses')
    }

    if (!courseProgress) {
        redirect('/courses')
    }
    const activeCourse = userProgress.activeCourse || { id: 0, title: 'Unknown Course', imageSrc: '' };

    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>

            <StrickyWrapper>
                <UserProgress
                    activeCourse={activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false} />
            </StrickyWrapper>

            <FeedWrapper>
                <Header title={activeCourse.title} />
                {units.map((unit) => (
                    <div key={unit.id}>

                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress?.activeLesson as typeof lessons.$inferInsert & {
                                unit: typeof unitsChema.$inferInsert;
                            } | undefined}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage