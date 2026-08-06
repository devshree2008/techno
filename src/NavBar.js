import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>

      {/* Right side: dark mode toggle */}
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={props.toggleMode}
          checked={props.mode === 'dark'}
          id="checkNativeSwitch"
        />
        <label className="form-check-label" htmlFor="checkNativeSwitch">
          {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </label>
      </div>
    </nav>
  );
}
