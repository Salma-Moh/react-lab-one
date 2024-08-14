import React from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Navbar() {

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li className="profile">
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
