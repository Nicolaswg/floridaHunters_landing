import React from 'react'



const Header = () => {
  return (
    <header>
      <nav className="bg-black text-white lg:text-lg">
        <div className=" px-4 w-full">
          <div className="flex items-center justify-between">

            <div className="flex gap-2 space-x-4">

              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                  <div className="w-20 h-20 bg-cover bg-center bg-[url('/Logo.jpeg')]" />
                  <span className="font-bold hover:text-white ease-in-out duration-300 text-2xl hover:">Florida Hounters</span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="sm:truncate py-5 px-3 text-white hover:text-[#94F7F6] ease-in-out duration-300">Schedule a Meeting</a>
                <a href="#" className="sm:truncate py-5 px-3 text-white hover:text-[#94F7F6] ease-in-out duration-300">Pricing</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="" className="py-5 px-3 hover:text-[#94F7F6] ease-in-out duration-300">Login</a>
              <a href="" className="py-2 px-3 bg-white hover:bg-[#9cfe02] text-black rounded transition delay-150 duration-300 hover:-translate-y-1 hover:scale-110">Signup</a>
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
