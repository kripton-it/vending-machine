import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact to="/" activeClassName="Navbar-active">
          Home
        </NavLink>
        <NavLink exact to="/chips" activeClassName="Navbar-active">
          Chips
        </NavLink>
        <NavLink exact to="/sardines" activeClassName="Navbar-active">
          Sardines
        </NavLink>
        <NavLink exact to="/soda" activeClassName="Navbar-active">
          Soda
        </NavLink>
      </div>
    );
  }
}

export default Navbar;