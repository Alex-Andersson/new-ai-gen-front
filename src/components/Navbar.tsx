import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-20 backdrop-blur-md p-4 shadow-md z-50">
        <div className="list-none container mx-auto flex justify-between items-center">
            <li className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition duration-300">Home</li>
            <li className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition duration-300">Portfolio</li>
        </div>
    </nav>
  )
}

export default Navbar;
