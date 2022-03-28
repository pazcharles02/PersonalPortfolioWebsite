import React from "react";
import "./nav.css"
import {AiOutlineHome, BiBook, AiOutlineUser, RiServiceLine, BiMessageAltDetail} from "react-icons/all";

function Nav() {
    return (
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBook/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contact"><BiMessageAltDetail/></a>
        </nav>
    )
}

export default Nav;