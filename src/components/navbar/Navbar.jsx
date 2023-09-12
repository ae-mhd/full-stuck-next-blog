import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemToggle from '../themToggle/ThemToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-[100px]'>
            <div className='flex flex-1 gap-3'>
                <Image src='/facebook.png' alt='facebook' width={24} height={24} />
                <Image src='/instagram.png' alt='instagram' width={24} height={24} />
                <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
                <Image src='/youtube.png' alt='youtube' width={24} height={24} />
            </div>
            <div className='flex-1 text-center text-4xl font-bold'>Safari Blog</div>
            <div className='flex flex-1 gap-5 text-xl items-center'>
                <ThemToggle />
                <Link href='/'>Home page</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar