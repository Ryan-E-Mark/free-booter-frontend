import React from 'react';
// import emailPic from './imgs/email.png';
import insta from './imgs/instagram.png';
import mtnLogo from './imgs/mtn_srf.png';
import "./css/footer.css";

const Footer = () => {
    return(
        <footer id="footer">
            <ul className='footer-list'>
                <li>
                    <a href="/" className='mtn-a'><img src={mtnLogo} alt="logo" className='footer-logo'/></a>
                </li>
                <li className='socials-footer'>
                    <p>FOLLOW US</p>
                    <a href="https://www.instagram.com/freebooter.mtn.surf/" target="_blank" rel="noreferrer" className='footer-a'><img src={insta} alt="link to the Freebooter Instagram page" /></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
