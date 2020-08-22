import React from "react";

import ScrollLink from "./ScrollLink";

export default function Navarea({ device }) {
    const [view, setView] = React.useState("none");

    React.useEffect(() => {
        window.onscroll = () => {
            // console.log(document.documentElement.scrollTop);
            if (document.documentElement.scrollTop > 100) {
                setView("inline-block");
            } else setView("none");
        };
    }, []);
    return (
        <nav
            class="navbar navbar-expand"
            style={{
                display: `${view}`,
                position: "fixed",
                padding: `${device === "sm" ? "0.5rem 0" : "1rem"}`,
            }}
        >
            <div class="navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li className="section_name">
                        <ScrollLink to={"intro"} name={"Intro"} />
                    </li>
                    <li className="section_name">
                        <ScrollLink to={"projects"} name={"Projects"} />
                    </li>
                    <li className="section_name">
                        <ScrollLink to={"about"} name={"About"} />
                    </li>
                    <li className="section_name">
                        <ScrollLink to={"contacts"} name={"Contact"} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
