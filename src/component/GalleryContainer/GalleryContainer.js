import React, { useState } from "react";
import { BirdCard } from "../BirdCard/BirdCard";
import {  Link } from 'react-router-dom';
import './GalleryContainer.css'

export const GalleryContainer = ({ birds, onAddFavorite }) => {
  const birdCards = birds.map(bird => {
    return (
      <BirdCard bird={bird} key={bird} onAddFavorite={onAddFavorite} />
    )
  })

  return(
    <div className="gallery-container">
      {birdCards}
    </div>
  )
}
