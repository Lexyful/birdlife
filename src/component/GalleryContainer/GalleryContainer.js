import React, { useState } from "react";
import { BirdCard } from "../BirdCard/BirdCard";
import './GalleryContainer.css'

export const GalleryContainer = ({birds}) => {
  return(
  <div className="gallery-container">
    <BirdCard />
  </div>
  )
}