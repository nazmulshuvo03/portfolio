import React from "react";

export default function Intro({ id }) {
    //console.log(id);
    return (
        // <div className="intro d-flex align-items-center flex-column" id={id}>
        //     <div className="name mt-auto">
        //         <span>Nazmul</span>
        //         <span style={{ color: "#F2F2F2" }}> Alom</span>
        //     </div>
        //     <div className="title">Front End Web Developer</div>
        //     <a
        //         type="button"
        //         className="btn btn-outline-primary mb-auto shadow"
        //         href="https://github.com/nazmulshuvo03/Resume/raw/master/Nazmul%20Alom.pdf"
        //     >
        //         Download Resume
        //     </a>
        // </div>

        <div id={id}>
            <header>
                <div class="overlay"></div>
                <video
                    playsinline="playsinline"
                    autoplay="autoplay"
                    muted="muted"
                    loop="loop"
                >
                    <source
                        // src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                        src="https://static.videezy.com/system/resources/previews/000/018/969/original/black.mp4"
                        type="video/mp4"
                    />
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <h1 class="display-3">Nazmul Alom</h1>
                            <p class="lead mb-3">Front End Web Developer</p>
                            <a
                                type="button"
                                className="btn btn-outline-secondary mb-auto shadow"
                                href="https://github.com/nazmulshuvo03/Resume/raw/master/Nazmul%20Alom.pdf"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
