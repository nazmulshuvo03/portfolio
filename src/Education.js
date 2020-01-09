import React from "react";

export default function Education({ id }) {
    return (
        <div className="education" id={id}>
            <div className="education_title text-center">
                <i className="fas fa-university"></i> Education
            </div>
            <div className="university_degree">
                <div className="versity_dept">BSc (Hons) in Mathematics</div>
                <div className="versity_name">University of Barisal</div>
                <div className="versity_area">Barisal, Bangladesh</div>
            </div>
            <div className="online_degree_title">Online Certifications</div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                Neural Networks and Deep Learning
                            </h5>
                            <p className="card-text">
                                <b>Certified By: </b>Coursera
                            </p>{" "}
                        </div>

                        <div className="card-footer">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/64XFYX4W2646"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                Convolutional Neural Networks
                            </h5>
                            <p className="card-text">
                                <b>Certified By: </b>Coursera
                            </p>{" "}
                        </div>

                        <div className="card-footer">
                            <a
                                href="https://www.coursera.org/account/accomplishments/certificate/55ZQB9AFLLQL"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100 shadow">
                        <div className="card-body">
                            <h5 className="card-title">
                                LICT Top-up IT Training
                            </h5>
                            <p className="card-text">
                                <b>Certified By: </b>George Washington
                                University, USA
                                <br />
                                <b>Under: </b>NASSCOM IT-ITES Sector Skill
                                Council (SSC) Certification
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
