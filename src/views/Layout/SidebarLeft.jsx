import React from "react";
import Menus from "../../components/Menus";
import { menu, submenu } from "../../data/menu";
import { IkoButton } from "../../ikoComponents";

const SidebarLeft = () => {
  return (
    <div className="sidebar-left">
      <div className="sidebar-left__logo">
        <div className="logo">
          <span className="logo__i">i</span>
          <span className="logo__k">K</span>
          <span className="logo__o">o</span>
          <span className="logo__mb3">mb3</span>
        </div>
      </div>
      <div className="sidebar-left__menu">
        <Menus menus={menu} />
      </div>
      <div className="sidebar-left__submenu">
        <Menus menus={submenu} />
      </div>
      <div className="sidebar-left__bottom">
        <IkoButton>
          <i className="fa-solid fa-plus"></i> Tạo playlist mới
        </IkoButton>
      </div>
    </div>
  );
};

export default SidebarLeft;
