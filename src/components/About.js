import profile_picture from '../pfp.jpg';

export default function About() {

    return (
        <section id="About">
            <div id="about-div">
                <div className="about-container" id="about-description">
                    <h1>
                        Hi, My name's Charles, and welcome to my Personal Website.
                    </h1>
                    <p>
                        Welcome to my website!
                        <br/>
                        <br/>
                        I'm an aspiring software developer always looking to further develop my skills as a developer
                        and learn new skills through academic and personal projects, as well as future career
                        opportunities.
                        <br/><br/>
                        On this website, you'll find a list of projects I've worked on in the past, and
                    </p>
                    <div className="Links">
                        <a
                            href={"#contact"}
                            className="link">
                            Contact me
                        </a>
                        <a
                            href={"#projects"}
                            className="link">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="about-container" id="profile-picture-container">
                    <img
                        id="profile-picture"
                        alt="Profile"
                        src={profile_picture}/>
                </div>
            </div>
        </section>
    );
}
