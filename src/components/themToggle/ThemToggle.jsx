'use client'

import { useThemContext } from '@/context/ThemContext'
import Image from 'next/image'

const ThemToggle = () => {
    const { them, themToggle } = useThemContext()

    return (
        <div className=' relative flex justify-between items-center w-10 min-w-[40px] h-5 rounded-2xl  border border-slate-400  cursor-pointer bg-slate-200 shadow-inner'
            onClick={themToggle}
        >
            <Image src='/moon.png' width={14} height={14} alt='dark btn' />
            <div
                className={`absolute h-[15px] w-[15px] top-[2px] bg-white rounded-full transition-all duration-300 ${them === 'dark' ? ' translate-x-5' : 'translate-x-0'}`}></div>
            <Image src='/sun.png' width={14} height={14} alt='dark btn' />
        </div>
    )
}

export default ThemToggle