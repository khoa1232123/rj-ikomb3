import React from "react";
import PropTypes from "prop-types";

const IkoTitle = ({
  tag,
  bgColor,
  seperator,
  color,
  center,
  size,
  style,
  className,
  children,
}) => {
  const Tag = tag ? tag : "h3";
  let classTxt = "iko-title";

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
    <Tag
      className={`${classTxt} ${seperator ? "c-title__seperator" : ""}`}
      style={{
        fontSize: `${size}px`,
        textAlign: `${center ? "center" : ""}`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

IkoTitle.propTypes = {
  tag: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  center: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default IkoTitle;
