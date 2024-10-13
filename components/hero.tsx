import React from 'react'
import Image from 'next/image'

interface SocialLink  {
   name: string
   url: string
}

const hero = () => {
   const links: SocialLink[] = [
      { name: 'Github', url: 'https://github.com/Eirfand1' },
      { name: 'Facebook', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'LinkedIn', url: '#' }
   ];

   const logoList: string[] = [
      "/JavaScript-logo.png",
      "/kinglara.png",
      "/nerd.png",
      "/tailwind.png",
      "/React.webp",
      "/tor-512.webp",
      "/Tux.png",
      "/vimlogo.svg",
      "json.svg",
      "gayming.png"
   ]

  return (
    <div className='max-w-xl transition-all'>
      <div className='grid gap-3 font-semibold'>
         <h1><span className='text-3xl font-bold'>Ego Irfandi</span> <span className='text-xs'>call me Yuki</span></h1>
         <p>
            Hi, i&#39;m Ego Irfandi
            <br />
            Informatics Engineering Student
         </p>
         <p>
            I am a student in the field of Informatics Engineering,
            who continue to learn about technology, especially in matters
            web design and backend.
         </p>
         <p>
            Currently focused on web technology, and  actively learning and developing skills in this field. My hobbies include fishing, enjoying local cuisine, experimenting with Linux, and watching anime. 
         </p>
         <div className='flex flex-wrap gap-3'>
            {
               logoList.map((logo,index)=> (
                  <Image src={logo} key={index} alt="" className='w-auto h-9' />
               ))
            }
         </div>
         <div>
            <p>Find me on</p>
            <div className='flex items-start flex-wrap justify-start gap-2 mt-2'>
              {
               links.map((link, index) => (
                     <a
                        key={index}
                        href={link.url}
                        className="btn btn-sm transition-all duration-300 ease-in-out hover:opacity-100 hover:bg-[#8882] opacity-90"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        {link.name}
                     </a>
                  ))
               } 
            </div>
         </div>
      </div>
      
    </div>
  )
}

export default hero