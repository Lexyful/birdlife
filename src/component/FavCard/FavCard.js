import React, { useState } from "react";

import "./FavCard.css";

export const FavCard = ({url, deleteFavorite}) => {
  const [favorites, setFavorites] = useState([])

  return (
    <div className="favorite-card">
      <img className="favorit-bird" src={url} alt=""/>
      <button onClick={() => deleteFavorite(url)} className="delete-button">Delete</button>
    </div>
  );
}