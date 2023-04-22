import React from "react";
import PropTypes from 'prop-types';
import { SightingCard } from "../SightingCard/SightingCard";
import "./Sightings.css"

export const Sightings = ({ sightings, deleteSighting }) => {
  const allsightings = sightings.map(sighting => <SightingCard deleteSighting={deleteSighting} url={sighting} key={sighting}/>);
  const condition = !allsightings.length ? <p className="sighting-message">You have not sighted any birds yet...</p> : allsightings
  
  return(
    <section className="sightings">
      {condition}
    </section>
  );
}

Sightings.propTypes = {
  sightings: PropTypes.array.isRequired,
  deleteSighting: PropTypes.func.isRequired,
};