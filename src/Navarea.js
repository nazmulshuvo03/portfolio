import React from "react";

import ScrollLink from "./ScrollLink";

export default function Navarea() {
    return (
        <div className="navarea">
            <div className="nav_content">
                <ul className="">
                    <li className="section_name">
                        <ScrollLink to={"intro"} name={"Intro"} />
                    </li>
                    <li className="section_name">
                        <ScrollLink to={"projects"} name={"Projects"} />
                    </li>
                    <li className="section_name">
                        <ScrollLink to={"education"} name={"Education"} />
                    </li>
                    <li className="section_name">
                        <ScrollLink to={"contacts"} name={"Contacts"} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
