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
            <div className="card-footer">
                <div className="row">
                    <div className="col-sm-6">
                        <a
                            href={card.visit_link}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a
                            href={card.source_link}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebProjectCard;
