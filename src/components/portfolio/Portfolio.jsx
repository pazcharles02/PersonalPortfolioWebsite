import React from "react";
import "./portfolio.css"
import IMG1 from "../../assets/website-gif.gif"
import IMG2 from "../../assets/elixir-chat.gif"
import IMG3 from "../../assets/python-yahtzee.gif"
import IMG4 from "../../assets/OBS-gif.gif"

function Portfolio() {

    const data = [
        {
            id: 1,
            image: IMG1,
            title: "This Website!",
            description: "My first portfolio website using React",
            github: "https://github.com/pazcharles02/PersonalPortfolioWebsite"
        },

        {
            id: 2,
            image: IMG2,
            title: "Chat Messaging Server + Client",
            description: "An Elixir Program/Server used to handle chat messaging between multiple clients",
            github: "https://github.com/pazcharles02/ElixirChatMessagingServer"
        },

        {
            id: 3,
            image: IMG3,
            title: "Yahtzee on Command Terminal!",
            description: "A python command terminal program that lets 2 players play yahtzee",
            github: "https://github.com/pazcharles02/Charles-Paz-Yahtzee-Project"
        },

        {
            id: 4,
            image: IMG4,
            title: "OBS and Twitch Livestreaming Guide",
            description: "A step-by-step instruction manual/guide to jumpstart your Twitch streaming career using OBS!",
            github: "https://github.com/pazcharles02/OBS-and-Twitch-Livestreaming"
        }
    ]

    return (
        <section id="portfolio">
            <h5>Projects I'm Proud of</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, description, github}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank">GitHub</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;