import React, { useEffect, useState } from "react";
import { fetchData } from "../data/apiCalls";
import "./Home.css"

export const Home = () => {
  const [birds, setBirds] = useState([]);
  const [randomBird, setRandomBird] = useState('');
  const [error, setError] = useState('');

  const fetchRandomBird = () => {
    fetchData(`${birds}`)
    .then(data => {
        setBirds(data)  
      })
      .then(() => {
        const mainBird = birds.find((bird, index) => {
          let randomObj = {}
          randomObj.id = index
          randomObj.bird = bird
          return randomObj
        })
        setRandomBird(mainBird)
      })
  }

  useEffect(() => {fetchRandomBird()}, []);

  return(
    <section className="home-page">
      <h2 className="welcome">Welcome</h2>
      <div className="home-contents-container">
      <div className="get-random">
          <button onClick={() => fetchRandomBird()} >Get Random Bird!</button>
        <div className="img-container">
            <img className="random-bird-img" src={randomBird}/>
            </div>
            </div>
      
          </div>
    </section>
  );
}