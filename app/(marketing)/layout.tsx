import React from 'react'
import Header from './header'
import Footer from './footer'
import { auth } from '@clerk/nextjs/server'

type Props = {
    children: React.ReactNode
}
const MarketingLayout = ({ children }: Props) => {
    auth().protect()
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-1 flex flex-col items-center justify-center'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MarketingLayout