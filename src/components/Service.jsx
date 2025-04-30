import React from 'react'

const Service = () => {
  return (
    <div>
        <section className="py-20 text-center">
        <h1 className="text-teal-300 text-5xl font-bold">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8 px-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <i className="fas fa-shipping-fast text-4xl text-blue-400"></i>
                <h2 className="text-xl font-bold mt-4">Free Shipping</h2>
                <p className="text-gray-400">On orders over $100</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <i className="fas fa-box text-4xl text-green-400"></i>
                <h2 className="text-xl font-bold mt-4">Free Delivery</h2>
                <p className="text-gray-400">Inside country</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <i className="fas fa-thumbs-up text-4xl text-yellow-400"></i>
                <h2 className="text-xl font-bold mt-4">Best Choice</h2>
                <p className="text-gray-400">On products</p>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Service
