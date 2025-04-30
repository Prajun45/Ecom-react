import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="bg-black py-10 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">

            {/* <!-- Logo Section --> */}
            <div className="mb-6 md:mb-0">
                <img src="./images/logo.png" alt="SmartTech Mart Logo" className="w-32 h-auto" />
            </div>

            {/* <!-- Navigation Links --> */}

            <nav className="flex space-x-6 text-lg font-semibold">
                <a href="#home" className="hover:text-teal-400 transition">Home</a>
                <a href="#products" className="hover:text-teal-400 transition">Products</a>
                <a href="#cart" className="hover:text-teal-400 transition">Cart</a>
            </nav>

            {/* <!-- Contact Us --> */}

            <div className="text-center md:text-left">
                <h2 className="text-lg font-bold">Contact Us</h2>
                <p className="text-gray-400">LaganKhel, Lalitpur</p>
                <p className="text-gray-400">9787655321</p>
            </div>
        </div>

        {/* <!-- Divider --> */}
        <hr className="border-gray-600 my-6" />

        {/* <!-- Copyright --> */}
        <div className="text-center text-gray-400 text-sm">
            &copy; 2025 SmartTech Mart. All rights reserved.
        </div>
    </footer>
      
    </div>
  )
}

export default footer
