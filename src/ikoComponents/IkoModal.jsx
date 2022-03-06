import React from "react";
import { IkoCol, IkoContainer, IkoRow } from ".";

const IkoModal = ({ show, setShow, children }) => {
  let classTxt = "iko-modal";

  const handleClick = () => {
    setShow(false);
    console.log("abc");
  };

  return (
    <div className={classTxt + (show ? " active" : "")}>
      <div className="iko-modal__mark" onClick={handleClick}></div>
      <IkoContainer className="iko-modal__container">
        <div className="iko-modal__close" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>
        <IkoRow>
          <IkoCol>{children}</IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default IkoModal;
