import React from 'react';
import './nav.css'

function Nav() {
    return (
        <nav className="nav-bar">
            <div id="mtn-logo">
                <img id="surf-logo" src="http://localhost:3000/static/media/mtn_srf.9aa238d1.png" alt="company logo"/>
            </div>
            <ul className="link-list">
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;