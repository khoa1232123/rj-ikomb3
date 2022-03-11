import React, { useEffect, useLayoutEffect, useRef } from "react";
import { IkoButton } from ".";

const IkoSlider = ({ children, className }) => {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);

  let txtClass = "iko-slider";

  if (className) {
    txtClass += " " + className;
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      const slider = sliderRef.current;
      let i = 1;
      const sliderContent = slider.querySelector(
        ".iko-slider__content"
      ).children;
      for (const slide of sliderContent) {
        slide.classList.add(`iko-slider__item__${i++}`);
      }
    }, 500);
  }, []);

  const nextSlider = () => {
    const slider = sliderContentRef.current.children;
    for (const slide of slider) {
      for (let i = 1; i <= slider.length; i++) {
        if (slide.classList.contains(`iko-slider__item__1`)) {
          slide.classList.replace(
            `iko-slider__item__1`,
            `iko-slider__item__${slider.length}`
          );
          break;
        }
        if (slide.classList.contains(`iko-slider__item__${i}`)) {
          slide.classList.replace(
            `iko-slider__item__${i}`,
            `iko-slider__item__${i - 1}`
          );
          break;
        }
      }
    }
  };

  const prevSlider = () => {
    const slider = sliderContentRef.current.children;
    for (const slide of slider) {
      for (let i = 1; i <= slider.length; i++) {
        if (slide.classList.contains(`iko-slider__item__${i}`)) {
          slide.classList.replace(
            `iko-slider__item__${i}`,
            `iko-slider__item__${i + 1}`
          );
          break;
        }
        if (slide.classList.contains(`iko-slider__item__${slider.length}`)) {
          slide.classList.replace(
            `iko-slider__item__${slider.length}`,
            `iko-slider__item__1`
          );
          break;
        }
      }
    }
  };

  useEffect(() => {
    setInterval(() => {
      nextSlider();
    }, 3000);
  }, []);

  return (
    <div>
      <div className={txtClass} ref={sliderRef}>
        <div className="iko-slider__content" ref={sliderContentRef}>
          {children}
        </div>
        <div className="iko-slider__actions">
          <div className="iko-slider__prev">
            <IkoButton onClick={() => prevSlider()}>
              <i className="fa-solid fa-chevron-left"></i>
            </IkoButton>
          </div>
          <div className="iko-slider__next">
            <IkoButton onClick={() => nextSlider()}>
              <i className="fa-solid fa-chevron-right"></i>
            </IkoButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IkoSlider;
