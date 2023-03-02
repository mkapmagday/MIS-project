import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
const NavigationBar = () => {
    return (
      <nav class="navbar">
        <a href="/" class="logo">Logo</a>
        <div class="navbar-items">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/services&solutions">Services & Solutions</a>
          <a href="/Clients">Clients</a>
          <a href="/About">Careers</a>
          <a href="/Contact">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;
  
