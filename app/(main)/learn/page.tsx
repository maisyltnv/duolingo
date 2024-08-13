import FeedWrapper from '@/components/feed-wrapper'
import StrickyWrapper from '@/components/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/user-progress'
import { getUserProgress } from '@/db/query'
import { redirect } from 'next/navigation'


const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const [
        userProgress
    ] = await Promise.all([
        userProgressData
    ])

    if (!userProgress) {
        redirect('/courses')
    }
        return (
            <div className='flex flex-row-reverse gap-[48px] px-6'>
                <StrickyWrapper>
                    <UserProgress
                        activeCourse={{ title: "Vietnamese", imageSrc: "/vietFlag.png" }}
                        hearts={5}
                        points={100}
                        hasActiveSubscription={false} />
                </StrickyWrapper>

                <FeedWrapper>
                    <Header title="Vietnamese" />

                </FeedWrapper>
            </div>
        )
}

export default LearnPage