import React from "react";

import { animateScroll } from "react-scroll";


export default function Contact({ id }) {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("gmail", templateId, variables)
            .then((res) => {
                console.log("Email successfully sent!", res);
                setState({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            // Handle errors here however you like, or use a React error boundary
            .catch((err) =>
                console.error(
                    "Oh well, you failed. Here some thoughts on the error that occured:",
                    err
                )
            );
    };

    const onChange = (event) => {
        setState({ ...state, [event.target.id]: event.target.value });
        // console.log(state);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        // console.log(state);
        const templateId = "template_I2impR4I";
        sendFeedback(templateId, state);
    };

    return (
        <div className="contact" id={id}>
            <div className="contacts_title text-center">
                <i className="far fa-address-book"></i> Contact
            </div>
            <div className="row">
                <form
                    style={{
                        width: "50rem",
                        margin: "0 auto",
                        border: "2px solid #333",
                        padding: "1rem 2rem",
                        borderRadius:
                            "155px 25px 15px 25px/25px 5px 35px 555px ",
                    }}
                    onSubmit={formSubmit}
                    method="POST"
                >
                    <div className="row">
                        <div className="col pl-0">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    aria-describedby="nameHelp"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className="col pr-0">
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            placeholder="Your Message Here"
                            onChange={onChange}
                            style={{ height: "15rem", width: "100%" }}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-outline-primary"
                        style={{ width: "10rem" }}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="row" style={{ margin: "4rem 0" }}>
                <div className="col-12 col-md-4 offset-md-2">
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
                <div className="col-12 col-md-4 offset-md-2">
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
            <div
                className="row justify-content-center"
                style={{ padding: "2rem 0" }}
            >
                <button
                    onClick={() => {
                        animateScroll.scrollToTop();
                    }}
                    className="btn btn-outline-primary shadow-lg"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Go To Top"
                    style={{ fontSize: "2rem" }}
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </div>
    );
}
