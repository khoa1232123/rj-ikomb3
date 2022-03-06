import React from "react";
import { IkoCol, IkoContainer, IkoRow } from "../../ikoComponents";
import Footer from "./Footer";
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const Layout = ({ children }) => {
  return (
    <div className="layout darkmode">
      <IkoContainer fluid className="layout__wrapper">
        <IkoRow className="layout__top">
          <IkoCol col={2} className="layout__left">
            <SidebarLeft />
          </IkoCol>
          <IkoCol col={7} className="layout__center">
            <Header />
            <div className="main-content">{children}</div>
          </IkoCol>
          <IkoCol col={3} className="layout__right">
            <SidebarRight />
          </IkoCol>
        </IkoRow>
        <IkoRow className="layout__bottom">
          <IkoCol col={12}>
            <Footer />
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Layout;
