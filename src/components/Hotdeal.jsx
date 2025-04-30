import React from 'react'

const Hotdeal = () => {
  return (
    <div>
        <section className="hot-deal mt-20 px-4">
        <div className="text-center">
            <h1 className="text-teal-300 font-bold text-5xl">Hot Deal</h1>
        </div>
        <div className="box-content flex flex-col md:flex-row items-center justify-between mt-8 bg-blue-200 p-8 rounded-lg shadow-lg">
            <div className="flex-1 text-center md:text-left px-6">
                <h2 className="text-4xl font-bold text-gray-800">iPhone 16 Pro Max</h2>
                <p className="text-lg text-gray-600 mt-3">Experience the power of the A17 Bionic chip, stunning 6.7-inch OLED display, and an all-new titanium design.</p>
                <p className="text-3xl font-bold text-red-500 mt-4">$1,099.00 <span className="text-gray-500 line-through text-2xl">$1,199.00</span></p>
                <button className="mt-6 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">Add to Cart</button>
            </div>
            <div className="box-img flex-1 flex justify-center mt-6 md:mt-0">
                <img src="./images/iphone.png" alt="iPhone" className="w-full max-w-sm md:max-w-md" height="100%" width="100%" />
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Hotdeal
