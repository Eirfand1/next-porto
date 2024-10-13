'use client'

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  const [theme, setTheme] = useState<boolean>(false) 

  return (
   <div data-theme={theme ? "light" : "dark"} className={theme ? "bg-steel" : ""} >
    <Navbar setTheme={() => setTheme(!theme)}/>
    <main className={`flex flex-col ${theme ? "text-gray-700" : ""} p-8 items-center min-h-screen`}>
        <Hero/>
    </main>
    <Footer/>
   </div> 
  );
}
