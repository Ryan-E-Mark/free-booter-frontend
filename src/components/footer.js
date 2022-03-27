import React from 'react';
// import emailPic from './imgs/email.png';
import insta from './imgs/instagram.png';
import "./css/footer.css";

const Footer = () => {
    return(
        <footer id="footer">
            <ul className='footer-list'>
                <li>
                    <a href="https://www.instagram.com/freebooter.mtn.surf/" target="_blank" rel="noreferrer" className='footer-a'><img src={insta} alt="link to the Freebooter Instagram page" className='footer-img'/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/freebooter.mtn.surf/" target="_blank" rel="noreferrer" className='footer-a'><img src={insta} alt="link to the Freebooter Instagram page" className='footer-img'/></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
