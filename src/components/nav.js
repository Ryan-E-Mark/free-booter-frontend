import React from 'react';
import mtnLogo from './imgs/mtn_srf.png';
import './css/nav.css'
import '../App.css'

function Nav() {
    return (
        <section className='nav'>
            <nav className="nav-bar">
                <a href="/" className='mtn-a'><img src={mtnLogo} alt="logo" className='mtn-logo'/></a>
                <ul className="link-list">
                    <li><a href="/products" className='nav-a'>Products</a></li>
                    <li><a href="/about" className='nav-a'>About</a></li>
                    <li><a href="/contact" className='nav-a'>Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Nav;