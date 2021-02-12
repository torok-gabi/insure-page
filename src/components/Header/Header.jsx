import React, {useState} from 'react';
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import bgMobilImg from "../../images/bg-pattern-how-we-work-mobile.svg";
import "./header.css";

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const clickHandler = () => {
        setSidebar(!sidebar)
    }
    return (
        <header className="header">
            <nav className="navbar">
                <a href="" className="Navbar-brand">Insure</a>
                <div className={sidebar ? "hamburger active" : "hamburger"}>
                    <span className="hamburger-icon" onClick={clickHandler}><img src={hamburger} alt="hamburger icon"/></span>
                </div>
                <div className={sidebar ? "close active" : "close"}>
                    <span className="close-icon" onClick={clickHandler}><img src={close} alt="menu close icon"/></span>
                </div>
            </nav>
            <ul className={sidebar ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item"><a href="">How we work</a></li>
                <li className="nav-item"><a href="">Blog</a></li>
                <li className="nav-item"><a href="">Account</a></li>
                <li className="nav-item"><a href="">View plans</a></li>
                <div className="bg-img">
                    {/* <img className="menu-bg" src={bgMobilImg} alt=""/> */}
                </div>
            </ul>    
        </header>
    )
}

export default Header