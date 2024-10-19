export const wordAnimation = {
   initial: {  opacity: 0 },
   animate: { 
      opacity: 1,
      transition: {
         ease: [0.6, 0.01, 0.05, 0.95],
         duration: 1,
      }
   }
}

export const containerAnimation = {
   initial: { opacity: 0 },
   animate: { 
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      }
   }
}

export const itemAnimation = {
   initial: { 
      opacity: 0, 
   },
   animate: { 
      opacity: 1,
      transition: {
         ease: [0.6, 0.01, 0.05, 0.95],
         duration: 1,
      } 
   },
}