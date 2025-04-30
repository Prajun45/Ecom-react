import React from 'react'

function Card( props ) { 
 return (
    <>
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-5 m-3 transition-transform hover:scale-105 hover:shadow-2xl duration-300">
        
      <div className="relative">
        <img 
          src={props.data.images[0]} 
          alt={props.data.title} 
          className="w-full h-52 object-cover rounded-xl"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          10%Off
        </span>
      </div>
      <div className="text-center p-4">
        <h5 className="text-xl font-semibold text-gray-800 truncate" title={props.data.title}>
          {props.data.title.slice(0, 15)}...
        </h5>
        <p className="text-lg font-bold text-gray-600 mt-2">
          Price: <span className="text-blue-500">$ {props.data.price}</span>
        </p>
        <a 
          href={`/productview/${props.data.id}`} 
          className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          View More <i className="bi bi-arrow-right-short text-lg"></i>
        </a>
      </div>
    </div>
    </>
  )
}

export default Card
