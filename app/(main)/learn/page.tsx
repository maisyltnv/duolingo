import FeedWrapper from '@/components/feed-wrapper'
import StrickyWrapper from '@/components/sticky-wrapper'
import React from 'react'

const LearnPage = () => {
    return (
        <div className='flex flex-row-reverse gap-[48px] px-6'>
            <StrickyWrapper>
                My sticky sidebar
            </StrickyWrapper>

            <FeedWrapper>
                <Header title="Spanish" />
            </FeedWrapper>
        </div>
    )
}

export default LearnPage