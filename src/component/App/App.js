import React, {useEffect, useState} from 'react'
import { fetchData } from '../data/apiCalls'
import { Home } from '../Home/Home';
import { Nav } from "../Nav/Nav";
import { GalleryContainer } from '../GalleryContainer/GalleryContainer';
import { Route, Link, Switch } from 'react-router-dom';
import { Favorites } from '../Favorites/Favorites';
import "./App.css";

const App = () => {
  const [birds, setBirds] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState([])
  const fetchBirdData = () => { 
    fetchData(`${birds}`)
    .then(data => {
        setBirds(data)
       
        // console.log(data.some(element))
    })
    
    .catch(error => {
      setError(`Sorry there was a ${error.message} error please try again`);
    });
  }

  const handleAddFavorite = (url) => {
    setFavorites([...favorites, url]);
  }

  const deleteFavorite = (url) => {
    const filterFav = favorites.filter(favorite => favorite !== url);
    setFavorites(filterFav);
  }

  useEffect(() => {
    fetchBirdData()
  }, [])

  return (
    <>
      <Nav />
      {/* <Switch> */}
      {error && <p>{error}</p>}
        <Route exact path="/" render={() => <Home birds={ birds } />} />
        <Route exact path="/bird-gallery/" render={({match}) => <GalleryContainer birds={birds} onAddFavorite={handleAddFavorite} />} />
        <Route path="/favorites" render={() => <Favorites favorites={favorites} deleteFavorite={deleteFavorite}/>} />
      {/* </Switch> */}
    </>
  );
}

export default App