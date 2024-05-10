import React from 'react'
import { buttonVariants } from '../ui/button';


const Header = () => {
  return (
    <header className='fixed top-0 w-full z-10'>
      <nav className=" text-white lg:text-lg p-3">
        <div className=" px-4 w-full">
          <div className="flex items-center justify-between">
            <div className="flex w-full justify-between gap-2 space-x-4">

              <div className='flex justify-center items-center gap-x-1'>
                <img src="../../../public/logo2.png" alt="logo" width={90} />
                <a href="/" className="flex items-center py-5 px-2 text-white font-bebas">
                  <h4 className="font-bold  ease-in-out duration-500 text-3xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#94F7F6] via-[#97F9A5] to-[#9CFE02]">Florida Hounters</h4>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="/" className={`flex gap-x-2 sm:truncate lg:text-lg text-base py-5 px-3 text-white hover:text-[#94F7F6] ease-in-out duration-300 ${buttonVariants({ variant: 'link' })}`}>
                  <span>Schedule a Meeting</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>

                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;
