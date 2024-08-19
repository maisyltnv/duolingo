import FeedWrapper from '@/components/feed-wrapper'
import StrickyWrapper from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getUnits, getUserProgress } from '@/db/query'
import { redirect } from 'next/navigation'


const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const unitData = getUnits();
    const [
        userProgress, units
    ] = await Promise.all([
        userProgressData, unitData
    ]);

    if (!userProgress || !userProgress?.activeCourseId) {
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
                        {JSON.stringify(unit)}
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage