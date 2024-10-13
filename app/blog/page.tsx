'use client'

import React, { useState } from 'react'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Page = () => {
  const [theme, setTheme] = useState<boolean>(false)

  return (
    <div className={theme ? "bg-steel" : ""} data-theme={theme ? "light" : "dark"}>
      <Navbar setTheme={() => setTheme(!theme)}/>
      <main className={`flex flex-col ${theme ? "text-gray-700" : ""} p-8 items-center min-h-screen`}>
         <div>
            <h1 className='text-4xl font-bold'>Dereng ana apa apa</h1>
         </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Page