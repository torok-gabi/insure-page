import React from 'react';
import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import "./footer.css";


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="logo-content">
                <img className="logo" src={logo} alt="logo img"/>
                <div className="icon-content">
                    <img src={facebook} alt="facebook icon"/>
                    <img src={twitter} alt="twitter icon"/>
                    <img src={pinterest} alt="pinterest icon"/>
                    <img src={instagram} alt="instagram icon"/>
                </div>
            </div>
            <aside className="text-content">
                <h5>Our company</h5>
                <h5>How we work</h5>
                <h5>Why Insure?</h5>
                <h5>Check price</h5>
                <h5>Reviews</h5>
            </aside>
            <aside className="text-content">
                <h5>Help me</h5>
                <h5>FAQ</h5>
                <h5>Terms of use</h5>
                <h5>Privacy policy</h5>
                <h5>Cookies</h5>
            </aside>
            <aside className="text-content">
                <h5>Contact</h5>
                <h5>Sales</h5>
                <h5>Support</h5>
                <h5>Live chat</h5>
            </aside>
            <aside className="text-content">
                <h5>Others</h5>
                <h5>Careers</h5>
                <h5>Press</h5>
                <h5>Licenses</h5>
            </aside>
            
            <div class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://www.github.com/torok-gabi" target="_blank">Török Gabi</a>.
            </div>
        </footer>
    )
}

export default Footer;
