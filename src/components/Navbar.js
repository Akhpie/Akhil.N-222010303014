import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Train App</div>
    <ul className="nav-links">
      <li>
        {/* <a href="#home">Home</a> */}
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <Link to="/others">SingleTrain</Link>
      </li>
    </ul>
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
  </nav>
);

export default Navbar;
