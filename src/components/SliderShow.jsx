import React, { useEffect, useRef } from "react";
import { IkoButton } from "../ikoComponents";

const SliderShow = () => {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let i = 1;
    const sliderContent = slider.querySelector(".iko-slider__content").children;
    for (const slide of sliderContent) {
      slide.classList.add(`iko-slider__item__${i++}`);
    }
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
        console.log(i);
      }
    }
  };

  const prevSlider = () => {
    const slider = sliderContentRef.current.children;
    for (const slide of slider) {
      for (let i = 1; i <= slider.length; i++) {
        if (slide.classList.contains(`iko-slider__item__${slider.length}`)) {
          slide.classList.replace(
            `iko-slider__item__${slider.length}`,
            `iko-slider__item__1`
          );
          break;
        }
        if (slide.classList.contains(`iko-slider__item__${i}`)) {
          slide.classList.replace(
            `iko-slider__item__${i}`,
            `iko-slider__item__${i + 1}`
          );
          break;
        }
        console.log(i);
      }
    }
  };

  const handleClickNext = () => {
    nextSlider();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="iko-slider" ref={sliderRef}>
        <div className="iko-slider__content" ref={sliderContentRef}>
          <div className="iko-slider__item">
            <div> hello 1</div>
          </div>
          <div className="iko-slider__item">hello 2</div>
          <div className="iko-slider__item">hello 3</div>
          <div className="iko-slider__item">hello 4</div>
          <div className="iko-slider__item">hello 5</div>
          <div className="iko-slider__item">hello 6</div>
          <div className="iko-slider__item">hello 7</div>
        </div>
        <div className="iko-slider__actions">
          <div className="iko-slider__prev">
            <IkoButton onClick={() => prevSlider()}>
              <i className="fa-solid fa-chevron-left"></i>
            </IkoButton>
          </div>
          <div className="iko-slider__next">
            <IkoButton onClick={() => handleClickNext()}>
              <i className="fa-solid fa-chevron-right"></i>
            </IkoButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderShow;
