import React from "react";

export default function ExperienceCard(props) {
    return (
        <div
            style={{
                width: "100%",
                border: "2px solid #333",
                margin: "1rem 0",
                padding: "1rem",
                borderRadius: "5px 5px 5px 5px/25px 25px 25px 5px",
            }}
            className="shadow"
        >
            <div style={{}}>
                <span
                    style={{
                        fontFamily: "'Cabin Sketch', cursive",
                        fontSize: "2rem",
                        fontWeight: "500",
                    }}
                >{`${props.position} `}</span>
                <span style={{ color: "#999" }}> {props.type}</span>
            </div>
            <a
                href={props.url}
                className="company_name"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: "#212121",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                }}
            >
                {props.companyName}
            </a>
            <div
                style={{ fontStyle: "italic", fontSize: "1rem" }}
            >{`${props.from} - ${props.to}`}</div>
            <div>{props.companyAddress}</div>
        </div>
    );
}
