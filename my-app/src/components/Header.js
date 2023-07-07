import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';
import '../styles/Header.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/catindex" activeClassName="active" className="nav-link">Cat Index</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/catnew" activeClassName="active" className="nav-link">Add Cat</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
