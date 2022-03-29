import React from "react";
import "./index.css"
import About from './components/about/About'
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from './components/nav/Nav';
import Portfolio from "./components/portfolio/Portfolio";


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
        </React.Fragment>
    );
}

export default App;