import React from "react";
import "./portfolio.css"
import IMG1 from "../../assets/cmd-gif.gif"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"

function Portfolio() {

    // const data = [
    //     {
    //         id: 1,
    //         image: IMG1,
    //         title: "Project 1",
    //         github: "https://github.com",
    //         demo: "https://dribbble.com/Alien_pixels"
    //     },
    //
    //     {
    //         id: 2,
    //         image: IMG2,
    //         title: "Project 2",
    //         github: "https://github.com",
    //         demo: "https://dribbble.com/Alien_pixels"
    //     },
    //
    //     {
    //         id: 3,
    //         image: IMG3,
    //         title: "Project 3",
    //         github: "https://github.com",
    //         demo: ""
    //     }
    // ]

    return (
        <section id="portfolio">
            <h5>Projects I'm Proud of</h5>
            <h2>Portfolio</h2>

            {/*<div className="container portfolio__container">*/}
            {/*    {*/}
            {/*        data.map(({id, image, title, github, demo}) => {*/}
            {/*            return (*/}
            {/*                <article key={id} className="portfolio__item">*/}
            {/*                    <div className="portfolio__item-image">*/}
            {/*                        <img src={image} alt={title}/>*/}
            {/*                    </div>*/}
            {/*                    <h3>{title}</h3>*/}
            {/*                    <div className="portfolio__item-cta">*/}
            {/*                        <a href={github} className="btn" target="_blank">GitHub</a>*/}
            {/*                        <a href={demo === "" ? "" : demo} className="btn btn-primary" target="_blank">{demo === "" ? "" : "Live Demo"}</a>*/}
            {/*                    </div>*/}
            {/*                </article>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="Portfolio image 1"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="Portfolio image 1"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="Portfolio image 1"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">GitHub</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="Portfolio image 1"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">GitHub</a>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Portfolio;