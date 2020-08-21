import React from "react";

import Education from "./Education";
import Experience from "./Experience";

export default function About({ id }) {
    return (
        <div className="about" id={id}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <Experience />
                </div>
                <div className="col-12 col-md-5 offset-md-1">
                    <Education />
                </div>
            </div>
        </div>
    );
}
