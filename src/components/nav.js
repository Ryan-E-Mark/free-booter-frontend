import React from 'react';
import './nav.css'
import '../App.css'

function Nav() {
    return (
        <nav className="nav-bar">
            <div id="mtn-logo"></div>
            <ul className="link-list">
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;