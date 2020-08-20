import React from "react";

import ExperienceCard from "./ExperienceCard";

export default function Experience({ id }) {
    return (
        <div className="experience" id={id}>
            <div
                style={{
                    fontSize: "4rem",
                    padding: "1rem",
                    marginLeft: "3rem",
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
