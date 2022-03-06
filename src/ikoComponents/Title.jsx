import PropTypes from "prop-types";
import React from "react";

const Title = ({
  children,
  borderBottom,
  bgColor,
  color,
  className,
  ...props
}) => {
  let classTxt = "title";
  if (borderBottom) {
    classTxt += " title__border";
  }

  if (bgColor) {
    classTxt += " bg-" + bgColor;
  }

  if (color) {
    classTxt += " color-" + color;
  }

  if (className) {
    classTxt += " " + className;
  }

  return (
    <h3 className={classTxt} {...props}>
      {children}
    </h3>
  );
};

Title.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  borderBottom: PropTypes.bool,
  children: PropTypes.string,
};

export default Title;
