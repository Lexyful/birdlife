import React from 'react'
import './BirdCard.css'

export const BirdCard = ({ birds }) => {
  return(
  <div className='card'>
    <p>{birds}</p>
  </div>
  )
}

