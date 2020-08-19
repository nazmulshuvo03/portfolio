import React from "react";

import Navarea from "./Navarea";
import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

function App() {
    return (
        <div className="resume">
            <Navarea />
            <Intro id="intro" />
            <Projects id="projects" />
            <About id="about" />
            <Contact id="contacts" />
        </div>
    );
}

export default App;
