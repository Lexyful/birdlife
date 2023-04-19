import React, { useState } from "react";
import { BirdCard } from "../BirdCard/BirdCard";
import {  Link } from 'react-router-dom';
import './GalleryContainer.css'

export const GalleryContainer = ({birds}) => {
  const birdCards = birds.map(bird => {
  return(
  
   <Link to={`/${bird.id}`}> <BirdCard bird={bird.bird} /></Link> 
  
  )
  })
  return (
    <div className="gallery-container">
      {birdCards}
    </div>
  )
  
}