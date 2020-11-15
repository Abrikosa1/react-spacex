import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../logo.svg';
import './header.css'

const Header = props => (
  <header className="header">
    <Link to="/react-spacex/">
      <img
        src={logo}
        alt="Logo Space X"
        className="logo"
      />
    </Link>
    <nav className="main-nav nav">
      <ul className="list">
        {props.rockets.map((item, i) => (
          <li key={i} className="item">
            <Link 
              to='/react-spacex/rocket'
              onClick={() => {
                props.changeRocket(item);
              }}
              className="item-link">
              {item}
            </Link>
          </li>
        ))}
      
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <NavLink exact to="/react-spacex/" className="item-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="item">
          <NavLink to="/react-spacex/calendar" className="item-link" activeClassName="active">Calendar</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;