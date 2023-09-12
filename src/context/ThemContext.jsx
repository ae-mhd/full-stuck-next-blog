'use client'
const { createContext, useContext, useState, useEffect } = require("react");

const ThemContext = createContext()
const getFromStorage = () => {
    // in the beginig whene it's SSR there is no window object so we prevent the erros using if.
    // that's why we dont get local storage value directly 
    if (typeof window !== undefined) {

        const value = localStorage.getItem('them');
        return value || 'light';
    }
}
export const useThemContext = () => useContext(ThemContext)
export function ThemContextProvider({ children }) {
    const [them, setThem] = useState(() => {
        return getFromStorage()
    })
    const themToggle = () => setThem(prev => prev === 'light' ? 'dark' : 'light')
    useEffect(() => {
        localStorage.setItem('them', them)
    }, [them])
    return <ThemContext.Provider value={{ them, themToggle }}>
        {children}
    </ThemContext.Provider>

}
