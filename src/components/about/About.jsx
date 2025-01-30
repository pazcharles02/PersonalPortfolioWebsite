import React from "react";
import "./about.css"
import ME from "../../assets/pfpb.jpg"
import {CgPiano, FaAward, IoGameController, VscFolderLibrary} from "react-icons/all";

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
                            <small>I've worked at Apple for over 2 years, and currently still do, as an Operations Specialist!</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10+ Completed!</small>
                        </article>
                        <article className="about__card">
                            <CgPiano className="about__icon"/>
                            <h5>Musician</h5>
                            <small>I love playing the piano, guitar, and singing!</small>
                        </article>
                        <article className="about__card">
                            <IoGameController className="about__icon"/>
                            <h5>Gamer</h5>
                            <small>Video games are my favourite pastime!</small>
                            <h6>psst, check out my twitch right <a href="https://twitch.tv/wokkibokki" target="_blank"><br/><span>HERE</span></a></h6>
                        </article>
                    </div>

                    <p>
                        Hey! I'm Charles and I'm an aspiring software developer.
                        Software development is something I only really took interest in
                        a few years ago, but it has since captivated my heart with all
                        of its intricacies and enablement of allowing me to create virtually
                        anything I can imagine!
                    </p>
                    <p>
                        A large part of my life includes my hobby of livestreaming myself
                        playing video games on Twitch. Naturally, a big interest of mine in
                        the world of computer science is the development of video games, and
                        a large long-term goal of mine for the future is to develop a video
                        game of my own someday.
                    </p>
                    <p>
                        Currently, a big interest of mine lies in backend development, but
                        I'm open to taking part in fullstack or  frontend, as I'm always
                        looking to grow, learn, and absorb as much knowledge as I possibly
                        can!
                    </p>

                    <a href={"#contact"} className="btn btn-primary">Let's Talk</a>
                </div>
            </div>


        </section>
    )
}

export default About;