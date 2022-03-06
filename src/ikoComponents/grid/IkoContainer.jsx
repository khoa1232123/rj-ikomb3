import PropTypes from "prop-types";
import React from "react";

const IkoContainer = ({ children, fluid, className, ...props }) => {
  const container = fluid ? "container-fluid" : "container";
  return (
    <div
      className={`${container}${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

IkoContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  fluid: PropTypes.bool,
};

export default IkoContainer;
