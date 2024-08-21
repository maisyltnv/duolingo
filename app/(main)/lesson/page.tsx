import { getLesson, getUserProgress } from '@/db/query'
import { redirect } from 'next/navigation';
import React from 'react'
import Quit from './quit';

const LessonPage = async () => {
    const lessonData = getLesson();
    const userProgressData = getUserProgress();

    const [
        lesson,
        userProgress
    ] = await Promise.all([lessonData, userProgressData]);

    if (!lesson || !userProgress) {
        redirect('/learn')
    }

    const initialPercentage = lesson.challenges.filter((challenge) => challenge.completed).length / lesson.challenges.length * 100;
    return (
        <div>
            <Quit
                initialLessonId={lesson.id}
                initialLessonChallenges={lesson.challenges}
                initialHearts={userProgress.hearts}
                initialPercentage={initialPercentage}
                userSubscription={undefined}
            />
        </div>
    )
}

export default LessonPage