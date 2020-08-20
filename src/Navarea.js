import React from "react";

import ScrollLink from "./ScrollLink";

export default function Navarea() {
    return (
        <nav class="navbar navbar-expand-lg">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon">
                    <i className="fas fa-bars my-2"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
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

        // <div className="navarea">
        //     <div className="nav_content">
        //         <ul className="">
        //             <li className="section_name">
        //                 <ScrollLink to={"intro"} name={"Intro"} />
        //             </li>
        //             <li className="section_name">
        //                 <ScrollLink to={"projects"} name={"Projects"} />
        //             </li>
        //             <li className="section_name">
        //                 <ScrollLink to={"education"} name={"Education"} />
        //             </li>
        //             <li className="section_name">
        //                 <ScrollLink to={"contacts"} name={"Contacts"} />
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    );
}
