'use client'

import React from "react";
import { useTheme } from "@/components/navbar";
import Hero from "@/components/hero";

const HomeContent: React.FC = () => {
   const { theme } = useTheme();

   return (
      <div>
         <main className={`flex flex-col ${theme ? "text-gray-700" : ""} p-8 items-center min-h-screen`}>
            <Hero />
         </main>
      </div>
   );
}

export default HomeContent