import React from "react";
import "../css/navbar.css";

function Navbar() {
    let pages = {"Home": 1, "About Me": 2, "Projects": 3, "Contact": 4};

    function changeText(name) {
        changeColour();
        document.getElementById(name).textContent = "you're hovering!!"
    }
    function changeText2(name) {
        changeColour2();
        document.getElementById(name).textContent = name;
    }

    function changeColour() {
        document.getElementById("navbar").setAttribute("style", "background-color: white");
    }

    function changeColour2() {
        document.getElementById("navbar").setAttribute("style", "background-color: darkblue");
    }

    return(
        <React.Fragment>
            <div id="navbar" onMouseEnter={() => changeColour()} onMouseLeave={() => changeColour2()}>
                {Object.entries(pages).map(([name, number]) => (
                    <div className="navbar-element" id={name} onClick={() =>
                        console.log(name)} onMouseEnter={() => changeText(name)} onMouseLeave={() => changeText2(name)}>
                        {name}
                    </div>
                ))}
                {/*<div className="clearfix"/>*/}
            </div>
        </React.Fragment>
    )
}

export default Navbar;