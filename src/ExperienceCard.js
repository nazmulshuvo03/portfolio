import React from "react";

export default function ExperienceCard(props) {
    return (
        <div
            style={{
                width: "35rem",
                border: "1px solid rgba(0,0,0,.125)",
                margin: "1rem 0",
                padding: "1rem",
            }}
            className="shadow"
        >
            <div style={{}}>
                <span style={{ fontSize: "2rem" }}>{`${props.position} `}</span>
                <span style={{ color: "#999" }}> {props.type}</span>
            </div>
            <a
                href={props.url}
                className="company_name"
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
