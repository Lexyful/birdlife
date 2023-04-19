import React, {useEffect, useState} from 'react'
import { fetchData } from '../data/apiCalls'
import { Home } from '../Home/Home';
import { Nav } from "../Nav/Nav";
import { GalleryContainer } from '../GalleryContainer/GalleryContainer';
import { Route, Link, Switch } from 'react-router-dom';
import "./App.css";

const App = () => {
  const [birds, setBirds] = useState([]);
  const [birdIds, setBirdIDs] = useState([])

  const fetchBirdData = () => { 
      fetchData(`${birds}`)
      .then(data => {
          setBirds(data)  
      })
      .then(() => {
        const allBirds = birds.map((bird, index) => {
          let birdObj = {}
          birdObj.id = index
          birdObj.bird = bird
          return birdObj
        })
        setBirdIDs(allBirds)
      })

  }

  useEffect(() => {
    fetchBirdData()
    
  }, [])


  return (
 <>
  <Nav />
  <Switch>
    <Route exact path="/" render={() => <Home />} />
    <Route path="/bird-gallery/" render={({match}) => <GalleryContainer birds={birdIds} /> }/>
  </Switch>
 </>
  );
}
//match.param.id
export default App;