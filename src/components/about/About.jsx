import React from "react";
import "./about.css"
import ME from "../../assets/pfp.jpg"
import {FaAward, VscFolderLibrary} from "react-icons/all";

function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt={"About Image"}/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>None! Hopefully you can be my first :D</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>5+ Completed!</small>
                        </article>
                    </div>

                    <p>
                        REEEEEEEEEEEE Lorem ipsum go here
                    </p>

                    <a href={"#contact"} className="btn btn-primary">Let's Talk</a>
                </div>
            </div>


        </section>
    )
}

export default About;