import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./Home.css"

export const Home = ({ birds }) => {
  const [randomBird, setRandomBird] = useState('');


  const getRandomBird = () => {
    const mainBirdPicture = birds[Math.floor(Math.random() * (birds.length ))]
    setRandomBird(mainBirdPicture)
  }

  useEffect(() => {getRandomBird()}, [birds]);

  return(
    <section className="home-page">
      <h2 className="welcome">Welcome</h2>
      <div className="beginners-container">
        <div className="hello-beginners">
          <p>Hello bird watching beginners! Not sure where to start your bird watching journey? Go to the "Gallery" page and browse birds. Once you've sighted the birds out in the wild, save them to the "Sightngs" page to keep track of the birds, you've checked off of the list. If you don't have time to go out but you'd still like to sight these birds, click the "Get Random Bird" and bird watch right on this very page!</p>
        </div>
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

Home.propTypes = {
  birds: PropTypes.array.isRequired,
}