import React from "react";
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/pfpa.jpg"
import HeaderSocials from "./HeaderSocials";

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Charles Paz</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <HeaderSocials/>
                <a href={"#contact"} className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;