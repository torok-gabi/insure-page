import React from 'react';
import "./different.css";
import snappy from "../../images/icon-snappy-process.svg";
import affordable from "../../images/icon-affordable-prices.svg";
import people from "../../images/icon-people-first.svg";
import workDesktop from "../../images/bg-pattern-how-we-work-desktop.svg";
import workMobile from "../../images/bg-pattern-how-we-work-mobile.svg";

const Different = () => {
    return (
        <session className="different-container">
            <span className="line"></span>
            <h2>We’re different</h2>
            <aside className="content">
                <img src={snappy} alt="bolt icon"/>
                <h4>Snappy Process</h4>
                <p>Our application process can be completed in minutes, not hours. Don’t get 
                    stuck filling in tedious forms.</p>
            </aside>
            <aside className="content">
                <img src={affordable} alt="dollar sign icon"/>
                <h4>Affordable Prices</h4>
                <p>We don’t want you worrying about high monthly costs. Our prices may be low, 
                    but we still offer the best coverage possible.</p>
            </aside>
            <aside className="content">
                <img src={people} alt="people icon"/>
                <h4>People First</h4>
                <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                    sure you’re covered when you need it.</p>
            </aside>
            <aside className="how-we-work">
                <h2>Find out more about how we work</h2>
                <button className="view-plans-btn">How we work</button>
                <img className="work-desktop" src={workDesktop} alt="line pattern"/>
                <img className="work-mobile" src={workMobile} alt="line pattern"/>
            </aside>
        </session>
    )
}

export default Different;
