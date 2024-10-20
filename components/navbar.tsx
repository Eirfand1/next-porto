'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import Link from 'next/link'
import { PiNotebookLight, PiShootingStarThin, PiMoon, PiSunDimLight } from "react-icons/pi";

interface ThemeContextType {
  theme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [theme, setTheme] = useState<boolean>(() => {
      if (typeof window !== 'undefined') {
         const savedTheme = localStorage.getItem('theme')
         return savedTheme ? JSON.parse(savedTheme) : true 

      }
      return true 
  })

   useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme))
   }, [theme])

   const toggleTheme = () => {
      setTheme(theme =>!theme)
   }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme harus dengn penggunakan ThemeProvider')
  }
  return context
}

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className='flex justify-between items-center max-h-14 px-3'>
      <h1>
        <Link href="/" className='text-xl font-bold p-2 '>N.<span className='text-[#8B7484]'>Yuki</span></Link>
      </h1>
      <ul className='flex items-center gap-4 mr-4'>
        <li>
          <Link href="/blog" className='font-normal relative bottom-0.5 px-2'><span className='hidden md:block'>Blog</span><PiNotebookLight className='block  md:hidden text-xl'/></Link>
        </li>
        <li>
          <Link href="/portofolio" className='font-normal relative bottom-0.5 px-2'><span className='hidden md:block'>Portofolio</span><PiShootingStarThin className='block  md:hidden text-xl'/></Link>
        </li>
        <li>
          <label className="swap swap-rotate ">
            <input type="checkbox" onChange={toggleTheme} defaultChecked={!theme} />
            <PiSunDimLight className='swap-on w-5 h-5'/> 
            <PiMoon className='swap-off w-5 h-5'/>
          </label>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar