import React from "react";

// import coursera from "./Image/coursera.png";
import deeplearning from "./Image/deeplearning.png";

export default function Education({ device }) {
    return (
        <div style={{ minHeight: "100vh" }}>
            <div
                style={{
                    fontSize: `${device === "sm" ? "3rem" : "4rem"}`,
                    padding: "2rem 0 1rem",
                    marginLeft: `${device === "sm" ? "0rem" : "3rem"}`,
                    fontWeight: "700",
                }}
            >
                <i className="fas fa-university"></i> Education
            </div>
            <div>
                <div>
                    <div style={{ fontSize: "1.5rem" }}>
                        BSc (Hons) in Mathematics
                    </div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                        University of Barisal
                    </div>
                    <div style={{ fontSize: "1.2rem", color: "#999" }}>
                        Barisal, Bangladesh
                    </div>
                </div>
                <div
                    style={{
                        fontSize: `${device === "sm" ? "1.5rem" : "2.5rem"}`,
                        padding: "2rem 0 0rem",
                    }}
                >
                    Online Certifications
                </div>
                <div
                    className="shadow"
                    style={{
                        width: "100%",
                        border: "2px solid #333",
                        padding: "1rem",
                        margin: "1rem 0",
                        borderRadius: "5px 5px 5px 5px/25px 25px 25px 5px",
                    }}
                >
                    <h5 className="card-title">
                        Neural Networks and Deep Learning
                    </h5>
                    <div>
                        <span>
                            <b>Certified By: </b>Coursera
                        </span>{" "}
                        <a
                            href="https://www.coursera.org/account/accomplishments/certificate/64XFYX4W2646"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "10px" }}
                        >
                            <img
                                src={deeplearning}
                                alt="Coursera"
                                height="30px"
                                width="30px"
                            />
                        </a>
                    </div>
                </div>
                <div
                    className="shadow"
                    style={{
                        width: "100%",
                        border: "2px solid #333",
                        padding: "1rem",
                        margin: "1rem 0",
                        borderRadius: "5px 5px 5px 5px/25px 25px 25px 5px",
                    }}
                >
                    <h5 className="card-title">
                        Convolutional Neural Networks
                    </h5>
                    <div style={{ width: "100%" }}>
                        <span>
                            <b>Certified By: </b>Coursera
                        </span>{" "}
                        <a
                            href="https://www.coursera.org/account/accomplishments/certificate/55ZQB9AFLLQL"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "10px" }}
                        >
                            <img
                                src={deeplearning}
                                alt="Coursera"
                                height="30px"
                                width="30px"
                            />
                        </a>
                    </div>
                </div>
                <div
                    className="shadow"
                    style={{
                        width: "100%",
                        border: "2px solid #333",
                        padding: "1rem",
                        margin: "1rem 0",
                        borderRadius: "5px 5px 5px 5px/25px 25px 25px 5px",
                    }}
                >
                    <h5 className="card-title">LICT Top-up IT Training</h5>
                    <p className="card-text">
                        <b>Certified By: </b>George Washington University, USA
                        <br />
                        <b>Under: </b>NASSCOM IT-ITES Sector Skill Council (SSC)
                        Certification
                    </p>
                </div>
            </div>
        </div>
    );
}
