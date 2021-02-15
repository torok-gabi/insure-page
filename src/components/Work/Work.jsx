import React from 'react';
import "./work.css";
import desktopImage from "../../images/image-intro-desktop.jpg";
import mobileImage from "../../images/image-intro-mobile.jpg";
import bgLeftDesktop from "../../images/bg-pattern-intro-left-desktop.svg";
import bgLeftMobile from "../../images/bg-pattern-intro-left-mobile.svg";
import bgRightDesktop from "../../images/bg-pattern-intro-right-desktop.svg";
import bgRightMobile from "../../images/bg-pattern-intro-right-mobile.svg";



function Work() {
    return (
        <section className="work-container">
            <div className="img-container">
                <img className="desktop-img" src={desktopImage} alt="family-picture"/>
                <img className="mobile-img" src={mobileImage} alt="family-picture"/>
            </div>
            <div className="text-container">
                <span className="desktop-line"></span>
                <img className="desktop-bg-img" src={bgLeftDesktop} alt="line-pattern"/>
                <img className="mobile-bg-img" src={bgLeftMobile} alt="line-pattern"/>
                <div className="text">
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise 
                        and technology to help you find the plan that’s right for you. Ensure you 
                        and your loved ones are protected.
                    </p>
                    <button className="view-plans-btn">View plans</button>
                </div>
                <img className="desktop-bg-right-img" src={bgRightDesktop} alt="line-pattern"/>
                <img className="mobile-bg-right-img" src={bgRightMobile} alt="line-pattern"/>
            </div>
        </section>
    )
}

export default Work
