import FeedWrapper from '@/components/feed-wrapper'
import StrickyWrapper from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getUserProgress } from '@/db/query'
import { redirect } from 'next/navigation'


const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const [userProgress] = await Promise.all([userProgressData])

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

            </FeedWrapper>
        </div>
    )
}

export default LearnPage