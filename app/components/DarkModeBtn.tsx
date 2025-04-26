'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import moon from '../../public/assets/images/icon-moon.svg';
import sun from '../../public/assets/images/icon-sun.svg';
import { useEffect, useState } from 'react'

const DarkModeBtn = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button type="button" className="p-4 cursor-pointer rounded-xl bg-neutral-100 dark:bg-neutral-700">
            <Image src={theme === 'dark' ? sun : moon} alt="Dark Mode" width={20} height={20} onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }} />
            <span className="sr-only">DarkMode Button</span>
        </button>
    )
}

export default DarkModeBtn;