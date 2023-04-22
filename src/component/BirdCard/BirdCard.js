import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import './BirdCard.css'

export const BirdCard = ({ bird, onAddSighting }) => {
  const [disabled, setDisabled] = useState(false);

  const handleSighting = () => {
    onAddSighting(bird);
    setDisabled(true);
  }

  return (
    <div className="card">
      <img className="bird-card" src={bird} alt="" />
      <button
        onClick={handleSighting}
        className="sighting-button"
        disabled={disabled}
      >
        {disabled ? "Sighted!" : "Sighted"}
      </button>
    </div>
  );
};



BirdCard.propTypes = {
  bird: PropTypes.string.isRequired,
  onAddSighting: PropTypes.func.isRequired
};


