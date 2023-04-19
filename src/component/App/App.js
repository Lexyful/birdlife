import React, {useEffect, useState} from 'react'
import { fetchData } from '../data/apiCalls'
import { GalleryContainer } from '../GalleryContainer/GalleryContainer';
import { Route, Link } from 'react-router-dom';
import "./App.css";

const App = () => {
  const [birds, setBirds] = useState([]);
  const [birdIds, setBirdIDs] = useState([])
  // const [error, setError] = useState('');
  
  // const fetchBirdData = () => {
  //   fetchData(birds)
  //     .then(data => {
  //       setBirds(data.message)
  //     })
  //     // .catch(err => {
  //     //   setError(`Sorry there was a ${err.message} error please try again`);
  //     // });
  // }
  const fetchBirdData = () => { 
      fetchData()
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
  // useEffect(() => {
  //   if(birds !== ''){
  //     fetchBirdData()
  //   }  
  // }, [birds]);

  return (
 <>
<Route path="/:bird" render={({ match }) => { console.log(match)}} />

 <GalleryContainer birds={birdIds} />
 </>
  );
}
//match.param.id
export default App;