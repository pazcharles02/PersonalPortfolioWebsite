import React from "react"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa";
import {FaTwitch} from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/charles-paz/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/pazcharles02" target="_blank"><FaGithub/></a>
            <a href="https://twitch.tv/wokkibokki" target="_blank"><FaTwitch/></a>
        </div>
    )
}

export default HeaderSocials;