import React from "react";

import Education from "./Education";
import Experience from "./Experience";

export default function About({ id }) {
    return (
        <div className="about" id={id}>
            <div className="row" style={{ width: "80rem" }}>
                <div className="col">
                    <Experience />
                </div>
                <div className="col">
                    <Education />
                </div>
            </div>
        </div>
    );
}
