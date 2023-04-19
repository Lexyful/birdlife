import React from 'react'
import './BirdCard.css'

export const BirdCard = ({ bird }) => {
  return(  
  <div className='card'>
    <img className="bird-card" src={bird} alt="" />
  </div>
  )
}

