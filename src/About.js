import React from "react";

import Education from "./Education";
import Experience from "./Experience";

export default function About({ id, device }) {
    return (
        <div
            style={{
                minHeight: "100vh",
                padding: `${device === "sm" ? "0 1rem" : "0 5rem"}`,
            }}
            id={id}
        >
            <div className="row">
                <div className="col-12 col-md-6 p-0">
                    <Experience device={device} />
                </div>
                <div className="col-12 col-md-5 offset-md-1 p-0">
                    <Education device={device} />
                </div>
            </div>
        </div>
    );
}
