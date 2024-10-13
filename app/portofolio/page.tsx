'use client'

import React, { useState, useRef } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

interface PortfolioItem {
  img: string;
  title: string;
  description: string;
}

const PortfolioPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [theme, setTheme] = useState<boolean>(false) 
  const modalRef = useRef<HTMLDialogElement>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      img: "/pokemon.png",
      title: "Pokemon Information App",
      description: "A comprehensive React application that provides detailed information about various Pokemon. It utilizes the PokeAPI to fetch and display data such as Pokemon stats, abilities, and evolution chains."
    },
    {
      img: "/cahkerjo.png",
      title: "Job Vacancy Website",
      description: "A dynamic job board built with React JS. It allows users to search and filter job listings, view detailed job descriptions, and apply directly through the platform. The site also includes features for employers to post new job openings."
    },
    {
      img: "/bookshelf.png",
      title: "Bookshelf App",
      description: "A vanilla JavaScript application for managing a personal book collection. Users can add books, mark them as read or unread, and organize them into different categories. The app uses local storage to persist data between sessions."
    },
  ];

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
    setSelectedItem(null);
  };

  return (
    <div className={theme ? "bg-steel" : ""} data-theme={theme ? "light" : "dark"}>
      <Navbar setTheme={() => setTheme(!theme)} />
      <main className="flex flex-col p-8 items-center min-h-screen">
        <div className="text-center mb-8">
          <h1 className='font-bold text-3xl mb-2'>Portfolio</h1>
          <p className='font-semibold text-normal'>My Learning Progress</p>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
          {portfolioItems.map((item, index) => (
            <div key={index} className="card w-72 sm:w-96 bg-base-100 cursor-pointer" onClick={() => openModal(item)}>
             <Image src={item.img} alt={`Project ${index + 1}`} className='w-full rounded-sm h-48 object-cover' />
            </div>
          ))}
        </div>
      </main>
      <Footer />

      <dialog ref={modalRef} className="modal ">
        {
         selectedItem && (
            <div className="modal-box rounded-sm">
               <h3 className="font-bold text-lg">{selectedItem.title}</h3>
               <Image src={selectedItem.img} alt={selectedItem.title} className="w-full h-64 object-cover my-4" />
               <p className="py-4">{selectedItem.description}</p>
               <div className="modal-action">
               <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
               </form>
               </div>
            </div>
         )
        }
      </dialog>
    </div>
  );
};

export default PortfolioPage;