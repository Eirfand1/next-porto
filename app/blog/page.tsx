'use client'

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import { ThemeProvider, useTheme } from '@/components/navbar';

const BlogContent = () => {
  const { theme } = useTheme();

  return (
    <div className={theme ? "bg-steel" : ""} data-theme={theme ? "light" : "dark"}>
      <Navbar/>
      <main className={`flex flex-col ${theme ? "text-gray-700" : ""} p-8 items-center min-h-screen`}>
         <div>
            <h1 className='text-4xl font-bold'>Dereng ana apa apa</h1>
         </div>
      </main>
      <Footer/>
    </div>
  )
}

const BlogPage: React.FC = () => {
  return(
    <ThemeProvider>
      <BlogContent/>
    </ThemeProvider>
  )
}

export default BlogPage