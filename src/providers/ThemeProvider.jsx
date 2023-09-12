'use client'
import { useThemContext } from '@/context/ThemContext'
import React from 'react'

const ThemeProvider = ({ children }) => {
    const { them } = useThemContext()
    return (
        <div className={them} >
            {children}
        </div>
    )
}

export default ThemeProvider