import React from "react";

import ExperienceCard from "./ExperienceCard";

export default function Experience({ device }) {
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
                <i className="fas fa-laptop-code"></i> Experience
            </div>
            <ExperienceCard
                companyName="Pvot"
                url="https://www.pvot.in"
                position="Software Developer"
                type="Fulltime"
                from="Aprit 2020"
                to="Present"
                companyAddress="Bangalore, India"
            />
            <ExperienceCard
                companyName="Bitsimplify"
                url="https://bitsimplify.com/"
                position="Javascript Developer (React)"
                type="Intern"
                from="February 2020"
                to="March 2020"
                companyAddress="Bangalore, India"
            />
            <ExperienceCard
                companyName="Quicksilver Technologies Private Limited"
                url="https://jaiganpati.com"
                position="Javascript Developer (React)"
                type="Intern"
                from="January 2020"
                to="February 2020"
                companyAddress="Bangalore, India"
            />
        </div>
    );
}
