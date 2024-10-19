'use client'

import React from "react";
import { ThemeProvider, useTheme } from "@/components/navbar";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

const HomeContent: React.FC = () => {
  const { theme } = useTheme();

   return (
      <div data-theme={theme ? "light" : "dark"} className={theme ? "bg-steel" : ""}>
         <Navbar />
         <main className={`flex flex-col ${theme ? "text-gray-700" : ""} p-8 items-center min-h-screen`}>
            <Hero />
         </main>
         <Footer />
      </div>
   );
}

export default function Home() {
   return (
      <ThemeProvider>
         <HomeContent />
      </ThemeProvider>
   );
}