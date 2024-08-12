import React from 'react'
import MobileSidebar from './mobile-sidebar'

const MobileHeader = () => {
    return (
        <div className='lg:hidden px-6 h-[50px] flex  items-center bg-yellow-500 border-b fixed top0 w-full z-50'>
            <MobileSidebar />
        </div>
    )
}

export default MobileHeader