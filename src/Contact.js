import React from "react";

import { animateScroll } from "react-scroll";

export default function Contact({ id }) {
    return (
        <div className="contact" id={id}>
            <div className="contacts_title text-center">
                <i className="far fa-address-book"></i> Contact
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="name_contact">Nazmul Alom</div>
                    <div className="address contact_font">
                        <i className="contact_icon fas fa-map-marker-alt"></i>
                        34/22, Pallabi, Dhaka, Bangladesh
                    </div>
                    <div className="email contact_font">
                        <i className="contact_icon fas fa-envelope"></i>
                        nazmulshuvo03@gmail.com
                    </div>
                    <div className="phone contact_font">
                        <i className="contact_icon fas fa-phone"></i>
                        +8801791916440
                    </div>
                </div>
                <div className="col-sm-4 offset-sm-2">
                    <div className="social_links_title">Connect</div>
                    <div className="social_links">
                        <a
                            href="https://www.linkedin.com/in/nazmul-alom"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="linkedin.com/in/nazmul-alom"
                        >
                            <i className="fab fa-linkedin connections"></i>
                        </a>
                        <a
                            href="https://github.com/nazmulshuvo03"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="github.com/nazmulshuvo03"
                        >
                            <i className="fab fa-github connections"></i>
                        </a>
                        <a
                            href="https://www.kaggle.com/nazmulshuvo03"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="kaggle.com/nazmulshuvo03"
                        >
                            <i className="fab fa-kaggle connections"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center scroll_top_section">
                <button
                    onClick={() => {
                        animateScroll.scrollToTop();
                    }}
                    className="btn btn-outline-primary shadow-lg scroll_top_button"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Go To Top"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    );
}
