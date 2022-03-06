import React from "react";
import { IkoButton } from "../ikoComponents";

const MediaItem = ({ song }) => {
  console.log(song.links.images);
  return (
    <div className="media-item">
      <div className="media-item__content">
        <div className="media-item__thumbnail">
          <img src={song.links.images[1].url} alt="" />
        </div>
        <div className="media-item__info">
          <div className="media-item__name">{song.name}</div>
          <div className="media-item__author">{song.author}</div>
        </div>
      </div>
      <div className="media-item__actions">
        <IkoButton size="md">
          <i className="fa-solid fa-heart"></i>
        </IkoButton>
        <IkoButton size="md">
          <i className="fa-solid fa-ellipsis"></i>
        </IkoButton>
      </div>
    </div>
  );
};

export default MediaItem;
