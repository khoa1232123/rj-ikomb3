import React from "react";
import { IkoButton, IkoInput } from "../../ikoComponents";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IkoButton outline>
          <i className="fa-solid fa-arrow-left-long"></i>
        </IkoButton>
        <IkoButton outline className="disabled">
          <i className="fa-solid fa-arrow-right-long"></i>
        </IkoButton>
      </div>
      <div className="header__center">
        <div className="header__search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <IkoInput placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." />
        </div>
      </div>
      <div className="header__right">
        <IkoButton>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-trophy"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-upload"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-gear"></i>
        </IkoButton>
        <IkoButton>
          <i className="fa-solid fa-user"></i>
        </IkoButton>
      </div>
    </div>
  );
};

export default Header;
