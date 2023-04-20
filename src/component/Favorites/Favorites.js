import React, { useState } from "react";
import { FavCard } from "../FavCard/FavCard";
import "./Favorites.css"

export const Favorites = () => {
  const [favorites, setFavorites] = useState([])
  
  const allFavorites = favorites.map(favorite => <FavCard url={favorite} key={favorite}/>);
  const displayFavesLogic = !allFavorites.length ? <p className="fave-message">You haven't favorited any birds yet...</p> : allFavorites
  
  return(
    <section className="favorites">
      {displayFavesLogic}
    </section>
  );
}