import React from "react";
import PropTypes from "prop-types";

const IkoCol = ({ children, col, mdCol, smCol, className, ...props }) => {
  const iCol = col ? `iko-col-${col}` : "iko-col";
  const iMdCol = mdCol ? ` iko-col-md-${mdCol}` : "";
  const iSmCol = smCol ? ` iko-col-sm-${smCol}` : "";
  return (
    <div
      className={`${iCol}${iMdCol}${iSmCol}${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

IkoCol.propTypes = {
  col: PropTypes.number,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default IkoCol;
