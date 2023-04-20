import React, { useEffect, useState } from "react";
import "./Home.css"

export const Home = ({ birds }) => {
  const [randomBird, setRandomBird] = useState('');


  const getRandomBird = () => {
    const mainBirdPicture = birds[Math.floor(Math.random() * (birds.length + 1))]
    console.log(mainBirdPicture)
    setRandomBird(mainBirdPicture)
  }

  useEffect(() => {getRandomBird()}, [birds]);

  return(
    <section className="home-page">
      <h2 className="welcome">Welcome</h2>
      <div className="home-contents-container">
      <div className="get-random">
        <div className="img-container">
            <img className="random-bird-img" src={randomBird}/>
            </div>
          <button onClick={getRandomBird} >Get Random Bird!</button>
            </div>
        </div>
    </section>
  );
}