import React from 'react'

const Offer = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-6 mt-8 px-4 justify-center items-start">
      
      {/* Left Side - Categories */}
      <div className="w-full md:w-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul className="space-y-3">
          {[
            "Women's Fashion", 
            "Men's Fashion", 
            "Electronics", 
            "Medicine", 
            "Home & Lifestyle", 
            "Sports & Outdoors"
          ].map((item) => (
            <li key={item} className="hover:text-blue-400 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>

      {/* Right Side - Offer Box */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center max-w-4xl">
        
        {/* Image */}
        <div className="flex justify-center mb-4 md:mb-0 md:ml-6">
          <img 
            src="./images/iphone.png" 
            alt="iPhone" 
            className="w-48 h-auto object-contain" 
          />
        </div>

        {/* Text Content */}
        <div className="text-left">
          <h2 className="text-2xl font-bold text-gray-800">iPhone 16 Pro Max</h2>
          <p className="text-base text-gray-600 mt-2 max-w-md">
            Experience the power of the A17 Bionic chip, stunning 6.7-inch OLED display, and an all-new titanium design.
          </p>
          <p className="text-2xl font-bold text-red-500 mt-3">
            $1,099.00 <span className="text-gray-500 line-through text-lg">$1,199.00</span>
          </p>
          <button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Offer
