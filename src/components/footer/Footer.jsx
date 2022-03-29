import React from "react";
import "./footer.css"
import {FiInstagram, FiLinkedin, FiTwitch} from "react-icons/all";

function Footer() {
    return (
        <footer>
            <a href="#" className="footer__logo">CHARLES</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Experiences</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com/in/charles-paz"><FiLinkedin/></a>
                <a href="https://www.instagram.com/zap_selrahc/"><FiInstagram/></a>
                <a href="https://twitch.tv/wokkibokki"><FiTwitch/></a>
            </div>
        </footer>
    )
}

export default Footer;