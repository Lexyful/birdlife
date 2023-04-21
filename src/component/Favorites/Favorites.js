import React, { useState } from "react";
import { FavCard } from "../../FavCard/FavCard";
import "./Favorites.css"

export const Favorites = ({ favorites, deleteFavorite }) => {
  const allFavorites = favorites.map(favorite => <FavCard deleteFavorite={deleteFavorite} url={favorite} key={favorite}/>);
  const condition = !allFavorites.length ? <p className="fave-message">You haven't favorited any birds yet...</p> : allFavorites
  
  return(
    <section className="favorites">
      {condition}
    </section>
  );
}
