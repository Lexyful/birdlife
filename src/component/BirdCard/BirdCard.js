import React, {useEffect, useState} from 'react'
import './BirdCard.css'

export const BirdCard = ({ bird }) => {
  const [favorites, setFavorites] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const favoriteBird = (faved) => {
    setFavorites([...favorites, faved]);
  }

  return(  
  <div className='card'>
    <img className="bird-card" src={bird} alt="" />
    <button onClick={() => {
        favoriteBird(bird) 
        }} className="favorite-button" disabled={disabled}>Save</button>
    </div>
  
  )
}

