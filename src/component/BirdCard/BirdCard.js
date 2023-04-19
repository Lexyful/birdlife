import React from 'react'
import './BirdCard.css'

export const BirdCard = ({ bird }) => {
  return(  
  <div className='card'>
    <p>{bird}</p>
  </div>
  )
}

