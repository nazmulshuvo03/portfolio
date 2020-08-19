import React from "react";

export default function Intro({ id }) {
    //console.log(id);
    return (
        <div className="intro d-flex align-items-center flex-column" id={id}>
            <div className="name mt-auto">Nazmul Alom</div>
            <div className="title">Front End Web Developer</div>
            <a
                type="button"
                className="btn btn-outline-primary mb-auto shadow"
                href="https://github.com/nazmulshuvo03/Resume/raw/master/Nazmul%20Alom.pdf"
            >
                Download Resume
            </a>
        </div>
    );
}
