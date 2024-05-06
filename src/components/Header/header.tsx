import React from 'react'
import { buttonVariants } from '../ui/button';


const Header = () => {
  return (
    <header>
      <nav className="bg-black text-white lg:text-lg">
        <div className=" px-4 w-full">
          <div className="flex items-center justify-between">

            <div className="flex gap-2 space-x-4">

              <div>
                <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                  <div className="w-20 h-20 bg-cover bg-center bg-[url('/Logo.jpeg')]" />
                  <span className="font-bold hover:text-white ease-in-out duration-300 text-2xl hover:">Florida Hounters</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="/" className={`flex gap-x-2 sm:truncate lg:text-lg text-base py-5 px-3 text-white hover:text-[#94F7F6] ease-in-out duration-300 ${buttonVariants({ variant: 'link' })}`}>
                  <span>Schedule a Meeting</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>

                </a>
                <a href="/" className={`flex gap-x-2 sm:truncate lg:text-lg text-base py-5 px-3 text-white hover:text-[#94F7F6] ease-in-out duration-300 ${buttonVariants({ variant: 'link' })}`}>
                  <span>Pricing</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 hover:text-[#94F7F6] ease-in-out duration-300">Login</a>
              <a href="/" className="py-2 px-3 bg-white hover:bg-[#9cfe02] text-black rounded transition delay-150 duration-300 hover:-translate-y-1 hover:scale-110">Signup</a>
            </div>

            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
