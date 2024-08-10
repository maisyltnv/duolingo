import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
            <div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
                <Button size="lg" variant="ghost" className='w-full'>
                    <Image src="/laoFlag.png" alt="Lao" width={40} height={40}
                        className='mr-4 rounded-md' />
                    Lao
                </Button>
                <Button size="lg" variant="ghost" className='w-full'>
                    <Image src="/engFlag.png" alt="English" width={40} height={40}
                        className='mr-4 rounded-md' />
                    English
                </Button>
                <Button size="lg" variant="ghost" className='w-full'>
                    <Image src="/vietFlag.png" alt="Vietnamese" width={40} height={40}
                        className='mr-4 rounded-md' />
                    Vietnamese
                </Button>
            </div>
        </footer>
    )
}

export default Footer