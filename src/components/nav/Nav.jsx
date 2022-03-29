import React from "react";
import "./nav.css"
import {AiOutlineHome, BiBook, AiOutlineUser, BiMessageAltDetail, AiFillProject} from "react-icons/all";
import {useState} from "react"

function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")}
               className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
            <a href={"#about"} onClick={() => setActiveNav("#about")}
               className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
            <a href={"#experience"} onClick={() => setActiveNav("#experience")}
               className={activeNav === "#experience" ? "active" : ""}><BiBook/></a>
            <a href={"#portfolio"} onClick={() => setActiveNav("#portfolio")}
               className={activeNav === "#portfolio" ? "active" : ""}><AiFillProject/></a>
            <a href={"#contact"} onClick={() => setActiveNav("#contact")}
               className={activeNav === "#contact" ? "active" : ""}><BiMessageAltDetail/></a>
        </nav>
    )
}

export default Nav;