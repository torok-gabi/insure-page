import React, {useState} from 'react';
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import logo from "../../images/logo.svg";
import navImg from "../../images/bg-pattern-mobile-nav.svg";
import "./header.css";

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const clickHandler = () => {
        setSidebar(!sidebar)
    }
    return (
        <header className="header">
            <nav className="navbar">
                <span><img src={logo} alt="logo img"/></span>
                <ul className="navbar-list">
                    <li className="nav-item"><a href="">How we work</a></li>
                    <li className="nav-item"><a href="">Blog</a></li>
                    <li className="nav-item"><a href="">Account</a></li>
                    <li className="nav-item"><a href="">View plans</a></li>
                    <img className="nav-pattern" src={navImg} alt="line pattern"/>
                </ul>
                <div className={sidebar ? "hamburger active" : "hamburger"}>
                    <span className="hamburger-icon" onClick={clickHandler}><img src={hamburger} alt="hamburger icon"/></span>
                </div>
                <div className={sidebar ? "close active" : "close"}>
                    <span className="close-icon" onClick={clickHandler}><img src={close} alt="menu close icon"/></span>
                </div>
            </nav>
            <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-list">
                    <li className="nav-item"><a href="">How we work</a></li>
                    <li className="nav-item"><a href="">Blog</a></li>
                    <li className="nav-item"><a href="">Account</a></li>
                    <li className="nav-item"><a href="">View plans</a></li>
                    <img className="nav-pattern" src={navImg} alt="line pattern"/>
                </ul>    
            </div>
        </header>
    )
}

export default Header
