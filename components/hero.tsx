import Image from 'next/image'
import { motion } from 'framer-motion'
import { wordAnimation, containerAnimation } from '@/utils/animation'
import { logoItems, linkItems } from '@/utils/items'

const Hero: React.FC = () => {
   return (
      <motion.div 
         className='max-w-xl transition-all'
         initial="initial"
         animate="animate"
         variants={containerAnimation}
      >
         <div className='grid gap-3'>
            <motion.h1 variants={wordAnimation}>
               <span className='text-3xl font-serif'>Ego Irfandi</span> <span className='text-xs'>call me <span className='underline'>Yuki</span></span>
            </motion.h1>
            <div className='text-lg sm:text-normal grid gap-3'>
               <motion.p variants={wordAnimation}>
                  Hi, i&#39;m Ego Irfandi
                  <br />
                  Informatics Engineering Student
               </motion.p>
               <motion.p variants={wordAnimation}>
                  I am a student in the field of Informatics Engineering,
                  who continue to learn about technology, especially in matters
                  web design and backend.
               </motion.p>
               <motion.p variants={wordAnimation}>
                  Currently focused on web technology, and actively learning and developing skills in this field. My hobbies include fishing, enjoying local cuisine, experimenting with Linux, and watching anime.
               </motion.p>
               <motion.div className='flex flex-wrap gap-3' variants={wordAnimation}>
                  {logoItems.map((logo, index) => (
                     <Image src={logo} key={index} alt="" className='w-auto h-9' width={0} sizes='100vw' height={0} />
                  ))}
               </motion.div>
            </div>
            
            <motion.div variants={wordAnimation}>
               <p className='font-semibold'>Find me on</p>
               <div className='flex items-start flex-wrap justify-start gap-2 mt-2'>
                  {linkItems.map((link, index) => (
                     <a
                        key={index}
                        href={link.url}
                        className="btn rounded-sm font-normal border-none btn-sm items-center hover:opacity-100 hover:bg-[#8882] opacity-90"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        {link.logo}
                        {link.name}
                     </a>
                  ))}
               </div>
            </motion.div>
         </div>
      </motion.div>
   )
}

export default Hero