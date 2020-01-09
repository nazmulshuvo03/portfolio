import React from "react";

import Navarea from "./Navarea";
import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";

function App() {
    return (
        <div className="resume">
            <div className="row">
                <div className="col-sm-2 left_section">
                    <Navarea />
                </div>
                <div className="col-sm-10 right_section">
                    <Intro id="intro" />
                    <Projects id="projects" />
                    <Education id="education" />
                    <Contact id="contacts" />
                </div>
            </div>
        </div>
    );
}

export default App;
