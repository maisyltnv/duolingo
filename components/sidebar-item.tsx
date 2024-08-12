
'use client';
import React from 'react'
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    label: string;
    iconSrc: string;
    href: string;
}
const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathName = usePathname();
    const active = pathName === href;
    return (
        <div>
            <Button variant={active ? 'sidebarOutline' : 'sidebar'}
                className='justify-start h-[52px] w-full' asChild>
                <Link href={href}>
                    <Image src={iconSrc} alt={label} width={32} height={32} className='mr-5' />
                    {label}
                </Link>
            </Button>
        </div>
    )
}

export default SidebarItem