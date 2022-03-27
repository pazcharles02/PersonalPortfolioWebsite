import './App.css';

import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <main className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
