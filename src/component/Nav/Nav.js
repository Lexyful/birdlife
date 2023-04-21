import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <header className="nav-bar">
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1 className='birdlife-title'> Birdlife</h1>
      </NavLink>
      <div className="nav-buttons">
        <NavLink to="/">
          <button className='nav-button'>Home</button>
        </NavLink>
        <NavLink to="/bird-gallery">
          <button className='nav-button'>Gallery</button>
        </NavLink>
        <NavLink to="/favorites" >
          <button className='nav-button'>Favorite Birds</button>
        </NavLink>
      </div>
    </header>
  );
}