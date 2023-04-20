import React, { useState } from "react";

import "./FavCard.css";

export const FavCard = ({url}) => {
  const [favorites, setFavorites] = useState([])

  const deleteFavorite = (url) => {
    const filterFav = favorites.filter(favorite => favorite !== url);
    setFavorites(filterFav);
  }

  return (
    <div className="favorite-card">
      <img className="favorit-bird" src={url} alt=""/>
      <button onClick={() => deleteFavorite(url)} className="delete-button">Delete</button>
    </div>
  );
}