import React from "react";
import MediaList from "../../components/MediaList";
import { IkoButton } from "../../ikoComponents";
import songs from "../../data/songs.json";

const SidebarRight = () => {
  return (
    <div className="sidebar-right">
      <div className="sidebar-right__header">
        <div className="sidebar-right__tabs">
          <div className="tab-bar">
            <div className="tab-bar__item active">Danh sách phát</div>
            <div className="tab-bar__item">Nghe gần đây</div>
          </div>
        </div>
        <div className="sidebar-right__button">
          <IkoButton size="md">
            <i className="fa-solid fa-stopwatch"></i>
          </IkoButton>
          <IkoButton size="md">
            <i className="fa-solid fa-ellipsis"></i>
          </IkoButton>
        </div>
      </div>
      <div className="sidebar-right__content">
        <MediaList songs={songs} />
      </div>
    </div>
  );
};

export default SidebarRight;
