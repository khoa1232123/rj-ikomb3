import PropTypes from "prop-types";
import React from "react";

const IkoRow = ({ children, className, ...props }) => {
  return (
    <div className={`iko-row${className ? " " + className : ""}`} {...props}>
      {children}
    </div>
  );
};

IkoRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default IkoRow;
