import React, {useEffect, useState} from 'react'
import './BirdCard.css'

export const BirdCard = ({ bird, onAddFavorite }) => {
  const [disabled, setDisabled] = useState(false);

  const handleAddFavorite = () => {
    onAddFavorite(bird);
    setDisabled(true);
  }

  return(  
    <div className='card'>
      <img className="bird-card" src={bird} alt="" />
      <button onClick={handleAddFavorite} className="favorite-button" disabled={disabled}>Save</button>
    </div>  
  )
}



