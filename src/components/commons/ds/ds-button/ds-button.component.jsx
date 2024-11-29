import { bool, node } from "prop-types";
import React from "react";
import "./ds-button.scss";

const DSButtonComponent = ({ children, socialSignIn, ...otherProps }) => {
    return (
        <button className={`${socialSignIn ? "social-sign-in" : ""} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

DSButtonComponent.propTypes = {
    children: node.isRequired,
    socialSignIn: bool,
};

DSButtonComponent.defaultProps = {
    socialSignIn: false,
};

export default DSButtonComponent;
