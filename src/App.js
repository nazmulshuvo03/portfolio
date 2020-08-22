import React from "react";

import Navarea from "./Navarea";
import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

function App() {
    const [device, setDevice] = React.useState("lg");
    React.useEffect(() => {
        if (window.innerWidth < 989) {
            setDevice("sm");
        } else setDevice("lg");
        // console.log(window);
    }, []);
    return (
        <div className="resume">
            <Navarea device={device} />
            <Intro device={device} id="intro" />
            <Projects device={device} id="projects" />
            <About device={device} id="about" />
            <Contact device={device} id="contacts" />
        </div>
    );
}

export default App;
