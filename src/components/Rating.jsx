import React from 'react'
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa'

const Rating = ({ rating }) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-400 inline" />)
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalf key={i} className="text-yellow-400 inline" />)
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400 inline" />)
    }
  }

  return (
    <p className="font-semibold text-gray-700">
      Rating: <span className="text-yellow-400 ml-2">{stars}</span>
    </p>
  )
}

export default Rating
