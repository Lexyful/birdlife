import React from "react";
import PropTypes from 'prop-types';
import "./SightingCard.css";

export const SightingCard = ({url, deleteSighting}) => {
 
  return (
    <div className="sighting-card">
      <img className="sighting-bird-card" src={url} alt=""/>
      <button onClick={() => deleteSighting(url)}  className="delete-button">Delete</button>
    </div>
  );
}

SightingCard.propTypes = {
  url: PropTypes.string.isRequired,
  deleteSighting: PropTypes.func.isRequired
};
