import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonsPage = () => {
    return (
        <div className='p-4 space-y-4 fex flex-col max-w-[200px]'>
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="primaryOutline">Second Primary</Button>
            <Button variant="secondary">Primary</Button>
            <Button variant="secondaryOutline">Second Primary</Button>
            <Button variant="danger">Primary</Button>
            <Button variant="dangerOutline">Second Primary</Button>
            <Button variant="super">Primary</Button>
            <Button variant="superOutline">Second Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost">Ghost</Button>

            <Button variant="sidebar">Ghost</Button>
            <Button variant="sidebarOutline">Ghost</Button>

        </div>
    )
}

export default ButtonsPage