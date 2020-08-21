import React from "react";

import { Link } from "react-scroll";

function ScrollLink({ to, name }) {
    return (
        <Link
            activeClass="active"
            to={to}
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-70}
            delay={500}
            duration={1000}
            className="btn btn-outline-primary"
        >
            {name}
        </Link>
    );
}
export default ScrollLink;
