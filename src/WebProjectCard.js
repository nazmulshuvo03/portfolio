import React from "react";

import ImageSlider from "./ImageSlider";

function WebProjectCard({ card }) {
    return (
        <div className="card h-100 shadow-lg">
            <ImageSlider
                images={card.images}
                className="card-img-top"
                alt="screenshot"
            />
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text text-justify">{card.description}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">{card.technologies}</small>
            </div>
            <div style={{ width: "100%", padding: "0.5rem" }}>
                <a
                    href={card.visit_link}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "45%", marginRight: "15px" }}
                >
                    Visit
                </a>
                <a
                    href={card.source_link}
                    className="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "45%", marginLeft: "15px" }}
                >
                    Source
                </a>
            </div>
        </div>
    );
}

export default WebProjectCard;
