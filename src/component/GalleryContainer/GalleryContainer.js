import PropTypes from 'prop-types';
import React from "react";
import { BirdCard } from "../BirdCard/BirdCard";
import './GalleryContainer.css';

export const GalleryContainer = ({ birds, onAddSighting }) => {
  const birdCards = birds.map(bird => {
    return (
      <BirdCard bird={bird} key={bird} onAddSighting={onAddSighting} />
    )
  })

  return(
    <div className="gallery-container">
      {birdCards}
    </div>
  );
}

GalleryContainer.propTypes = {
  birds: PropTypes.array.isRequired,
  onAddSighting: PropTypes.func.isRequired,
};