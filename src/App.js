import React from "react";
import "./index.css"
import About from './components/about/About'
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from './components/nav/Nav';
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";


function App() {

    return (
        <React.Fragment>
            <Header />
            <Nav />
            <About />
            <Experience />
            {/*<Services />*/}
            <Portfolio />
            <Contact />
            <Footer />
            reeeeeeeeeeee
        </React.Fragment>
    );
}

export default App;