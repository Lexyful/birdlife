import React, {useEffect, useState} from 'react'
import { fetchData } from '../data/apiCalls'
import { GalleryContainer } from '../GalleryContainer/GalleryContainer';
import "./App.css";

const App = () => {
  const [birds, setBirds] = useState([]);
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
 <GalleryContainer birds={birds} />
 </>
  );
}

export default App;