import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Train App</div>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/others">SingleTrain</Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <Link to="/form">Contact</Link>
      </li>
    </ul>

    <div className="search-bar">
      <TextField variant="outlined" placeholder="Search..." fullWidth />
      <Button variant="contained" color="success">
        Search
      </Button>
    </div>
  </nav>
);

export default Navbar;
