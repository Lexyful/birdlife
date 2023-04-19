import React, { useEffect, useState } from "react";
import { fetchData } from "../data/apiCalls";
import "./Home.css"

export const Home = () => {
  const [randomBird, setRandomBird] = useState('');
  const [error, setError] = useState('');

  const fetchRandomBird = () => {
    fetchData()
      .then(data => {
        setRandomBird(data.message);
      })
      .catch(err => {
        setError(`Sorry there was a ${err} error please try again`);
      });
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