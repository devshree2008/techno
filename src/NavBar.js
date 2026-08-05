import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar(props) {

  return (
    <div>
      <nav className="navbar">
        <h2 className="tech-text">{props.h2}</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <header className="App-header">
        <ul className="nav-links">
          <li><Link to ="/"> Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
         {/* <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} value="" id="checkNativeSwitch" switch/>
            <label className="form-check-label" htmlFor="checkNativeSwitch">
              {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
            </label>
          </div>*/}
        </ul>
      </header>
    </div>
  )
}
