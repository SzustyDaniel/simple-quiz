import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className='header-container'>
      <h3>Simple Quiz</h3>
      <ul className='header-link-list'>
        <li className='header-link-list'>
          <NavLink
            className='header-link-item'
            activeClassName='header-link-active'
            exact
            to='/home'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className='header-link-item'
            activeClassName='header-link-active'
            to='/game/create'>
            New Game
          </NavLink>
        </li>
        <li className='header-link-item'>
          <NavLink
            className='header-link-item'
            activeClassName='header-link-active'
            to='/top'>
            Top scores
          </NavLink>
        </li>
        <li className='header-link-item'>
          <NavLink
            className='header-link-item'
            activeClassName='header-link-active'
            to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
