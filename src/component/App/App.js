import React, {useEffect, useState} from 'react'
import { fetchData } from '../data/apiCalls'
import { Home } from '../Home/Home';
import { Nav } from "../Nav/Nav";
import { GalleryContainer } from '../GalleryContainer/GalleryContainer';
import { Route } from 'react-router-dom';
import { Sightings } from '../Sightings/Sightings';
import "./App.css";

const App = () => {
  const [birds, setBirds] = useState([]);
  const [sightings, setSightings] = useState([]);
  const [error, setError] = useState('')
  const fetchBirdData = () => { 
    fetchData()
    .then(data => {
        setBirds(data)

    })
    
    .catch(error => {
      setError(`Sorry there was a ${error.message} error please try again`);
    });
  }

  const handleAddSighting = (url) => {
    if (!sightings.includes(url)) {
      setSightings([...sightings, url]);
    }
  };
  
  const deleteSighting = (url) => {
    const filterSighting = sightings.filter(sighting => sighting !== url);
    setSightings(filterSighting);
  }

  useEffect(() => {
    fetchBirdData()
  }, [])

  return (
    <>
      <Nav />
        {error && <p className="error-message">{error}</p>}
        <Route exact path="/" render={() => <Home birds={ birds } />} />
        <Route exact path="/bird-gallery/" render={({match}) => <GalleryContainer birds={birds} onAddSighting={handleAddSighting} />} />
        <Route path="/sightings" render={() => <Sightings sightings={sightings} deleteSighting={deleteSighting}/>} />
    </>
  );
}

export default App