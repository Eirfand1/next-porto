'use client'
import React, { useState } from 'react';
import {  useTheme } from '@/components/navbar';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { wordAnimation, containerAnimation, itemAnimation } from '@/utils/animation';
import { portfolioItems } from '@/utils/items';

const PortfolioContent: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { theme } = useTheme();

  const selectedItem = portfolioItems.find(item => item.id === selectedId);

  return (
      <motion.div
         variants={containerAnimation}
         initial="initial"
         animate="animate"
         >
         <main className="flex flex-col p-8 items-center min-h-screen">
         <div className="text-center mb-8">
            <motion.h1
            className='font-bold text-3xl mb-2'
            variants={wordAnimation}
            initial="initial"
            animate="animate">
               Portfolio
            </motion.h1>
            <motion.p 
            className='text-normal'
            variants={wordAnimation}
            initial="initial"
            animate="animate">
               My Learning Progress
            </motion.p>
         </div>
         <motion.div
            className='flex flex-wrap justify-center gap-4'
            variants={containerAnimation}
            initial="initial"
            animate="animate">
            {portfolioItems.map((item) => (
               <motion.div
               key={item.id}
               layoutId={item.id}
               onClick={() => setSelectedId(item.id)}
               className="card w-72 sm:w-96 bg-base-100 rounded-sm cursor-pointer"
               variants={itemAnimation}
               initial="initial"
               animate="animate"
               >
               <Image src={item.img} alt={item.title} width={0} height={0} sizes='100vw' className='w-full rounded-sm h-48 object-cover' />
               </motion.div>
            ))}
         </motion.div>
         </main>
         
         <AnimatePresence>
         {selectedId && selectedItem && (
            <motion.div 
               layoutId={selectedId}
               className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
               onClick={() => setSelectedId(null)}
            >
               <motion.div 
               className={`${theme? 'bg-gray-200' : 'bg-gray-800'}  relative p-6 m-4 rounded-sm max-w-lg w-full`}
               onClick={(e) => e.stopPropagation()}
               >
               <motion.button 
                  className="btn btn-sm absolute top-4 right-4 btn-circle btn-ghost" 
                  onClick={() => setSelectedId(null)}
               >
                  ✕
               </motion.button>
               <motion.h2 className="font-bold text-lg">{selectedItem.title}</motion.h2>
               <Image src={selectedItem.img} alt={selectedItem.title} width={0} height={0} sizes='100vw' className="w-full h-64 object-cover my-4" />
               <motion.p className="py-4">{selectedItem.description}</motion.p>
               
               </motion.div>
            </motion.div>
         )}
         </AnimatePresence>
      </motion.div>
  );
};

export default PortfolioContent