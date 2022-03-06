import React from "react";

export const IkoSliderItem = ({ children }) => {
  return <div className="iko-slider__item">{children}</div>;
};

const IkoSlider = ({ slider }) => {
  return (
    <div className="iko-slider">
      <div className="iko-slider__list"></div>
      <div className="iko-slider__btn">
        <div className="iko-slider__btn__left">
          <i class="far fa-chevron-left"></i>
        </div>
        <div className="iko-slider__btn__right">
          <i class="far fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default IkoSlider;
