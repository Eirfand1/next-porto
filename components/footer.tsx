import React from 'react'

const Footer = () => {
  return (
    <footer className="py-4 px-4 text-xs text-center slide-enter-content">
      <p>
         2024-PRESENT © Yuki
      </p>
      <p>
        Proudly created by <a href="https://github.com/Eirfand1" target="_blank" rel="external nofollow noopener noreferrer" className="underline">Yuki</a>
        {' '}and Powered by <a href="https://nextjs.org" target="_blank" rel="external nofollow noopener noreferrer" className="underline">NextJS</a>,
        {' '}<a href="https://daisyui.com/" target="_blank" rel="external nofollow noopener noreferrer" className="underline">DaisyUI</a>
      </p>
    </footer>
  )
}

export default Footer