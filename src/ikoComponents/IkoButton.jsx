import PropTypes from "prop-types";
import React from "react";

const IkoButton = ({
  bgColor,
  color,
  size,
  icon,
  className,
  onClick,
  children,
  iconRight,
  outline,
  borderColor,
  block,
  ...props
}) => {
  let classTxt = "iko-btn";

  if (outline) {
    classTxt += " iko-btn-outline";
  } else if (bgColor) {
    classTxt += " bg-" + bgColor;
  } else {
    classTxt += " bg-blue";
  }

  if (block) {
    classTxt += " iko-btn-block";
  }

  if (borderColor) {
    classTxt += " border-" + borderColor;
  }

  if (color) {
    classTxt += " color-" + color;
  }

  if (size) {
    classTxt += " iko-btn-" + size;
  }
  if (className) {
    classTxt += " " + className;
  }

  return (
    <button className={classTxt} onClick={onClick} {...props}>
      {icon && !iconRight ? <i className={icon + " icon-left"}></i> : null}
      <span className="iko-btn__txt">{children}</span>
      {icon && iconRight ? <i className={icon + " icon-right"}></i> : null}
    </button>
  );
};

IkoButton.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  iconRight: PropTypes.bool,
  children: PropTypes.any,
  outline: PropTypes.bool,
  borderColor: PropTypes.string,
  block: PropTypes.bool,
};

export default IkoButton;
