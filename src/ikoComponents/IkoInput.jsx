import React from "react";
import PropTypes from "prop-types";

const IkoInput = ({
  type,
  className,
  size,
  bgColor,
  color,
  name,
  value,
  label,
  placeholder,
  labelColor,
  defaultValue,
  labelEffect,
  onChange,
  ...props
}) => {
  let classTxt = "iko-input";
  let classInputTxt = "iko-input__input";
  let classLabelTxt = "iko-input__label";
  if (className) {
    classTxt += " " + className;
  }

  if (size) {
    classTxt += " iko-input-" + size;
  }

  if (bgColor) {
    classInputTxt += " bg-" + bgColor;
  }

  if (color) {
    classInputTxt += " color-" + color;
  }

  if (labelColor) {
    classLabelTxt += " color-" + labelColor;
  }

  if (labelEffect) {
    classLabelTxt += " iko-input__label__effect";
  }

  return (
    <div className={classTxt}>
      {label && !labelEffect ? (
        <label htmlFor={name} className={classLabelTxt}>
          {label}
        </label>
      ) : null}
      <input
        type={type ? type : "text"}
        name={name}
        value={value}
        placeholder={labelEffect ? " " : placeholder}
        defaultValue={defaultValue}
        className={classInputTxt}
        onChange={onChange}
        {...props}
      />
      {label && labelEffect ? (
        <label htmlFor={name} className={classLabelTxt}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

IkoInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  labelColor: PropTypes.string,
  defaultValue: PropTypes.string,
  labelEffect: PropTypes.bool,
  onChange: PropTypes.func,
};

export default IkoInput;
